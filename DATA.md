# DATA.md — Plan de Ejecución Unificado

> **Propósito**: Checklist priorizada que unifica REFACTOR.md, BRANDREVIEW.md y PLANVISUAL.md.
> **Criterio**: Criticidad combinada (funcional + branding + visual). Se resuelven overlaps y conflictos.
> **Estado**: Pendiente de implementación.

---

## Convenciones

| Símbolo | Significado |
|---|---|
| 🔴 P1 | Bloqueante — impide funcionalidad o daña la marca |
| 🟡 P2 | Importante — consistencia, usabilidad, SEO |
| 🟢 P3 | Refinamiento — pulido visual, detalles menores |
| ⚡ | Overlap: aparece en 2+ documentos |
| ✅ | Completado |

---

## Fase 1 — Correcciones Críticas (Branding + Funcionalidad)

> Impacto inmediato en la primera impresión del sitio. Prioridad absoluta.

| # | Tarea | Fuente(s) | ⚡ | Files a modificar |
|---|---|---|---|---|
| **1.1** | **Corregir ambigüedad geográfica del Hero** — Cambiar "con sede en Monterrey NL Y SLP" por "Distribuido en Monterrey, NL y SLP." | BRANDREVIEW §3.1, §3.2 | — | `app/components/sectionsHome/HeroAction.tsx` |
| **1.2** | **Reemplazar "hormigón" por "concreto"** — Término correcto en México | BRANDREVIEW §3.4 | — | `app/components/sectionsHome/HeroAction.tsx` |
| **1.3** | **Habilitar botón "Ver Catálogo"** — Eliminar `buttonDisabled = true` y tooltip "Próximamente disponible". Enlazar a `/acabado-de-concreto`. | REFACTOR P4, BRANDREVIEW §3.3, PLANVISUAL V4 | ⚡ | `app/components/sectionsHome/HeroAction.tsx` |
| **1.4** | **Cambiar "Bienvenido a Beton Trowel BV" por "Bienvenido a Beton Trowel México"** — "BV" no suma valor en México | BRANDREVIEW §3.5 | — | `app/components/sectionsHome/HeroAction.tsx` |
| **1.5** | **Eliminar o modificar "envío global"** — Frase irrelevante para mercado mexicano. Cambiar a "disponibles en todo México". | BRANDREVIEW §3.6 | — | `app/components/sectionsHome/HeroAction.tsx` |
| **1.6** | **Cambiar "BETON TROWEL" ALL CAPS a "Beton Trowel"** — En `Equipos.tsx` y `acabado-de-concreto/page.tsx` el nombre de la marca aparece en mayúsculas sostenidas dentro de párrafos. | BRANDREVIEW §3.13 | — | `app/components/sectionsHome/Equipos.tsx`, `app/acabado-de-concreto/page.tsx` |
| **1.7** | **Agregar mención de Beton Trowel en heroes de categoría** — 3 de 4 páginas tienen descripciones genéricas sin marca: `compactacion`, `vibracion`, `herramientas-de-concreto`. | BRANDREVIEW §3.14 | — | `app/compactacion/page.tsx`, `app/vibracion/page.tsx`, `app/herramientas-de-concreto/page.tsx` |
| **1.8** | **Corregir "Telefono" → "Teléfono" en Footer** — 2 ocurrencias sin acento. | BRANDREVIEW §3.9 | — | `components/Footer.tsx` |

---

## Fase 2 — Consistencia Visual + Branding

> Mejoras visuales y de marca que refuerzan la percepción profesional del sitio.

| # | Tarea | Fuente(s) | ⚡ | Files a modificar |
|---|---|---|---|---|
| **2.1** | **Agregar Equipos y Superficies en meta descriptions de categorías** — Las 3 páginas sin mención al distribuidor. | BRANDREVIEW §3.7 | — | `app/compactacion/page.tsx`, `app/vibracion/page.tsx`, `app/herramientas-de-concreto/page.tsx` |
| **2.2** | **Agregar "Distribuido por" en las páginas de categoría** — Texto sutil al final del hero de cada categoría. | BRANDREVIEW §3.8 | — | `app/compactacion/page.tsx`, `app/vibracion/page.tsx`, `app/herramientas-de-concreto/page.tsx` |
| **2.3** | **Agregar metadata personalizada a página de contacto** — Title + description específicos. | BRANDREVIEW §3.12 | — | `app/contacto/page.tsx` |
| **2.4** | **Agregar Open Graph + Twitter Cards en layout raíz** — Meta datos faltantes. | BRANDREVIEW §3.11 | — | `app/layout.tsx` |
| **2.5** | **Agregar sello "Distribuidor Oficial"** — Badge visual en Hero o Footer. | BRANDREVIEW §3.16 | — | `app/components/sectionsHome/HeroAction.tsx` o `components/Footer.tsx` |
| **2.6** | **Incluir marca en sección Cotización** — "¿Listo para mejorar tu obra?" debe mencionar Beton Trowel. | BRANDREVIEW §3.15 | — | `app/components/sectionsHome/Cotizacion.tsx` |
| **2.7** | **About.tsx: aclarar relación con Equipos y Superficies** — Añadir línea que explicite el rol del distribuidor. | BRANDREVIEW §3.17 | — | `app/components/sectionsHome/About.tsx` |

