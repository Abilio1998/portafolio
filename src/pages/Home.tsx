import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { Process } from '@/components/sections/Process';
import { About } from '@/components/sections/About';
import { Faq, faqs } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';
import { site } from '@/data/site';

const TITLE = 'Abilio Fernández — Webs, reservas online y cartas digitales para restaurantes';
const DESCRIPTION =
  'Desarrollador web con 4,5 años en hostelería. Creo webs rápidas, sistemas de reservas y cartas digitales con QR para restaurantes y negocios locales. Presupuesto gratis.';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      name: `${site.name} — Desarrollo web`,
      description: DESCRIPTION,
      email: site.email,
      telephone: site.phone,
      areaServed: 'ES',
      founder: { '@type': 'Person', name: site.name },
      sameAs: [site.linkedin, site.github],
      serviceType: ['Diseño web', 'Reservas online', 'Carta digital QR', 'SEO local'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export function Home() {
  return (
    <main>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      <Hero />
      <Problem />
      <Services />
      <Projects />
      <Process />
      <About />
      <Faq />
      <Contact />
    </main>
  );
}
