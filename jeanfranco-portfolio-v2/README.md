# Portafolio — Jeanfranco Fernandez

Portafolio personal construido con **Next.js 14 (App Router)**, **React**, **TypeScript** y **Tailwind CSS**. Tema visual: terminal/dev oscuro, con una terminal interactiva como elemento central (escribe comandos como `help`, `skills`, `proyectos`, `contacto`).

## Cómo correrlo localmente

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

```
app/
  layout.tsx     -> fuentes, metadata
  page.tsx        -> ensambla las secciones
  globals.css     -> estilos base y tokens de color
components/
  Nav.tsx         -> navegación
  Hero.tsx        -> terminal interactiva (sección de inicio)
  About.tsx       -> bio profesional
  Skills.tsx      -> stack de desarrollo + ciberseguridad
  Projects.tsx    -> tarjetas de proyectos
  Contact.tsx     -> datos de contacto y CTA de WhatsApp
  Footer.tsx
```

## Pendientes antes de publicarlo (importante)

1. **Proyectos reales** — en `components/Projects.tsx` hay 3 proyectos de
   ejemplo marcados con `TODO`. Reemplázalos por tus proyectos reales
   (título, descripción y link). No publiques contenido de ejemplo: una
   sección de proyectos vacía o genérica es mejor que una falsa.
2. **GitHub y LinkedIn** — en `components/Contact.tsx` y
   `components/Footer.tsx`, reemplaza `GITHUB_URL` y `LINKEDIN_URL` (ahora
   son `"#"`) por tus URLs reales.
3. **Sección de ciberseguridad** — en `components/Skills.tsx`, la lista
   `security` es una base orientativa. Ajústala a las herramientas y
   certificaciones que realmente manejas.
4. (Opcional) Favicon / imagen Open Graph en `public/`.

## Deploy

Funciona out-of-the-box en [Vercel](https://vercel.com): conecta el repo y
listo, sin configuración adicional.
