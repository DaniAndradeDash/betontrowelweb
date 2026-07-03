import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white font-sans px-6">
      <span className="text-brand-blue font-mono text-[10px] uppercase tracking-[0.4em] mb-4">
        Error 404
      </span>
      <h1 className="text-8xl sm:text-9xl font-bold text-brand-grey mb-4 tracking-tighter">
        404
      </h1>
      <p className="text-xl text-gray-500 mb-4 font-light">
        Página no encontrada
      </p>
      <p className="text-gray-400 mb-10 max-w-md text-center font-light">
        La página que buscas no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="bg-brand-black text-white px-8 py-4 rounded-full font-bold hover:bg-brand-blue transition-all"
      >
        Volver al Inicio
      </Link>
    </div>
  );
}
