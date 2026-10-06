/**
 * generate-og.mjs — genera public/og-image.png (1200×630) para compartir en redes.
 * Uso: node scripts/generate-og.mjs
 */
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const shot = join(root, 'public/projects/Elbalconet/El-balconet-premia-de-dalt.webp');

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0E1A2B"/>
      <stop offset="1" stop-color="#16294A"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.1" r="0.6">
      <stop offset="0" stop-color="#F97316" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#F97316" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <rect x="72" y="72" width="56" height="56" rx="16" fill="#F97316"/>
  <text x="100" y="112" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="800" fill="#0E1A2B" text-anchor="middle">A</text>
  <text x="146" y="110" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="700" fill="#FFFFFF">Abilio<tspan fill="#F97316">.</tspan>dev</text>

  <text x="72" y="270" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="800" fill="#FFFFFF">Tu negocio merece una</text>
  <text x="72" y="346" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="800" fill="#FFFFFF">web que <tspan fill="#F97316">te traiga clientes</tspan></text>

  <text x="72" y="418" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#A8B1BE">Webs, reservas online y cartas digitales</text>
  <text x="72" y="456" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#A8B1BE">para restaurantes y negocios locales.</text>

  <rect x="72" y="504" width="330" height="62" rx="31" fill="#F97316"/>
  <text x="237" y="544" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="800" fill="#0E1A2B" text-anchor="middle">Presupuesto gratis</text>
</svg>`;

const card = await sharp(shot)
  .resize({ width: 440, height: 300, fit: 'cover', position: 'centre' })
  .composite([
    {
      input: Buffer.from(
        '<svg width="440" height="300"><rect width="440" height="300" rx="24" ry="24"/></svg>'
      ),
      blend: 'dest-in',
    },
  ])
  .png()
  .toBuffer();

await sharp(Buffer.from(svg))
  .composite([{ input: card, left: 700, top: 165 }])
  .png({ compressionLevel: 9 })
  .toFile(join(root, 'public/og-image.png'));

console.log('✔ public/og-image.png generada');
