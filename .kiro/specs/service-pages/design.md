# Design Document

## Overview

This design document outlines the technical approach for creating two new service detail pages: Supply & Installation and Indoor Air Quality (IAQ) Enhancement. Both pages will follow the established template pattern from the existing Maintenance service page, ensuring visual consistency while adapting content to each specific service.

The pages will be built using Next.js 14+ with the App Router, TypeScript, and Tailwind CSS, matching the existing codebase architecture.

## Architecture

### Page Structure

Each service page will be a Next.js page component located at:
- `/app/services/supply-installation/page.tsx`
- `/app/services/indoor-air-quality/page.tsx`

### Component Hierarchy

```
ServicePage (page.tsx)
├── Hero Section
│   ├── Background Image with Overlay
│   ├── Breadcrumb Navigation
│   ├── Title & Description
│   └── CTA Buttons (Get Quote, Call us)
├── About Service Section
│   ├── Illustration (alternating left/right)
│   ├── Content Block
│   │   ├── Label (gradient text)
│   │   ├── Heading
│   │   ├── Description
│   │   ├── Feature List (with checkmarks)
│   │   └── CTA Buttons
├── What Do We Offer Section (Multiple Subsections)
│   ├── Subsection 1
│   │   ├── Illustration
│   │   ├── Content with Features
│   │   └── Benefit Cards Grid
│   ├── Subsection 2
│   │   ├── Illustration
│   │   ├── Content with Features
│   │   └── Benefit Cards Grid
│   └── Subsection 3
│       ├── Illustration
│       ├── Content with Features
│       └── Benefit Cards Grid
├── Numbers Component (existing)
├── ImmediateResponse Component (existing)
├── FAQ Component (existing)
└── ContactUs Component (existing)
```

## Components and Interfaces

### 1. Hero Section

**Purpose**: Introduce the service with a visually striking banner

**Props**: None (content is hardcoded per service)

**Structure**:
```tsx
<section className="relative h-[400px] md:h-[500px] lg:h-[584px]">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0">
    <Image src={heroImage} alt={altText} fill className="object-cover" priority />
    <div className="absolute inset-0 bg-[rgba(56,77,130,0.8)]" />
  </div>
  
  {/* Content */}
  <div className="relative z-10 max-w-4xl px-4 sm:px-6 md:px-8">
    {/* Breadcrumb */}
    <div className="flex items-center gap-2 mb-3">
      <span>home</span>
      <ArrowIcon />
      <span>services</span>
      <ArrowIcon />
      <span className="gradient-text">{serviceName}</span>
    </div>
    
    {/* Title & Description */}
    <h1>{serviceTitle}</h1>
    <p>{serviceDescription}</p>
    
    {/* CTA Buttons */}
    <div className="flex gap-4">
      <button>Get Quote</button>
      <button>Call us</button>
    </div>
  </div>
</section>
```

