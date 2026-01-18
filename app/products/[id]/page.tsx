import { products } from "@/app/lib/products";
import { Metadata } from "next";
import ProductDetailClient from "./ProductDetailClient";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) {
    return {
      title: "Product Not Found - LaserHub",
      description: "The product you are looking for does not exist.",
    };
  }

  return {
    title: `${product.name} - LaserHub`,
    description: `Buy ${product.name} from LaserHub. Professional ${product.category} equipment at competitive prices. Rating: ${product.rating}/5.`,
    keywords: `${product.name}, ${product.category}, laser equipment, buy online`,
    openGraph: {
      title: product.name,
      description: `High-quality ${product.name} for professional use`,
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}