import { notFound } from "next/navigation"

export default async function reviews ({
    params,
}: {
    params: { productId: string; reviewsId: string }
}) {
    const { productId, reviewsId } = params;
    if (parseInt(productId) > 1000) {
        notFound();
    }
    return (
        <h1>Review for Product {productId} - Review {reviewsId}</h1>
    )
}