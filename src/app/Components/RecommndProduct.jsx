// app/Components/RecommendedProducts.jsx
import Link from "next/link";
import Image from "next/image";

async function fetchRecommendedProducts(currentProductId) {
  try {
    const res = await fetch("http://localhost:3000/products.json");
    const products = await res.json();
    // Filter out the current product and return 6-7 related products
    return products.filter((p) => p.id.toString() !== currentProductId).slice(0, 6);
  } catch (error) {
    console.error("Error fetching recommended products:", error);
    return [];
  }
}

export default async function RecommendedProducts({ currentProductId }) {
  const recommendedProducts = await fetchRecommendedProducts(currentProductId);

  if (recommendedProducts.length === 0) {
    return null; // Don't render anything if there are no recommended products
  }

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-4">Related Products</h2>
      <div className="flex justify-between overflow-x-auto gap-4 pb-4">
        {recommendedProducts.map((product) => (
          <Link
            key={product.id}
            href={`/shop/${product.url}`}
            className="flex-shrink-0 w-48 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full">
              <Image
                src={product.gallary[0]} // Use the first image from the gallery
                alt={product.name}
                
                className="object-cover rounded-md"
                width={300}
                height={300}
              />
            </div>
            <h3 className="text-sm font-semibold mt-2 truncate">{product.name}</h3>
            <p className="text-sm text-gray-600">৳{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}