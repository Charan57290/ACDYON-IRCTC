# Design & Architecture Decisions

**1. Why this redesign strategy over the obvious alternative I rejected?**

I chose to redesign the core train-search experience around a clear, task-first hierarchy rather than reproducing the existing information-heavy homepage structure. The primary goal was to make the user's main journey—entering a source, destination, and date and finding available trains—immediately understandable.

I prioritized the booking/search experience in the hero and used supporting railway services such as PNR status and train schedules as secondary actions. I rejected the alternative of giving every service equal visual prominence because it would increase cognitive load and make the primary action less obvious.

**2. One trade-off I made under the time limit, and what I'd do with a real week.**

I focused the implementation on the homepage and a realistic simulated train-search experience instead of building a complete booking flow. The search, results, and interactions are therefore frontend demonstrations rather than connections to real IRCTC services.

With a full week, I would conduct more user testing, refine the information architecture based on feedback, improve accessibility testing, explore additional booking states and edge cases, and validate the design across more devices and user scenarios.

**3. Where did I use AI tools, and what did I personally verify or change afterward?**

I used AI tools during development for brainstorming UI/UX approaches, generating initial component structures, assisting with frontend implementation, and identifying potential responsive and accessibility issues.

I personally reviewed the generated implementation, verified the behavior of the interactions, checked the layout at mobile and desktop widths, refined the visual hierarchy and spacing, removed unnecessary elements, and made design decisions based on the requirements of the challenge. I also ensured that no fabricated testimonials, user statistics, logos, or unsupported claims were introduced.
