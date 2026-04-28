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
    <div className="bg-[#1A1A1A] text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-[2560px] mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5 space-y-6">
            <Image src={BETON_TROWEL_IMG} alt="Logo" width={160} height={50} className="brightness-0 invert" />
            <p className="text-gray-400 text-sm font-light leading-relaxed">Especialistas en acabado de concreto.[cite: 5]</p>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-[#00AEEF] font-bold text-xs uppercase mb-8">Navegación</h3>
            <ul className="space-y-3">
              {navLinks.map((l) => (<li key={l.href}><Link href={l.href} className="text-gray-400 hover:text-white">{l.name}</Link></li>))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <h3 className="text-[#00AEEF] font-bold text-xs uppercase mb-8">Redes</h3>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-[#1877F2] transition-all"><FaFacebookF size={18} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-gradient-to-tr hover:from-[#f9ce34] transition-all"><FaInstagram size={18} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-[10px] text-gray-500 uppercase tracking-widest text-center md:text-left">
          © {year || "2026"} BETON TROWEL. TODOS LOS DERECHOS RESERVADOS.[cite: 5]
        </div>
      </div>
    </div>
  );
}