/**
 * useProjectImages
 *
 * Builds image URLs for /public/projects/{folder}/ images.
 * Files in /public/ are served as static assets directly via URL.
 *
 * Usage: add filenames to the project's `images` array in projects.ts
 * Supported formats: .webp, .jpg, .jpeg, .png, .avif
 */

export function useProjectImages(folder: string, imageFiles: string[]): string[] {
  if (!imageFiles || imageFiles.length === 0) return [];
  return imageFiles.map((filename) => `/projects/${folder}/${filename}`);
}

export function getProjectImageUrl(folder: string, filename: string): string {
  return `/projects/${folder}/${filename}`;
}
