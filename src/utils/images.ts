/** Devuelve el nombre de la versión reducida (-sm) de una imagen .webp, pensada para tarjetas. */
export function smallImage(filename: string): string {
  return filename.replace(/\.webp$/i, '-sm.webp');
}

export function projectImageUrl(folder: string, filename: string): string {
  return `/projects/${folder}/${filename}`;
}
