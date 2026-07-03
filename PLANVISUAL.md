# Plan Visual de Mejoras — Beton Trowel México

> **Propósito**: Modernizar la interfaz sin alterar la paleta de colores, la identidad de marca ni agregar animaciones.
> **Base**: DESIGN_SYSTEM.md + UI/UX Agent guidelines.
> **Estado actual**: Post-REFACTOR (3 puntos completados) + Expansión 2026 (V21-V26 agregados). Análisis puramente visual.

---

## 1. Diagnóstico Visual General

### Aciertos actuales
- La paleta de colores (brand-blue, brand-black, brand-grey) se aplica consistentemente.
- La marca dual (Beton Trowel + Equipos y Superficies) está equilibrada.
- Las tipografías Geist Sans/Mono dan una base moderna y limpia.
- Los botones principales tienen buena jerarquía (rellenos vs outline).
- El grid responsivo funciona en mobile/tablet/desktop.
- Los iconos de lucide-react son consistentes en todo el sitio.
- El formulario de contacto tiene buena estructura visual.

### Problemas visuales identificados

| # | Problema | Ubicación | Severidad |
|---|---|---|---|
| V1 | **Radios de borde inconsistentes** — Se mezclan `rounded-xl`, `rounded-2xl`, `rounded-[2.5rem]`, `rounded-[2rem]`, `rounded-lg`, `rounded-3xl` sin un criterio claro. | Múltiples componentes | 🔴 Alta |
| V2 | **Escalado tipográfico brusco** — `font-size` en `<html>` cambia de 16px a 22px en 6 breakpoints, causando saltos de layout no graduales. | `globals.css` L12-44 | 🔴 Alta |
| V3 | **Hero sin identidad visual propia** — Usa foto genérica de Unsplash (construcción cualquiera). No hay maquinaria Beton Trowel real en el hero principal. | `HeroAction.tsx` | 🔴 Alta |
| V4 | **CTA principal del Hero deshabilitado** — "Ver Catálogo" no funciona, el tooltip "Próximamente disponible" degrada la percepción de profesionalismo. | `HeroAction.tsx` L7 | 🔴 Alta |
| V5 | **Botón PDF sin función ni feedback** — "Ficha Técnica PDF" no tiene estado hover visible y no hace nada al hacer clic. | `ProductDetailLayout.tsx` L81 | 🟡 Media |
| V6 | **Sección "Equipos Complementarios" incluye el producto actual** — La lista de relacionados muestra todos los productos de la categoría, incluido el que se está viendo. | `ProductDetailLayout.tsx` L102 | 🟡 Media |
| V7 | **Clases duplicadas/conflictivas en grid** — `Categorias.tsx` redefine `gap` múltiples veces (L49): `gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4`. La última prevalece sobre las anteriores. | `Categorias.tsx` L49 | 🟡 Media |
| V8 | **Compactación solo tiene 2 productos** — El grid de 3 columnas se ve vacío y desequilibrado visualmente. | `compactacion/page.tsx` | 🟡 Media |
| V9 | **Fondo inconsistente entre secciones del home** — `About.tsx` usa `bg-brand-grey` mientras que `Equipos.tsx` y `Categorias.tsx` usan `bg-white`. La alternancia parece arbitraria. | Homepage sections | 🟡 Media |
| V10 | **Header: segundo logo invisible en mobile** — El logo de Equipos y Superficies se oculta en mobile (`hidden md:block`), perdiendo la oportunidad de reforzar la marca dual en el dispositivo más usado. | `Header.tsx` L26 | 🟡 Media |
| V11 | **Footer: iconos sociales con colores específicos de plataforma** — Facebook azul e Instagram gradiente rompen la paleta del sitio. | `Footer.tsx` L86-95 | 🟡 Media |
| V12 | **Espaciado vertical inconsistente entre secciones** — Algunas usan `py-20`, otras `py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24`. No hay un ritmo visual uniforme. | Múltiples componentes | 🟡 Media |
| V13 | **Categorías: descripción solo visible en hover** — En mobile (sin hover real), la descripción nunca se ve. | `Categorias.tsx` L58 | 🟡 Media |
| V14 | **Cards de producto: sin badge de categoría** — Solo muestran nombre y descripción. No hay indicación visual de la categoría a la que pertenecen. | `Card.tsx` | 🟢 Baja |
| V15 | **Detalle: "Volver al Catálogo" muy sutil** — Texto pequeño sin fondo, puede pasar desapercibido. | `ProductDetailLayout.tsx` L31 | 🟢 Baja |
| V16 | **Checkmark en About usa SVG inline** — Podría unificarse con un icono de lucide-react para mantener consistencia. | `About.tsx` L36 | 🟢 Baja |
| V17 | **Success state del formulario sin icono de marca** — Usa un círculo azul genérico con `Send`, no hay logo ni elemento de identidad. | `ContactForm.tsx` L31-33 | 🟢 Baja |
| V18 | **Sin indicador de scroll o "back to top"** — Las páginas largas (home, privacidad) no tienen forma de volver al inicio rápidamente. | Global | 🟢 Baja |
| V19 | **Productos de herramientas sin specs/usage** — La página de detalle se ve incompleta comparada con otras categorías. | `ProductDetailLayout.tsx` (condicional) | 🟢 Baja |
| V20 | **Título del Hero usa mayúscula inconsistente** — "Monterrey NL Y SLP" con "NL Y SLP" en mayúsculas se ve forzado. Podría ser "Monterrey, NL y SLP". | `HeroAction.tsx` L71 | 🟢 Baja |
| V21 | **Misma imagen Unsplash en 4 páginas** — El hero principal (`HeroAction.tsx`) y 3 categorías (`compactacion`, `vibracion`, `herramientas-de-concreto`) usan **exactamente la misma foto genérica** de Unsplash (`photo-1504307651254`). También `contacto/page.tsx` usa otra Unsplash genérica. El sitio tiene 5 imágenes Unsplash, ninguna es de producto Beton Trowel real. | Múltiples páginas | 🔴 Alta |
| V22 | **Card.tsx usa `object-contain` vs `object-cover` en el resto del sitio** — Las cards de producto (`Card.tsx`) usan `object-contain` para mostrar la imagen completa, mientras que absolutamente todos los demás componentes (`Categorias`, `Equipos`, `ProductDetailLayout`, headers de categoría) usan `object-cover`. Esto hace que las cards se vean diferentes al resto del sistema. | `Card.tsx` L22 | 🟡 Media |
| V23 | **Equipos.tsx: conflicto de gap en grid** — Mismo patrón que V7. La línea 14 declara: `grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 gap-8 xl:gap-12`. El `gap-8` sobrescribe `gap-6`, y `gap-12` sobrescribe `gap-8`. El gap resultante depende del orden en que Tailwind procesa las clases. | `Equipos.tsx` L14 | 🟡 Media |
| V24 | **Botón "Más Información" en About usa `rounded-md` vs `rounded-full` del resto** — Todos los CTAs primarios del sitio (Hero, Equipos, Cotización, cards) usan `rounded-full`. El botón de About usa `rounded-md` (L48), rompiendo la consistencia del sistema de botones. | `About.tsx` L48 | 🟡 Media |
| V25 | **Encabezados de sección inconsistentes en Home** — `Equipos.tsx` usa `text-4xl md:text-5xl font-extrabold uppercase` (L42), `Categorias.tsx` usa `text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold` (L42), `About.tsx` usa `text-3xl md:text-4xl font-bold` (L29). Tres escalas, tres pesos, y el `uppercase` de Equipos grita visualmente. | Homepage sections | 🟡 Media |
| V26 | **max-w inconsistente entre componentes** — `Header` y secciones de contenido usan `max-w-7xl`, `HeroAction` usa `max-w-[2560px]`, `Footer` usa `max-w-[2560px]`, `Cotizacion` usa `max-w-5xl`. Cuando el usuario ve el sitio, el ancho de las secciones cambia sin motivo aparente. | Múltiples componentes | 🟢 Baja |

