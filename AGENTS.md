<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Beton Trowel México — AGENTS.md

Sitio corporativo estático (español) para maquinaria de construcción Beton Trowel, comercializado por **Equipos y Superficies de México**. No es e-commerce, no tiene DB, no tiene API routes, no tiene auth.

## Comandos

- `npm run dev` / `build` / `start` / `lint`
- No hay scripts configurados para test, typecheck o formateo

## Tailwind v4 (NO v3)

- `globals.css` usa `@import "tailwindcss"` — **no** directivas `@tailwind base/...`
- Tokens de tema vía `@theme inline {}` dentro de `globals.css`, **no** en `tailwind.config.js`
- `tailwind.config.js` existe solo para soporte IDE; la configuración real está en `globals.css`
- Plugin PostCSS: `@tailwindcss/postcss` (específico de v4)
- Colores: `brand-blue` (#00AEEF), `brand-black` (#1A1A1A), `brand-grey` (#F5F5F5)

## Peculiaridades de Next.js 16

- `params` debe resolverse con `await` en páginas async: `const { id } = await params`
- `metadata` es exportación plana, no `generateMetadata`
- Builds de `sharp` deshabilitados en `pnpm-workspace.yaml` (optimizaciones nativas de imagen no activas)

## Arquitectura

| Directorio | Propósito |
|---|---|
| `app/` | Páginas App Router (4 categorías + contacto + avisoPrivacidad) |
| `app/components/Card.tsx` | Tarjeta de producto compartida (colocalizada con rutas) |
| `app/components/sectionsHome/` | Componentes de la página de inicio |
| `components/` | Layout global: `Header.tsx`, `Footer.tsx` (ambos `"use client"`) |
| `data/Productos.ts` | Todos los datos de productos (arrays estáticos, sin fuente externa) |
| `types/products.ts` | Interfaces TS compartidas para cada categoría |

- Alias `@/*` mapea a la raíz del proyecto
- Ruta dinámica `/[category]/[id]` lee productos por índice del array (`Number(id)`)
- Imágenes locales se importan directamente: `import img from "@/public/categoria/archivo.jpeg"`

## Marca dual (importante)

El sitio representa **dos entidades**:
- **Beton Trowel** — fabricante belga (marca principal, enfoque en producto)
- **Equipos y Superficies de México** — distribuidor mexicano (credibilidad, soporte)

Ambos logotipos aparecen en el Header/Footer. No confundir ni subordinar uno al otro.

## Sistema multi-agente .opencode/

Este repo tiene agentes especializados en `.opencode/agents/`. Consulta `.opencode/AGENTS.md` para responsabilidades y flujo de trabajo. Documentos clave:
- `STANDARDS.md` — convenciones de código, TypeScript estricto, sin `any`
- `DESIGN_SYSTEM.md` — identidad de marca, colores, espaciado
- `ARCHITECTURE.md` — separación de componentes (UI/Layout/Features)
- `PERFORMANCE.md` — objetivos Lighthouse ≥95
- `SEO_GUIDE.md` — metadata, JSON-LD, OpenGraph
