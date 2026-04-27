"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Acabado de concreto", href: "/acabado-de-concreto" },
  { name: "Herramientas de concreto", href: "/herramientas-de-concreto" },
  { name: "Compactación", href: "/compactacion" },
  { name: "Vibración", href: "/vibracion" },
  { name: "Contacto", href: "/contacto" },
];

const RELIABLE_IMG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-brand-black text-white sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logos */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
              <Image 
                src={RELIABLE_IMG} 
                alt="Beton Trowel Logo" 
                width={150} 
                height={50} 
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <div className="h-8 w-px bg-white/20 hidden md:block"></div>
            <Link href="/" className="hidden md:flex items-center">
              <Image 
                src={RELIABLE_IMG} 
                alt="Equipos y Superficies de México Logo" 
                width={180} 
                height={60} 
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-xs font-bold uppercase tracking-wider text-white hover:text-brand-blue transition-colors flex items-center gap-1"
              >
                {link.name}
                {link.href !== "/contacto" && (
                  <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-brand-black border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-bold uppercase text-white hover:bg-white/10 hover:text-brand-blue rounded-md transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