---

## 2. Plan de Mejoras Visuales

### 🔴 Prioridad Alta (identidad y primera impresión)

#### V1 — Unificar sistema de radios de borde

**Problema**: 6 valores distintos de `border-radius` sin jerarquía.

**Propuesta**: Definir una escala fija de 4 radios en el Design System:

| Token | Valor | Uso |
|---|---|---|
| `rounded-sm` | 8px | Badges, etiquetas, inputs |
| `rounded-md` | 12px | Cards, contenedores internos |
| `rounded-lg` | 16px | Tarjetas de categoría, bloques principales |
| `rounded-xl` | 24px | Contenedores hero, forms, modales |

Eliminar todos los valores arbitrarios (`rounded-[2.5rem]`, `rounded-[2rem]`) y reemplazar por los tokens definidos.

**Impacto**: Consistencia visual inmediata. El sitio se percibirá como un sistema, no como piezas sueltas.

---

#### V2 — Refinar escalado tipográfico

**Problema**: El `font-size` en `<html>` cambia bruscamente en cada breakpoint, afectando absolutamente todos los elementos.

**Propuesta**: Reemplazar los 6 escalones fijos por un enfoque `clamp()`:

```css
html {
  font-size: clamp(16px, 0.75rem + 0.5vw, 20px);
}
```

