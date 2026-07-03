import type { Metadata } from 'next';
import { compactadoras } from '@/data/Productos';
import ProductDetailLayout from '@/app/components/ProductDetailLayout';

interface PageProps {
    params: { ref: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { ref } = await params;
    const product = compactadoras.find(p => p.ref === ref);
    if (!product) {
        return { title: 'Producto no encontrado | Beton Trowel México' };
    }
    return {
        title: `${product.name} | Beton Trowel México`,
        description: product.desc,
        openGraph: {
            title: `${product.name} | Beton Trowel México`,
            description: product.desc,
            images: [{ url: product.img }],
            locale: 'es_MX',
            type: 'website',
        },
    };
}

export default async function MachineDetailPage({ params }: PageProps) {
    const { ref } = await params;
    const product = compactadoras.find(p => p.ref === ref);

    return (
        <ProductDetailLayout
            product={product}
            allProducts={compactadoras}
            categorySlug="compactacion"
        />
    );
}
