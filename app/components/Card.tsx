import Image from "next/image";
import Link from "next/link";

interface CardProps {
    id: number;
    name: string;
    desc: string;
    img: string;
}

export default function Card({ id, name, desc, img }: CardProps) {
    return (
        <div key={id} className="group border border-brand-grey rounded-2xl overflow-hidden hover:shadow-2xl transition-all">
            <div className="aspect-video relative overflow-hidden">
                <Image
                    src={img}
                    alt={name}
                    fill
                    sizes="(max-width: 780px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-brand-black mb-2">{name}</h3>
                <p className="text-gray-600 mb-6">{desc}</p>
                <Link
                    key={id}
                    href={`/acabado-de-concreto/${id}`}
                    className="w-full p-3 border border-brand-blue text-brand-blue font-semibold rounded-lg hover:bg-brand-blue hover:text-white transition-colors"
                >
                    Ver información
                </Link>
            </div>
        </div>
    )
};