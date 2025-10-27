# Implementation Plan

- [x] 1. Create Supply & Installation service page
  - Create the page file at `app/services/supply-installation/page.tsx`
  - Implement the hero section with breadcrumb, title, description, background image, and CTA buttons
  - Add the About Service section with illustration, content, features list, and CTA buttons
  - Implement the What Do We Offer sections with illustrations, content, features, and benefit cards
  - Integrate existing components (Numbers, ImmediateResponse, FAQ, ContactUs)
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [x] 1.1 Implement hero section for Supply & Installation
  - Add background image with overlay
  - Create breadcrumb navigation (home > services > service name)
  - Add service title and description with proper styling
  - Implement "Get Quote" and "Call us" CTA buttons with icons
  - Apply responsive styling for mobile, tablet, and desktop
  - _Requirements: 1.1_

- [x] 1.2 Implement About Service section for Supply & Installation
  - Add service illustration (SupplyAndInstallation.svg)
  - Create content block with gradient label, heading, and description
  - Implement feature list with checkmark icons
  - Add "Learn More" and "Contact Us" CTA buttons
  - Apply responsive grid layout (single column mobile, 2 columns desktop)
  - _Requirements: 1.2_

- [x] 1.3 Implement first What Do We Offer subsection (System Selection)
  - Add illustration on the left side
  - Create content block with label, title, description, and features
  - Implement benefit cards grid (4 cards: Expert Installation, Quality Equipment, Energy Efficient, Cost Effective)
  - Add icons to benefit cards
  - Apply responsive grid (1 column mobile, 2 tablet, 4 desktop)
  - _Requirements: 1.3, 1.4_

- [x] 1.4 Implement second What Do We Offer subsection (Installation Process)
  - Add illustration on the right side (reversed layout)
  - Create content block with label, title, description, and features
  - Implement benefit cards grid (4 cards: Quick Installation, Safety First, Quality Assurance, Full Support)
  - Add icons to benefit cards
  - Apply alternating background color (light gray)
  - _Requirements: 1.3, 1.4_

- [x] 1.5 Integrate existing components into Supply & Installation page
  - Add Numbers component after What Do We Offer sections
  - Add ImmediateResponse component
  - Add FAQ component
  - Add ContactUs component at the bottom
  - Ensure proper spacing between sections
  - _Requirements: 1.5_

- [-] 2. Create Indoor Air Quality service page
  - Create the page file at `app/services/indoor-air-quality/page.tsx`
  - Implement the hero section with breadcrumb, title, description, background image, and CTA buttons
  - Add the About Service section with illustration, content, features list, and CTA buttons
  - Implement the What Do We Offer sections with illustrations, content, features, and benefit cards
  - Integrate existing components (Numbers, ImmediateResponse, FAQ, ContactUs)
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [ ] 2.1 Implement hero section for Indoor Air Quality
  - Add background image with overlay (Service-3.jpg)
  - Create breadcrumb navigation
  - Add service title "Indoor Air Quality (IAQ) Enhancement" and description
  - Implement "Get Quote" and "Call us" CTA buttons with icons
  - Apply responsive styling matching Supply & Installation page
  - _Requirements: 2.1_

- [ ] 2.2 Implement About Service section for Indoor Air Quality
  - Add service illustration (IndoorAirQuality.svg)
  - Create content block with gradient label, heading, and description
  - Implement feature list with checkmark icons (5 features)
  - Add "Learn More" and "Contact Us" CTA buttons
  - Apply responsive grid layout
  - _Requirements: 2.2_

- [ ] 2.3 Implement first What Do We Offer subsection (Air Purification)
  - Add illustration on the left side
  - Create content block with label, title, description, and features (5 features)
  - Implement benefit cards grid (4 cards: Healthier Environment, Better Productivity, Odor Elimination, Disease Prevention)
  - Add icons to benefit cards
  - Apply responsive grid layout
  - _Requirements: 2.3, 2.4_

- [ ] 2.4 Implement second What Do We Offer subsection (Monitoring & Maintenance)
  - Add illustration on the right side (reversed layout)
  - Create content block with label, title, description, and features (5 features)
  - Implement benefit cards grid (4 cards: Smart Monitoring, Automated Control, Energy Efficient, Low Maintenance)
  - Add icons to benefit cards
  - Apply alternating background color
  - _Requirements: 2.3, 2.4_

- [ ] 2.5 Integrate existing components into Indoor Air Quality page
  - Add Numbers component after What Do We Offer sections
  - Add ImmediateResponse component
  - Add FAQ component
  - Add ContactUs component at the bottom
  - Ensure proper spacing between sections
  - _Requirements: 2.5_

- [ ] 3. Implement responsive design and styling
  - Verify mobile responsiveness (375px+) for both pages
  - Verify tablet responsiveness (768px+) for both pages
  - Verify desktop responsiveness (1024px+) for both pages
  - Test layout adjustments at all breakpoints
  - Ensure consistent spacing and typography across devices
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [ ] 4. Apply consistent styling and visual design
  - Verify color scheme matches existing maintenance page
  - Check typography styles and font families
  - Verify spacing, padding, and layout patterns
  - Test hover effects and transitions on interactive elements
  - Ensure proper image loading and display
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [ ] 5. Implement interactive elements and accessibility
  - Add hover effects to CTA buttons (color change and scale)
  - Add hover effects to benefit cards (shadow and translation)
  - Apply smooth transitions (200-300ms) to all interactive elements
  - Verify keyboard navigation and focus states
  - Ensure proper cursor styles on clickable elements
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ] 6. Test and validate implementation
  - Test both pages on different screen sizes
  - Verify all images load correctly
  - Check all links and buttons work as expected
  - Validate accessibility with keyboard navigation
  - Test color contrast for readability
  - _Requirements: 3.1, 3.2, 3.3, 4.1, 4.2, 4.3, 5.1, 5.2, 5.3, 5.4, 5.5_
