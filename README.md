# BetontrowelWeb - Plataforma de Maquinaria para Construcción

## Moodboard del Proyecto

### Paleta de Colores
- **Fondo Principal**: #FFFFFF (Blanco)
- **Texto Principal**: #171717 (Casi Negro)
- **Color de Marca Azul**: #00AEEF (Azul Vibrante)
- **Color de Marca Negro**: #1A1A1A (Negro Profundo)
- **Color de Marca Gris**: #F5F5F5 (Gris Claro)

### Tipografía
- **Familia Principal**: Geist Sans (optimizada mediante next/font)
- **Familia Mono**: Geist Mono (para código y elementos técnicos)
- **Sistema**: Fuentes variables de Vercel para máximo rendimiento

### Estilo de Diseño
- **Minimalista y Moderno**: Enfoque en espacios limpios y jerarquía visual clara
- **Espaciado Consciente**: Uso sistemático de la escala de espaciado de Tailwind
- **Componentes Reutilizables**: Diseño basado en componentes para mantenibilidad
- **Accesibilidad**: Contraste adecuado y navegación intuitiva

## Tecnologías Utilizadas
- **Framework**: Next.js 13+ (App Router)
- **Estilos**: Tailwind CSS
- **Tipografía**: Next Font (Geist)
- **Imágenes**: Next/Image optimizado
- **Lenguaje**: TypeScript
- **Estado**: React Hooks (useState, useEffect)

## Instalación

### Prerrequisitos
- Node.js 18.x o superior
- npm, yarn, pnpm o bun
- Git

### Pasos para Instalar
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/betontrowelweb.git
   cd betontrowelweb
   ```

2. Instalar dependencias:
   ```bash
   # Usando npm
   npm install
   
   # O usando yarn
   yarn install
   
   # O usando pnpm
   pnpm install
   
   # O usando bun
   bun install
   ```

3. Configurar variables de entorno (si aplica):
   ```bash
   cp .env.example .env.local
   # Editar .env.local con tus configuraciones
   ```

## Ejecución del Proyecto

### Desarrollo Local
```bash
# Con npm
npm run dev

# Con yarn
yarn dev

# Con pnpm
pnpm dev

# Con bun
bun dev
```

Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.

### Construcción para Producción
```bash
# Con npm
npm run build

# Con yarn
yarn build

# Con pnpm
pnpm build

# Con bun
bun run build
```

### Iniciar Servidor de Producción
```bash
# Con npm
npm start

# Con yarn
yarn start

# Con pnpm
pnpm start

