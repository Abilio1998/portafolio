/**
 * optimize-images.mjs
 *
 * Convierte los PNG/JPG de /public a WebP optimizado.
 *  - Capturas de proyecto  → <nombre>.webp (1400px) + <nombre>-sm.webp (720px, para tarjetas)
 *  - Foto de perfil        → abilio-fernandez.webp (640px) + abilio-fernandez-sm.webp (320px)
 *
 * Los originales se mueven a /originals (ignorada por git) para no perderlos
 * ni servirlos al navegador.
 *
 * Uso:  node scripts/optimize-images.mjs
 */
import { readdir, mkdir, rename, stat } from 'node:fs/promises';
import { join, extname, basename, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');
const originalsDir = join(root, 'originals');
const exts = new Set(['.png', '.jpg', '.jpeg']);

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (exts.has(extname(entry.name).toLowerCase())) out.push(full);
  }
  return out;
}

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

async function convert(file) {
  const rel = relative(publicDir, file);
  const name = basename(file, extname(file));
  const dir = dirname(file);
  const isPhoto = name === 'abilio-fernandez';
  const sizes = isPhoto ? [[640, ''], [320, '-sm']] : [[1400, ''], [720, '-sm']];

  for (const [width, suffix] of sizes) {
    const target = join(dir, `${name}${suffix}.webp`);
    await sharp(file)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: isPhoto ? 80 : 78, effort: 6 })
      .toFile(target);
    const { size } = await stat(target);
    console.log(`  ${relative(publicDir, target)}  ${kb(size)}`);
  }

  const backup = join(originalsDir, rel);
  await mkdir(dirname(backup), { recursive: true });
  await rename(file, backup);
  console.log(`✔ ${rel} → originals/`);
}

const files = await walk(publicDir);
if (files.length === 0) console.log('No hay imágenes PNG/JPG que optimizar.');
for (const f of files) await convert(f);
