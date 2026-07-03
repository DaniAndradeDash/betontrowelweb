import type { Metadata } from "next";
import Image from "next/image";
import Card from "../components/Card";
import { compactadoras } from "@/data/Productos";

const MAIN_IMG =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop";

export const metadata: Metadata = {
  title: "Compactación | Beton Trowel México",
  description:
    "Compactadores saltarines y placas vibratorias para compactación de suelos y asfalto. Maquinaria ligera profesional de Beton Trowel, distribuida por Equipos y Superficies de México.",
  openGraph: {
    title: "Compactación | Beton Trowel México",
    description:
      "Compactadores saltarines y placas vibratorias para compactación de suelos y asfalto. Distribuido por Equipos y Superficies de México.",
    locale: "es_MX",
    type: "website",
  },
};

export default function CompactacionPage() {

  return (
    <div className="flex flex-col">
      <section className="bg-brand-blue text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={MAIN_IMG}
            alt="Compaction"
            fill
            sizes="(max-width: 780px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Compactación de <span className="text-brand-black">Pisos</span>
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Beton Trowel ofrece compactadores de placas BT, reconocidos como el
            estándar de la industria para compactar suelos granulares y asfalto.
            Miles de usuarios satisfechos saben que los compactadores de placas BT
            tienen el máximo rendimiento, fácil manejo, bajo mantenimiento y larga
            vida útil. Distribuido en México por <strong>Equipos y Superficies de México</strong>.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
            {compactadoras.map((p, i) => (
              <Card
                key={p.id}
                productRef={p.ref}
                name={p.name}
                desc={p.desc}
                img={p.img}
                currentSlug="compactacion"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
