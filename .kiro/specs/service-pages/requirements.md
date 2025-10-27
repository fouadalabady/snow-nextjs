# Requirements Document

## Introduction

This document outlines the requirements for creating two additional service detail pages for the Snow HVAC website: Supply & Installation and Indoor Air Quality (IAQ) Enhancement. These pages will follow the established template pattern from the existing Maintenance service page and match the Figma design specifications.

## Glossary

- **Service Page**: A dedicated page that provides detailed information about a specific HVAC service offering
- **Hero Section**: The top banner section containing breadcrumb navigation, service title, description, and call-to-action buttons with a background image
- **About Service Section**: A content section with an illustration (left or right aligned), service title, description, feature list with checkmark icons, and CTA buttons
- **What Do We Offer Section**: Multiple subsections showcasing different service aspects, each with an illustration, title, description, feature list, and benefit cards
- **Benefit Cards**: Small cards displaying icons, titles, and descriptions of service benefits
- **Feature List**: A list of service features with checkmark icons
- **CTA (Call-to-Action)**: Interactive buttons that prompt users to take specific actions
- **Responsive Design**: Layout that adapts to different screen sizes (mobile, tablet, desktop)
- **Breadcrumb Navigation**: A navigation trail showing the current page location (home > services > service name)

## Requirements

### Requirement 1

**User Story:** As a potential customer, I want to view detailed information about the Supply & Installation service, so that I can understand what the service includes and decide if it meets my needs

#### Acceptance Criteria

1. WHEN a user navigates to `/services/supply-installation`, THE Service Page SHALL display a hero section with breadcrumb navigation, service title "Supply & Installation of High-performance AC Units", description, background image, and two CTA buttons ("Get Quote" and "Call us")
2. THE Service Page SHALL include an "About Service" section with an illustration, service heading, description, feature list with checkmark icons, and two CTA buttons
3. THE Service Page SHALL display a "What Do We Offer" section with multiple subsections, each containing an illustration, title, description, feature list with checkmarks, and benefit cards
4. THE Service Page SHALL show at least 3-5 benefit cards per subsection with icons, titles, and descriptions
5. THE Service Page SHALL integrate the existing ImmediateResponse, Numbers, FAQ, and ContactUs components

### Requirement 2

**User Story:** As a potential customer, I want to view detailed information about the Indoor Air Quality Enhancement service, so that I can learn about air quality solutions and their benefits

#### Acceptance Criteria

1. WHEN a user navigates to `/services/indoor-air-quality`, THE Service Page SHALL display a hero section with breadcrumb navigation, service title "Indoor Air Quality (IAQ) Enhancement", description, background image, and two CTA buttons ("Get Quote" and "Call us")
2. THE Service Page SHALL include an "About Service" section with an illustration, service heading, description, feature list with checkmark icons, and two CTA buttons
3. THE Service Page SHALL display a "What Do We Offer" section with multiple subsections, each containing an illustration, title, description, feature list with checkmarks, and benefit cards
4. THE Service Page SHALL show at least 3-5 benefit cards per subsection with icons, titles, and descriptions
5. THE Service Page SHALL integrate the existing ImmediateResponse, Numbers, FAQ, and ContactUs components

### Requirement 3

**User Story:** As a user on any device, I want the service pages to be fully responsive, so that I can access the information comfortably on mobile, tablet, or desktop

#### Acceptance Criteria

1. THE Service Page SHALL display properly on mobile devices with screen widths of 375px and above
2. THE Service Page SHALL display properly on tablet devices with screen widths of 768px and above
3. THE Service Page SHALL display properly on desktop devices with screen widths of 1024px and above
4. WHEN the viewport width changes, THE Service Page SHALL adjust layout, typography, and spacing according to responsive breakpoints
5. THE Service Page SHALL maintain readability and usability across all supported screen sizes

### Requirement 4

**User Story:** As a user, I want consistent visual styling across all service pages, so that I have a cohesive experience when browsing different services

#### Acceptance Criteria

1. THE Service Page SHALL use the same color scheme as the existing maintenance page (primary: #44c5e2, secondary: #384d82, text: #6a7aa1)
2. THE Service Page SHALL use the same typography styles and font families as the existing maintenance page
3. THE Service Page SHALL use the same spacing, padding, and layout patterns as the existing maintenance page
4. THE Service Page SHALL include the same hover effects and transitions as the existing maintenance page
5. THE Service Page SHALL use appropriate service-specific images from the `/public/services/` directory

### Requirement 5

**User Story:** As a user, I want interactive elements on the service pages to provide visual feedback, so that I know when I can click or interact with them

#### Acceptance Criteria

1. WHEN a user hovers over a CTA button, THE Service Page SHALL display a visual change (color change, scale transform, or both)
2. WHEN a user hovers over a benefit card, THE Service Page SHALL apply a shadow effect and slight upward translation
3. THE Service Page SHALL apply smooth transitions to all interactive elements with a duration between 200ms and 300ms
4. THE Service Page SHALL maintain accessibility standards for interactive elements (sufficient contrast, focus states)
5. THE Service Page SHALL ensure all clickable elements have appropriate cursor styles
