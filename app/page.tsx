import { HeroAction, Equipos, Categorias, About, Cotizacion } from "./components/sectionsHome";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Section 1: Hero */}
      <HeroAction />

      {/* Section : Equipos (Basada en tu imagen) */}
      <Equipos />

      {/* Section 2: Categories */}
      <Categorias />

      {/* Section 3: About / Why Us */}
      <About />

      {/* Section 4: Final CTA */}
      <Cotizacion />
    </div>
  );
}
