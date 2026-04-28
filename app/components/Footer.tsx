export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12 sm:py-16 lg:py-20">
          <div>
            <h3 className="text-2xl font-bold mb-4 sm:text-3xl lg:text-4xl">Beton Trowel</h3>
            <p className="text-sm sm:text-base text-gray-300">
              Especialistas en equipos de compactación y acabado de hormigón de alta calidad.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 sm:text-xl lg:text-2xl">Enlaces rápidos</h3>
            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
              <div className="space-y-2">
                <Link href="/" className="block py-2 sm:py-3 text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
                <Link href="/acabado-de-concreto" className="block py-2 sm:py-3 text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Acabado de Concreto
                </Link>
              </div>
              <div className="space-y-2">
                <Link href="/compactacion" className="block py-2 sm:py-3 text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Compactación
                </Link>
                <Link href="/herramientas-de-concreto" className="block py-2 sm:py-3 text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Herramientas
                </Link>
              </div>
              <div className="space-y-2">
                <Link href="/vibracion" className="block py-2 sm:py-3 text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Vibración
                </Link>
                <Link href="/contacto" className="block py-2 sm:py-3 text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 sm:text-xl lg:text-2xl">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm sm:text-base">+52 (55) 1234 5678</span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm sm:text-base">info@betontrowel.mx</span>
             