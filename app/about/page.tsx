import { Metadata } from "next";

// Metadata for About page
export const metadata: Metadata = {
  title: "About Us - LaserHub",
  description: "Learn about LaserHub, your trusted provider of professional laser cutting and engraving equipment since 2010.",
  keywords: "about LaserHub, laser equipment company, professional laser solutions",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About LaserHub</h1>
          <p className="text-xl text-gray-600">
            Your trusted partner in laser technology since 2010
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At LaserHub, we're committed to providing the highest quality laser cutting and engraving equipment to businesses and hobbyists worldwide. We believe that advanced laser technology should be accessible and affordable, empowering creators to bring their visions to life.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">Quality</h3>
            <p className="text-gray-700">
              We only offer the finest laser equipment from trusted manufacturers. Every product is thoroughly tested before shipment.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">Support</h3>
            <p className="text-gray-700">
              Our expert team is available 24/7 to answer your questions and provide technical support for your equipment.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">Innovation</h3>
            <p className="text-gray-700">
              We stay at the forefront of laser technology, constantly updating our product lineup with the latest innovations.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us?</h2>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>14+ years of experience in the laser equipment industry</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>Wide selection of equipment for all budgets and needs</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>Competitive pricing with price match guarantee</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>Fast and reliable shipping to anywhere in the world</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>Comprehensive warranty and after-sales support</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>Free training and installation guides for all products</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
