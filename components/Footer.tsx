"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
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
    <section className="bg-[#1A1A1A] text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-[2560px] mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">

          {/* Company Info */}
          <div className="md:col-span-5 space-y-6">
            <Image
              src={BETON_TROWEL_IMG}
              alt="Beton Trowel"
              width={160}
              height={50}
              className="h-24 w-auto object-contain"
            />
            <p className="text-gray-400 text-sm md:text-base font-light max-w-sm leading-relaxed">
              Especialistas en maquinaria ligera y herramientas de acabado para la construcción.
              Calidad belga y eficiencia para tus proyectos en México.[cite: 5]
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#00AEEF] mb-8">Navegación</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#00AEEF] transition-colors text-sm font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="md:col-span-4">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#00AEEF] mb-8">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-400 mb-8 font-light">
              <li>Email: info@betontrowel.mx[cite: 5]</li>
              <li>Tel: +52 (55) 1234 5678[cite: 5]</li>
              <li>México[cite: 5]</li>
            </ul>

            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-white/5 text-gray-400 hover:bg-[#1877F2] hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-white/5 text-gray-400 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest">
            © {year || "2026"} BETON TROWEL. TODOS LOS DERECHOS RESERVADOS.[cite: 5]
          </p>
          <div className="flex items-center gap-4 opacity-50 hover:opacity-100 transition-opacity">
            <Image
              src={BETON_TROWEL_IMG}
              alt="Beton Trowel Logo"
              width={120}
              height={30}
              className="h-6 w-auto object-contain brightness-0 invert"
            />
          </div>
        </div>
      </div>
    </section>
  );
}