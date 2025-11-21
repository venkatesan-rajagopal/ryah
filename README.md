# Ryah Living by Alyakka - Property Showcase Website

A modern real estate property showcase website built with React and TypeScript, featuring interactive cards for viewing property images, videos, documents, and downloadable content.

## 🚀 Features

- **Interactive Card Interface**: Grid-based layout with 7 content cards
- **Image Gallery**: Property photos with full-screen viewer
- **Video Gallery**: Property tour video with autoplay
- **Location Map**: Interactive property location display
- **Document Viewers**: 
  - Brochure (42 pages)
  - Factsheet (8 pages)
  - Floorplans
- **Downloads Page**: Downloadable property documents and images
- **Fully Static**: No database required - all content served as static files

## 🎨 Design

- Brand Colors: `#F6E3C5` (pale ecru), `#9b705f` (cinnamon dust)
- Responsive design with 1440px minimum width
- Based on Figma design specifications

## 🛠 Tech Stack

### Frontend
- **React 18.3** - UI library
- **TypeScript 5.6** - Type safety
- **Vite 5.4** - Build tool and dev server
- **Tailwind CSS 3.4** - Styling
- **Wouter 3.3** - Lightweight routing
- **Shadcn/ui** - UI components (Radix UI based)
- **Lucide React** - Icons
- **React PDF** - PDF document rendering

### Backend
- **Express 4.21** - Web server
- **Node.js** - Runtime environment

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ryah-living
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Application

### Development Mode
```bash
npm run dev
```
The application will be available at `http://localhost:5000`

### Production Build
```bash
npm run build
npm start
```

### Type Checking
```bash
npm run check
```

## 📁 Project Structure

```
├── client/                 # Frontend application
│   ├── src/
│   │   ├── pages/         # Page components (Desktop, ImageGallery, etc.)
│   │   ├── components/    # Reusable UI components
│   │   └── lib/          # Utilities and configurations
│   └── public/           # Static assets
│       ├── figmaAssets/  # Design assets
│       ├── videos/       # Property videos
│       ├── brochures/    # Brochure images
│       ├── factsheets/   # Factsheet images
│       └── floorplans/   # Floorplan images
├── server/               # Backend server
│   ├── index.ts         # Server entry point
│   └── routes.ts        # API routes (currently unused)
└── shared/              # Shared types and schemas

```

## 🎯 Pages & Routes

- `/` - Homepage with interactive card grid
- `/images` - Image gallery viewer
- `/videos` - Video gallery with property tour
- `/location-map` - Property location map
- `/brochure` - Brochure viewer (42 pages)
- `/factsheet` - Factsheet viewer (8 pages)
- `/floorplans` - Floorplans viewer
- `/downloads` - Download center for all documents

## 🔧 Configuration

The project uses:
- **Vite** for development and building
- **TypeScript** for type checking
- **Tailwind CSS** for styling
- **ESBuild** for server bundling

Path aliases configured:
- `@/` → `client/src/`
- `@shared/` → `shared/`
- `@assets/` → `attached_assets/`

## 📝 Notes

- This is a **static website** with no database or backend API
- All content is served from the `client/public/` directory
- PDF documents are pre-converted to PNG images for optimal display
- The Express server only serves static files

## 🚀 Deployment

This application can be deployed to any static hosting service or Node.js hosting platform:
- Vercel
- Netlify
- Railway
- Render
- Any VPS with Node.js support

## 📄 License

MIT

## 🤝 Contributing

This is a private project for Ryah Living property showcase.

---

Built with ❤️ for Ryah Living by Alyakka
