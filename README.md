# Maison Noir — Premium Artisan Coffee

A sophisticated e-commerce platform for luxury coffee, featuring an immersive shopping experience with 3D interactions, smooth animations, and a modern dark-themed design.

## ✨ Features

- **Premium Coffee Collection** — Browse and purchase artisan coffee selections
- **Interactive 3D Experience** — Powered by React Three Fiber for immersive product visualization
- **Smooth Animations** — GSAP and Framer Motion for fluid user interactions
- **Shopping Cart System** — Full-featured cart with drawer interface
- **User Authentication** — Secure login and registration system
- **Rewards Program** — Customer loyalty and rewards tracking
- **Store Locator** — Find nearby Maison Noir locations
- **Sustainability Hub** — Learn about our ethical sourcing practices
- **Blog & Careers** — Content management and recruitment sections
- **Responsive Design** — Optimized for all devices

## 🛠️ Tech Stack

### Frontend
- **React 19** — Modern React with latest features
- **Vite** — Fast build tool and development server
- **React Router DOM** — Client-side routing
- **Three.js & React Three Fiber** — 3D graphics and animations
- **GSAP & React GSAP** — Professional animation library
- **Framer Motion** — Declarative animations

### Styling
- **CSS3** — Modern CSS with custom properties
- **Google Fonts** — Playfair Display, Inter, and Cormorant Garamond

### Development Tools
- **ESLint** — Code linting and formatting
- **Vite Plugin React** — React support for Vite

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd maison-noir-coffee

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🚀 Getting Started

1. **Install Dependencies**: Run `npm install` to install all required packages
2. **Development**: Start the development server with `npm run dev`
3. **Build**: Create a production build with `npm run build`
4. **Deploy**: Upload the `dist` folder to your hosting provider

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar/         # Navigation component
│   ├── Footer/         # Footer component
│   └── CartDrawer/     # Shopping cart interface
├── pages/              # Page components
│   ├── Home/           # Landing page
│   ├── Menu/           # Coffee menu
│   ├── Rewards/        # Loyalty program
│   ├── About/          # About us
│   ├── Sustainability/ # Sustainability initiatives
│   ├── Stores/         # Store locations
│   ├── GiftCards/      # Gift card shop
│   ├── Blog/           # Blog section
│   ├── Careers/        # Job opportunities
│   ├── Contact/        # Contact page
│   ├── Checkout/       # Checkout process
│   └── Auth/           # Authentication
├── context/            # React context providers
├── hooks/              # Custom React hooks
├── data/               # Static data and configurations
├── assets/             # Images, icons, and other assets
└── styles/             # Global styles and CSS
```

## 🎨 Design System

- **Color Palette**: Dark, luxurious theme with gold accents
- **Typography**: 
  - Playfair Display (headings)
  - Inter (body text)
  - Cormorant Garamond (elegant accents)
- **Animations**: Smooth transitions and micro-interactions
- **Layout**: Responsive grid system with mobile-first approach

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_URL=your-api-endpoint
VITE_STRIPE_PUBLIC_KEY=your-stripe-key
```

### Build Configuration
The project uses Vite for optimal performance:
- Fast HMR (Hot Module Replacement)
- Optimized bundle sizes
- Modern JavaScript features

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is proprietary and confidential.

## 🤝 Contributing

Please read our contributing guidelines before submitting pull requests.

---

**Maison Noir** — Experience luxury in every sip.