# Con bun
bun start
```

## Estructura del Proyecto

```
betontrowelweb/
├── app/                     # Enrutamiento basado en App Router
│   ├── acabado-de-concreto/ # Ruta para acabado de concreto
│   │   └── [id]/            # Ruta dinámica para detalle de máquina
│   │       ├── page.tsx     # Página de detalle de máquina
│   │       └── loading.tsx  # Estado de carga (opcional)
│   ├── compactacion/        # Ruta para compactación
│   ├── contacto/            # Ruta de contacto
│   ├── herramientas-de-concreto/ # Ruta para herramientas
│   ├── vibracion/           # Ruta para vibración
│   ├── globals.css          # Estilos globales y configuración de Tailwind
│   ├── layout.tsx           # Layout raíz de la aplicación
│   └── page.tsx             # Página principal
├── components/              # Componentes reutilizables
├── public/                  # Archivos estáticos (imágenes, íconos, etc.)
├── styles/                  # Estilos adicionales (si los hay)
├── next.config.ts           # Configuración de Next.js
├── tailwind.config.ts       # Configuración de Tailwind CSS
├── postcss.config.mjs       # Configuración de PostCSS
├── tsconfig.json            # Configuración de TypeScript
├── package.json             # Dependencias y scripts
└── README.md                # Este archivo
```

## Guía de Estilos y Componentes

### Colores en el Código
Utilizar las variables CSS definidas en `globals.css`:
- `var(--background)` o `bg-background`
- `var(--foreground)` o `text-foreground`
- `var(--brand-blue)` o `bg-brand-blue/text-brand-blue`
- `var(--brand-black)` o `bg-brand-black/text-brand-black`
- `var(--brand-grey)` o `bg-brand-grey/text-brand-grey`

### Tipografía en el Código
- Fuente sans-serif por defecto: `font-sans`
- Fuente mono por defecto: `font-mono`

### Componentes UI Recomendados
- **Botones**: Usar clases `px-6 py-3 rounded-lg font-medium transition`
- **Tarjetas**: `border rounded p-4 shadow-sm`
- **Imágenes**: Siempre usar `next/image` con ancho y alto definidos
- **Espaciado**: Utilizar la escala espacial de Tailwind (1-12, px, etc.)

## Buenas Prácticas

### Rendimiento
1. **Optimización de Imágenes**: Siempre usar `next/image` con ancho/alto específicos
2. **Código Dividido**: Next.js maneja esto automáticamente con el App Router
3. **Prefetching**: Utilizar `next/link` con `prefetch` para navegación anticipada
4. **Análisis de Bundle**: Usar `next build` y analizar el output para optimizaciones

### Accesibilidad
1. **Contraste**: Asegurar ratio de contraste mínimo 4.5:1 para texto normal
2. **Navegación Teclada**: Todos los elementos interactivos deben ser accesibles mediante Tab
3. **Labels ARIA**: Usar atributos apropiados para lectores de pantalla
4. **Enfoque Visible**: Nunca eliminar outlines sin proporcionar alternativas

### SEO
1. **Metadatos**: Usar el componente `Metadata` de Next.js en cada página
2. **Estructura Semántica**: HTML5 apropiado (header, nav, main, section, footer)
3. **URLs Amigables**: Utilizar el enrutamiento basado en filesystem de Next.js
4. **Sitemap**: Generar automáticamente para páginas estáticas

## Despliegue

### Vercel (Recomendado)
1. Conectar repositorio de GitHub a Vercel
2. Vercel detecta automáticamente que es un proyecto Next.js
3. Configurar variables de entorno si es necesario
4. Desplegar con un click

### Otros Proveedores
- **Netlify**: Similar a Vercel, excelente para sitios estáticos y funciones serverless
- **AWS Amplify**: Buena opción si ya usas otros servicios de AWS
- **Docker**: Construir imagen y desplegar en cualquier proveedor de contenedores
- **Servidor Tradicional**: Node.js estándar (requiere configuración manual)

## Solución de Problemas

### Problemas Comunes
1. **Error de Hidratación**: Asegurar que componentes renderizan igual en servidor y cliente
2. **Imágenes no Optimizadas**: Verificar que se use `next/image` con dimensiones correctas
3. **Errores de TypeScript**: Revisar tipos y usar `any` temporalmente solo para depuración
4. **Dependencias Conflictuantes**: Limpiar `node_modules` y volver a instalar

### Comandos Útiles
```bash
# Limpiar caché de Next.js
rm -rf .next

# Reinicializar instalación completa
rm -rf node_modules .next && npm install

# Ver análisis de bundle
npm run build && npx next-bundle-analyzer

# Actualizar dependencias
npm outdated && npm update

# Verificar formato de código (si se configura Prettier/ESLint)
npm run lint
```

## Contribución

### Directrices
1. Forkear el repositorio
2. Crear rama para feature/fix: `git checkout -b feature/nueva-caracteristica`
3. Hacer cambios siguiendo la guía de estilos
4. Escribir tests si aplica
5. Hacer commit descriptivo
6. Push a tu fork
7. Crear Pull Request

### Estilo de Código
- Seguir las configuraciones de ESLint y Prettier del proyecto
- Usar TypeScript estricto (`noImplicitAny: true`)
- Comentarios JSDoc para funciones exportadas
- Namespaces claros y consistentes

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## Contacto

Para preguntas o soporte, por favor visita la sección de contacto en la aplicación o envía un correo a: soporte@betontrowel.com

---

*Última actualización: Abril 2026*
*Versión: 1.0.0*