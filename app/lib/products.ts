export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Laser Engraver Pro",
    price: 2999,
    image: "/images/product-1.jpg",
    description: "Professional laser engraver with 40W power for cutting and engraving various materials.",
    category: "Engravers",
    rating: 4.8,
    reviews: 45,
  },
  {
    id: "2",
    name: "Compact Laser Cutter",
    price: 1299,
    image: "/images/product-2.jpg",
    description: "Compact laser cutter perfect for small businesses and hobbyists. 20W CO2 laser.",
    category: "Cutters",
    rating: 4.6,
    reviews: 32,
  },
  {
    id: "3",
    name: "Industrial Laser System",
    price: 5999,
    image: "/images/product-3.jpg",
    description: "High-power industrial laser system with 80W capability for large-scale production.",
    category: "Industrial",
    rating: 4.9,
    reviews: 28,
  },
  {
    id: "4",
    name: "Desktop Laser Marker",
    price: 899,
    image: "/images/product-4.jpg",
    description: "Portable desktop laser marker for precise marking and engraving on metal and wood.",
    category: "Markers",
    rating: 4.5,
    reviews: 19,
  },
  {
    id: "5",
    name: "3D Laser Engraver",
    price: 3499,
    image: "/images/product-5.jpg",
    description: "Advanced 3D laser engraver with auto-focus for curved surface engraving.",
    category: "Engravers",
    rating: 4.7,
    reviews: 37,
  },
  {
    id: "6",
    name: "Fiber Laser System",
    price: 7999,
    image: "/images/product-6.jpg",
    description: "Professional fiber laser system for metal marking and engraving applications.",
    category: "Industrial",
    rating: 4.9,
    reviews: 22,
  },
  {
    id: "7",
    name: "Portable Laser Cutter",
    price: 649,
    image: "/images/product-7.jpg",
    description: "Lightweight portable laser cutter ideal for mobile work and small projects.",
    category: "Cutters",
    rating: 4.4,
    reviews: 26,
  },
  {
    id: "8",
    name: "CO2 Laser Tube",
    price: 199,
    image: "/images/product-8.jpg",
    description: "Replacement CO2 laser tube with 40W power for engravers and cutters.",
    category: "Accessories",
    rating: 4.8,
    reviews: 54,
  },
];
