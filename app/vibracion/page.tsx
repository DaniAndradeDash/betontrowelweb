import Image from "next/image";
import Card from "../components/Card";
import { vibradores } from "@/data/Productos";

const MAIN_IMG =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop";

export default function VibracionPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-brand-blue text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src={MAIN_IMG} alt="Vibration" fill className="object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Vibración de <span className="text-brand-black">Concreto</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Evite grietas y porosidades. Nuestros equipos de vibración aseguran
            una consolidación perfecta del concreto.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {vibradores.map((p, i) => (
              <Card
                key={p.id}
                id={p.id}
                name={p.name}
                desc={p.desc}
                img={p.img}
                currentSlug="vibracion"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
