import Image from "next/image";

const MAIN_IMG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop";

export default function VibracionPage() {
  const products = [
    { 
      name: "Vibrador de Inmersión", 
      desc: "Eliminación eficiente de vacíos en el concreto fresco.",
      img: MAIN_IMG 
    },
    { 
      name: "Motor Vibrador Industrial", 
      desc: "Alta potencia para vibración de moldes y mesas.",
      img: MAIN_IMG 
    },
    { 
      name: "Mangueras de Alta Resistencia", 
      desc: "Flexibles y duraderas, diseñadas para uso rudo en obra.",
      img: MAIN_IMG 
    },
    { 
      name: "Kit de Vibración Portátil", 
      desc: "Solución compacta para trabajos de pequeña escala.",
      img: MAIN_IMG 
    },
  ];

  return (
    <div className="flex flex-col">
       <section className="bg-brand-blue text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src={MAIN_IMG} 
            alt="Vibration" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Vibración de <span className="text-brand-black">Concreto</span></h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Evite grietas y porosidades. Nuestros equipos de vibración aseguran una consolidación perfecta del concreto.
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
