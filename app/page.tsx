import Image from "next/image";
import Link from "next/link";

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
       <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center overflow-hidden bg-[#1A1A1A]">
        {/* Background con Overlay Dinámico */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent z-10"></div>
          <Image 
            src={MAIN_IMG} 
            alt="Construction Site" 
            fill 
            className="object-cover object-center grayscale-[20%] brightness-[0.4]"
            priority
          />
        </div>
        
        <div className="relative z-20 w-full max-w-[2560px] mx-auto px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl 2xl:max-w-6xl">
            {/* Badge sutil */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mt-8 rounded-full bg-[#00AEEF]/10 border border-[#00AEEF]/20 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#00AEEF]">
                Tecnología de punta en México
              </span>
            </div>

            {/* Título Principal con escala fluida para 2K/4K */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-5xl 2xl:text-6xl font-bold text-white tracking-tighter leading-[0.95] mb-8">
              Beton Trowel México, <br />
              <span className="text-[#00AEEF]">con sede en Monterrey NL Y. SLP</span>
            </h1>

            {/* Descripción con ancho controlado */}
            <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-400 max-w-xl 2xl:max-w-3xl font-light leading-relaxed mb-10">
              Bienvenido a Beton Trowel BV, especialistas en equipos de compactación y acabado de hormigón de alta calidad. Con sede en Bélgica, cerca de Amberes, ofrecemos productos confiables y envío global. Con un amplio soporte y una red mundial de distribuidores, somos su socio para equipos de primer nivel.
            </p>

            {/* Botones Adaptables */}
            <div className="flex flex-col md:mb-8 sm:flex-row items-start gap-4 sm:gap-6">
              <Link 
                href="/contacto" 
                className="group w-full sm:w-auto bg-[#00AEEF] text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all duration-500 flex items-center justify-center gap-2 shadow-2xl shadow-[#00AEEF]/20"
              >
                Contactar Ahora
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link 
                href="/acabado-de-concreto" 
                className="w-full sm:w-auto bg-white/5 backdrop-blur-xl text-white border border-white/10 px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Ver Catálogo
              </Link>
            </div>
          </div>
        </div>

        {/* Elemento decorativo para monitores grandes (opcional) */}
        <div className="hidden xl:block absolute bottom-12 right-24 z-20">
          <div className="flex flex-col items-end gap-2">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.5em] rotate-90 origin-right translate-y-20">
              EST. 1990
            </span>
          </div>
        </div>
      </section>

       {/* Section : Equipos (Basada en tu imagen) */}
       <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 gap-8 xl:gap-12 items-center">

            {/* Cuadrícula de Imágenes (Lado Izquierdo) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                  <Image src={MACHINE_1} alt="Equipo 1" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
                  <Image src={MACHINE_2} alt="Equipo 2" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
                  <Image src={MACHINE_3} alt="Equipo 3" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                  <Image src={MACHINE_4} alt="Equipo 4" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>

            {/* Contenido de Texto (Lado Derecho) */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-brand-blue font-bold tracking-widest uppercase text-sm">
                Con sede en Bélgica
              </h3>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-black leading-tight uppercase">
                Equipos de Acabado y Compactación de concreto
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                BETON TROWEL se complace en presentarle nuestra amplia gama de equipos.
                No comprometemos la calidad: utilizamos materiales de alta gama combinados con piezas
                de ingeniería de precisión para garantizar que su inversión brinde una vida útil sin problemas.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/acabado-de-concreto/1"
              className="bg-brand-blue text-white px-10 py-4 rounded-full font-bold hover:shadow-lg transition-all"
            >
              Consultar Máquina 1
            </Link>
            <Link
              href="/acabado-de-concreto/2"
              className="border-2 border-brand-blue text-brand-blue px-10 py-4 rounded-full font-bold hover:bg-brand-blue hover:text-white transition-all"
            >
              Consultar Máquina 2
            </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Section 2: Categories */}
       <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
           <div className="text-center mb-6 sm:mb-8 lg:mb-12">
             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-2 sm:mb-3 lg:mb-4">Nuestras Especialidades</h2>
             <div className="h-0.5 sm:h-0.5 md:h-0.5 lg:h-0.5 w-16 sm:w-20 md:w-24 lg:w-28 mx-auto bg-brand-blue"></div>
           </div>
           
           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
            {[
              { 
                title: "Acabado para Concreto", 
                href: "/acabado-de-concreto", 
                desc: "Hélice y allanadoras para superficies perfectas.",
                img: MAIN_IMG 
              },
              { 
                title: "Herramientas para Concreto", 
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
