"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
// Importamos desde FontAwesome (fa) dentro de react-icons
import { FaInstagram, FaFacebookF } from "react-icons/fa6";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Acabado de concreto", href: "/acabado-de-concreto" },
  { name: "Herramientas de concreto", href: "/herramientas-de-concreto" },
  { name: "Compactación", href: "/compactacion" },
  { name: "Vibración", href: "/vibracion" },
  { name: "Contacto", href: "/contacto" },
];


const BETON_TROWEL_IMG = "/logos/BETON-TROWEL-LOGO-SITE-ICON.png";

export default function Footer() {
  const [year, setYear] = useState<number>(0);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-brand-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
               <Image 
                src={BETON_TROWEL_IMG} 
                alt="Beton Trowel Logo" 
                width={120} 
                height={40} 
                className="h-28 w-auto object-contain "
              />
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Especialistas en maquinaria ligera y herramientas de acabado para la construcción. 
              Calidad y eficiencia para tus proyectos de concreto en México.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-brand-blue transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info con Redes Sociales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>Email: info@betontrowel.mx</li>
              <li>Tel: +52 (55) 1234 5678</li>
              <li>México</li>
            </ul>

            {/* Contenedor de iconos modernos */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 rounded-full bg-gray-800/50 text-gray-400 hover:bg-[#1877F2] hover:text-white hover:-translate-y-1.5 transition-all duration-300 shadow-lg"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 rounded-full bg-gray-800/50 text-gray-400 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:-translate-y-1.5 transition-all duration-300 shadow-lg"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {year || "2026"} Beton Trowel. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Image 
              src={BETON_TROWEL_IMG} 
              alt="Beton Trowel Logo" 
              width={140} 
              height={40} 
              className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

