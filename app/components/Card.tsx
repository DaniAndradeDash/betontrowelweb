import Image from "next/image";
import Link from "next/link";

interface CardProps {
    productRef: string;
    name: string;
    desc: string;
    img: string;
    currentSlug: string;
    categoryName?: string;
}

export default function Card({ productRef, name, desc, img, currentSlug, categoryName }: CardProps) {
    
    return (
        <div className="group border border-brand-grey rounded-2xl overflow-hidden hover:shadow-2xl transition-all">
            <div className="aspect-video relative overflow-hidden">
                {categoryName && (
                    <span className="absolute top-3 left-3 z-10 bg-brand-blue/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                        {categoryName}
                    </span>
                )}
                <Image
                    src={img}
                    alt={name}
                    fill
                    sizes="(max-width: 780px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-brand-black mb-2">{name}</h3>
                <p className="text-gray-600 mb-6">{desc}</p>
                <Link
                    href={`/${currentSlug}/${encodeURIComponent(productRef)}`}
                    className="w-full p-3 border border-brand-blue text-brand-blue font-semibold rounded-lg hover:bg-brand-blue hover:text-white transition-colors"
                >
                    Ver información
                </Link>
            </div>
        </div>
    )
};