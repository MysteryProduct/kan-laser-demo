"use client";

import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import { Trash2, ArrowLeft } from "lucide-react";

export default function CartPageClient() {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } =
    useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout
    setTimeout(() => {
      alert("Thank you for your purchase!");
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <svg
              className="w-16 h-16 mx-auto text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Your cart is empty
            </h1>
            <p className="text-gray-600 mb-8">
              Add some laser equipment to get started
            </p>
            <Link
              href="/products"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Shopping Cart</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  {cart.length} item{cart.length !== 1 ? "s" : ""} in your cart
                </h2>
              </div>

              <div className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 flex gap-6 hover:bg-gray-50 transition"
                  >
                    {/* Product Image */}
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                      </svg>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {item.category}
                      </p>

                      {/* Quantity */}
                      <div className="flex items-center gap-2 mb-4">
                        <label
                          htmlFor={`quantity-${item.id}`}
                          className="text-sm text-gray-600"
                        >
                          Qty:
                        </label>
                        <input
                          type="number"
                          id={`quantity-${item.id}`}
                          min="1"
                          max="100"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(
                              item.id,
                              parseInt(e.target.value) || 1
                            )
                          }
                          className="w-16 px-2 py-1 border border-gray-300 rounded-lg text-center"
                        />
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="inline-flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                        >
                          <Trash2 className="w-4 h-4" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${(cartTotal * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold text-gray-900">
                  Total
                </span>
                <span className="text-2xl font-bold text-blue-600">
                  ${(cartTotal * 1.1).toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
              </button>

              <button
                onClick={() => clearCart()}
                className="w-full mt-3 px-6 py-3 border border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-50 transition"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
