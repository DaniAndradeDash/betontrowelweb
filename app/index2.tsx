import Image from "next/image";
import Link from "next/link";
import { MoveRight, ArrowUpRight } from "lucide-react"; // Solo para detalles mínimos

const HERO_IMG = "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop";

export default function HomePage() {
    return (
        <div className="bg-white text-[#171717] selection:bg-[#00AEEF] selection:text-white">

            {/* --- HERO SECTION: Minimalista e Impactante --- */}
            <section className="relative min-h-[90vh] flex items-center px-6 lg:px-12 overflow-hidden bg-[#F5F5F5]">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
                    <div className="space-y-8">
                        <div className="inline-flex items-center space-x-2 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
                            <span className="text-xs font-medium uppercase tracking-widest text-gray-500">Ingeniería Belga en México</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-[#1A1A1A]">
                            EL PODER <br />
                            <span className="text-[#00AEEF]">DEL CONCRETO.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-500 max-w-lg font-light leading-relaxed">
                            Equipos de acabado y compactación diseñados para resistir.
                            Minimalismo en diseño, máximo en rendimiento.
                        </p>

                        <div className="flex flex-wrap gap-5 pt-4">
                            <Link
                                href="/contacto"
                                className="group bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-[#00AEEF] transition-all duration-500 shadow-xl"
                            >
                                Solicitar Cotización
                                <MoveRight className="group-hover:translate-x-1 transition-transform" size={18} />
                            </Link>
                            <Link
                                href="/catalogo"
                                className="group border border-gray-200 bg-white text-[#1A1A1A] px-8 py-4 rounded-full font-medium hover:border-[#00AEEF] transition-all duration-300"
                            >
                                Explorar Equipos
                            </Link>
                        </div>
                    </div>

                    <div className="relative h-[500px] lg:h-[700px] w-full grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={HERO_IMG}
                            alt="Industrial Work"
                            fill
                            className="object-cover scale-110 hover:scale-100 transition-transform duration-[2s]"
                            priority
                        />
                    </div>
                </div>

                {/* Decoración sutil de fondo */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#00AEEF]/5 -skew-x-12 translate-x-20" />
            </section>

            {/* --- SECTION: Sedes / Equipos (Estilo Grid Dinámico) --- */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-sm uppercase tracking-[0.3em] text-[#00AEEF] font-bold mb-4">Innovación Constante</h2>
                            <p className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A]">
                                Diseñado para durar, <br />construido para rendir.
                            </p>
                        </div>
                        <p className="text-gray-400 max-w-xs text-sm font-mono">
              // BETON TROWEL BV <br />
              // HIGH PRECISION ENGINEERING
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {/* Card Grande */}
                        <div className="md:col-span-8 group relative aspect-video overflow-hidden rounded-3xl bg-[#F5F5F5]">
                            <Image
                                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?q=80&w=2070"
                                alt="Maquinaria"
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-10 flex flex-col justify-end">
                                <h3 className="text-white text-2xl font-bold">Acabado de Precisión</h3>
                                <p className="text-gray-300">Tecnología belga en cada rotación.</p>
                            </div>
                        </div>

                        {/* Card Pequeña Interactiva */}
                        <div className="md:col-span-4 flex flex-col justify-between p-10 rounded-3xl bg-[#1A1A1A] text-white group hover:bg-[#00AEEF] transition-colors duration-500">
                            <ArrowUpRight className="self-end opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={40} />
                            <div>
                                <h3 className="text-3xl font-bold mb-2">Compactación</h3>
                                <p className="text-gray-400 group-hover:text-white transition-colors">Rendimiento sin compromisos en terrenos difíciles.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION: CTA Minimalista --- */}
            <section className="py-32 bg-[#F5F5F5]">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-10 text-[#1A1A1A]">
                        ¿Llevamos tu obra al <span className="text-[#00AEEF]">siguiente nivel?</span>
                    </h2>
                    <Link
                        href="/contacto"
                        className="inline-block bg-white border border-gray-200 text-[#1A1A1A] px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:border-[#00AEEF] transition-all duration-300"
                    >
                        Hablemos de tu proyecto
                    </Link>
                </div>
            </section>

        </div>
    );
}