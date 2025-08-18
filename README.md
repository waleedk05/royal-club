# Royal Club - Luxury Automotive Website

A premium, modern website for an exclusive automotive club featuring luxury vehicle showcases and membership services.

## Features

- **Hero Section**: Stunning full-screen hero with interactive TextPressure component
- **Gallery**: Responsive masonry layout with GSAP animations
- **About Section**: Professional company information with statistics
- **Contact Form**: Functional contact form with validation
- **Floating Navigation**: Modern pill-shaped navbar with smooth scrolling
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15.4.6
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP 3.13.0
- **UI Components**: Custom React components
- **Typography**: Custom TextPressure component with variable fonts

## Components

### Core Components

- `HeroSection.jsx` - Main landing section with interactive text
- `Gallery.jsx` - Masonry grid gallery with hover effects
- `About.jsx` - Company information and features
- `Contact.jsx` - Contact form and business information
- `NavBar.jsx` - Floating navigation with smooth scrolling
- `Footer.jsx` - Site footer with links and social media

### UI Components

- `Masonry.js` - Advanced masonry layout with GSAP animations
- `TextPressure.jsx` - Interactive typography component
- `PillNav.jsx` - Navigation component

## Design Features

- **Color Scheme**: Dark theme with gold accents
- **Typography**: Modern, luxury-focused fonts
- **Animations**: Smooth GSAP-powered transitions
- **Glass Morphism**: Modern frosted glass effects
- **Responsive**: Works on all device sizes

## Getting Started

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

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   └── home/
│       └── page.jsx
├── components/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Gallery.jsx
│   ├── HeroSection.jsx
│   └── NavBar.jsx
└── ui/
    ├── Masonry.js
    ├── PillNav.jsx
    └── TextPressure.jsx
```

## Customization

### Colors

The gold color palette can be customized in `tailwind.config.js`:

```javascript
colors: {
  gold: {
    400: '#facc15',
    500: '#eab308',
    // ... more shades
  }
}
```

### Animations

GSAP animations can be modified in the respective components for different effects.

### Content

Update the vehicle images in `/public/cars/` and modify the gallery items array in `Gallery.jsx`.

## License

This project is for demonstration purposes. Please ensure you have proper licensing for any fonts, images, or other assets used in production.
