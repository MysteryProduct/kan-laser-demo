import { Metadata } from "next";
import CartPageClient from "./CartPageClient";

// Metadata for Cart page
export const metadata: Metadata = {
  title: "Shopping Cart - LaserHub",
  description: "Review and manage your shopping cart at LaserHub. Proceed to checkout for laser equipment purchases.",
  keywords: "shopping cart, laser equipment cart, checkout",
};

export default function CartPage() {
  return <CartPageClient />;
}