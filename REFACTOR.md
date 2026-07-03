# Reporte Arquitectónico — Beton Trowel México

> **Estado**: Post-REFACTOR (3 puntos completados)
> **Fecha**: Julio 2026
> **Total fuente**: ~1,970 líneas TypeScript/TSX en 30 archivos
> **Rutas**: 11 (1 home + 4 categorías + 4 detalle `[ref]` + 1 contacto + 1 aviso de privacidad)

---

## 1. Fortalezas

### Arquitectura limpia y organizada
- **App Router** correctamente implementado con Server Components como default.
- Solo 3 componentes cliente (`Header`, `Footer`, `ContactForm`).
- Separación clara: `components/` (layout global) vs `app/components/` (features).
- Data layer centralizado en `data/Productos.ts` con arrays tipados.

### Refactorización completa (3 puntos críticos)

| # | Refactor | Logro |
|---|---|---|
| 1 | Componente de detalle único | `ProductDetailLayout` compartido, ~190 líneas eliminadas |
| 2 | Colores → tokens Tailwind | ~63 reemplazos, 0 valores arbitrarios de marca |
| 3 | Slugs estables | URLs migradas de índices (`/0`) a `ref` (`/BTR60H`) |

### Tipado sólido
- `strict: true` en `tsconfig.json`. Sin `any` en toda la base.
- Interfaces por categoría + tipo unificado `ProductDetail`.
- Esquema Zod para validación del formulario de contacto.

### SEO
- `metadata` exportado en todas las páginas (title + description + OpenGraph).
- `sitemap.ts` dinámico con URLs por `ref`.
- `robots.ts` + JSON-LD (Organization + WebSite) en layout raíz.
- Etiqueta `lang="es"` y `locale: es_MX`.

### Accesibilidad básica
- Skip-to-content link, roles ARIA en formularios, HTML semántico.

### Rendimiento
- Server Components prioritarios. Imágenes con `next/image`. Fuentes con `next/font`.

### Marca dual correcta
- Beton Trowel (fabricante) + Equipos y Superficies de México (distribuidor) con presencia equilibrada.

---

## 2. Problemas

### 🔴 CRÍTICOS

| # | Problema | Impacto |
|---|---|---|
| **P1** | **Formulario de contacto no funcional** — `onSubmit` usa `setTimeout` + `console.log`. Sin envío real. | El sitio no puede generar leads. Es su única función de conversión. |
| **P2** | **Botón "Ver Catálogo" permanentemente deshabilitado** — `HeroAction.tsx` L7: `const buttonDisabled = true`. | El CTA principal del Hero está muerto. |
| **P3** | **Botón "Ficha Técnica PDF" inerte** — `ProductDetailLayout.tsx` L81: `<button>` sin `onClick` y sin PDFs. | Falso CTA, genera frustración. |

### 🟡 IMPORTANTES

| # | Problema | Impacto |
|---|---|---|
| **P4** | **Sin página 404 personalizada** — No existe `not-found.tsx`. | Next.js muestra su 404 genérico en inglés. |
| **P5** | **Sin boundaries de error** — No hay `error.tsx` ni `global-error.tsx`. | Pantalla en blanco ante errores inesperados. |
| **P6** | **Sin `loading.tsx`** — Sin estados de carga para rutas dinámicas `[ref]`. | Breve空白 en navegación. |
| **P7** | **Sin redirects 301 de `[id]` → `[ref]`** — URLs antiguas con índice rotas. | Breaking change SEO sin migración. |
| **P8** | **Datos incompletos en herramientas** — `herramientasConcreto` sin `specs` ni `usage`. | Inconsistencia visual entre categorías. |

### 🟢 MENORES

| # | Problema | Impacto |
|---|---|---|
| **P9** | Imágenes con fuentes mixtas (local + Unsplash). | Inconsistencia, dependencia de terceros. |
| **P10** | Sin Breadcrumb JSON-LD en páginas de detalle. | Oportunidad SEO perdida. |
| **P11** | Sin Product JSON-LD en páginas de detalle (schema.org/Product). | Oportunidad SEO perdida. |
| **P12** | `hover:border-brand-blue/20` puede tener problemas de opacidad con tokens personalizados en Tailwind v4. | Potencial bug visual. |
| **P13** | Sin pruebas automatizadas (ni unit, ni e2e). | Riesgo de regresiones. |

---

## 3. Arquitectura Actual

```
betontrowelweb/
├── app/                            # App Router (Next.js 16)
│   ├── layout.tsx                  # Raíz: Header + Footer + JSON-LD
│   ├── page.tsx                    # Home: compone 5 secciones
│   ├── globals.css                 # Tailwind v4 + @theme inline tokens
│   ├── robots.ts                   # Robots.txt
│   ├── sitemap.ts                  # Sitemap dinámico con ref
│   │
│   ├── acabado-de-concreto/
│   │   ├── page.tsx                # Listing (hero + Card grid)
│   │   └── [ref]/
│   │       └── page.tsx            # Detalle (ProductDetailLayout)
│   │
│   ├── herramientas-de-concreto/   # Misma estructura
│   ├── compactacion/               # Misma estructura
│   ├── vibracion/                  # Misma estructura
│   │
│   ├── contacto/
│   │   ├── page.tsx                # Hero + info + ContactForm
│   │   ├── ContactForm.tsx         # "use client" — RHF + Zod (sin envío real)
│   │   └── contactFormSchema.ts    # Schema Zod
│   │
│   ├── avisoPrivacidad/
│   │   └── page.tsx                # Documento legal completo
│   │
│   └── components/
│       ├── Card.tsx                # Tarjeta de producto (productRef)
│       ├── ProductDetailLayout.tsx # Layout de detalle compartido
│       └── sectionsHome/
│           ├── index.tsx           # Barrel exports
│           ├── HeroAction.tsx      # Hero principal (buttonDisabled=true)
│           ├── Equipos.tsx         # Showcase de equipos
│           ├── Categorias.tsx      # Grid de categorías
│           ├── About.tsx           # "Por qué nosotros"
│           └── Cotizacion.tsx      # CTA final
│
├── components/                     # Layout global
│   ├── Header.tsx                  # "use client" — nav + logos duales
│   └── Footer.tsx                  # "use client" — info + sociales
│
├── data/
│   └── Productos.ts                # 4 arrays, 19 productos (257 líneas)
│
├── types/
│   └── products.ts                 # 5 interfaces + ProductDetail (87 líneas)
│
├── constants/
│   └── navigation.ts               # NavLinks (6 entradas)
│
└── public/                         # 42 assets
    ├── Acabados/ (12)
    ├── Compactacion/ (3)
    ├── Equipos/ (12)
    ├── herramientas/ (8)
    ├── Vibradores/ (5)
    └── logos/ (2)
```

