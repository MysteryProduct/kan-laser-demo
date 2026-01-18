# LaserHub - Professional Laser Equipment E-Commerce Platform

A modern, fully functional e-commerce website built with Next.js 16, React 19, TypeScript, and Tailwind CSS. This project is based on the design principles from the [Commerceplate template](https://github.com/zeon-studio/commerceplate).

## Features

### ✨ Key Features
- **Product Showcase**: Browse 8+ professional laser products with detailed information
- **Shopping Cart**: Add/remove items, adjust quantities with persistent local storage
- **Product Details**: Full product pages with descriptions, ratings, and related products
- **Responsive Design**: Mobile-first approach that works on all devices
- **Fast Performance**: Optimized with Next.js and Tailwind CSS
- **Category Organization**: Products organized by category (Engravers, Cutters, Industrial, etc.)
- **Dynamic Navigation**: Active navigation indicators and cart count badge
- **Customer Pages**: About, Contact, and Product pages

### 📄 Pages
- **Homepage** (`/`) - Hero section with featured products and value propositions
- **Products** (`/products`) - Full product catalog with filtering options
- **Product Detail** (`/products/[id]`) - Individual product pages with add-to-cart functionality
- **Shopping Cart** (`/cart`) - Cart management with order summary and checkout
- **About** (`/about`) - Company information and values
- **Contact** (`/contact`) - Contact form and business information

## Tech Stack

- **Framework**: Next.js 16.1.2
- **React**: 19.2.3
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + PostCSS
- **Build Tool**: Turbopack
- **State Management**: React Context API
- **Storage**: Browser LocalStorage for cart persistence

## Project Structure

```
kan-laser-demo/
├── app/
│   ├── components/           # Reusable components
│   │   ├── Header.tsx        # Navigation header with cart
│   │   ├── Footer.tsx        # Footer with links
│   │   └── ProductCard.tsx   # Product card component
│   ├── context/              # React contexts
│   │   └── CartContext.tsx   # Shopping cart management
│   ├── lib/                  # Utilities and constants
│   │   └── products.ts       # Product data and types
│   ├── products/             # Product pages
│   │   ├── page.tsx          # Products listing
│   │   └── [id]/
│   │       └── page.tsx      # Product detail page
│   ├── cart/                 # Cart pages
│   │   └── page.tsx          # Shopping cart page
│   ├── about/                # About page
│   │   └── page.tsx
│   ├── contact/              # Contact page
│   │   └── page.tsx
│   ├── layout.tsx            # Root layout with providers
│   ├── page.tsx              # Homepage
│   └── globals.css           # Global styles
├── public/                   # Static assets
├── package.json              # Dependencies
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
└── tailwind.config.js        # Tailwind configuration
```

## Product Data

The application includes 8 sample laser products:
1. **Laser Engraver Pro** - $2,999
2. **Compact Laser Cutter** - $1,299
3. **Industrial Laser System** - $5,999
4. **Desktop Laser Marker** - $899
5. **3D Laser Engraver** - $3,499
6. **Fiber Laser System** - $7,999
7. **Portable Laser Cutter** - $649
8. **CO2 Laser Tube (Accessory)** - $199

Each product includes:
- Product name and description
- Price
- Rating (out of 5 stars)
- Review count
- Category
- Dynamic image placeholder

## Getting Started

### Prerequisites
- Node.js v20.10+
- npm v10.2+

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application will be available at `http://localhost:3000`

## Features in Detail

### Shopping Cart
- **Context API**: Global state management for cart operations
- **LocalStorage**: Persistent cart data across sessions
- **Quantity Management**: Increment/decrement product quantities
- **Cart Persistence**: Cart survives page refreshes and browser restarts

### Product Pages
- **Grid Layout**: Responsive product grid (1, 2, or 4 columns based on screen size)
- **Quick Add**: Add products to cart directly from product cards
- **Detailed View**: Full product pages with related products section
- **Star Rating**: Visual star ratings with review counts

### Navigation
- **Dynamic Active States**: Navigation shows current page
- **Cart Badge**: Displays total items in cart
- **Mobile Responsive**: Hamburger menu support ready (can be extended)

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Dark Mode Ready**: Structure supports dark mode (can be enabled)
- **Responsive**: Mobile-first approach for all screen sizes
- **Custom Colors**: Blue color scheme for professional appearance

## Customization

### Changing Products
Edit `app/lib/products.ts` to modify or add products:

```typescript
export const products: Product[] = [
  {
    id: "1",
    name: "Your Product",
    price: 1999,
    image: "/images/product-1.jpg",
    description: "Product description",
    category: "Category Name",
    rating: 4.8,
    reviews: 45,
  },
  // ... more products
];
```

### Customizing Colors
Edit colors in component files or configure Tailwind's theme:

```javascript
// tailwind.config.js
theme: {
  colors: {
    primary: '#2563eb', // Change blue color
    // ... more customizations
  }
}
```

### Adding Product Images
- Place images in `public/images/` directory
- Update the `image` path in product data
- Images are currently shown as placeholders

## Performance Optimizations

- **Static Generation**: Homepage and product pages pre-rendered at build time
- **Code Splitting**: Next.js automatically splits code for faster initial loads
- **Optimized CSS**: Tailwind CSS purges unused styles in production
- **Image Optimization**: Ready for Next.js Image component integration

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- [ ] Shopify integration (like Commerceplate)
- [ ] Real product images
- [ ] Search functionality
- [ ] Filters by price range and category
- [ ] User accounts and order history
- [ ] Payment gateway integration (Stripe, PayPal)
- [ ] Product reviews and ratings system
- [ ] Wishlist functionality
- [ ] Email notifications
- [ ] Admin dashboard

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT License - Feel free to use this project for commercial or personal use.

## Credits

- Design inspiration: [Commerceplate by Zeon Studio](https://github.com/zeon-studio/commerceplate)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

## Support

For questions or issues, please create an issue in the repository or contact us through the contact form on the website.

---

**Last Updated**: January 16, 2026
