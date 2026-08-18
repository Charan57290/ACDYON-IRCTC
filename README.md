# TrackSync: IRCTC Premium Redesign Concept

This project is a redesign concept of the IRCTC train booking experience, completed as part of the "Build It Like You Mean It" challenge (Track 2: The Premium Home Page) by Acdyon Technologies Engineering.

**DISCLAIMER**: This is a frontend design concept. It is not affiliated with, endorsed by, or connected to the official IRCTC platform. No real bookings can be made, and all data displayed is strictly for demonstration purposes.

## Problem Statement

The existing railway booking experience is functional but suffers from high cognitive load due to visual clutter, complex navigation, and unclear user flows. 

## Design Approach

Our primary goal for this redesign was to emphasize:
1. **Frictionless Search**: A clean, centralized booking card immediately directs user intent.
2. **Visual Hierarchy**: Generous whitespace, precise typography, and a tailored color palette elevate the product to a premium standard without losing its accessible purpose.
3. **Restrained Motion**: Utilizing subtle micro-interactions (like the From/To swap and the seamless search result transition) to delight the user without causing distraction.

## Features

- **Responsive Design**: Flawlessly adapts from mobile (390px) to desktop (1440px) without horizontal scrolling.
- **Interactive Search Flow**: A fully interactive (simulated) booking search that dynamically transitions into a results view.
- **Micro-interactions**: Hover states, swapping animations, and smooth transitions powered by Framer Motion.
- **Premium Aesthetics**: Carefully selected brand colors, shadows, and accessible contrast.
- **Accessible Markup**: Semantic HTML and clear structural outlines.

## Tech Stack

- **Framework**: React (via Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animation**: Framer Motion
- **Utilities**: clsx, tailwind-merge, date-fns

## Local Setup & Build Instructions

Ensure you have Node.js (v18 or higher) installed.

1. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

2. **Start the development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Build for production**:
   \`\`\`bash
   npm run build
   \`\`\`

The built files will be located in the \`dist\` directory, ready to be served.

## Files of Interest
- `src/components/booking/BookingSearch.tsx`: The primary interactive search card.
- `DECISIONS.md`: Documentation of architectural and design decisions made during this sprint.
