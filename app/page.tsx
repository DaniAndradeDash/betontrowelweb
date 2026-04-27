import Image from "next/image";
import Link from "next/link";

const MAIN_IMG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Section 1: Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-brand-grey">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 to-transparent z-10"></div>
          <Image 
            src={MAIN_IMG} 
            alt="Construction Site" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Expertos en <span className="text-brand-blue">Acabados de Concreto</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300">
            Venta y renta de la mejor maquinaria ligera y herramientas de acabado para la construcción en todo México.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/contacto" 
              className="bg-brand-blue hover:bg-blue-600 text-white px-8 py-4 rounded-md font-bold transition-all transform hover:scale-105"
            >
              Contactar Ahora
            </Link>
            <Link 
              href="/acabado-de-concreto" 
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-md font-bold transition-all"
            >
              Ver Catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Nuestras Especialidades</h2>
            <div className="h-1 w-20 bg-brand-blue mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Acabado de Concreto", 
                href: "/acabado-de-concreto", 
                desc: "Hélice y allanadoras para superficies perfectas.",
                img: MAIN_IMG 
              },
              { 
                title: "Herramientas", 
                href: "/herramientas-de-concreto", 
                desc: "Herramientas manuales de alta precisión y durabilidad.",
                img: MAIN_IMG 
              },
              { 
                title: "Compactación", 
                href: "/compactacion", 
                desc: "Compactadores saltarines y placas vibratorias.",
                img: MAIN_IMG 
              },
              { 
                title: "Vibración", 
                href: "/vibracion", 
                desc: "Vibradores de concreto para eliminar burbujas de aire.",
                img: MAIN_IMG 
              },
            ].map((cat, idx) => (
              <Link 
                key={idx} 
                href={cat.href} 
                className="group relative overflow-hidden rounded-xl border border-brand-grey hover:border-brand-blue transition-all hover:shadow-xl"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image 
                    src={cat.img} 
                    alt={cat.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {cat.desc}
                    </p>
                    <span className="text-brand-blue font-semibold text-sm inline-flex items-center gap-2">
                      Explorar 
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: About / Why Us */}
      <section className="py-20 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image 
                src={MAIN_IMG} 
                alt="Construction Machinery" 
                width={600} 
                height={400} 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                Calidad que Construye el <span className="text-brand-blue">Futuro</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                En Beton Trowel, nos dedicamos a proveer las herramientas más robustas y eficientes del mercado. 
                Entendemos que la calidad del acabado define la durabilidad de una obra.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Maquinaria de última generación",
                  "Soporte técnico especializado",
                  "Opciones de venta y renta flexibles",
                  "Distribución en todo el territorio nacional",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-black font-medium">
                    <svg className="w-5 h-5 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                href="/contacto" 
                className="inline-block bg-brand-black text-white px-8 py-3 rounded-md font-bold hover:bg-brand-blue transition-colors"
              >
                Más Información
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-brand-blue rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Listo para mejorar tu obra?</h2>
              <p className="text-xl mb-8 opacity-90">
                Obtén una cotización personalizada para venta o renta de equipo hoy mismo.
              </p>
              <Link 
                href="/contacto" 
                className="bg-brand-black text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block shadow-lg"
              >
                Solicitar Cotización
              </Link>
            </div>
            {/* Decorative circle */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
