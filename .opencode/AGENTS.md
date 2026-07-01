# AGENTS.md

## Propósito

Este proyecto utiliza un sistema de agentes especializados para mantener un estándar profesional en diseño, desarrollo, arquitectura, rendimiento, accesibilidad, SEO y documentación.

Cada agente tiene una responsabilidad claramente definida. Ningún agente debe asumir tareas que pertenezcan a otro agente. Si una solicitud involucra varias áreas, los agentes deberán colaborar respetando sus responsabilidades.

El objetivo principal es construir un sitio moderno, escalable, altamente optimizado y consistente, manteniendo una única identidad visual y una arquitectura limpia durante todo el proyecto.

---

# Flujo de trabajo

Las decisiones deberán seguir el siguiente orden:

```
Architect
    ↓
UI/UX
    ↓
Frontend
    ↓
Forms (cuando aplique)
    ↓
SEO
    ↓
Accessibility
    ↓
Performance
    ↓
Reviewer
    ↓
Documentation
```

Ningún cambio debe romper la coherencia visual, la arquitectura del proyecto o el rendimiento.

---

# Principios generales

Todos los agentes deben:

- Priorizar simplicidad antes que complejidad.
- Mantener consistencia visual y técnica.
- Evitar código duplicado.
- Pensar siempre en escalabilidad.
- Favorecer componentes reutilizables.
- Documentar decisiones importantes.
- Seguir las convenciones definidas en STANDARDS.md.
- Respetar el Design System.
- Priorizar la experiencia del usuario.
- Mantener una excelente legibilidad del código.

---

# Comunicación entre agentes

Antes de modificar cualquier parte del proyecto, cada agente deberá validar si la responsabilidad pertenece a otro agente.

Ejemplos:

- Cambios visuales → UI/UX.
- Organización del proyecto → Architect.
- Componentes React → Frontend.
- Formularios → Forms.
- Posicionamiento → SEO.
- Accesibilidad → Accessibility.
- Optimización → Performance.
- Validación final → Reviewer.
- Documentación → Documentation.

---

# Prioridad de decisiones

Cuando exista un conflicto entre agentes, la prioridad será:

1. Architect
2. UI/UX
3. Frontend
4. SEO
5. Accessibility
6. Performance
7. Reviewer
8. Documentation

---

# Calidad esperada

Todo el proyecto deberá mantenerse bajo los siguientes estándares:

- Código limpio.
- Arquitectura escalable.
- Componentes reutilizables.
- Diseño moderno.
- Excelente UX.
- SEO técnico correcto.
- Accesibilidad WCAG AA.
- Alto rendimiento.
- Documentación actualizada.

---

# Objetivo del equipo

El propósito de este conjunto de agentes es que el proyecto evolucione como si estuviera siendo desarrollado por un equipo senior multidisciplinario, donde cada especialista aporta desde su área sin comprometer la calidad global del producto.