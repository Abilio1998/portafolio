export const site = {
  name: 'Abi Studio',
  email: 'abifernandez826@gmail.com',
  phone: '+34 698 60 15 18',
  phoneRaw: '34698601518',
  linkedin: 'https://www.linkedin.com/in/abi-fernandez-0ab034188/',
  github: 'https://github.com/Abilio1998',
} as const;

/** Enlace directo a WhatsApp con un mensaje ya escrito. */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE =
  'Hola Abi, he visto tu portafolio y me gustaría pedirte un presupuesto para mi negocio.';

export function mailtoUrl(subject: string, body: string): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
