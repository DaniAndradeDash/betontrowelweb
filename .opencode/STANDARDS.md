# STANDARDS.md

# Objetivo

Este documento define los estándares técnicos, visuales y de desarrollo que deberán seguir todos los agentes durante el ciclo de vida del proyecto.

Ningún agente debe romper estas convenciones.

---

# Principios generales

Todo el proyecto deberá priorizar:

- Simplicidad.
- Legibilidad.
- Escalabilidad.
- Reutilización.
- Mantenibilidad.
- Rendimiento.
- Consistencia.

Siempre se favorecerá una solución simple antes que una solución compleja.

---

# Stack oficial

El proyecto utilizará exclusivamente:

- Next.js (App Router)
- React
- TypeScript (Strict Mode)
- Tailwind CSS
- React Hook Form
- Zod
- ESLint
- Prettier

No deberán introducirse nuevas dependencias sin una justificación clara.

---

# Arquitectura

La arquitectura deberá mantenerse modular.

Cada componente deberá tener una única responsabilidad.

Se deberá evitar:

- Componentes gigantes.
- Código duplicado.
- Lógica mezclada con presentación.
- Dependencias innecesarias.

Siempre que sea posible se favorecerá la reutilización.

---

# Componentes

Todos los componentes deberán ser:

- Reutilizables.
- Desacoplados.
- Pequeños.
- Fácilmente testeables.
- Legibles.

No crear componentes específicos cuando puedan parametrizarse.

---

# TypeScript

Siempre utilizar TypeScript estricto.

No utilizar:

- any
- @ts-ignore
- Tipos implícitos innecesarios

Preferir:

- interfaces
- types
- utilidades genéricas
- tipos reutilizables

La seguridad de tipos es obligatoria.

---

# React

Preferencias:

- Functional Components.
- Server Components por defecto.
- Client Components únicamente cuando sean necesarios.
- Custom Hooks para lógica reutilizable.
- Props tipadas.

Evitar lógica compleja dentro del JSX.

---

# Next.js

Seguir las buenas prácticas del App Router.

Priorizar:

- Server Components.
- Metadata API.
- next/image.
- next/font.
- Lazy Loading.
- Dynamic Imports cuando aporten valor.

---

# Tailwind CSS

Todo el estilizado deberá realizarse con Tailwind CSS.

Evitar:

- CSS global innecesario.
- Estilos inline.
- Valores mágicos repetidos.
- Clases duplicadas.

Mantener consistencia en:

- Espaciados.
- Tipografía.
- Colores.
- Bordes.
- Sombras.
- Breakpoints.

---

# Diseño

Toda decisión visual deberá respetar el Design System.

No modificar:

- Paleta de colores.
- Tipografía.
- Espaciados.
- Border Radius.
- Componentes.

Sin aprobación del agente UI/UX.

El sitio deberá transmitir:

- Profesionalismo.
- Ingeniería.
- Tecnología.
- Confianza.
- Calidad.

---

# Responsive Design

Todo componente deberá funcionar correctamente en:

- Mobile.
- Tablet.
- Laptop.
- Desktop.
- Pantallas Ultra Wide.

Nunca desarrollar pensando únicamente en escritorio.

Mobile First siempre que sea posible.

---

# Accesibilidad

Todos los desarrollos deberán cumplir WCAG AA.

Incluir cuando corresponda:

- aria-label
- aria-labelledby
- alt descriptivos
- Estados de foco visibles
- Navegación por teclado
- Contraste adecuado

La accesibilidad no es opcional.

---

# SEO

Todo el contenido deberá seguir buenas prácticas SEO.

Incluir cuando corresponda:

- Metadata.
- Open Graph.
- JSON-LD.
- Headings jerárquicos.
- Texto alternativo.
- URLs amigables.

Nunca sacrificar SEO por diseño.

---

# Rendimiento

Cada decisión deberá considerar el impacto en el rendimiento.

Priorizar:

- Imágenes optimizadas.
- Lazy Loading.
- Código reutilizable.
- Componentes ligeros.
- Bundle pequeño.

Evitar renderizados innecesarios.

---

# Formularios

Todos los formularios deberán utilizar:

- React Hook Form.
- Zod.

Deben incluir:

- Validación.
- Estados de carga.
- Mensajes claros.
- Confirmación de envío.
- Manejo de errores.

---

# Código

El código deberá ser:

- Limpio.
- Autoexplicativo.
- Bien organizado.
- Fácil de mantener.

Evitar comentarios innecesarios.

El código debe explicar su intención por sí mismo.

---

# Nomenclatura

Utilizar nombres descriptivos.

Evitar:

- data
- temp
- item
- obj
- value

Preferir nombres que describan claramente su propósito.

---

# Reutilización

Antes de crear cualquier componente nuevo deberá verificarse si existe uno reutilizable.

Nunca duplicar componentes únicamente por pequeñas diferencias visuales.

---

# Calidad

Antes de finalizar cualquier tarea deberá verificarse:

- No existen errores de TypeScript.
- No existen errores de ESLint.
- El diseño permanece consistente.
- Responsive correcto.
- SEO intacto.
- Accesibilidad correcta.
- Rendimiento no afectado.

---

# Documentación

Toda decisión importante deberá reflejarse en la documentación correspondiente.

La documentación forma parte del desarrollo y deberá mantenerse sincronizada con el proyecto.

---

# Regla principal

Cada cambio realizado debe dejar el proyecto en un estado igual o mejor que antes.

La calidad, la consistencia y la mantenibilidad siempre tendrán prioridad sobre la velocidad de implementación.