"use client";

import Link from "next/link";
import { Product } from "@/app/lib/products";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Calculate original price (30% more than current price)
  const originalPrice = Math.round(product.price * 1.3);

  return (
    <Link href={`/products/${product.id}`}>
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden h-full cursor-pointer group border border-gray-100"
      >
        {/* Image Container */}
        <div className="w-full h-40 sm:h-48 lg:h-64 bg-gray-100 relative overflow-hidden flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">
            <svg
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4">
          {/* Title */}
          <h3 className="font-semibold text-gray-800 line-clamp-2 text-xs sm:text-sm">
            {product.name}
          </h3>

          {/* Price Section */}
          <div className="mt-2 sm:mt-3 flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <span className="text-base sm:text-lg font-bold text-gray-900">
              ฿ {product.price.toLocaleString()}.0 BDT
            </span>
            <span className="text-xs sm:text-sm text-gray-400 line-through">
              ฿ {originalPrice.toLocaleString()}.0 BDT
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center mt-2 sm:mt-3 gap-1 sm:gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${
                    i < Math.round(product.rating)
                      ? "fill-current"
                      : "fill-gray-300"
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500">
              ({product.reviews})
            </span>
          </div>

          {/* Description */}
          <p className="text-xs text-gray-600 mt-2 line-clamp-2">
            {product.description}
          </p>

          {/* Category Badge */}
          <div className="mt-2 sm:mt-3">
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded inline-block">
              {product.category}
            </span>
          </div>

          {/* Add to Cart Button */}
          <div 
            className={`mt-3 sm:mt-4 transition-all duration-300 ${isHovered ? "opacity-100 max-h-16" : "opacity-0 max-h-0"}`} 
            onClick={(e) => e.preventDefault()}
          >
            <button
              onClick={handleAddToCart}
              className={`w-full py-2 rounded transition text-xs sm:text-sm font-medium ${
                added
                  ? "bg-green-500 text-white"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              {added ? "✓ Added to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
