# IRCTC NextGen Redesign

A premium, modern redesign concept for the IRCTC (Indian Railway Catering and Tourism Corporation) booking platform. This project focuses on usability, speed, and aesthetic excellence, aiming to provide a seamless ticket booking experience.

## Features

- **Lightning Fast Search**: Search for over 8,000+ Indian Railway stations instantly with a highly optimized custom autocomplete dropdown.
- **Premium Glassmorphism UI**: A beautiful, modern interface featuring smooth animations, soft gradients, and frosted glass effects.
- **Multi-Page Architecture**: Fully implemented React Router routing for dedicated pages (Home, PNR Status, Train Schedule, Help).
- **Responsive Design**: Works perfectly across all devices (Desktop, Tablet, Mobile) with a mobile-first approach.
- **Interactive Calendar**: Seamless native date picker integration for optimal mobile and desktop UX.
- **Dynamic Help Center**: Categorized FAQ filtering with layout animations.

## Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Utilities**: clsx, tailwind-merge, date-fns

## Running Locally

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Key Files

- `src/components/home/Hero.tsx`: The main hero section with the background video and parallax effects.
- `src/components/booking/BookingSearch.tsx`: The core train search component with complex autocomplete logic.
- `src/pages/*`: Dedicated route pages for PNR Status, Schedules, and Help.
- `src/data/stations.ts`: Integrated station codes data handling.
