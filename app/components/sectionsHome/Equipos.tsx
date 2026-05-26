import Image from "next/image";
import Link from "next/link";

const MACHINE_1 = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"; // Planta industrial
const MACHINE_2 = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"; // Allanadora/Trabajo
const MACHINE_3 = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"; // Detalle mecánico
const MACHINE_4 = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"; // Compactación/Tierra

export default function Equipos() {
    return (
        <>  
        {/* Section : Equipos (Basada en tu imagen) */ }
        < section className = "py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white" >
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
      </section >
        </>
    )
};