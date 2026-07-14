"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white font-sans px-6">
      <span className="text-brand-blue font-mono text-[10px] uppercase tracking-[0.4em] mb-4">
        Error
      </span>
      <h1 className="text-6xl sm:text-7xl font-bold text-brand-grey mb-4 tracking-tighter">
        Algo salió mal
      </h1>
      <p className="text-lg text-gray-500 mb-8 font-light max-w-md text-center">
        Ocurrió un error inesperado. Intenta de nuevo o vuelve al inicio.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold hover:bg-brand-black transition-all"
        >
          Intentar de nuevo
        </button>
        <a
          href="/"
          className="bg-brand-black text-white px-8 py-4 rounded-full font-bold hover:bg-brand-blue transition-all"
        >
          Volver al Inicio
        </a>
      </div>
    </div>
  );
}
