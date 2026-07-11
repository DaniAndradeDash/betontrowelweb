import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";
import contactImg from "@/public/Equipos/OficinaMonterrey.jpeg";

export const metadata: Metadata = {
  title: "Contacto | Beton Trowel México",
  description:
    "Cotizaciones y asesoría técnica en maquinaria ligera para construcción. Equipos y Superficies de México, distribuidor oficial Beton Trowel.",
  openGraph: {
    title: "Contacto | Beton Trowel México",
    description:
      "Cotizaciones y asesoría técnica en maquinaria ligera para construcción. Equipos y Superficies de México, distribuidor oficial Beton Trowel.",
    locale: "es_MX",
    type: "website",
  },
};

export default function ContactPage() {
  const icons = [
    { icon: Phone, title: "Teléfono San Luis Potosí", detail: "(+52) 444 256 7853" },
    { icon: Phone, title: "Teléfono Monterrey", detail: "(+52) 81 1018 0615" },
    { icon: Mail, title: "Correo Electrónico", detail: "c.andrade@equiposysuperficiesdemexico.com" },
    { icon: MapPin, title: "Ubicación Monterrey", detail: "Mariano Escobedo 1456-Norte, Treviño, 64570 Monterrey, N.L." },
    { icon: MapPin, title: "Ubicación San Luis Potosí", detail: "México 57 8245, Villa de Pozos, 79422 Pozos, S.L.P." },
  ];

  return (
    <div className="bg-white text-foreground font-sans selection:bg-brand-blue selection:text-white">

      {/* Header Sección: Minimalismo con Impacto */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden bg-brand-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/40 to-brand-black z-10"></div>
          <Image
            src={contactImg}
            alt="Beton Trowel Contact"
            fill
            className="object-cover opacity-60 grayscale-[40%]"
            priority
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <span className="text-brand-blue font-mono text-[10px] sm:text-xs uppercase tracking-[0.4em] mb-4 block animate-fade-in">
            Servicio con <a href="https://equiposysuperficiesdemexico.com" className="font-bold text-white hover:no-underline hover:text-brand-blue">Equipos y superficies de México</a>
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-6">
            ESTAMOS <br /> <span className="text-brand-blue">CONECTADOS.</span>
          </h1>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-[2560px] mx-auto lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12">

            {/* Columna Izquierda: Info de Contacto */}
            <div className="lg:col-span-5 space-y-8 lg:space-y-12">
              <div>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-6 uppercase">
                  Información <br /> de Contacto
                </h2>
                <p className="text-gray-500 font-light leading-relaxed">
                  ¿Necesita una cotización formal o asesoría técnica sobre nuestros equipos belgas? Nuestro equipo de expertos está listo para responder.
                </p>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {icons.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 sm:gap-4 lg:gap-5 group">
                    <div className="p-2.5 sm:p-3 lg:p-4 rounded-2xl bg-brand-grey text-brand-black group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm flex-shrink-0">
                      <item.icon size={24} strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">{item.title}</h3>
                      <p className="text-sm sm:text-base lg:text-lg font-mono font-medium text-brand-black break-words">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Elemento decorativo / Frase de marca */}
              <div className="pt-10 lg:pt-12 border-t border-gray-100 hidden lg:block">
                <p className="font-mono text-[10px] text-gray-300 uppercase tracking-[0.3em]">
                  Beton Trowel • Equipos y Superficies de México
                </p>
              </div>
            </div>

            {/* Columna Derecha: Formulario Estilo Premium */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}