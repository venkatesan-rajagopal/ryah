# Overview

This is a real estate property showcase website for "Ryah Living by Alyakka" built with React (frontend) and Express (backend). The application displays interactive cards with different content types (images, videos, location map, brochure, factsheet, floorplans, downloads) in a grid layout. This is a static website with no database - all content is served as static files. Designed to be deployed on Replit.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type safety
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for data fetching and state management

**UI Component System**
- Shadcn UI component library (New York style variant)
- Radix UI primitives for accessible, unstyled components
- Tailwind CSS for styling with CSS variables for theming
- Custom design system with neutral base color and HSL color scheme

**Design Decisions**
- Component-based architecture with reusable UI primitives in `client/src/components/ui/`
- Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`)
- Mobile-first responsive design with custom breakpoint hook (`use-mobile`)
- Form handling via React Hook Form with Zod validation resolvers

## Backend Architecture

**Server Framework**
- Express.js with TypeScript
- ES Modules (type: "module") throughout the codebase
- Custom Vite middleware integration for development hot reloading
- Separation of concerns: routes, storage layer, and server setup

**Development vs Production**
- Development: Vite dev server middleware with HMR, error overlays, and Replit-specific plugins
- Production: Pre-built static assets served from `dist/public`
- Environment-aware configuration (NODE_ENV checks)

**Static Content**
- All content (images, videos, PDFs) served as static files from `client/public/`
- No database or persistent storage required
- PDF documents converted to PNG images for display
- Property tour video embedded in multiple locations

## External Dependencies

**UI & Styling**
- Radix UI component primitives (accordion, dialog, dropdown, tooltip, etc.)
- Tailwind CSS with PostCSS for utility-first styling
- Lucide React for consistent iconography
- Class Variance Authority (CVA) for component variant management
- Embla Carousel for carousel functionality

**Data & Forms**
- TanStack Query v5 for server state management
- React Hook Form for form handling
- Zod for schema validation
- Date-fns for date manipulation

**Backend**
- Express.js for HTTP server (serves static files)
- No database dependencies

**Development Tools**
- TypeScript for type safety across the stack
- Vite for fast development and optimized builds
- TSX for running TypeScript in Node.js
- ESBuild for production server bundling
- Replit-specific plugins (cartographer, dev banner, runtime error modal)

**Build & Deployment**
- Development: `npm run dev` (TSX executes server with Vite middleware)
- Build: `npm run build` (Vite builds client, ESBuild bundles server)
- Production: `npm start` (Node executes bundled server from `dist/`)