### Flujo de datos

```
constants/navigation.ts ──► Header / Footer

data/Productos.ts ──► Category pages (Card grid)
                  ──► Detail pages (.find by ref → ProductDetailLayout)

types/products.ts ──► Interfaces para tipado

ContactForm.tsx ──► Zod schema → console.log (SIN ENVÍO REAL)
```

---

## 4. Componentes Reutilizables

| Componente | Uso actual | Líneas | ¿Reutilizable en otras secciones? |
|---|---|---|---|
| `Card.tsx` | 4 páginas de categoría | 37 | Sí — cualquier grid de productos |
| `ProductDetailLayout.tsx` | 4 rutas `[ref]` | 125 | Sí — cualquier página de detalle |
| `Header.tsx` | Layout raíz | 100 | Global |
| `Footer.tsx` | Layout raíz | 122 | Global |
| `ContactForm.tsx` | /contacto | 172 | Sí — modales, CTAs, landing pages |
| `HeroAction.tsx` | Homepage | 109 | No — contenido hardcodeado |
| `Equipos.tsx` | Homepage | 69 | No |
| `Categorias.tsx` | Homepage | 82 | Potencial — parametrizable con props |
| `About.tsx` | Homepage | 58 | No |
| `Cotizacion.tsx` | Homepage | 27 | Potencial — como CTA genérico |

---

## 5. Oportunidades de Mejora

### Corto plazo (1-2 días)
1. Integrar envío real del formulario (Formspree, Web3Forms, o API route).
2. Redirecciones 301 de URLs `[id]` → `[ref]` en `next.config.ts`.
3. Página 404 personalizada (`not-found.tsx`).
4. Habilitar botón "Ver Catálogo" eliminando `buttonDisabled`.
5. Agregar `loading.tsx` global.

### Mediano plazo (3-5 días)
6. `error.tsx` boundary para manejo graceful de errores.
7. PDFs reales para fichas técnicas u ocultar el botón si no existen.
8. Breadcrumb + Product JSON-LD en páginas de detalle.
9. Completar datos de herramientas (`specs`, `usage`) para consistencia.
10. Estandarizar imágenes (todo local o todo remoto con un solo proveedor).

### Largo plazo (1-2 semanas)
11. Pruebas automatizadas (Vitest + Testing Library + Playwright).
12. Analítica web (GA4 / Plausible).
13. Modo oscuro (la variable `--color-background` ya existe).
14. i18n si se planea expansión internacional.

---

## 6. Plan de Trabajo por Prioridad

| Prio | Tarea | Esfuerzo | Depende de | Área |
|---|---|---|---|---|
| 🔴 | **P1** — Integrar envío real del formulario de contacto | 2-3h | — | Funcionalidad crítica |
| 🔴 | **P2** — Redirects 301 `[id]` → `[ref]` en `next.config.ts` | 1h | — | SEO / Usabilidad |
| 🔴 | **P3** — Página 404 personalizada (`not-found.tsx`) | 1h | — | UX |
| 🔴 | **P4** — Habilitar botón "Ver Catálogo" | 15min | — | UX / Conversión |
| 🟡 | **P5** — `loading.tsx` global | 30min | — | UX |
| 🟡 | **P6** — `error.tsx` boundary | 30min | — | Robustez |
| 🟡 | **P7** — Breadcrumb + Product JSON-LD en detalle | 2h | — | SEO |
| 🟡 | **P8** — Completar datos de herramientas (specs/usage) | 1h | — | Consistencia |
| 🟢 | **P9** — Ocultar o implementar botón PDF | 1h | — | UX |
| 🟢 | **P10** — Estandarizar imágenes | 2h | — | Mantenibilidad |
| 🟢 | **P11** — Pruebas automatizadas | 1-2d | — | Calidad |
| 🟢 | **P12** — Analítica web | 1-2h | P1 | Medición |
| 🟢 | **P13** — Verificar `hover:border-brand-blue/20` | 15min | — | Calidad visual |

### Recomendación de ejecución

```
Semana 1: P1 → P2 → P3 → P4 → P5 → P6   (funcionalidad + robustez)
Semana 2: P7 → P8 → P9 → P10            (SEO + consistencia)
Semana 3+: P11 → P12 → P13              (calidad + medición)
```

---

## Historial de cambios del documento

| Fecha | Cambio |
|---|---|
| Julio 2026 | Versión inicial del reporte arquitectónico integral. Sustituye al antiguo REFACTOR.md que contenía los 3 planes de refactorización ahora completados. |
