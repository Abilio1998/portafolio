import { HelmetProvider } from 'react-helmet-async';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Technologies } from '@/components/sections/Technologies';
import { Philosophy } from '@/components/sections/Philosophy';
import { Contact } from '@/components/sections/Contact';

export function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Technologies />
        <Philosophy />
        <Contact />
      </main>
    </>
  );
}