Esto da un escalado fluido sin saltos de layout. Alternativamente, reducir a 3 breakpoints (mobile 16px, tablet 17px, desktop 18px).

**Impacto**: Layout más predecible, menos riesgo de roturas en tamaños intermedios.

---

#### V3 — Hero con identidad Beton Trowel

**Problema**: La imagen principal del sitio es una foto genérica de construcción.

**Propuesta**: Reemplazar `MAIN_IMG` (Unsplash) por una fotografía real de maquinaria Beton Trowel en operación. Si no hay disponible, usar la imagen local más representativa del catálogo (ej. una Allanadora en acción). La imagen debe transmitir la calidad del equipo, no solo "obra en construcción".

**Impacto**: El usuario identifica inmediatamente que Beton Trowel vende maquinaria, no servicios de construcción genéricos.

---

#### V4 — Resolver CTA principal del Hero

**Problema**: El botón "Ver Catálogo" está deshabilitado con tooltip "Próximamente disponible". Esto es inconsistente con un sitio que ya tiene 4 categorías con productos.

**Propuesta**: Habilitar el botón y que enlace a `/acabado-de-concreto` (la categoría principal). Eliminar el tooltip. Si se quiere mantener la opción de deshabilitado, eliminar el tooltip y cambiar el texto a "Catálogo en preparación" con estilo sutil.

**Impacto**: El CTA principal del sitio funciona y dirige al usuario al contenido real.

---

### 🟡 Prioridad Media (coherencia y usabilidad)

#### V5 — Resolver botón PDF

**Problema**: Botón inerte que promete una funcionalidad inexistente.

**Propuesta**: Una de dos:
- Opción A: Implementar PDF real (mejor). Cada producto tendría un PDF en `/public/pdfs/` y el botón lo descargaría.
- Opción B: Ocultar el botón si no hay PDF. Agregar estado `pdfUrl?: string` al tipo `ProductDetail` y solo mostrar el botón si existe.

**Impacto**: Elimina una fricción de UX. El usuario no hace clic esperando algo que no existe.

---

#### V6 — Excluir producto actual de "Equipos Complementarios"

**Problema**: La sección de relacionados muestra el mismo producto que se está viendo.

**Propuesta**: Filtrar `allProducts` para excluir `prod.ref === product.ref` antes de mapear. Si después del filtro quedan 0 productos, ocultar toda la sección.

**Impacto**: Los relacionados son realmente complementarios.

---

#### V7 — Limpiar clases de grid conflictivas

**Problema**: `gap-4` se sobrescribe por `gap-3` posterior.

