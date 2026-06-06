import Image from "next/image";
import Card from "../components/Card";
import { maquinaAcabado } from "@/data/Productos";
import portadaAcabado from "@/public/Acabados/PortadaAcabados.jpeg";

//const MAIN_IMG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop";

export default function AcabadoPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-brand-blue text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={portadaAcabado}
            alt="Concrete Finishing"
            fill
            sizes="(max-width: 780px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Acabado de <span className="text-brand-black">Concreto</span>
          </h1>
          <p className="text-md text-white max-w-2xl">
            BETON TROWEL en conjunto con Equipos y Superficies de México
            presentan una amplia gama de equipos de compactación y acabado de
            concreto. No comprometemos la calidad, utilizando materiales de alta
            calidad combinados con piezas de ingeniería de precisión para
            garantizar que su inversión en nuestros equipos le brinde una vida
            útil sin problemas y el máximo rendimiento de su capital.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-center text-brand-blue mb-8 sm:mb-12 lg:mb-16">Nuestras máquinas</h1> */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
            {maquinaAcabado.map((p, i) => (
              <Card
                key={p.id}
                id={p.id}
                name={p.name}
                desc={p.desc}
                img={p.img}
                currentSlug="acabado-de-concreto"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
