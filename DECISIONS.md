# Design and Implementation Decisions

## 1. Why did we choose this redesign/interaction strategy over the obvious alternative?
We chose a clean, single-card booking interface rather than a multi-step wizard or a clustered dashboard because train travel intent is usually singular and direct (from A to B on date C). By keeping all parameters visible and editable in one place, we reduce cognitive load and friction. We deliberately used generous white space and a premium color palette (blues, slate, orange accents) to elevate the perception of the service from utility to a trustworthy, modern platform, avoiding the cluttered "portal" look common in legacy travel sites.

## 2. What trade-off did we make under the time limit?
- **Omitted Dark Mode**: To ensure a highly polished, accessible experience, we prioritized a flawless light mode. Implementing dark mode properly across all states (inputs, cards, shadows, and hover states) would have risked an inconsistent or half-baked implementation under the time constraint.
- **Simulated Data and State**: We mocked the train data and search delays locally rather than setting up a mock API backend. This keeps the project simple to run and evaluate while sufficiently demonstrating the UX flow.

## 3. If we had one full week instead of the challenge time limit, what would we improve?
- Implement a comprehensive Dark Mode theme.
- Add real interactive seat maps for the "Choose & book" step.
- Integrate a robust Date Picker component (like `react-day-picker`) instead of a static date display, allowing users to actually select dates.
- Add advanced accessibility features like screen-reader-only live regions for dynamic results loading.
- Add comprehensive unit tests using Vitest and React Testing Library.

## 4. Where did we use AI tools?
AI was used to accelerate the scaffolding of the project (Vite, React, Tailwind config), generate the fictional mock train data (`mockData.ts`), and structure the initial markup of the React components (Navbar, Hero, BookingSearch, TrainCards). It also assisted in writing utility scripts for code formatting.

## 5. What did we personally verify/change after using AI?
We manually orchestrated the component architecture to ensure logical separation of concerns. We verified the responsive behavior at 390px, 768px, and 1440px to ensure the UI does not break or scroll horizontally. We fine-tuned the Tailwind classes (spacing, colors, hover states, `framer-motion` properties) to hit the desired "premium" aesthetic, ensuring the final visual hierarchy and micro-interactions met the "shipped" product quality standard. We also handled typescript unused variable errors ensuring production build succeeds.
