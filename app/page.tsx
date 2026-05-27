import Image from "next/image";
import Link from "next/link";
import { HeroAction, Equipos, Categorias, About, Cotizacion } from "./components/sectionsHome";

const MAIN_IMG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop";

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
