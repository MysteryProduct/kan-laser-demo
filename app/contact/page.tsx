import { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

// Metadata for Contact page
export const metadata: Metadata = {
  title: "Contact Us - LaserHub",
  description: "Get in touch with LaserHub. Contact our team for inquiries about laser equipment, support, or partnerships.",
  keywords: "contact LaserHub, customer support, laser equipment inquiries",
};

export default function ContactPage() {
  return <ContactPageClient />;
}