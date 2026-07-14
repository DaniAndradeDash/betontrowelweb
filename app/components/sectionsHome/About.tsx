import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Nosotros from "@/public/Equipos/OficinaMonterrey.jpeg";

export default function About() {
    const textos = [
        "Maquinaria de última generación",
        "Soporte técnico especializado",
        "Opciones de venta y renta flexibles",
        "Distribución en todo el territorio nacional",
    ];

    return (
        <>
            {/* Section 3: About / Why Us */}
            <section className="py-16 lg:py-20 bg-brand-grey">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Image
                                src={Nosotros}
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
                                En México, somos representados por <strong>Equipos y Superficies de México</strong>,
                                quienes garantizan soporte local, venta y renta en todo el territorio nacional.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {textos.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-black font-medium">
                                        <CheckCircle size={20} className="text-brand-blue flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/contacto"
                                className="inline-block bg-brand-black text-white px-8 py-3 rounded-full font-bold hover:bg-brand-blue transition-colors"
                            >
                                Más Información
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};