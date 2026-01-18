import ProductCard from "@/app/components/ProductCard";
import { products } from "@/app/lib/products";
import { Metadata } from "next";
import ProductsPageClient from "./ProductsPageClient";

// Metadata for Products page
export const metadata: Metadata = {
  title: "Products - LaserHub",
  description: "Browse our professional laser cutting and engraving equipment. Find the perfect laser system for your business needs.",
  keywords: "laser products, laser cutters, laser engravers, professional equipment, industrial lasers",
};

export default function ProductsPage() {
  return <ProductsPageClient products={products} />;
}
