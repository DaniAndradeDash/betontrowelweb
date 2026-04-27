import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, Mail, Zap, ChevronRight } from 'lucide-react';

// 1. Definimos la interfaz para que TypeScript esté feliz
interface PageProps {
    params: Promise<{ id: string }>; // Ahora es una Promesa
}

const MAIN_IMG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070";

const mockMachineData: any = {
    '1': {
        name: 'Mezcladora de Concreto Ligera',
        category: 'MEZCLADO',
        image: MAIN_IMG,
        description: 'Ingeniería belga optimizada para máxima eficiencia en espacios reducidos. Ideal para proyectos de infraestructura residencial.',
        usage: 'Perfecta para mezclar concreto, mortero y otros materiales de construcción en obras residenciales.',
        specs: [
            { label: 'Capacidad', value: '150 L' },
            { label: 'Potencia', value: '0.5 HP' },
            { label: 'Peso', value: '45 kg' },
            { label: 'Velocidad', value: '28 rpm' }
        ]
    },
    '2': {
        name: 'Vibradora de Concreto Portátil',
        category: 'VIBRACIÓN',
        image: MAIN_IMG,
        description: 'Elimina burbujas de aire y asegura un acabado denso y uniforme en superficies de concreto vertido.',
        usage: 'Indispensable en la preparación de losas, columnas y vigas estructurales.',
        specs: [
            { label: 'Frecuencia', value: '12,000 vpm' },
            { label: 'Amplitud', value: '0.8 mm' },
            { label: 'Peso', value: '8 kg' },
            { label: 'Poder', value: 'Eléctrica' }
        ]
    }
};

const relatedProducts = [
    { id: '1', name: 'Mezcladora Ligera', category: 'MEZCLADO', img: MAIN_IMG },
    { id: '2', name: 'Vibradora Portátil', category: 'VIBRACIÓN', img: MAIN_IMG },
];

// 2. Convertimos la función en async
export default async function MachineDetailPage({ params }: PageProps) {
    // 3. "Desenvolvemos" params con await antes de usarlo
    const { id } = await params;
    const machine = mockMachineData[id];

    if (!machine) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white font-sans px-6">
                <h1 className="text-9xl font-bold text-[#F5F5F5] mb-4">404</h1>
                <p className="text-xl text-gray-500 mb-8 font-light">Equipo no encontrado en el catálogo.</p>
                <Link href="/" className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-bold hover:bg-[#00AEEF] transition-all">
                    Volver al Inicio
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white text-[#171717] font-sans selection:bg-[#00AEEF] selection:text-white">

            {/* Navegación Sutil */}
            <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
                <Link href="/acabado-de-concreto" className="flex items-center gap-2 text-sm font-medium hover:text-[#00AEEF] transition-colors group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Volver al Catálogo
                </Link>
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-[0.3em]">REF: BT-{id}</span>
            </nav>

            <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 pb-20">
                {/* Lado Izquierdo: Visual */}
                <div className="space-y-6">
                    <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-[#F5F5F5] border border-gray-100">
                        <Image src={machine.image} alt={machine.name} fill className="object-cover" priority />
                    </div>
                    <div className="p-10 bg-[#F5F5F5] rounded-[2rem] border border-gray-100">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF] mb-4 flex items-center gap-2">
                            <Zap size={14} /> Aplicación Técnica
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-600 font-light">{machine.usage}</p>
                    </div>
                </div>

                {/* Lado Derecho: Info */}
                <div className="flex flex-col justify-center">
                    <span className="text-[#00AEEF] font-bold tracking-[0.2em] text-xs mb-4 uppercase">{machine.category}</span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9] text-[#1A1A1A]">{machine.name}</h1>
                    <p className="text-xl text-gray-500 font-light mb-12 leading-relaxed max-w-lg">{machine.description}</p>

                    <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-3xl overflow-hidden mb-12 shadow-sm">
                        {machine.specs.map((spec: any, i: number) => (
                            <div key={i} className="bg-white p-8 hover:bg-[#F5F5F5] transition-colors group">
                                <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">{spec.label}</span>
                                <span className="block font-mono text-xl text-[#1A1A1A] group-hover:text-[#00AEEF] transition-colors">{spec.value}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="https://wa.me/525512345678" className="flex-1 bg-[#1A1A1A] text-white px-8 py-6 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-[#00AEEF] transition-all duration-500 shadow-2xl active:scale-95">
                            <MessageCircle size={22} /> Cotizar WhatsApp
                        </a>
                        <button className="px-10 py-6 rounded-full border border-gray-200 font-bold hover:border-[#00AEEF] transition-all text-[#1A1A1A]">
                            Ficha Técnica PDF
                        </button>
                    </div>
                </div>
            </section>

            {/* PRODUCTOS RELACIONADOS */}
            <section className="bg-[#F5F5F5] py-24 px-6 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-2">Equipos Complementarios</h2>
                            <p className="text-gray-500 font-light">Potencia tu flujo de trabajo con tecnología belga.</p>
                        </div>
                        <Link href="/acabado-de-concreto" className="text-sm font-bold text-[#00AEEF] flex items-center gap-1 hover:underline">
                            Ver todo el catálogo <ChevronRight size={16} />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {relatedProducts.map((prod) => (
                            <Link key={prod.id} href={`/acabado-de-concreto/${prod.id}`} className="group bg-white rounded-[2rem] p-4 flex items-center gap-6 hover:shadow-xl transition-all border border-transparent hover:border-[#00AEEF]/20">
                                <div className="relative w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-50">
                                    <Image src={prod.img} alt={prod.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold text-[#00AEEF] tracking-widest uppercase">{prod.category}</span>
                                    <h4 className="text-xl font-bold text-[#1A1A1A] mt-1 group-hover:text-[#00AEEF] transition-colors">{prod.name}</h4>
                                    <p className="text-sm text-gray-400 mt-2 flex items-center gap-1">Ver equipo <ArrowLeft size={12} className="rotate-180" /></p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}