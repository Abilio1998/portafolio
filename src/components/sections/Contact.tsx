import { useState } from 'react';
import type { FormEvent } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { Check, Mail, Phone, Linkedin, Github, Send, WhatsApp } from '@/components/ui/Icons';
import { site, whatsappUrl, mailtoUrl } from '@/data/site';

const businessTypes = [
  'Restaurante / bar / cafetería',
  'Clínica o salud',
  'Reformas / servicios',
  'Tienda / comercio',
  'Otro tipo de negocio',
];

const promises = [
  'Presupuesto gratuito y sin compromiso',
  'Respuesta rápida, normalmente en menos de 24 h',
  'Propuesta clara por escrito antes de empezar',
];

const fieldClass =
  'w-full rounded-2xl bg-white text-ink placeholder:text-ink-400 border-2 border-cream-200 px-4 py-3.5 text-base font-medium transition-colors focus:border-brand focus:outline-none';

export function Contact() {
  const [name, setName] = useState('');
  const [business, setBusiness] = useState(businessTypes[0]);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; message?: string }>({});

  function buildText() {
    return [
      `Hola Abilio, soy ${name.trim()}.`,
      `Tengo un negocio de tipo: ${business}.`,
      '',
      message.trim(),
      '',
      'Me gustaría recibir un presupuesto. ¡Gracias!',
    ].join('\n');
  }

  function validate() {
    const next: { name?: string; message?: string } = {};
    if (name.trim().length < 2) next.name = 'Dime tu nombre para poder dirigirme a ti.';
    if (message.trim().length < 10) next.message = 'Cuéntame en una o dos frases qué necesitas.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    window.open(whatsappUrl(buildText()), '_blank', 'noopener,noreferrer');
  }

  function handleEmail() {
    if (!validate()) return;
    window.location.href = mailtoUrl(`Presupuesto web — ${name.trim()}`, buildText());
  }

  return (
    <section
      id="contacto"
      className="section-padding bg-ink relative overflow-hidden"
      aria-labelledby="contact-title"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -bottom-40 -right-32 w-[560px] h-[560px] rounded-full bg-brand/15 blur-[130px]" />
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-brand/10 blur-[120px]" />
      </div>

      <div className="container-narrow relative">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <p className="eyebrow !text-brand-400">Empecemos</p>
            <h2 id="contact-title" className="text-section-title text-white mb-5">
              ¿Hablamos de tu proyecto? <span className="text-brand">Te preparo un presupuesto gratis.</span>
            </h2>
            <p className="text-lg text-ink-300 leading-relaxed mb-8 max-w-lg">
              Cuéntame qué necesitas en un par de líneas. Te respondo personalmente y te explico,
              sin tecnicismos, cómo puedo ayudarte.
            </p>

            <ul className="space-y-3 mb-10">
              {promises.map((p) => (
                <li key={p} className="flex items-center gap-3 text-white font-semibold">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-trust text-white flex items-center justify-center">
                    <Check size={14} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="grid gap-3 text-sm">
              <a
                id="contact-phone"
                href={`tel:+${site.phoneRaw}`}
                className="inline-flex items-center gap-3 text-ink-300 hover:text-white transition-colors"
              >
                <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand"><Phone size={18} /></span>
                {site.phone}
              </a>
              <a
                id="contact-email"
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-3 text-ink-300 hover:text-white transition-colors break-all"
              >
                <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand shrink-0"><Mail size={18} /></span>
                {site.email}
              </a>
              <div className="flex gap-3 pt-2">
                <a
                  id="contact-linkedin"
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-ink-300 hover:text-white hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn de Abilio (se abre en una pestaña nueva)"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  id="contact-github"
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-ink-300 hover:text-white hover:bg-white/20 transition-colors"
                  aria-label="GitHub de Abilio (se abre en una pestaña nueva)"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl bg-cream p-6 md:p-8 shadow-card-hover"
              aria-label="Formulario para pedir presupuesto"
            >
              <h3 className="text-xl font-extrabold text-ink mb-1 tracking-tight">Pide tu presupuesto gratis</h3>
              <p className="text-sm text-ink-500 mb-6">Te lleva menos de un minuto.</p>

              <div className="space-y-4">
                <div>
                  <label htmlFor="cf-name" className="block text-sm font-bold text-ink mb-1.5">Tu nombre</label>
                  <input
                    id="cf-name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej: María"
                    className={fieldClass}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'cf-name-error' : undefined}
                  />
                  {errors.name && <p id="cf-name-error" className="text-sm font-semibold text-red-700 mt-1.5">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="cf-business" className="block text-sm font-bold text-ink mb-1.5">Tipo de negocio</label>
                  <select
                    id="cf-business"
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    className={fieldClass}
                  >
                    {businessTypes.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="cf-message" className="block text-sm font-bold text-ink mb-1.5">¿Qué necesitas?</label>
                  <textarea
                    id="cf-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ej: Quiero una web nueva con reservas online para mi restaurante."
                    className={`${fieldClass} resize-none`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'cf-message-error' : undefined}
                  />
                  {errors.message && <p id="cf-message-error" className="text-sm font-semibold text-red-700 mt-1.5">{errors.message}</p>}
                </div>
              </div>

              <button id="contact-submit-whatsapp" type="submit" className="btn btn-lg btn-whatsapp w-full mt-6">
                <WhatsApp size={20} />
                Enviar por WhatsApp
              </button>
              <button
                id="contact-submit-email"
                type="button"
                onClick={handleEmail}
                className="btn btn-md btn-outline w-full mt-3"
              >
                <Send size={16} />
                Prefiero enviarlo por email
              </button>
              <p className="text-xs text-ink-500 mt-4 text-center">
                Tus datos solo se usan para responderte. No hay spam ni compromiso.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
