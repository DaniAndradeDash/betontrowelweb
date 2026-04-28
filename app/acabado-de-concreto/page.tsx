import Image from "next/image";
import Link from "next/link";

const MAIN_IMG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop";

export default function AcabadoPage() {
  const products = [
    { 
      id: 1,
      name: "Allanadora sencilla de 24\"", 
      desc: "Ideal para acabados lisos en superficies medianas. Motor eficiente y alta durabilidad.",
      img: MAIN_IMG 
    },
    { 
      id: 2,
      name: "Hélice de Concreto Industrial", 
      desc: "Diseñada para el nivelado preciso de losas de concreto de alta resistencia.",
      img: MAIN_IMG 
    },
    { 
      id: 3,
      name: "Allanadora de Poder 36\"", 
      desc: "Máxima eficiencia para grandes extensiones de concreto industrial.",
      img: MAIN_IMG 
    },
    { 
      id: 4,
      name: "Kit de Aspas Profesionales", 
      desc: "Accesorios de acero templado para diferentes tipos de acabado.",
      img: MAIN_IMG 
    },
  ];

  return (
    <div className="flex flex-col">
       {/* Header Section */}
       <section className="bg-brand-blue text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image 
            src={MAIN_IMG} 
            alt="Concrete Finishing" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Acabado de <span className="text-brand-black">Concreto</span></h1>
          <p className="text-md text-white max-w-2xl">
            BETON TROWEL NV se complace en presentarle nuestra amplia gama de equipos de compactación y acabado de hormigón. No comprometemos la calidad utilizando materiales de alta calidad combinados con piezas de ingeniería de precisión para garantizar que su inversión en nuestros equipos le brinde una vida útil sin problemas y el máximo rendimiento de su capital.
          </p>
        </div>
      </section>

       {/* Products Grid */}
       <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-center text-brand-blue mb-8 sm:mb-12 lg:mb-16">Nuestras máquinas</h1>
           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
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
                  <Link
                    href={`/acabado-de-concreto/${p.id}`}
                    className="w-full py-3 border border-brand-blue text-brand-blue font-semibold rounded-lg hover:bg-brand-blue hover:text-white transition-colors"
                  >
                    Ver información
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
