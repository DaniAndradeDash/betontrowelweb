import Image from "next/image";
import Link from "next/link";
const MAIN_IMG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop";

export default function Categorias() {
    const categories = [
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
    ];
     
    return (
        <>
            {/* Section 2: Categories */}
            < section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
                    <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-2 sm:mb-3 lg:mb-4">Nuestras Especialidades</h2>
                        <div className="h-0.5 sm:h-0.5 md:h-0.5 lg:h-0.5 w-16 sm:w-20 md:w-24 lg:w-28 mx-auto bg-brand-blue"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
                        {categories.map((cat, idx) => (
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
            </section >
        </>
    )
};