**Propuesta**: Unificar en una sola declaración:

```tsx
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10"
```

**Impacto**: El grid se comporta como se espera en todos los breakpoints.

---

#### V8 — Balancear grid de compactación

**Problema**: Solo 2 productos en un grid de 3 columnas.

**Propuesta**: Cambiar a `sm:grid-cols-2` cuando haya ≤ 2 productos, o agregar un placeholder visual (ej. "Más modelos próximamente"). Alternativamente, centrar las 2 cards con `md:grid-cols-2 mx-auto max-w-2xl`.

**Impacto**: El layout se ve intencional, no incompleto.

---

#### V9 — Definir ritmo de fondos consistente

**Problema**: Alternancia de fondos parece aleatoria.

**Propuesta**: Establecer un patrón fijo:
- `bg-white` para secciones de contenido principal
- `bg-brand-grey` para secciones de soporte (testimonios, datos técnicos, equipo)
- `bg-brand-blue` solo para heroes y CTAs principales

Aplicar el mismo criterio en todas las páginas, no solo en home.

**Impacto**: El usuario percibe un ritmo visual predecible.

---

#### V10 — Reforzar marca dual en mobile

**Problema**: El logo de Equipos y Superficies desaparece en mobile.

**Propuesta**: Mantener ambos logos visibles en todos los breakpoints. Si es problema de espacio, reducir el tamaño del logo de Beton Trowel (de 150px a 120px en mobile) para que ambos quepan.

**Impacto**: La credibilidad que aporta el distribuidor se mantiene también en mobile.

---

#### V11 — Social icons: respetar paleta

