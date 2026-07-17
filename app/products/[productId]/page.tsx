import { Metadata } from 'next';

type Props = {
    params: Promise<{ productId: string }>;
}

export const generatedMetadata = async ({ params }: Props): Promise<Metadata> => {
    const id = (await params).productId;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Product: ${id}`);
        }, 1000);
    });
    return {
        title: `Product: ${title}`,
    };
};

export default async function productDetail ({params}: Props) {
    const productId = (await params) .productId;
    return (
        <main>
            <h1>Product Detail Page!</h1>  
        </main>
    )
}