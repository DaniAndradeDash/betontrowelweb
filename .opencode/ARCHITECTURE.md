# ARCHITECTURE.md

# Objetivo

Este documento define la arquitectura técnica del proyecto y las reglas que deberán seguir todos los agentes para garantizar un código limpio, escalable, reutilizable y fácil de mantener.

La arquitectura debe facilitar el crecimiento del sitio sin aumentar innecesariamente la complejidad.

---

# Filosofía

La arquitectura debe priorizar:

- Simplicidad.
- Escalabilidad.
- Separación de responsabilidades.
- Reutilización.
- Bajo acoplamiento.
- Alta cohesión.
- Fácil mantenimiento.

Cada carpeta y archivo debe tener un propósito claro.

---

# Principios

Toda decisión arquitectónica deberá responder a los siguientes principios:

- Una responsabilidad por componente.
- Una responsabilidad por archivo.
- Una responsabilidad por función.
- Reutilizar antes de duplicar.
- Componer antes que copiar.
- Configurar antes que modificar.

---

# Stack

El proyecto utilizará exclusivamente:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod

No agregar nuevas dependencias sin una justificación técnica.

---

# Arquitectura general

La aplicación deberá dividirse por responsabilidades.

Ejemplo:

```
app/
components/
features/
hooks/
lib/
services/
types/
utils/
constants/
public/
```

Cada carpeta debe tener una función específica y mantenerse organizada.

---

# App Router

Se utilizará exclusivamente el App Router de Next.js.

Cada ruta deberá contener únicamente lo necesario para representar la página.

Toda la lógica reutilizable deberá vivir fuera del directorio `app`.

---

# Componentes

Los componentes deberán dividirse en:

## UI

Componentes completamente reutilizables.

Ejemplos:

- Button
- Card
- Badge
- Input
- Section
- Container

No deben conocer reglas del negocio.

---

## Layout

Componentes estructurales.

Ejemplos:

- Header
- Footer
- Navigation
- Hero
- Sidebar
- Section Wrapper

Son responsables únicamente del layout.

---

## Features

Componentes propios del negocio.

Ejemplos:

- Product Catalog
- Product Grid
- Contact Form
- Brand Showcase
- Product Categories

Estos pueden combinar múltiples componentes UI.

---

# Separación de responsabilidades

Nunca mezclar en un mismo archivo:

- UI
- Lógica
- Datos
- Configuración

Cada responsabilidad debe vivir en su propio módulo.

---

# Hooks

Los hooks deberán contener únicamente lógica reutilizable.

No deberán renderizar componentes.

No deberán contener JSX.

---

# Utils

La carpeta utils deberá contener únicamente funciones puras.

Ejemplos:

- formatDate
- formatPhone
- slugify

No deberá contener lógica del negocio.

---

# Services

Todos los accesos a APIs o servicios externos deberán centralizarse.

Nunca consumir APIs directamente desde componentes.

---

# Constants

Toda constante reutilizable deberá vivir en una carpeta dedicada.

Ejemplos:

- navegación
- redes sociales
- información de contacto
- categorías
- enlaces

Evitar valores repetidos en múltiples archivos.

---

# Types

Todos los tipos compartidos deberán centralizarse.

Evitar declarar interfaces repetidas.

Siempre reutilizar tipos existentes.

---

# Assets

Las imágenes deberán mantenerse organizadas.

Ejemplo:

```
public/

images/
logos/
products/
icons/
backgrounds/
brands/
```

No almacenar imágenes sin una estructura clara.

---

# Componentización

Antes de crear un nuevo componente preguntarse:

- ¿Puede reutilizarse?
- ¿Ya existe uno similar?
- ¿Puede parametrizarse?

Si la respuesta es sí, reutilizar.

---

# Estado

El estado deberá mantenerse lo más local posible.

Evitar estado global innecesario.

Cada componente debe controlar únicamente el estado que realmente necesita.

---

# Formularios

Todos los formularios deberán seguir la misma arquitectura.

Separar:

- Validación.
- UI.
- Tipos.
- Lógica.
- Envío.

Nunca mezclar toda la lógica dentro del componente visual.

---

# Estilos

Todo el estilizado deberá realizarse con Tailwind CSS.

No duplicar clases complejas.

Cuando un patrón visual se repita, convertirlo en componente reutilizable.

---

# Rendimiento

La arquitectura deberá favorecer:

- Server Components.
- Lazy Loading.
- Componentes pequeños.
- Renderizado eficiente.
- Bajo consumo de JavaScript.

---

# Escalabilidad

El proyecto deberá poder crecer sin reorganizar completamente la estructura.

Agregar nuevas páginas, secciones o componentes no deberá afectar la arquitectura existente.

---

# Reutilización

Cada nuevo desarrollo deberá intentar utilizar componentes existentes antes de crear nuevos.

La duplicación de código es el último recurso.

---

# Documentación

Toda decisión arquitectónica importante deberá documentarse.

Si una nueva convención afecta al resto del proyecto, deberá actualizarse este documento.

---

# Revisión

Antes de finalizar cualquier desarrollo deberá verificarse:

- No existe duplicación.
- La estructura permanece organizada.
- Los componentes son reutilizables.
- Las responsabilidades están separadas.
- El código es fácil de entender.
- El proyecto sigue siendo escalable.

---

# Regla principal

La arquitectura debe permitir que cualquier desarrollador pueda comprender, mantener y extender el proyecto con facilidad, manteniendo siempre la coherencia técnica y la calidad del código.