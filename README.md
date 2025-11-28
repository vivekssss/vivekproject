# TenTwenty Farms - Next.js Application

A modern, pixel-perfect Next.js application for TenTwenty Farms, built from scratch following best practices.

## Features

- ✅ Built with Next.js 14 (App Router)
- ✅ TypeScript for type safety
- ✅ TailwindCSS for styling
- ✅ Responsive design (Desktop & Mobile)
- ✅ Smooth animations and transitions
- ✅ SEO optimized
- ✅ Performance optimized with Next.js Image component
- ✅ Swiper.js for interactive sliders
- ✅ Modular, reusable components

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/ui
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Header with navigation
│   ├── MobileMenu.tsx  # Mobile navigation menu
│   ├── HomeSlider.tsx  # Homepage hero slider
│   └── QualityProducts.tsx # Products section
├── public/
│   └── assets/         # Images and static assets
└── package.json
```

## Components

### Header
Responsive header with desktop navigation and mobile menu toggle.

### HomeSlider
Full-screen hero slider with:
- Fade transition effect
- Thumbnail navigation
- Progress indicator
- Auto-play functionality

### QualityProducts
Horizontal scrolling product showcase with drag-to-scroll functionality.

## Build for Production

```bash
npm run build
npm start
```

## Performance

The application is optimized for:
- Fast page loads
- Image optimization with Next.js Image component
- Code splitting
- SEO best practices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for TenTwenty Farms.


