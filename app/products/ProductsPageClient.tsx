"use client";

import { useState, useEffect } from "react";
import { Grid3x3, List, Menu, ChevronDown } from "lucide-react";
import ProductCard from "@/app/components/ProductCard";
import type { Product } from "@/app/lib/products";

export default function ProductsPageClient({ products }: { products: Product[] }) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("relevance");
  const [priceRange, setPriceRange] = useState([0, 8000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Listen to sidebar toggle event from header
  useEffect(() => {
    const handleToggleSidebar = () => {
      setSidebarOpen((prev) => !prev);
    };
    window.addEventListener("toggleProductsSidebar", handleToggleSidebar);
    return () => {
      window.removeEventListener("toggleProductsSidebar", handleToggleSidebar);
    };
  }, []);

  const categories = [...new Set(products.map((p) => p.category))];
  const brands = ["Home Decor", "Nextcart Nexus", "Urban Lights Emporium", "Company 123", "Artisan Globe Lamps", "Ecoglow Designs"];

  // Filter products
  let filteredProducts = products.filter((product) => {
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return priceMatch && categoryMatch;
  });

  // Sort products
  if (sortBy === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Main Content */}
        <div className="w-full">
          {/* Top Bar - Views and Sort */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base flex-wrap">
              <span className="text-gray-600">Views</span>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${
                  viewMode === "grid" ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                <Grid3x3 size={18} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded ${
                  viewMode === "list" ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                <List size={18} />
              </button>

              {/* Filters Toggle Button */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="ml-2 p-2 text-gray-700 hover:bg-gray-200 rounded flex items-center gap-1"
              >
                <Menu size={18} />
                <span className="text-xs">Filters</span>
                <ChevronDown size={16} className={`transform transition-transform ${sidebarOpen ? "rotate-180" : ""}`} />
              </button>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
              <span className="text-gray-600">Sort By</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-2 sm:px-3 py-2 border border-gray-300 rounded text-gray-700 bg-white text-sm"
              >
                <option value="relevance">Relevance</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Sidebar Filters - Dropdown Style */}
          <div
            className={`bg-gray-50 border border-gray-200 rounded-lg mb-6 transition-all duration-300 overflow-hidden ${
              sidebarOpen ? "max-h-[2000px] opacity-100 p-6" : "max-h-0 opacity-0 p-0"
            }`}
          >
            {/* Price Range Filter */}
            <div className="mb-8">
              <h3 className="text-base font-semibold text-gray-900 mb-4">Select Price Range</h3>
              <input
                type="range"
                min="0"
                max="8000"
                step="100"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>฿{priceRange[0].toLocaleString()}</span>
                <span>฿{priceRange[1].toLocaleString()}</span>
              </div>
            </div>

            {/* Product Categories */}
            <div className="mb-8">
              <h3 className="text-base font-semibold text-gray-900 mb-4">Product Categories</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {categories.map((category) => {
                  const count = products.filter((p) => p.category === category).length;
                  return (
                    <label key={category} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="w-4 h-4"
                      />
                      <span className="ml-2 text-gray-700 text-sm">{category} ({count})</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Brands */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-4">Brands</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {brands.map((brand) => (
                  <label key={brand} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="w-4 h-4"
                    />
                    <span className="ml-2 text-gray-700 text-sm">{brand}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                : "space-y-4"
            }
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
