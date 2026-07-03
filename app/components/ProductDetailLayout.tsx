import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Zap, ChevronRight } from "lucide-react";
import type { ProductDetail } from "@/types/products";

const siteUrl = "https://betontrowel.mx";

interface ProductDetailLayoutProps {
    product: ProductDetail | undefined;
    categorySlug: string;
    allProducts: ProductDetail[];
}

export default function ProductDetailLayout({ product, categorySlug, allProducts }: ProductDetailLayoutProps) {

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white font-sans px-6">
                <h1 className="text-9xl font-bold text-brand-grey mb-4">404</h1>
                <p className="text-xl text-gray-500 mb-8 font-light">Equipo no encontrado en el catálogo.</p>
                <Link href="/" className="bg-brand-black text-white px-8 py-4 rounded-full font-bold hover:bg-brand-blue transition-all">
                    Volver al Inicio
                </Link>
            </div>
        );
    }

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
            { "@type": "ListItem", position: 2, name: product.category, item: `${siteUrl}/${categorySlug}` },
            { "@type": "ListItem", position: 3, name: product.name },
        ],
    };

    const productJsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.desc,
        image: product.img.startsWith("http") ? product.img : `${siteUrl}${product.img}`,
        sku: product.ref,
        category: product.category,
        offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            url: `${siteUrl}/${categorySlug}/${encodeURIComponent(product.ref)}`,
            priceCurrency: "MXN",
            price: "0",
        },
    };

    return (
        <main className="min-h-screen bg-white text-foreground font-sans selection:bg-brand-blue selection:text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />

            {/* Navegación Sutil */}
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-between items-center">
                <Link href={`/${categorySlug}`} className="flex items-center gap-2 text-sm font-medium bg-brand-grey hover:bg-brand-blue hover:text-white px-5 py-3 rounded-full transition-all group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Volver al Catálogo
                </Link>
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-[0.3em]">{product.ref}</span>
            </nav>

            <section className="max-w-7xl grid-cols-1 lg:grid-cols-2 mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 sm:gap-12 lg:gap-16 pb-16 lg:pb-20">
                {/* Lado Izquierdo: Visual */}
                <div className="space-y-6">
                    <div className="relative aspect-square rounded-3xl overflow-hidden bg-brand-grey border border-gray-100">
                        <Image
                            src={product.img}
                            alt={product.name}
                            fill
                            sizes="(max-width: 780px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            className="object-cover"
                            priority
                        />
                    </div>
                    {product.usage && (
                        <div className="p-10 bg-brand-grey rounded-2xl border border-gray-100">
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue mb-4 flex items-center gap-2">
                                <Zap size={14} /> Aplicación Técnica
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-600 font-light">{product.usage}</p>
                        </div>
                    )}
                </div>

                {/* Lado Derecho: Info */}
                <div className="flex flex-col justify-center">
                    <span className="text-brand-blue font-bold tracking-[0.2em] text-xs mb-4 uppercase">{product.category}</span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9] text-brand-black">{product.name}</h1>
                    <p className="text-xl text-gray-500 font-light mb-12 leading-relaxed max-w-lg">{product.desc}</p>

                    {product.specs && product.specs.length > 0 && (
                        <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-3xl overflow-hidden mb-12 shadow-sm">
                            {product.specs.map((spec: { label: string; value: string }, i: number) => (
                                <div key={i} className="bg-white p-8 hover:bg-brand-grey transition-colors group">
                                    <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">{spec.label}</span>
                                    <span className="block font-mono text-xl text-brand-black group-hover:text-brand-blue transition-colors">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="https://wa.me/528110180615" className="flex-1 bg-brand-black text-white px-8 py-6 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-brand-blue transition-all duration-500 shadow-2xl active:scale-95">
                            <MessageCircle size={22} /> Cotizar WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* PRODUCTOS RELACIONADOS */}
            <section className="bg-brand-grey py-16 lg:py-20 px-6 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-2">Equipos Complementarios</h2>
                            <p className="text-gray-500 font-light">Potencie su flujo de trabajo con tecnología belga.</p>
                        </div>
                        <Link href={`/${categorySlug}`} className="text-sm font-bold text-brand-blue flex items-center gap-1 hover:underline">
                            Ver todo el catálogo <ChevronRight size={16} />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {allProducts.filter((prod) => prod.ref !== product.ref).map((prod) => (
                             <Link key={prod.ref} href={`/${categorySlug}/${encodeURIComponent(prod.ref)}`} className="group bg-white rounded-2xl p-4 flex items-center gap-6 hover:shadow-xl transition-all border border-transparent hover:border-brand-blue/20">
                                <div className="relative w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-50">
                                    <Image
                                        src={prod.img}
                                        alt={prod.name}
                                        fill
                                        sizes="(max-width: 780px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold text-brand-blue tracking-widest uppercase">{prod.category}</span>
                                    <h4 className="text-xl font-bold text-brand-black mt-1 group-hover:text-brand-blue transition-colors">{prod.name}</h4>
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
