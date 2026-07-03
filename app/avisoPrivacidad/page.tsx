import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Eye, Scale, FileText, Mail } from 'lucide-react';

const AvisoPrivacidad = () => {
    return (
        <main className="min-h-screen bg-brand-grey text-foreground font-sans selection:bg-brand-blue selection:text-white pt-32 pb-20">
            
            {/* Botón sutil para regresar */}
            <div className="max-w-4xl mx-auto px-6 mb-8">
                <Link 
                    href="/" 
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand-blue transition-colors group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Volver al Inicio
                </Link>
            </div>

            {/* Contenedor Principal del Documento Legal */}
            <article className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                
                {/* Encabezado del Documento */}
                <div className="bg-brand-black p-8 sm:p-12 text-white relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <span className="text-[10px] font-bold text-brand-blue tracking-[0.3em] uppercase block mb-2">Legal & Transparencia</span>
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Aviso de Privacidad</h1>
                        </div>
                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-3 backdrop-blur-sm">
                            <ShieldCheck size={28} className="text-brand-blue" />
                            <div className="text-right md:text-left">
                                <span className="block text-[9px] text-gray-400 uppercase tracking-widest">Última actualización</span>
                                <span className="font-mono text-xs font-semibold">08 / 06 / 2026</span>
                            </div>
                        </div>
                    </div>
                    {/* Elemento decorativo sutil de fondo */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-blue/10 rounded-full blur-3xl"></div>
                </div>

                {/* Cuerpo del Aviso */}
                <div className="p-8 sm:p-12 space-y-12">
                    
                    {/* Identidad del Responsable */}
                    <div className="prose max-w-none">
                        <p className="text-gray-600 leading-relaxed font-light text-base sm:text-lg">
                            <strong className="text-brand-black font-semibold">Equipos y Superficies de México</strong>, comercialmente conocido como <span className="text-brand-blue font-medium">Equipos y Superficies</span>, con domicilio en Mariano Escobedo 1456 Nte. Col. Treviño Monterrey, Nuevo León Cp. 66570, es el responsable del uso y protección de sus datos personales.
                        </p>
                    </div>

                    <hr className="border-gray-100" />

                    {/* Finalidades Primarias */}
                    <section className="space-y-4">
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-black flex items-center gap-2">
                            <FileText size={16} className="text-brand-blue" /> Finalidades Primarias
                        </h2>
                        <p className="text-sm text-gray-500 font-light">
                            Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3 pt-2">
                            {[
                                "Respuesta a mensajes del formulario de contacto",
                                "Prestación de cualquier servicio solicitado",
                                "Conocer maquinaria de catálogo",
                                "Consulta de información técnica especializada"
                            ].map((item, idx) => (
                                <div key={idx} className="bg-brand-grey p-4 rounded-xl text-sm font-medium border border-gray-50 flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-brand-blue rounded-full flex-shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Finalidades Secundarias */}
                    <section className="space-y-4">
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-black flex items-center gap-2">
                            <Eye size={16} className="text-brand-blue" /> Finalidades Secundarias
                        </h2>
                        <p className="text-sm text-gray-500 font-light">
                            De manera adicional, utilizaremos su información para finalidades que no son estrictamente obligatorias, pero nos permiten brindarle una mejor atención y experiencia comercial:
                        </p>
                        <div className="bg-brand-grey p-4 rounded-xl text-sm font-medium border border-gray-50 flex items-center gap-3 max-w-sm">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                            <span className="text-gray-700">Prospección y seguimiento comercial</span>
                        </div>
                    </section>

                    {/* Derechos ARCO */}
                    <section className="space-y-4 bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-150">
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-black flex items-center gap-2">
                            <Scale size={16} className="text-brand-blue" /> Sus Derechos ARCO
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                            Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (<span className="font-semibold text-gray-800">Acceso</span>). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (<span className="font-semibold text-gray-800">Rectificación</span>); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (<span className="font-semibold text-gray-800">Cancelación</span>); así como oponerse al uso de sus datos personales para fines específicos (<span className="font-semibold text-gray-800">Oposición</span>).
                        </p>
                        <div className="pt-4 border-t border-gray-200/60 mt-4 text-xs text-gray-500 font-light leading-relaxed">
                            Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través del correo electrónico de contacto. La respuesta a su solicitud será atendida en un plazo máximo de <span className="font-semibold text-gray-700">15 días hábiles</span>.
                        </div>
                    </section>

                    {/* Datos Recabados Automáticamente */}
                    <section className="space-y-4">
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-black flex items-center gap-2">
                            <ShieldCheck size={16} className="text-brand-blue" /> Datos del Sitio Web
                        </h2>
                        <p className="text-sm text-gray-500 font-light">
                            Nuestro sitio web recaba automáticamente la siguiente información analítica para optimizar la navegación técnica:
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="flex-1 bg-white p-4 border border-gray-200 rounded-xl text-xs font-mono text-gray-500">
                                • Región o ubicación geográfica general del usuario
                            </div>
                            <div className="flex-1 bg-white p-4 border border-gray-200 rounded-xl text-xs font-mono text-gray-500">
                                • Búsquedas y filtros realizados en el catálogo
                            </div>
                        </div>
                    </section>

                    <hr className="border-gray-100" />

                    {/* Bloque de Contacto */}
                    <footer className="bg-brand-black rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                        <div className="space-y-1">
                            <h3 className="text-sm font-bold tracking-tight">¿Tienes dudas sobre tus datos?</h3>
                            <p className="text-xs text-gray-400 font-light">Ponte en contacto directo con nuestra área de privacidad.</p>
                        </div>
                        <a 
                            href="mailto:c.andrade@equiposysuperficiesdemexico.com" 
                            className="inline-flex items-center gap-2 bg-white/10 hover:bg-brand-blue px-5 py-3 rounded-xl text-xs font-medium transition-all group backdrop-blur-sm w-full sm:w-auto justify-center"
                        >
                            <Mail size={14} className="group-hover:scale-110 transition-transform" />
                            c.andrade@equiposysuperficiesdemexico.com
                        </a>
                    </footer>

                </div>
            </article>

            {/* Footer de links legales menores */}
            <div className="max-w-4xl mx-auto px-6 mt-6 text-center text-[10px] text-gray-400 font-mono uppercase tracking-widest">
                <a href="https://www.equiposysuperficiesdemexico.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors">
                    www.equiposysuperficiesdemexico.com
                </a>
            </div>

        </main>
    );
}

export default AvisoPrivacidad;