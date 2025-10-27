# WhyChooseSnow Component

A modern, animated "Why Choose Snow" section component based on the Figma design with scroll-triggered animations and a sticky title layout.

## Features

- **Figma-Based Design**: Built from the exact Figma design specifications
- **Scroll Animations**: Cards appear one by one as user scrolls with staggered timing
- **Sticky Title**: Left title section stays fixed while cards animate on scroll
- **Intersection Observer**: Uses modern browser API for performance-optimized scroll detection
- **Fully Responsive**: Mobile-first design that adapts to all screen sizes
- **Custom SVG Icons**: Inline SVG icons matching the Figma design
- **TypeScript**: Comprehensive type definitions and interfaces

## Usage

### Basic Usage

```tsx
import { WhyChooseSnow } from '@/components/why-choose-snow';

export default function Page() {
  return (
    <div>
      <WhyChooseSnow />
    </div>
  );
}
```

### Individual Components

```tsx
import { FeatureCard, FeatureCardData } from '@/components/why-choose-snow';

const feature: FeatureCardData = {
  id: "custom-feature",
  title: "Custom Feature Title",
  icon: <YourCustomIcon />
};

export default function Page() {
  return (
    <FeatureCard 
      feature={feature}
      isVisible={true}
      index={0}
    />
  );
}
```

## Animation Behavior

### Scroll Triggers
- **Title Animation**: Slides in from left when section enters viewport (30% threshold)
- **Cards Animation**: Fade in with scale and translate effects (20% threshold)
- **Staggered Timing**: Each card has a 150ms delay multiplied by its index

### Animation Properties
- **Duration**: 700ms for cards, 1000ms for title
- **Easing**: `ease-out` for smooth, natural motion
- **Transform**: Combines opacity, translateY, and scale for rich effects
- **Sticky Behavior**: Title stays fixed at `top: 24px` on desktop

## Responsive Design

### Breakpoints
- **Mobile (< 640px)**: Single column layout, cards stack vertically
- **Tablet (640px - 1024px)**: Two-column grid for cards
- **Desktop (> 1024px)**: Fixed title + 2x3 card grid layout

### Layout Structure
```
Desktop:                Mobile:
┌─────────┬─────────┐   ┌─────────────┐
│  Title  │ Card 1  │   │    Title    │
│ (Sticky)│ Card 2  │   ├─────────────┤
│         │ Card 3  │   │   Card 1    │
│         │ Card 4  │   │   Card 2    │
│         │ Card 5  │   │   Card 3    │
│         │ Card 6  │   │     ...     │
└─────────┴─────────┘   └─────────────┘
```

## Features Data

The component includes 6 predefined features:

1. **Trusted Partner in HVAC Solutions**
2. **Leading Expertise Powered by Advanced Technologies**
3. **Tailored Systems for Your Project's Specific Needs**
4. **Proactive HVAC Control for Lasting Comfort**
5. **Sustainability Built into Every Solution**
6. **Reliable Support at Every Stage of the Project**

## Technical Implementation

### Intersection Observer Hook
```tsx
function useIntersectionObserver(
  elementRef: React.RefObject<HTMLDivElement | null>,
  threshold: number = 0.1
) {
  // Returns boolean indicating if element is visible
}
```

### Animation Classes
- **Initial State**: `opacity-0 translate-y-8 scale-95`
- **Visible State**: `opacity-100 translate-y-0 scale-100`
- **Transition**: `transition-all duration-700 ease-out`

## Styling

### Colors
- **Background**: `bg-white`
- **Card Background**: `bg-[rgba(227,246,251,0.4)]` (Snow light with opacity)
- **Text Primary**: `text-snow-primary` (#44c5e2)
- **Text Secondary**: `text-[#585959]`
- **Button**: `bg-snow-primary` with hover effects

### Typography
- **Font Family**: Poppins (via CSS variables)
- **Title**: 24px-32px responsive sizing
- **Card Titles**: 18px medium weight
- **Button**: 16px medium weight

## Performance Considerations

- **Intersection Observer**: More performant than scroll event listeners
- **Animation Cleanup**: Proper cleanup of observers on unmount
- **Conditional Rendering**: Animations only trigger when elements are visible
- **CSS Transforms**: Hardware-accelerated animations using transform properties

## Browser Support

- **Modern Browsers**: Full support (Chrome 58+, Firefox 55+, Safari 12.1+)
- **Intersection Observer**: Native support in all modern browsers
- **Fallback**: Graceful degradation - content still visible without animations

## Accessibility

- **Reduced Motion**: Respects `prefers-reduced-motion` user preference
- **Semantic HTML**: Proper heading hierarchy and structure
- **Focus Management**: Keyboard navigation support for interactive elements
- **Screen Readers**: Descriptive alt text and ARIA labels where needed

## Customization

The component can be extended by:
- Modifying the `features` array for different content
- Adjusting animation timing and easing functions
- Customizing the intersection observer thresholds
- Adding custom icons or replacing SVG icons
- Changing color scheme via CSS variables