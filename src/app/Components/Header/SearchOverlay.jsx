"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const SearchOverlay = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const searchRef = useRef(null);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/products.json");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Filter products in real-time
  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed left-0 right-0 w-[100%] bg-[#fffdeb] shadow-lg transition-all duration-300 z-50 ${
        isOpen ? "top-[68px]" : "-top-full"
      }`}
      ref={searchRef}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="relative">
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search products... eg: code"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-1/2 mx-auto px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
          </div>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute me-4 right-1/4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          )}
        </div>

        {searchTerm && (
          <div className="mt-5 max-h-[calc(100vh-200px)] overflow-y-auto pb-6">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/shop/${product.url}`}
                    onClick={() => {
                      onClose();
                      setSearchTerm("");
                    }}
                    className="group p-3 rounded-lg"
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="mt-2">
                      <h3 className="text-sm font-medium group-hover:text-green-600">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600">৳{product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 mt-4">
                No products found for "{searchTerm}"
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchOverlay;
