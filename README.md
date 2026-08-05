# Portfolio — Abilio Fernández

Portfolio profesional construido con React 19, TypeScript, Vite, TailwindCSS v4 y Framer Motion.

## Stack

- **React 19** + TypeScript
- **Vite 6** — build tool
- **TailwindCSS v4** — estilos
- **Framer Motion** — animaciones
- **React Router v7** — routing
- **react-photo-view** — galería con lightbox

## Comandos

```bash
npm install       # instalar dependencias
npm run dev       # desarrollo en localhost:5173
npm run build     # build de producción (carpeta /dist)
npm run preview   # previsualizar el build
```

## Añadir imágenes a proyectos

Las imágenes se detectan **automáticamente** en build time.

1. Copia las imágenes a la carpeta correspondiente:
   - `/public/projects/gastrova/`
   - `/public/projects/laconcordia/`
   - `/public/projects/doctoresya/`
   - `/public/projects/reformas6j/`

2. Formatos soportados: `.webp`, `.jpg`, `.jpeg`, `.png`, `.avif`

3. Nombra `hero.webp` o `01-hero.webp` para que sea la imagen principal.

4. Haz commit + deploy en Netlify.

## Deploy en Netlify

El archivo `netlify.toml` ya incluye build command, publish dir, SPA redirects y cache headers. Solo conecta el repo.
