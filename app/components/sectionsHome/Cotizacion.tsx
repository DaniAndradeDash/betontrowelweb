import Link from "next/link"

export default function Cotizacion() {
    return (
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
    )
};