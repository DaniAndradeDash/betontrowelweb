import Image from "next/image";
import Link from "next/link";
import { HeroAction, Equipos, Categorias, About, Cotizacion } from "./components/sectionsHome";

const MAIN_IMG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop";

// URLs de Unsplash con maquinaria real para que se vea profesional
const HERO_IMG = "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop";
const MACHINE_1 = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"; // Planta industrial
const MACHINE_2 = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"; // Allanadora/Trabajo
const MACHINE_3 = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"; // Detalle mecánico
const MACHINE_4 = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"; // Compactación/Tierra

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
