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

export const metadata = {
  title: "Shop Premium Products | Coded Cotton",
  description:
    "Discover our exclusive collection of high-quality products. Find the best deals on fashion, accessories, and more at Coded Cotton.",
  keywords:
    "online shop, fashion, accessories, Bangladesh shopping, premium products",
  openGraph: {
    title: "Shop Premium Products | Coded Cotton",
    description: "Discover our exclusive collection of high-quality products",
    images: ["/og-shop.jpg"],
  },
};

export default async function ShopPage() {
  const products = await fetchProducts();

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h1 className="text-5xl font-bold text-center mb-8">
        Our Premium Collection
      </h1>

      <div className="sr-only">
        <h2>Explore Our Product Categories</h2>
        <h3>Featured Products and New Arrivals</h3>
      </div>

      <div className="text-center mb-8">
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our handpicked collection of premium products. Each item is
          carefully selected to ensure the highest quality and style for our
          valued customers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {products?.map((product) => (
          <div
            key={product.id}
            className="relative rounded-lg group overflow-hidden"
          >
            <Link href={`/shop/${product.url}`}>
              <div className="relative">
                <Image
                  width={700}
                  height={600}
                  src={product.image}
                  alt={product.name}
                  className="w-full object-cover mx-auto hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5 bg-opacity-50">
                  <span className="text-white text-lg font-semibold">
                    See Details
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">
          Why Choose Our Products?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium mb-2">Premium Quality</h3>
            <p>Guaranteed high-quality materials and craftsmanship</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Fast Delivery</h3>
            <p>Quick and reliable shipping across Bangladesh</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Customer Satisfaction</h3>
            <p>100% satisfaction guaranteed with our products</p>
          </div>
        </div>
      </div>
    </div>
  );
}