**Styling**:
- Background: Service-specific image with 80% opacity dark blue overlay (#384d82)
- Text: White with gradient accent for breadcrumb
- Responsive heights: 400px (mobile), 500px (tablet), 584px (desktop)
- Padding: Responsive horizontal padding

### 2. About Service Section

**Purpose**: Provide an overview of the service with key features

**Props**: 
```tsx
interface AboutServiceProps {
  label: string;
  title: string;
  description: string;
  features: string[];
  illustration: string;
  reverse?: boolean; // For alternating layout
}
```

**Structure**:
```tsx
<section className="py-16 md:py-20 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-[140px]">
  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
    {/* Illustration */}
    <div className="relative">
      <Image src={illustration} alt={title} width={467} height={390} />
    </div>
    
    {/* Content */}
    <div>
      <p className="gradient-text">{label}</p>
      <h2>{title}</h2>
      <p>{description}</p>
      
      {/* Feature List */}
      <div className="space-y-4">
        {features.map(feature => (
          <div className="flex items-center gap-3">
            <CheckmarkIcon />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      
      {/* CTA Buttons */}
      <div className="flex gap-6">
        <button>Learn More</button>
        <button>Contact Us</button>
      </div>
    </div>
  </div>
</section>
```

**Styling**:
- Background: Light gray (#f6f6f6) or white (alternating)
- Gradient text: #44c5e2 to #e3f6fb
- Checkmark icons: Circular with #44c5e2 background
- Responsive grid: Single column on mobile, 2 columns on desktop

### 3. What Do We Offer Subsection

**Purpose**: Detail specific aspects of the service with benefits

**Props**:
```tsx
interface OfferSubsectionProps {
  label: string;
  title: string;
  description: string;
  features: string[];
  illustration: string;
  benefits: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  reverse?: boolean;
}
```

**Structure**:
```tsx
<div className="py-16 md:py-20 lg:py-[120px]">
  {/* Content with Illustration */}
  <div className={`grid lg:grid-cols-2 gap-8 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
    <div className="relative">
      <Image src={illustration} alt={title} width={345} height={397} />
    </div>
    
    <div>
      <p className="gradient-text">{label}</p>
      <h2>{title}</h2>
      <p>{description}</p>
      
      {/* Feature List with Checkmarks */}
      <div className="space-y-4">
        {features.map(feature => (
          <div className="flex items-start gap-3">
            <CheckmarkIcon />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  {/* Benefits Grid */}
  <div className="mt-12">
    <h3>{benefitsTitle}</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {benefits.map(benefit => (
        <div className="bg-white rounded-xl p-6">
          <div className="w-12 h-12 mb-4">
            <Icon name={benefit.icon} />
          </div>
          <h4>{benefit.title}</h4>
          <p>{benefit.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>
```

**Styling**:
- Background: Alternating white and light gray
- Benefit cards: White background, rounded corners, shadow on hover
- Icons: 48x48px, colored or outlined
- Responsive grid: 1 column (mobile), 2 columns (tablet), 4 columns (desktop)

## Data Models

### Service Page Content

```typescript
interface ServicePageContent {
  // Hero Section
  hero: {
    title: string;
    description: string;
    backgroundImage: string;
    breadcrumb: string;
  };
  
  // About Service Section
  about: {
    label: string;
    title: string;
    description: string;
    features: string[];
    illustration: string;
  };
  
  // What Do We Offer Sections
  offerSections: Array<{
    label: string;
    title: string;
    description: string;
    features: string[];
    illustration: string;
    benefitsTitle: string;
    benefits: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  }>;
}
```

### Supply & Installation Content

```typescript
const supplyInstallationContent: ServicePageContent = {
  hero: {
    title: "Supply & Installation of High-performance AC Units",
    description: "We provide end-to-end solutions for supplying and installing AC systems, ensuring precision, performance, and energy efficiency through the use of cutting-edge technologies and expert teams.",
    backgroundImage: "/services/Service-2.jpg",
    breadcrumb: "Supply & Installation of High-performance AC Units"
  },
  about: {
    label: "Professional Installation",
    title: "Complete AC System Supply & Installation",
    description: "Our comprehensive service covers everything from system selection to professional installation, ensuring optimal performance and efficiency.",
    features: [
      "Expert consultation and system design",
      "High-quality equipment from leading manufacturers",
      "Professional installation by certified technicians",
      "Complete system testing and commissioning",
      "Warranty and after-sales support"
    ],
    illustration: "/services/SupplyAndInstallation.svg"
  },
  offerSections: [
    {
      label: "System Selection",
      title: "Tailored AC Solutions for Your Needs",
      description: "We help you choose the right system based on your space requirements, budget, and efficiency goals.",
      features: [
        "Load calculation and system sizing",
        "Energy efficiency analysis",
        "Equipment recommendations",
        "Budget planning and cost estimates"
      ],
      illustration: "/Illustrations/AboutIllustration.svg",
      benefitsTitle: "Why Choose Our Installation Service",
      benefits: [
        {
          icon: "activity-04",
          title: "Expert Installation",
          description: "Certified technicians with years of experience"
        },
        {
          icon: "new-releases",
          title: "Quality Equipment",
          description: "Premium brands with proven reliability"
        },
        {
          icon: "eco-energy",
          title: "Energy Efficient",
          description: "Systems designed for optimal performance"
        },
        {
          icon: "chart-decrease",
          title: "Cost Effective",
          description: "Competitive pricing with long-term value"
        }
      ]
    },
    {
      label: "Installation Process",
      title: "Professional Installation Standards",
      description: "Our installation process follows industry best practices to ensure safety, efficiency, and longevity.",
      features: [
        "Site preparation and safety measures",
        "Precise equipment placement and mounting",
        "Proper refrigerant charging and leak testing",
        "Electrical connections and controls setup",
        "System testing and performance verification"
      ],
      illustration: "/Illustrations/AboutIllustration.svg",
      benefitsTitle: "Installation Benefits",
      benefits: [
        {
          icon: "activity-04",
          title: "Quick Installation",
          description: "Minimal disruption to your operations"
        },
        {
          icon: "new-releases",
          title: "Safety First",
          description: "All safety protocols strictly followed"
        },
        {
          icon: "eco-energy",
          title: "Quality Assurance",
          description: "Thorough testing before handover"
        },
        {
          icon: "chart-decrease",
          title: "Full Support",
          description: "Training and documentation provided"
        }
      ]
    }
  ]
};
```

### Indoor Air Quality Content

```typescript
const indoorAirQualityContent: ServicePageContent = {
  hero: {
    title: "Indoor Air Quality (IAQ) Enhancement",
    description: "We provide fully integrated air-purification systems that eliminate odors, fine particles, and harmful microbes, ensuring a safe and healthy environment.",
    backgroundImage: "/services/Service-3.jpg",
    breadcrumb: "Indoor Air Quality (IAQ) Enhancement"
  },
  about: {
    label: "Air Quality Solutions",
    title: "Advanced Air Purification Systems",
    description: "Our IAQ solutions use cutting-edge technology to improve air quality, creating healthier indoor environments.",
    features: [
      "Comprehensive air quality assessment",
      "Advanced filtration and purification systems",
      "Odor and contaminant elimination",
      "Continuous monitoring and maintenance",
      "Certified healthy environment standards"
    ],
    illustration: "/services/IndoorAirQuality.svg"
  },
  offerSections: [
    {
      label: "Air Purification",
      title: "Complete Air Quality Solutions",
      description: "We offer comprehensive air purification systems that address all aspects of indoor air quality.",
      features: [
        "HEPA filtration for particle removal",
        "UV-C sterilization for microbe elimination",
        "Activated carbon for odor control",
        "Humidity control systems",
        "Air quality monitoring and reporting"
      ],
      illustration: "/Illustrations/AboutIllustration.svg",
      benefitsTitle: "Health Benefits",
      benefits: [
        {
          icon: "activity-04",
          title: "Healthier Environment",
          description: "Reduced allergens and pollutants"
        },
        {
          icon: "new-releases",
          title: "Better Productivity",
          description: "Improved focus and well-being"
        },
        {
          icon: "eco-energy",
          title: "Odor Elimination",
          description: "Fresh, clean air throughout"
        },
        {
          icon: "chart-decrease",
          title: "Disease Prevention",
          description: "Reduced airborne pathogens"
        }
      ]
    },
    {
      label: "Monitoring & Maintenance",
      title: "Continuous Air Quality Management",
      description: "Our systems include ongoing monitoring and maintenance to ensure consistent air quality.",
      features: [
        "Real-time air quality monitoring",
        "Automated system adjustments",
        "Regular filter replacement",
        "Performance reports and analytics",
        "24/7 system support"
      ],
      illustration: "/Illustrations/AboutIllustration.svg",
      benefitsTitle: "System Advantages",
      benefits: [
        {
          icon: "activity-04",
          title: "Smart Monitoring",
          description: "Real-time air quality data"
        },
        {
          icon: "new-releases",
          title: "Automated Control",
          description: "Self-adjusting systems"
        },
        {
          icon: "eco-energy",
          title: "Energy Efficient",
          description: "Optimized power consumption"
        },
        {
          icon: "chart-decrease",
          title: "Low Maintenance",
          description: "Minimal upkeep required"
        }
      ]
    }
  ]
};
```

## Error Handling

### Image Loading Errors

- Use Next.js Image component with proper error handling
- Provide fallback images for missing assets
- Log errors to console in development mode

```typescript
<Image
  src={imageSrc}
  alt={altText}
  onError={(e) => {
    console.error('Image failed to load:', imageSrc);
    e.currentTarget.src = '/fallback-image.jpg';
  }}
/>
```

### Content Validation

- Validate that all required content fields are present
- Provide default values for optional fields
- Display user-friendly error messages if content is missing

## Testing Strategy

### Component Testing

1. **Visual Regression Testing**
   - Compare rendered pages against Figma designs
   - Test responsive breakpoints (375px, 768px, 1024px, 1440px)
   - Verify color accuracy and spacing

2. **Interaction Testing**
   - Test all CTA button hover states
   - Verify button click handlers
   - Test responsive navigation

3. **Content Testing**
   - Verify all text content displays correctly
   - Check image loading and alt text
   - Validate icon rendering

### Accessibility Testing

1. **Keyboard Navigation**
   - All interactive elements accessible via keyboard
   - Proper focus indicators
   - Logical tab order

2. **Screen Reader Compatibility**
   - Semantic HTML structure
   - Proper ARIA labels
   - Alt text for all images

3. **Color Contrast**
   - Verify WCAG AA compliance
   - Test text readability on all backgrounds
   - Ensure gradient text meets contrast requirements

### Responsive Testing

1. **Mobile (375px - 767px)**
   - Single column layouts
   - Stacked content sections
   - Touch-friendly button sizes

2. **Tablet (768px - 1023px)**
   - Two-column grids where appropriate
   - Adjusted spacing and typography
   - Optimized image sizes

3. **Desktop (1024px+)**
   - Full multi-column layouts
   - Maximum content width constraints
   - Hover effects and transitions

## Design Decisions and Rationales

### 1. Component Reusability

**Decision**: Create reusable section components rather than duplicating code

**Rationale**: 
- Reduces code duplication
- Easier maintenance and updates
- Consistent styling across pages
- Follows DRY principles

### 2. Content as Data

**Decision**: Store page content in TypeScript objects rather than hardcoding in JSX

**Rationale**:
- Easier content updates
- Better separation of concerns
- Potential for CMS integration in future
- Improved maintainability

### 3. Responsive-First Approach

**Decision**: Use mobile-first responsive design with Tailwind breakpoints

**Rationale**:
- Matches existing codebase patterns
- Better performance on mobile devices
- Progressive enhancement approach
- Easier to scale up than down

### 4. Image Optimization

**Decision**: Use Next.js Image component with proper sizing

**Rationale**:
- Automatic image optimization
- Lazy loading for better performance
- Responsive image serving
- Built-in error handling

### 5. Consistent Styling

**Decision**: Match existing maintenance page styling exactly

**Rationale**:
- Visual consistency across site
- Familiar user experience
- Leverages existing design system
- Reduces design decisions needed

## Implementation Notes

### File Organization

```
app/
├── services/
│   ├── supply-installation/
│   │   └── page.tsx
│   ├── indoor-air-quality/
│   │   └── page.tsx
│   └── maintenance/
│       └── page.tsx (existing)
```

### Shared Components

Reuse existing components:
- `<ImmediateResponse />` from `@/components/immediate-response`
- `<ContactUs />` from `@/components/contact-us`
- `<FAQ />` from `@/components/faq`
- `<Numbers />` from `@/components/numbers`

### Styling Approach

- Use Tailwind CSS utility classes
- Follow existing color scheme:
  - Primary: `#44c5e2`
  - Secondary: `#384d82`
  - Text: `#6a7aa1`
  - Light: `#e3f6fb`
  - Gray: `#f6f6f6`
- Maintain consistent spacing using Tailwind spacing scale
- Use responsive utilities: `sm:`, `md:`, `lg:`

### Performance Considerations

1. **Image Optimization**
   - Use WebP format where supported
   - Implement lazy loading for below-fold images
   - Proper image sizing for different viewports

2. **Code Splitting**
   - Leverage Next.js automatic code splitting
   - Dynamic imports for heavy components if needed

3. **CSS Optimization**
   - Tailwind's purge removes unused styles
   - Minimal custom CSS

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers
