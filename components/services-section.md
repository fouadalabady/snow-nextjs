# ServicesSection Component

A flexible and reusable services section component based on the Figma design, using images from the `/public/services` directory.

## Features

- **Responsive Design**: Fully responsive across all screen sizes
- **Figma-Based**: Built from the exact Figma design specifications
- **Flexible Content**: Customizable services data, titles, and descriptions
- **Interactive**: Configurable button actions and links
- **Alternating Layout**: Services alternate between left/right image placement
- **TypeScript**: Fully typed with comprehensive interfaces

## Usage

### Basic Usage (Default Services)

```tsx
import { ServicesSection } from '@/components/services-section';

export default function Page() {
  return (
    <div>
      <ServicesSection />
    </div>
  );
}
```

### Custom Services Data

```tsx
import { ServicesSection, ServiceData } from '@/components/services-section';

const customServices: ServiceData[] = [
  {
    id: "custom-service-1",
    title: "Custom HVAC Service",
    description: "Description of your custom service offering.",
    image: "/services/Service-1.jpg",
    imageAlt: "Custom Service Image",
    primaryButtonText: "Learn More",
    secondaryButtonText: "Get Quote",
    primaryButtonLink: "/services/custom",
    secondaryButtonLink: "/contact",
  },
  // Add more services...
];

export default function Page() {
  return (
    <ServicesSection 
      services={customServices}
      sectionTitle={{
        subtitle: "Custom Services",
        title: "Our Specialized Solutions",
        description: "Custom description for your services section."
      }}
    />
  );
}
```

### With Custom Event Handlers

```tsx
import { ServicesSection, ServiceData } from '@/components/services-section';

export default function Page() {
  const handleServiceClick = (service: ServiceData) => {
    console.log('Service clicked:', service.id);
    // Custom logic here
  };

  const handleContactClick = (service: ServiceData) => {
    console.log('Contact clicked for:', service.id);
    // Custom logic here
  };

  return (
    <ServicesSection 
      onServicePrimaryClick={handleServiceClick}
      onServiceSecondaryClick={handleContactClick}
      backgroundColor="bg-white"
      className="custom-services-section"
    />
  );
}
```

## Props

### ServicesSection Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `services` | `ServiceData[]` | Default services | Array of service data objects |
| `sectionTitle` | `SectionTitleProps` | Default title | Section title configuration |
| `backgroundColor` | `string` | `"bg-[#f6f6f6]"` | Background color class |
| `onServicePrimaryClick` | `(service: ServiceData) => void` | - | Primary button click handler |
| `onServiceSecondaryClick` | `(service: ServiceData) => void` | - | Secondary button click handler |
| `className` | `string` | `""` | Additional CSS classes |

### ServiceData Interface

```tsx
interface ServiceData {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
}
```

### SectionTitleProps Interface

```tsx
interface SectionTitleProps {
  subtitle?: string;
  title?: string;
  description?: string;
}
```

## Available Images

The component uses images from `/public/services/`:

- `Service-1.jpg` - HVAC Maintenance Service
- `Service-2.jpg` - HVAC Installation Service  
- `Service-3.jpg` - Indoor Air Quality Enhancement
- `PeriodicMaintenance.svg` - Maintenance illustration
- `SupplyAndInstallation.svg` - Installation illustration
- `IndoorAirQuality.svg` - Air quality illustration

## Responsive Behavior

- **Mobile (< 640px)**: Single column layout, stacked content
- **Tablet (640px - 1024px)**: Single column with larger images
- **Desktop (> 1024px)**: Two-column layout with alternating image placement

## Styling

The component uses:
- Tailwind CSS for responsive design
- Custom CSS variables for Snow brand colors
- Poppins font family for typography
- Smooth transitions and hover effects

## Individual Components

You can also use individual components separately:

```tsx
import { SectionTitle, ServiceCard } from '@/components/services-section';

// Use SectionTitle independently
<SectionTitle 
  subtitle="Our Services"
  title="Custom Title"
  description="Custom description"
/>

// Use ServiceCard independently
<ServiceCard 
  service={serviceData}
  reverse={false}
  onPrimaryClick={handleClick}
/>
```