import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getProjectById, getAdjacentProjects } from '@/data/projects';
import { ProjectHero } from '@/components/project/ProjectHero';
import { ProjectInfo } from '@/components/project/ProjectInfo';
import { ProjectGallery } from '@/components/project/ProjectGallery';
import { ProjectNav } from '@/components/project/ProjectNav';

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectById(slug) : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const { prev, next } = getAdjacentProjects(project.id);

  return (
    <>
      <Helmet>
        <title>{project.title} — Abilio Fernández</title>
        <meta
          name="description"
          content={`${project.tagline} Desarrollado con ${project.technologies.slice(0, 4).join(', ')}.`}
        />
        <meta property="og:title" content={`${project.title} — Abilio Fernández`} />
        <meta property="og:description" content={project.tagline} />
        <meta
          property="og:image"
          content={`/projects/${project.imageFolder}/${project.heroImage}`}
        />
      </Helmet>

      <main>
        <ProjectHero project={project} />
        <ProjectInfo project={project} />
        <ProjectGallery
          folder={project.imageFolder}
          images={project.images}
          accentColor={project.accentColor}
          projectTitle={project.title}
        />
        <ProjectNav prev={prev} next={next} />
      </main>
    </>
  );
}