---

## Fase 3 — Consistencia del Sistema Visual

> Unificación de tokens, radios, espaciado, grids y tipografía según DESIGN_SYSTEM.md.

| # | Tarea | Fuente(s) | ⚡ | Files a modificar |
|---|---|---|---|---|
| **3.1** | **Unificar radios de borde** — Eliminar valores arbitrarios (`rounded-[2.5rem]`, `rounded-[2rem]`). Usar los 4 tokens definidos. | PLANVISUAL V1 | — | Múltiples componentes |
| **3.2** | **Refinar escalado tipográfico** — Reemplazar 6 breakpoints fijos por `clamp()` o reducir a 3 escalones. | PLANVISUAL V2 | — | `app/globals.css` |
| **3.3** | **Limpiar clases de grid conflictivas** — `Categorias.tsx` y `Equipos.tsx` tienen `gap` que se sobrescribe. | PLANVISUAL V7, V23 | — | `app/components/sectionsHome/Categorias.tsx`, `app/components/sectionsHome/Equipos.tsx` |
| **3.4** | **Unificar espaciado vertical** — Definir 3 escalones de `py-*` y aplicar uniformemente. | PLANVISUAL V12 | — | Múltiples componentes |
| **3.5** | **Unificar encabezados H2 en Home** — Misma escala y peso en Categorias, Equipos y About. | PLANVISUAL V25 | — | `app/components/sectionsHome/Categorias.tsx`, `Equipos.tsx`, `About.tsx` |
| **3.6** | **Unificar max-width del layout** — `max-w-7xl` como estándar. `max-w-5xl` → `max-w-7xl`. | PLANVISUAL V26 | — | `app/components/sectionsHome/Cotizacion.tsx` |
| **3.7** | **Unificar object-fit en Cards** — Cambiar `object-contain` a `object-cover`. | PLANVISUAL V22 | — | `app/components/Card.tsx` |
| **3.8** | **Unificar radio de botones CTA** — About.tsx usa `rounded-md` en vez de `rounded-full`. | PLANVISUAL V24 | — | `app/components/sectionsHome/About.tsx` |
| **3.9** | **Definir ritmo de fondos consistente** — Patrón fijo: `bg-white` contenido, `bg-brand-grey` soporte, `bg-brand-blue` heroes. | PLANVISUAL V9 | — | Homepage sections |
| **3.10** | **Unificar icono checkmark a lucide-react** — About.tsx usa SVG inline. | PLANVISUAL V16 | — | `app/components/sectionsHome/About.tsx` |

---

## Fase 4 — Identidad Visual + Hero

> Imágenes, colores sociales y elementos que refuerzan la identidad de marca.

| # | Tarea | Fuente(s) | ⚡ | Files a modificar |
|---|---|---|---|---|
| **4.1** | **Reemplazar imagen Unsplash del Hero** — Usar foto real de maquinaria Beton Trowel. | PLANVISUAL V3 | — | `app/components/sectionsHome/HeroAction.tsx` |
| **4.2** | **Reemplazar imágenes Unsplash en categorías** — `compactacion`, `vibracion`, `herramientas-de-concreto` usan la misma foto genérica. Usar imágenes locales. | PLANVISUAL V21 | — | `app/compactacion/page.tsx`, `app/vibracion/page.tsx`, `app/herramientas-de-concreto/page.tsx` |
| **4.3** | **Reemplazar imagen Unsplash en contacto** — Usar foto local de oficinas o equipo. | PLANVISUAL V21 | — | `app/contacto/page.tsx` |
| **4.4** | **Social icons: respetar paleta** — Cambiar `hover:bg-[#1877F2]` por `hover:bg-brand-blue`. | PLANVISUAL V11 | — | `components/Footer.tsx` |
| **4.5** | **Reforzar marca dual en mobile** — Hacer visible el logo de Equipos y Superficies en todos los breakpoints. | PLANVISUAL V10 | — | `components/Header.tsx` |
| **4.6** | **Personalizar success state del formulario** — Agregar logo o mensaje con "Equipos y Superficies de México". | PLANVISUAL V17 | — | `app/contacto/ContactForm.tsx` |
| **4.7** | **Agregar badge de categoría en Cards** — Pequeño badge con nombre de categoría. | PLANVISUAL V14 | — | `app/components/Card.tsx` |

---

## Fase 5 — Funcionalidad + UX

> Componentes de sistema, navegación y comportamiento.

