import Image from "next/image";
import Link from "next/link";

const MAIN_IMG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop";

export default function HeroAction() {
    const buttonDisabled = true; // Cambia a false para habilitar el botón
    const buttonCatalogo = () => {
        return (
            <div className="relative group">
                {buttonDisabled ? (
                    <button
                        disabled
                        className="w-full sm:w-auto bg-white/5 backdrop-blur-xl text-white border border-white/10 px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Ver Catálogo
                    </button>
                ) : (
                    <Link
                        href="/acabado-de-concreto"
                        className="w-full sm:w-auto bg-white/5 backdrop-blur-xl text-white border border-white/10 px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center"
                    >
                        Ver Catálogo
                    </Link>
                )}

                {/* Tooltip */}
                {buttonDisabled && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="absolute -top-10 whitespace-nowrap rounded-xl bg-black/90 px-4 py-2 text-xs text-white shadow-2xl border border-white/10 backdrop-blur-md">
                            Próximamente disponible
                        </span>
                    </div>
                )}
            </div>
        );
    };

    return (
        <>
            {/* Section 1: Hero */}
            < section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center overflow-hidden bg-[#1A1A1A]" >

                {/* Background con Overlay Dinámico */}
                < div className="absolute inset-0 z-0" >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent z-10"></div>
                    <Image
                        src={MAIN_IMG}
                        alt="Construction Site"
                        fill
                        sizes="(max-width: 780px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover object-center grayscale-[20%] brightness-[0.4]"
                        priority
                    />
                </div >

                {/* Contenido Principal con Z-Index para estar por encima del fondo */}
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
                            <span className="text-[#00AEEF]">con sede en Monterrey NL Y SLP.</span>
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

                            {buttonCatalogo()}
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
            </section >

        </>
    );

};