**Problema**: Facebook azul (#1877F2) e Instagram gradiente rompen la paleta.

**Propuesta**: Usar `hover:bg-brand-blue` en lugar de colores específicos de plataforma. Esto mantiene la identidad visual del sitio. Si se quiere mantener el color de plataforma, hacerlo solo en el icono (fill), no en el fondo.

**Impacto**: Los iconos sociales no compiten visualmente con la marca.

---

#### V12 — Unificar espaciado vertical

**Problema**: 5 formatos distintos de `py-*` entre componentes.

**Propuesta**: Definir 3 escalones:
- `py-16` para secciones estándar
- `py-24` para secciones hero/destacadas
- `py-12` para secciones secundarias

Aplicar uniformemente en todo el sitio.

**Impacto**: Ritmo visual consistente entre páginas.

---

#### V13 — Descripción de categorías visible sin hover

**Problema**: En mobile, la descripción de la categoría nunca se muestra.

**Propuesta**: Mostrar siempre la descripción (eliminar `opacity-0 group-hover:opacity-100`). En desktop puede mantenerse el efecto hover como refinamiento, pero la información debe estar visible desde el inicio.

**Impacto**: Usabilidad mobile mejora significativamente.

---

### 🟢 Prioridad Baja (pulido)

#### V14 — Badge de categoría en Cards

**Propuesta**: Agregar un badge pequeño con la categoría (ej. "Acabado", "Compactación") en la esquina superior de la imagen de cada card. Usar `bg-brand-blue text-white text-[10px] px-2 py-1 rounded-sm`.

**Impacto**: El usuario identifica rápidamente la categoría sin leer el nombre del producto.

---

#### V15 — "Volver al Catálogo" más visible

**Propuesta**: Darle un fondo sutil (`bg-brand-grey` o `bg-gray-50`) con padding. O convertirlo en un botón outline pequeño en lugar de solo texto.

**Impacto**: La navegación secundaria es más fácil de encontrar.

---

#### V16 — Unificar checkmark a lucide-react

**Propuesta**: Reemplazar el SVG inline del checkmark en `About.tsx` por `<CheckCircle size={20} className="text-brand-blue" />` de lucide-react (ya incluido como dependencia).

**Impacto**: Consistencia de iconografía en todo el sitio.

---

#### V17 — Personalizar success state del formulario

**Propuesta**: Agregar el logo de Beton Trowel pequeño en el estado de éxito, o un mensaje más personalizado que incluya "Equipos y Superficies de México". Actualmente es genérico.

**Impacto**: Refuerza la marca en el momento de la conversión.

---

#### V18 — "Volver arriba" en páginas largas

**Propuesta**: Agregar un botón flotante sutil en la esquina inferior derecha que aparezca al hacer scroll hacia abajo. Debe ser discreto: `bg-brand-black/80 text-white p-3 rounded-full`.

**Impacto**: Mejora la navegación en páginas extensas (home, aviso de privacidad).

---

#### V19 — Completar datos de herramientas

**Propuesta**: Agregar al menos `specs` básicas a los productos de `herramientasConcreto`. Sin especificaciones técnicas, la página de detalle se ve vacía comparada con otras categorías.

**Impacto**: Consistencia visual entre todas las páginas de detalle.

---

#### V20 — Corregir texto del Hero

**Propuesta**: Cambiar "Monterrey NL Y SLP." por "Monterrey, NL y SLP." (con coma y minúscula en "y").

**Impacto**: Texto más natural y profesional.

---

#### V21 — Eliminar imágenes Unsplash genéricas del sitio

**Problema**: 5 instancias de imágenes genéricas de Unsplash en 5 páginas distintas, 3 de ellas usando exactamente la misma foto.

**Propuesta**: 
- **Hero principal** (`HeroAction.tsx`): Reemplazar con una foto real de maquinaria Beton Trowel (allanadora, compactadora o vibrador en operación). Si no hay disponible, usar la imagen local más representativa del catálogo.
- **Categorías** (`compactacion`, `vibracion`, `herramientas-de-concreto`): Cada una ya tiene imágenes locales (`/Compactacion/`, `/Vibradores/`, `/herramientas/`). Usar una foto representativa de la categoría como fondo del header, similar a cómo `acabado-de-concreto` ya usa `portadaAcabado` (imagen local).
- **Contacto** (`contacto/page.tsx`): Usar una foto de las oficinas de Equipos y Superficies (ya existe `OficinaMonterrey.jpeg`) o una foto de equipo Beton Trowel.

**Impacto**: El sitio deja de verse como "template genérico" y empieza a comunicar la marca real. Todos los headers de categoría tendrían identidad propia.

---

#### V22 — Unificar object-fit en imágenes de Cards

**Problema**: `Card.tsx` usa `object-contain` mientras el resto del sitio usa `object-cover`. Las imágenes de producto se ven con bordes/espacios en cards, pero recortadas en el detalle.

**Propuesta**: Cambiar `object-contain` a `object-cover` en `Card.tsx` (L22). Si hay productos cuyo encuadre no funciona bien con `object-cover`, ajustar las imágenes o el aspect ratio del contenedor (`aspect-video`) en lugar de cambiar el modo de ajuste.

**Impacto**: Consistencia visual en cómo se presentan las imágenes de producto en todo el sitio.

---

#### V23 — Limpiar gap conflictivo en Equipos.tsx

**Problema**: Mismo error que V7 pero en un componente diferente.

**Propuesta**: Unificar en una sola declaración:
```tsx
className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 xl:gap-12"
```

**Impacto**: El grid se comporta como se espera.

---

#### V24 — Unificar radio de botones CTA

**Problema**: "Más Información" en About usa `rounded-md` mientras todos los demás CTAs primarios usan `rounded-full`.

**Propuesta**: Cambiar a `rounded-full` para mantener consistencia con el sistema de botones del sitio. Si se quiere un estilo alternativo para botones secundarios, definir el token `rounded-md` como "botón secundario" y aplicarlo consistentemente donde corresponda.

**Impacto**: Todos los botones con la misma jerarquía visual se ven iguales.

---

#### V25 — Unificar escalas de encabezados en Home

**Problema**: Tres secciones del home usan escalas, pesos y transforms distintos para sus H2.

**Propuesta**: Definir una escala única de H2 para secciones:
```tsx
// Título de sección estándar
className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-black"
```
Aplicar la misma en `Categorias`, `Equipos` y `About`. Eliminar `uppercase` de Equipos (compite con la jerarquía). Mantener `tracking-tight` o `leading-tight` como refinamiento menor.

**Impacto**: Las secciones del home se leen como parte de un mismo sistema.

---

#### V26 — Unificar max-width del layout

**Problema**: 3 valores distintos de max-width: `max-w-7xl` (contenido), `max-w-[2560px]` (hero y footer), `max-w-5xl` (CTA cotización).

**Propuesta**: Definir que el sitio usa `max-w-7xl` como ancho estándar para todo el contenido. Excepciones:
- `max-w-[2560px]` solo para el Hero y Footer (fondos full-width que envuelven contenido con max-w-7xl interno).
- `max-w-5xl` no tiene justificación; cambiarlo a `max-w-7xl`.

Asegurar que las secciones que usan `max-w-7xl` tengan consistencia en el padding horizontal.

**Impacto**: El layout del sitio se percibe sólido y predecible. No más saltos de ancho entre secciones.

---

## 3. Resumen de Categorías Visuales

| Categoría | Cantidad | Prioridad |
|---|---|---|
| Consistencia de componentes (radios, espaciado, grid) | V1, V7, V9, V12, V23, V25, V26 | 🔴🟡 |
| Identidad de marca (hero, logos, iconos sociales) | V3, V10, V11, V17, V21 | 🔴🟡 |
| Funcionalidad visual (CTAs, botones) | V4, V5, V6, V22, V24 | 🔴🟡 |
| Usabilidad mobile/responsive | V13, V15, V18 | 🟡🟢 |
| Pulido fino (textos, iconos, datos) | V14, V16, V19, V20 | 🟢 |

---

## 4. Recomendación de Implementación

```
Fase 1 (Día 1) — Impacto inmediato:
  V4  → Habilitar CTA del Hero
  V5  → Ocultar o implementar PDF
  V6  → Filtrar producto actual en relacionados
  V7  → Limpiar clases de grid (Categorias.tsx)
  V20 → Corregir texto del Hero
  V23 → Limpiar gap conflictivo en Equipos.tsx
  V24 → Unificar radio botón About (rounded-full)

Fase 2 (Día 2) — Consistencia visual:
  V1  → Unificar radios de borde
  V2  → Refinar escalado tipográfico
  V9  → Definir ritmo de fondos
  V12 → Unificar espaciado vertical
  V22 → Unificar object-fit en Cards (object-cover)
  V25 → Unificar escalas de encabezados
  V26 → Unificar max-width del layout

Fase 3 (Día 3) — Identidad de marca:
  V3  → Hero con imagen real de producto
  V10 → Logo dual en mobile
  V11 → Social icons con paleta del sitio
  V17 → Personalizar success state
  V21 → Eliminar imágenes Unsplash en categorías y contacto

Fase 4 (Día 4) — Usabilidad:
  V8  → Balancear grid compactación
  V13 → Descripciones visibles en mobile
  V14 → Badge de categoría en cards
  V15 → "Volver" más visible
  V16 → Unificar iconos a lucide-react
  V18 → Botón "volver arriba"
  V19 → Completar datos de herramientas
```

---

## 5. Principios Rectores

1. **No cambiar la paleta**: Todos los ajustes usan colores existentes.
2. **No agregar animaciones**: Solo transiciones existentes (hover, focus).
3. **Respetar la jerarquía de marca**: Beton Trowel es protagonista, Equipos y Superficies es respaldo.
4. **Consistencia > creatividad**: Un sistema uniforme vale más que una solución ingeniosa aislada.
5. **Mobile first**: Toda solución debe funcionar primero en mobile.
6. **Claridad > decoración**: Si un elemento no ayuda a la comprensión, sobra.

---

*Este plan visual antecede a cualquier implementación. Cada cambio debe ser validado por el agente UI/UX antes de pasar a Frontend.*
