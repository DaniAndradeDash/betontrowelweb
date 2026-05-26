import Image from "next/image";
import Link from "next/link";

const MAIN_IMG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop";

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
            < section className="py-20 bg-brand-grey" >
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
                                {textos.map((item, i) => (
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
            </section >
        </>
    )
};