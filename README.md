# Rêveoulé Skincare & Beauty Inc.

Ultra-luxury skincare website built with React, Vite, and Framer Motion.

## Overview

Rêveoulé is a premium skincare brand website featuring:
- **Luxury Design System**: Strict adherence to brand guidelines with deep crimson (#59090C) and white (#FFFFFF) primary colors
- **Premium Typography**: Playfair Display serif headings paired with Inter sans-serif body text
- **AI Skin Advisor**: Interactive personalized skincare consultation
- **Responsive Design**: Mobile-first approach with elegant transitions
- **Production Ready**: Optimized build with lazy loading and performance optimizations

## Color Palette

- `#FFFFFF` - Primary background, high-end minimal sections
- `#E6E6E6` - Secondary background, separators, neutral surfaces
- `#E5DED6` - Warm beige accent, soft backgrounds, subtle borders
- `#59090C` - Primary brand color (deep luxury crimson)
- `#370506` - Dark ruby for gradients and hover effects
- `#1A0202` - Near-black burgundy for text and footer

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Next-generation frontend tooling
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations and transitions
- **CSS Variables** - Design system implementation

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view the site.

### Production Build

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/          # Navigation, Footer
│   ├── ui/              # Button, Card components
│   └── sections/        # Hero, Products, Testimonials, etc.
├── pages/               # Route pages (Home, About, Products, etc.)
├── styles/              # Global styles and theme configuration
└── App.jsx              # Main app with routing
```

## Design Principles

1. **Extensive White Space** - Luxury requires breathing room
2. **Minimal Corner Rounding** - 0-4px max radius for sophisticated look
3. **Subtle Shadows** - Feathered, low-contrast depth
4. **Smooth Animations** - Slow, ease-based transitions (no bouncing)
5. **High-Quality Typography** - Serif headings, sans-serif body
6. **Premium Photography** - Editorial lighting with warm undertones

## Features

- **Hero Section**: Full-screen editorial hero with luxury aesthetics
- **Featured Products**: Product showcase with filtering
- **AI Skin Advisor**: Interactive personalized consultation
- **Testimonials**: Medical-grade credibility presentation
- **Category Grid**: Luxury product category navigation
- **Responsive Navigation**: Mobile menu with smooth animations
- **Contact Form**: Professional contact interface

## License

Copyright © 2025 Rêveoulé Skincare & Beauty Inc. All rights reserved.
