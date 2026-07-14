export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white font-sans">
      <div className="w-8 h-8 border-2 border-brand-blue border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-sm text-gray-400 font-light">Cargando equipo...</p>
    </div>
  );
}
