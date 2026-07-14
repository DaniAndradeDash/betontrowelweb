import type { Metadata } from "next";
import Image from "next/image";
import Card from "../components/Card";
import { herramientasConcreto } from "@/data/Productos";
import mainImg from "@/public/herramientas/tools.jpeg";

export const metadata: Metadata = {
  title: "Herramientas de Concreto | Beton Trowel México",
  description:
    "Herramientas manuales y flotadoras para acabado de concreto de alta precisión. Llanas, flotadoras, bumpcutters y más. Beton Trowel, distribuido por Equipos y Superficies de México.",
  openGraph: {
    title: "Herramientas de Concreto | Beton Trowel México",
    description:
      "Herramientas manuales y flotadoras para acabado de concreto de alta precisión. Distribuido por Equipos y Superficies de México.",
    locale: "es_MX",
    type: "website",
  },
};

export default function HerramientasPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-brand-blue text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={mainImg}
            alt="Concrete Tools"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Herramientas de <span className="text-brand-black">Concreto</span>
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Beton Trowel presenta una amplia gama de herramientas para concreto
            en diferentes etapas de construcción y reparación, para trabajos
            planos y acabados manuales de superficies. Distribuido en México por
            <strong>Equipos y Superficies de México</strong>.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-center text-brand-blue mb-8 sm:mb-12 lg:mb-16">Nuestras máquinas</h1> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
            {herramientasConcreto.map((p, i) => (
              <Card
                key={p.id}
                productRef={p.ref}
                name={p.name}
                desc={p.desc}
                img={p.img}
                currentSlug="herramientas-de-concreto"
                categoryName="Herramientas"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
