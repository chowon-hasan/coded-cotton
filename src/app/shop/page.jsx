// app/shop/page.jsx
import Link from "next/link";
import Image from "next/image";

async function fetchProducts() {
  try {
    const res = await fetch("https://codedcotton.vercel.app/products.json");
    const products = await res.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
// app/shop/page.jsx
export const metadata = {
  title: "Shop - Our Products",
  description: "Explore our wide range of products at the best prices.",
};

export default async function ShopPage() {
  const products = await fetchProducts();

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-5xl font-bold text-center mb-8">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div key={product.id} className="relative rounded-lg ">
            <Link href={`/shop/${product.url}`}>
              <div>
                <Image
                  width={400}
                  height={400}
                  src={product.image}
                  alt={product.name}
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 bg-white/80 rounded w-full text-center py-2.5">
                <p className="text-lg font-bold text-gray-800">
                  ৳{product.price}
                </p>
              </div>
            </Link>
          </div>
        ))}
        <h1>Hello</h1>
      </div>
    </div>
  );
}
