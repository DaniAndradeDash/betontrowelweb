# PERFORMANCE.md

# Objetivo

Este documento establece los estándares de rendimiento que deberá cumplir el proyecto durante todo su ciclo de vida.

El rendimiento es una característica del producto, no una optimización de último momento.

Cada decisión de desarrollo deberá considerar su impacto en la velocidad, estabilidad y experiencia del usuario.

---

# Objetivos

El sitio deberá sentirse:

- Muy rápido.
- Fluido.
- Ligero.
- Responsivo.
- Profesional.

El usuario nunca debe percibir lentitud al navegar.

---

# Métricas objetivo

Todos los desarrollos deberán aspirar a:

## Lighthouse

- Performance ≥ 95
- Accessibility ≥ 95
- Best Practices ≥ 95
- SEO ≥ 95

---

## Core Web Vitals

Objetivos:

- LCP < 2.5 s
- INP < 200 ms
- CLS < 0.1

No deberán introducirse cambios que degraden estas métricas.

---

# Filosofía

Siempre priorizar:

- Menor cantidad de JavaScript.
- Menor cantidad de peticiones.
- Menor tamaño de recursos.
- Renderizado eficiente.
- Componentes reutilizables.

La mejor optimización es no cargar recursos innecesarios.

---

# Next.js

El proyecto deberá aprovechar las características nativas de Next.js.

Priorizar:

- App Router.
- Server Components.
- Static Rendering.
- Metadata API.
- Route Segments.
- Streaming cuando aporte valor.
- Dynamic Imports únicamente cuando sean necesarios.

Evitar renderizados innecesarios del lado del cliente.

---

# React

Utilizar Client Components únicamente cuando exista interacción real.

Evitar convertir páginas completas en Client Components.

Separar claramente:

- Presentación.
- Estado.
- Lógica.

---

# Componentes

Los componentes deberán ser:

- Reutilizables.
- Pequeños.
- Independientes.
- Livianos.

Evitar componentes gigantes que generen múltiples renderizados.

---

# JavaScript

Reducir al mínimo el JavaScript enviado al navegador.

Evitar:

- Librerías pesadas.
- Dependencias innecesarias.
- Código muerto.
- Funciones duplicadas.

Cada dependencia debe aportar un beneficio claro.

---

# Imágenes

Todas las imágenes deberán:

- Utilizar next/image.
- Estar optimizadas.
- Mantener dimensiones definidas.
- Utilizar formatos modernos cuando sea posible.
- Implementar Lazy Loading.

No cargar imágenes más grandes de lo necesario.

---

# Tipografías

Utilizar next/font.

Evitar:

- Google Fonts mediante CSS.
- Múltiples familias tipográficas.
- Variantes innecesarias.

Reducir el número de pesos utilizados.

---

# CSS

Todo el estilizado deberá realizarse con Tailwind CSS.

Evitar:

- CSS duplicado.
- Clases innecesarias.
- Archivos CSS extensos.
- Estilos sin utilizar.

Mantener una interfaz limpia y consistente.

---

# Renderizado

Siempre que sea posible:

- Renderizar en servidor.
- Evitar hidratación innecesaria.
- Minimizar estado global.
- Minimizar efectos secundarios.

No utilizar useEffect cuando exista una alternativa más eficiente.

---

# Carga diferida

Aplicar Lazy Loading para:

- Imágenes.
- Componentes pesados.
- Secciones fuera del primer viewport.
- Recursos secundarios.

No retrasar contenido crítico.

---

# Bundle

Mantener un bundle pequeño.

Evitar:

- Importaciones completas de librerías.
- Dependencias duplicadas.
- Recursos sin uso.

Revisar periódicamente el tamaño del bundle.

---

# Animaciones

Las animaciones deben ser ligeras.

Priorizar:

- CSS Transitions.
- Transform.
- Opacity.

Evitar:

- Animaciones complejas.
- Librerías pesadas.
- Animaciones que afecten el rendimiento.

Las animaciones nunca deben perjudicar la experiencia.

---

# Scroll

El desplazamiento debe sentirse fluido.

Evitar:

- Eventos de scroll innecesarios.
- Escuchas permanentes.
- Re-renderizados durante el desplazamiento.

---

# Formularios

Los formularios deberán:

- Validar de forma eficiente.
- Evitar renderizados innecesarios.
- Mostrar estados claros.
- Minimizar lógica en el cliente.

---

# SEO y rendimiento

Toda optimización deberá beneficiar tanto al usuario como al posicionamiento.

Evitar:

- Bloqueo del renderizado.
- Recursos innecesarios.
- JavaScript excesivo.
- Imágenes pesadas.

---

# Accesibilidad

Las optimizaciones nunca deberán afectar:

- Navegación por teclado.
- Lectores de pantalla.
- Contraste.
- Semántica HTML.

---

# Monitoreo

Antes de finalizar cualquier desarrollo se deberá verificar:

- Lighthouse.
- Core Web Vitals.
- Tiempo de carga.
- Tamaño del bundle.
- Número de peticiones.
- Imágenes optimizadas.
- Recursos bloqueantes.

---

# Revisión obligatoria

Cada Pull Request o cambio importante deberá responder:

- ¿Se redujo el JavaScript?
- ¿Se mantuvo o mejoró Lighthouse?
- ¿Se afectó el CLS?
- ¿Se incrementó el tamaño del bundle?
- ¿Se optimizaron las imágenes?
- ¿Se evitó código innecesario?

Si alguna respuesta es negativa, el cambio deberá revisarse.

---

# Filosofía de rendimiento

La mejor experiencia de usuario es aquella donde el usuario obtiene la información antes de notar que el sitio está cargando.

La optimización debe ser una práctica constante, no una etapa final del desarrollo.

---

# Regla principal

Cada nueva funcionalidad deberá mantener o mejorar el rendimiento general del proyecto.

Ninguna característica nueva justifica degradar la velocidad, estabilidad o fluidez del sitio.