import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-brand-grey/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between px-3 py-4">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-xl font-bold text-brand-black">
                Beton Trowel
              </span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-500 hover:text-brand-blue transition-colors">
              Inicio
            </Link>
            <Link href="/acabado-de-concreto" className="text-sm font-medium text-gray-500 hover:text-brand-blue transition-colors">
              Acabado
            </Link>
            <Link href="/compactacion" className="text-sm font-medium text-gray-500 hover:text-brand-blue transition-colors">
              Compactación
            </Link>
            <Link href="/herramientas-de-concreto" className="text-sm font-medium text-gray-500 hover:text-brand-blue transition-colors">
              Herramientas
            </Link>
            <Link href="/vibracion" className="text-sm font-medium text-gray-500 hover:text-brand-blue transition-colors">
              Vibración
            </Link>
            <Link href="/contacto" className="bg-brand-blue text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition-colors">
              Contacto
            </Link>
          </div>
          <div className="sm:hidden">
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-500 hover:text-brand-blue hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu */}
          <div className="sm:hidden">
            <div className={isOpen ? "block" : "hidden"}>
              <div className="pt-2 pb-3 space-y-1 sm:mt-0">
                <Link 
                  href="/" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-brand-grey hover:text-brand-blue"
                >
                  Inicio
                </Link>
                <Link 
                  href="/acabado-de-concreto" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-brand-grey hover:text-brand-blue"
                >
                  Acabado
                </Link>
                <Link 
                  href="/compactacion" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-brand-grey hover:text-brand-blue"
                >
                  Compactación
                </Link>
                <Link 
                  href="/herramientas-de-concreto" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-brand-grey hover:text-brand-blue"
                >
                  Herramientas
                </Link>
                <Link 
                  href="/vibracion" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-brand-grey hover:text-brand-blue"
                >
                  Vibración
                </Link>
                <Link 
                  href="/contacto" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 bg-brand-blue text-white hover:bg-blue-600"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}