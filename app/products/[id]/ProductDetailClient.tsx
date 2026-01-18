"use client";

import { Product } from "@/app/lib/products";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import { ShoppingCart, ChevronLeft } from "lucide-react";

interface ProductDetailClientProps {
  product: Product | undefined;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <Link
            href="/products"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-600">
          <Link href="/products" className="text-blue-600 hover:text-blue-800">
            Products
          </Link>
          {" > "}
          <Link
            href={`/products?category=${product.category}`}
            className="text-blue-600 hover:text-blue-800"
          >
            {product.category}
          </Link>
          {" > "}
          <span>{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Image */}
          <div className="bg-white rounded-lg shadow-md p-8 flex items-center justify-center min-h-96">
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
              <svg
                className="w-24 h-24"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
              </svg>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
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
              <span className="ml-3 text-gray-600">
                {product.rating.toFixed(1)} ({Math.floor(Math.random() * 100) + 10}{" "}
                reviews)
              </span>
            </div>

            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                {product.category}
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                ${product.price.toFixed(2)}
              </div>
              <p className="text-gray-500 line-through">
                ${(product.price * 1.3).toFixed(2)}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-8 leading-relaxed">
              {product.description ||
                `Premium ${product.name} designed for professional use. High-quality construction and reliable performance for all your needs.`}
            </p>

            {/* Specifications */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Specifications
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Category:</strong> {product.category}
                </li>
                <li>
                  <strong>Rating:</strong> {product.rating.toFixed(1)} / 5.0
                </li>
                <li>
                  <strong>Stock:</strong> In Stock
                </li>
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition"
                >
                  −
                </button>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="px-4 py-2 w-16 text-center border-l border-r border-gray-300"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`flex-1 px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                  added
                    ? "bg-green-600 text-white"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                {added ? "Added to Cart!" : "Add to Cart"}
              </button>
            </div>

            {/* Share */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-gray-600 text-sm">Share this product:</p>
              <div className="flex gap-3 mt-3">
                <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition text-sm font-semibold">
                  Facebook
                </button>
                <button className="px-4 py-2 bg-sky-100 text-sky-600 rounded-lg hover:bg-sky-200 transition text-sm font-semibold">
                  Twitter
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition text-sm font-semibold">
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition h-full flex flex-col">
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-gray-300 transition">
                      <svg
                        className="w-16 h-16"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                      </svg>
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="font-semibold text-gray-900 text-sm mb-2 group-hover:text-blue-600 transition">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-xs text-gray-500 mb-3">
                        {relatedProduct.category}
                      </p>
                      <div className="mt-auto">
                        <div className="text-lg font-bold text-blue-600">
                          ${relatedProduct.price.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