| # | Tarea | Fuente(s) | ⚡ | Files a modificar |
|---|---|---|---|---|
| **5.1** | **Integrar envío real del formulario de contacto** — Reemplazar `setTimeout` + `console.log`. | REFACTOR P1 | — | `app/contacto/ContactForm.tsx` |
| **5.2** | **Página 404 personalizada** — `not-found.tsx` con diseño del sitio. | REFACTOR P4 | — | `app/not-found.tsx` |
| **5.3** | **Agregar `loading.tsx`** — Estado de carga para rutas `[ref]`. | REFACTOR P6 | — | `app/[category]/[ref]/loading.tsx` |
| **5.4** | **Agregar `error.tsx`** — Error boundary global para manejo graceful. | REFACTOR P5 | — | `app/error.tsx` |
| **5.5** | **Redirects 301 de `[id]` a `[ref]`** — Evitar URLs rotas por migración. | REFACTOR P7 | — | `next.config.ts` |
| **5.6** | **Ocultar/implementar botón PDF** — Ocultar si no hay PDF, o enlazar a ficha real. | REFACTOR P3, PLANVISUAL V5 | ⚡ | `app/components/ProductDetailLayout.tsx` |
| **5.7** | **Excluir producto actual de "Equipos Complementarios"** — Filtrar `prod.ref === product.ref`. | PLANVISUAL V6 | — | `app/components/ProductDetailLayout.tsx` |
| **5.8** | **Completar datos de herramientas** — Agregar `specs` y `usage` a `herramientasConcreto`. | REFACTOR P8, PLANVISUAL V19 | ⚡ | `data/Productos.ts` |
| **5.9** | **Balancear grid de compactación** — Solo 2 productos, ajustar a `sm:grid-cols-2`. | PLANVISUAL V8 | — | `app/compactacion/page.tsx` |

---

## Fase 6 — Usabilidad + Pulido

> Mejoras de navegación, mobile y detalles finales.

| # | Tarea | Fuente(s) | ⚡ | Files a modificar |
|---|---|---|---|---|
| **6.1** | **Descripción de categorías visible en mobile** — Eliminar `opacity-0 group-hover:opacity-100`. | PLANVISUAL V13 | — | `app/components/sectionsHome/Categorias.tsx` |
| **6.2** | **"Volver al Catálogo" más visible** — Agregar fondo sutil o botón outline. | PLANVISUAL V15 | — | `app/components/ProductDetailLayout.tsx` |
| **6.3** | **Botón "volver arriba"** — Indicador de scroll en páginas largas. | PLANVISUAL V18 | — | Global (nuevo componente) |
| **6.4** | **Corregir texto del Hero** — "Monterrey NL Y SLP" → "Monterrey, NL y SLP" (ya cubierto en 1.1, verificar). | PLANVISUAL V20 | ⚡ | Ya cubierto en F1 |
| **6.5** | **Evaluar consistencia de tono (tú/usted)** — Unificar a formal. | BRANDREVIEW §3.10 | — | Múltiples componentes |
| **6.6** | **Agregar Breadcrumb JSON-LD en detalle** — Schema.org/BreadcrumbList. | REFACTOR P10 | — | `app/components/ProductDetailLayout.tsx` |
| **6.7** | **Agregar Product JSON-LD en detalle** — Schema.org/Product. | REFACTOR P11 | — | `app/components/ProductDetailLayout.tsx` |

---

## Resumen de cargas por fase

| Fase | Items | Criticidad predominante | Esfuerzo estimado |
|---|---|---|---|
| **F1 — Críticas** | 8 items | 🔴 Branding + Funcionalidad | ~3h |
| **F2 — Branding** | 7 items | 🟡 Marca + SEO | ~2h |
| **F3 — Sistema Visual** | 10 items | 🟡 Consistencia visual | ~4h |
| **F4 — Identidad Visual** | 7 items | 🟡 Imágenes + elementos visuales | ~3h |
| **F5 — Funcionalidad** | 9 items | 🟡🔴 UX + Sistema | ~5h |
| **F6 — Usabilidad** | 7 items | 🟢 Pulido | ~3h |

**Total**: ~48 items | **Esfuerzo total estimado**: ~20h

---

## Notas importantes

- **Overlaps resueltos**: Items duplicados entre documentos se unificaron en una sola entrada.
- **Dependencias**: F3 (radios, grids) debe ejecutarse antes que F4 (componentes visuales) para evitar retrabajo.
- **Arquitectura**: No se modifica. Todos los cambios son sobre componentes existentes.
- **Design System**: Se respeta la paleta, tipografía, espaciado y principios definidos.
- **Branding**: Beton Trowel sigue siendo protagonista. Equipos y Superficies se refuerza como distribuidor sin competir.
- **Sin nuevas librerías**: Solo se usa el stack existente (Next.js, React, Tailwind, lucide-react, RHF, Zod).

---

*Este checklist es el punto de partida. Cada fase se ejecuta en orden descendente. Los items dentro de cada fase pueden ejecutarse en paralelo si no tienen dependencias entre sí.*
