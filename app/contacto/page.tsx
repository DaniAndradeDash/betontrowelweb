import Image from "next/image";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const CONTACT_HERO = "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop";

export default function ContactPage() {
  return (
    <div className="bg-white text-[#171717] font-sans selection:bg-[#00AEEF] selection:text-white">

      {/* Header Sección: Minimalismo con Impacto */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/80 via-[#1A1A1A]/40 to-[#1A1A1A] z-10"></div>
          <Image
            src={CONTACT_HERO}
            alt="Beton Trowel Contact"
            fill
            className="object-cover opacity-60 grayscale-[40%]"
            priority
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#00AEEF] font-mono text-[10px] sm:text-xs uppercase tracking-[0.4em] mb-4 block animate-fade-in">
            Global Support Network
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-6">
            ESTAMOS <br /> <span className="text-[#00AEEF]">CONECTADOS.</span>
          </h1>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-[2560px] mx-auto lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">

            {/* Columna Izquierda: Info de Contacto */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6 uppercase">
                  Información <br /> de Contacto
                </h2>
                <p className="text-gray-500 font-light max-w-md leading-relaxed">
                  ¿Necesitas una cotización formal o asesoría técnica sobre nuestros equipos belgas? Nuestro equipo de expertos está listo para responder.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: Phone, title: "Teléfono", detail: "+52 (55) 1234 5678" },
                  { icon: Mail, title: "Correo Electrónico", detail: "info@betontrowel.mx" },
                  { icon: MapPin, title: "Ubicación", detail: "Ciudad de México, México" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 group">
                    <div className="p-4 rounded-2xl bg-[#F5F5F5] text-[#1A1A1A] group-hover:bg-[#00AEEF] group-hover:text-white transition-all duration-500 shadow-sm">
                      <item.icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">{item.title}</h3>
                      <p className="text-lg font-mono font-medium text-[#1A1A1A]">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Elemento decorativo / Frase de marca */}
              <div className="pt-12 border-t border-gray-100 hidden lg:block">
                <p className="font-mono text-[10px] text-gray-300 uppercase tracking-[0.3em]">
                  Beton Trowel BV • Calidad Sin Compromisos
                </p>
              </div>
            </div>

            {/* Columna Derecha: Formulario Estilo Premium */}
            <div className="lg:col-span-7">
              <div className="bg-[#F5F5F5] p-8 sm:p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50 transition-all hover:shadow-none">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Nombre Completo</label>
                      <input
                        type="text"
                        placeholder="Ej. Juan Pérez"
                        className="w-full bg-white px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#00AEEF] outline-none transition-all placeholder:text-gray-300 font-mono text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Email Corporativo</label>
                      <input
                        type="email"
                        placeholder="juan@empresa.com"
                        className="w-full bg-white px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#00AEEF] outline-none transition-all placeholder:text-gray-300 font-mono text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Asunto de Interés</label>
                    <input
                      type="text"
                      placeholder="Ej. Cotización Allanadora de Concreto"
                      className="w-full bg-white px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#00AEEF] outline-none transition-all placeholder:text-gray-300 font-mono text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Mensaje o Requerimientos</label>
                    <textarea
                      rows={5}
                      placeholder="Describa brevemente su proyecto o el equipo que requiere..."
                      className="w-full bg-white px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#00AEEF] outline-none transition-all placeholder:text-gray-300 font-mono text-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="group w-full bg-[#1A1A1A] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#00AEEF] transition-all duration-500 shadow-xl active:scale-95"
                  >
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    ENVIAR SOLICITUD
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}