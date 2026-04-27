import Image from "next/image";

const MAIN_IMG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop";

export default function CompactacionPage() {
  const products = [
    { 
      name: "Compactador Saltarín (Rammer)", 
      desc: "Potente compactación en zanjas y áreas confinadas.",
      img: MAIN_IMG 
    },
    { 
      name: "Placa Vibratoria Reversible", 
      desc: "Alta productividad para compactación de bases y pavimentos.",
      img: MAIN_IMG 
    },
    { 
      name: "Compactador de Superficie", 
      desc: "Ideal para preparación de terrenos y bases granulares.",
      img: MAIN_IMG 
    },
    { 
      name: "Accesorios de Compactación", 
      desc: "Zapatas intercambiables y kits de mantenimiento.",
      img: MAIN_IMG 
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-brand-black text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image 
            src={MAIN_IMG} 
            alt="Compaction" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Compactación de <span className="text-brand-blue">Suelos</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Asegure la estabilidad de sus cimientos con la maquinaria de compactación más potente y confiable del mercado.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((p, i) => (
              <div key={i} className="group border border-brand-grey rounded-2xl overflow-hidden hover:shadow-2xl transition-all">
                <div className="aspect-video relative overflow-hidden">
                  <Image 
                    src={p.img} 
                    alt={p.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-black mb-2">{p.name}</h3>
                  <p className="text-gray-600 mb-6">{p.desc}</p>
                  <button className="w-full py-3 border border-brand-blue text-brand-blue font-semibold rounded-lg hover:bg-brand-blue hover:text-white transition-colors">
                    Solicitar Información
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
