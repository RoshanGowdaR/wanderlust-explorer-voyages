
# Wanderlust Explorer

A premium expedition travel platform showcasing exotic destinations and adventure expeditions around the world.

## 🌍 About

Wanderlust Explorer is an expedition travel platform that connects adventure seekers with curated voyage experiences to remote and extraordinary destinations. From Antarctic expeditions to tropical island explorations, we offer comprehensive travel planning for the world's most incredible places.

## ✨ Features

### 🎯 Core Features
- **Destination Discovery**: Browse exotic destinations with detailed information and stunning photography
- **Expedition Booking**: Complete booking system for expedition voyages with availability tracking
- **Ship Showcase**: Detailed information about expedition vessels and their capabilities
- **User Authentication**: Secure account system with Google OAuth integration
- **Responsive Design**: Optimized experience across all devices

### 🎨 User Experience
- **Interactive Galleries**: High-resolution image galleries for destinations and ships
- **Advanced Search**: Filter destinations by preferences and difficulty
- **Wishlist System**: Save favorite destinations and expeditions
- **Social Sharing**: Share destinations and expeditions with others
- **Newsletter**: Stay updated with latest expedition offerings

### 🏗️ Technical Features
- **Modern Architecture**: Built with React 18, TypeScript, and Tailwind CSS
- **Real-time Updates**: Dynamic content and booking management
- **Performance Optimized**: Fast loading and smooth interactions
- **SEO Optimized**: Search engine friendly structure
- **Accessible Design**: WCAG compliant interface

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd wanderlust-explorer
```

2. Install dependencies:
```bash
npm install
```

3. Environment setup:
```bash
# Create .env file with your configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start development server:
```bash
npm run dev
```

5. Open browser to `http://localhost:5173`

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library
- **Icons**: Lucide React
- **Authentication**: Supabase Auth with Google OAuth
- **Database**: Supabase (PostgreSQL)
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: React Query for server state
- **Charts**: Recharts for data visualization

## 📱 Application Features

### Destinations
- Comprehensive destination catalog with detailed descriptions
- High-quality image galleries and photography
- Difficulty ratings and expedition requirements
- Interactive destination modals with comprehensive information

### Expeditions
- Curated expedition packages and itineraries
- Detailed pricing and availability information
- Advanced filtering and search capabilities
- Real-time booking system

### Ships
- Fleet showcase with detailed specifications
- Virtual ship tours and interior galleries
- Cabin types and onboard amenities
- Integrated booking system

### User Management
- Secure authentication and account management
- Personal wishlist and favorites system
- Booking history and trip management
- Newsletter subscription system

## 🎨 Design System

The application features a sophisticated design system:
- Ocean-inspired color palette with HSL color variables
- Smooth animations and transitions
- Responsive grid layouts
- Consistent typography and spacing
- Modern gradients and visual effects
- Dark/light mode support

## 📦 Build & Deploy

Build the application for production:

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

The built application can be deployed to any static hosting service like Vercel, Netlify, or AWS S3.

## 🗂️ Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── auth/           # Authentication components
│   ├── destinations/   # Destination-related components
│   ├── expeditions/    # Expedition components
│   └── ships/          # Ship showcase components
├── data/               # Static data files
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
├── pages/              # Page components
└── integrations/       # Third-party integrations
```

## 🔧 Configuration

### Environment Variables
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

### Key Dependencies
- React 18 with TypeScript for type safety
- Tailwind CSS for styling with custom design tokens
- Supabase for backend services and authentication
- React Router for navigation
- React Hook Form for form management
- Zod for schema validation

## 📄 License

This project is licensed under the MIT License.

---

**Wanderlust Explorer** - *Discover extraordinary destinations and embark on the adventure of a lifetime.*
