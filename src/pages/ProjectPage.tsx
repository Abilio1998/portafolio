import { useParams, Navigate } from 'react-router-dom';
import { getProjectById, getAdjacentProjects } from '@/data/projects';
import { ProjectHero } from '@/components/project/ProjectHero';
import { ProjectInfo } from '@/components/project/ProjectInfo';
import { ProjectGallery } from '@/components/project/ProjectGallery';
import { ProjectNav } from '@/components/project/ProjectNav';
import { projectImageUrl } from '@/utils/images';

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectById(slug) : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const { prev, next } = getAdjacentProjects(project.id);
  // La imagen principal ya está en la cabecera: la galería muestra el resto
  const galleryImages = project.images.filter((img) => img !== project.heroImage);

  return (
    <main>
      <title>{`${project.title} — Caso de éxito | Abilio Fernández`}</title>
      <meta
        name="description"
        content={`${project.tagline} Desarrollado con ${project.technologies.slice(0, 4).join(', ')}.`}
      />
      <meta property="og:title" content={`${project.title} — Abilio Fernández`} />
      <meta property="og:description" content={project.tagline} />
      <meta
        property="og:image"
        content={projectImageUrl(project.imageFolder, project.heroImage)}
      />

      <ProjectHero project={project} />
      <ProjectInfo project={project} />
      <ProjectGallery
        folder={project.imageFolder}
        images={galleryImages}
        projectTitle={project.title}
      />
      <ProjectNav project={project} prev={prev} next={next} />
    </main>
  );
}
