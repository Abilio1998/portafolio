import { Link } from 'react-router-dom';
import { ArrowRight, Check, WhatsApp, CalendarCheck, QrCode } from '@/components/ui/Icons';
import { whatsappUrl, DEFAULT_WA_MESSAGE } from '@/data/site';

const guarantees = ['Presupuesto sin compromiso', 'Trato directo conmigo', 'Webs que cargan en segundos'];

const stats = [
  { value: '5', label: 'proyectos reales en producción' },
  { value: '4,5', label: 'años dentro de la hostelería' },
  { value: '+95', label: 'puntuación Lighthouse en Reformas 6J' },
  { value: '3 días', label: 'lo más rápido que he lanzado una web' },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 md:pt-36" aria-labelledby="hero-title">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-brand/20 blur-[110px]" />
        <div className="absolute top-1/2 -left-32 w-[360px] h-[360px] rounded-full bg-brand-100/70 blur-[100px]" />
        <div className="absolute inset-0 bg-dots opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      </div>

      <div className="container-wide relative z-10 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-8 items-center pb-16 md:pb-24">
        {/* Texto */}
        <div>
          <div className="animate-fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-cream-200 shadow-card text-xs font-bold text-ink-600 mb-6">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-trust opacity-60 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-trust" />
            </span>
            Disponible para nuevos proyectos
          </div>

          <h1 id="hero-title" className="text-display text-ink mb-6">
            Tu negocio merece una web que{' '}
            <span className="relative inline-block text-brand-600">
              te traiga clientes
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 8c60-6 140-8 296-2" stroke="#F97316" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
              </svg>
            </span>
            .
          </h1>

          <p className="text-lead max-w-xl mb-8">
            Soy Abi, desarrollador web con <strong className="text-ink">4,5 años de experiencia en hostelería</strong>.
            Creo webs rápidas, reservas online y cartas digitales para restaurantes y negocios locales,
            pensadas para que más gente te encuentre, confíe en ti y reserve.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Link to="/#contacto" id="hero-cta-quote" className="btn btn-lg btn-primary">
              Pedir presupuesto gratis
              <ArrowRight size={18} />
            </Link>
            <a
              href={whatsappUrl(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-whatsapp"
              className="btn btn-lg btn-outline"
            >
              <WhatsApp size={20} className="text-trust" />
              Hablemos por WhatsApp
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {guarantees.map((g) => (
              <li key={g} className="flex items-center gap-2 text-sm font-semibold text-ink-600">
                <span className="w-5 h-5 rounded-full bg-trust-50 text-trust flex items-center justify-center">
                  <Check size={12} />
                </span>
                {g}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual: web real de un cliente en un navegador */}
        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="relative rounded-2xl bg-white border border-cream-200 shadow-card-hover overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-cream-100 border-b border-cream-200">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-3 flex-1 max-w-[220px] h-6 rounded-full bg-white border border-cream-200 text-[11px] font-semibold text-ink-400 flex items-center px-3">
                tunegocio.es
              </span>
            </div>
            <img
              src="/projects/Elbalconet/El-balconet-premia-de-dalt.webp"
              alt="Web de El Balconet, restaurante en Premià de Dalt, diseñada por Abi Studio"
              width={1400}
              height={643}
              className="w-full aspect-[16/11] object-cover object-center"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          {/* Tarjeta flotante: reservas */}
          <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 p-3.5 pr-5 rounded-2xl bg-white border border-cream-200 shadow-card-hover animate-float-y">
            <span className="w-11 h-11 rounded-xl bg-trust-50 text-trust flex items-center justify-center">
              <CalendarCheck size={22} />
            </span>
            <div>
              <p className="text-sm font-extrabold text-ink leading-tight">Reservas online</p>
              <p className="text-xs text-ink-500">24h, sin llamadas</p>
            </div>
          </div>

          {/* Tarjeta flotante: carta QR */}
          <div className="hidden sm:flex absolute -top-5 -right-3 items-center gap-3 p-3.5 pr-5 rounded-2xl bg-ink text-white shadow-card-hover animate-float-y [animation-delay:1.5s]">
            <span className="w-11 h-11 rounded-xl bg-white/10 text-brand flex items-center justify-center">
              <QrCode size={22} />
            </span>
            <div>
              <p className="text-sm font-extrabold leading-tight">Carta digital QR</p>
              <p className="text-xs text-ink-300">Siempre actualizada</p>
            </div>
          </div>

        </div>
      </div>

      {/* Barra de confianza */}
      <div className="container-wide relative z-10 pb-12 md:pb-16">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-3xl overflow-hidden bg-cream-200 border border-cream-200 shadow-card">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-5 py-6 md:px-8 md:py-7">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <p className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink">{s.value}</p>
                <p className="text-xs md:text-sm text-ink-500 font-medium mt-1 leading-snug">{s.label}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
