"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Service data interface
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

// Section title component
interface SectionTitleProps {
  subtitle?: string;
  title?: string;
  description?: string;
}

function SectionTitle({
  subtitle = "our Services",
  title = "Custom HVAC Solutions",
  description = "Snow offers tailored HVAC solutions for residential, commercial, and industrial spaces. Our certified team designs, installs, and maintains efficient systems that lower energy use, extend equipment life, and improve air quality.",
}: SectionTitleProps) {
  return (
    <div className="flex flex-col gap-3 md:gap-[12px] items-center justify-center text-center max-w-[766px] mx-auto px-4">
      {/* Gradient label */}
      <p
        className="text-lg sm:text-xl md:text-[24px] font-medium bg-gradient-to-b from-snow-primary to-snow-light bg-clip-text text-transparent capitalize"
        style={{
          fontFamily: "var(--font-poppins)",
          fontWeight: 500,
          WebkitTextFillColor: "transparent",
        }}
      >
        {subtitle}
      </p>

      {/* Main title */}
      <h2
        className="text-2xl sm:text-3xl md:text-[32px] font-semibold text-[#585959] capitalize leading-tight"
        style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
      >
        {title}
      </h2>

      {/* Description */}
      <p
        className="text-sm sm:text-base md:text-[16px] font-normal text-[#6a7aa1] leading-relaxed"
        style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
      >
        {description}
      </p>
    </div>
  );
}

// Individual service card component
interface ServiceCardProps {
  service: ServiceData;
  reverse?: boolean;
  onPrimaryClick?: (service: ServiceData) => void;
  onSecondaryClick?: (service: ServiceData) => void;
}

function ServiceCard({
  service,
  reverse = false,
  onPrimaryClick,
  onSecondaryClick,
}: ServiceCardProps) {
  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick(service);
    } else if (service.primaryButtonLink) {
      window.open(service.primaryButtonLink, "_self");
    }
  };

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick(service);
    } else if (service.secondaryButtonLink) {
      window.open(service.secondaryButtonLink, "_self");
    }
  };

  return (
    <div
      className={`flex flex-col lg:flex-row items-stretch gap-6 lg:gap-[30px] w-full max-w-[1160px] mx-auto ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image side - Always first on mobile */}
      <div className="flex-1 w-full relative rounded-[12px] shadow-[0px_8px_16px_0px_rgba(56,77,130,0.15)] overflow-hidden group">
        <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/11] w-full">
          <Image
            alt={service.imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={service.image}
            width={580}
            height={356}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 580px"
            priority
          />
        </div>
        {/* Subtle overlay for better image quality */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content side - Always second on mobile */}
      <div className="flex-1 flex flex-col gap-4 lg:gap-[12px] items-start justify-center text-left">
        {/* Title */}
        <h3
          className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-semibold text-snow-secondary leading-tight capitalize"
          style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm sm:text-base lg:text-[14px] font-normal text-[#6a7aa1] leading-relaxed"
          style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
        >
          {service.description}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-[24px] items-stretch sm:items-start mt-2 lg:mt-[12px] w-full sm:w-auto">
          <Button
            onClick={handlePrimaryClick}
            className="bg-snow-primary hover:bg-snow-primary/90 hover:scale-105 text-snow-secondary border-0 rounded-[8px] px-4 sm:px-5 lg:px-[16px] py-3 lg:py-[8px] h-auto lg:h-[40px] font-medium text-sm sm:text-base lg:text-[16px] leading-normal flex items-center justify-center gap-2 lg:gap-[10px] transition-all duration-300 shadow-md hover:shadow-lg"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
          >
            {service.primaryButtonText || "Learn More"}
            <div className="w-4 sm:w-5 lg:w-[24px] h-4 sm:h-5 lg:h-[24px] flex items-center justify-center">
              <ArrowRight className="w-full h-full" />
            </div>
          </Button>

          <Button
            onClick={handleSecondaryClick}
            variant="outline"
            className="bg-transparent hover:bg-snow-primary/10 hover:scale-105 text-snow-primary border-[1.5px] border-solid border-snow-primary rounded-[8px] px-4 sm:px-5 lg:px-[16px] py-3 lg:py-[8px] h-auto lg:h-[40px] font-medium text-sm sm:text-base lg:text-[16px] leading-normal transition-all duration-300 hover:shadow-md"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
          >
            {service.secondaryButtonText || "Contact Us"}
          </Button>
        </div>
      </div>
    </div>
  );
}

// Main services section component
interface ServicesSectionProps {
  services?: ServiceData[];
  sectionTitle?: SectionTitleProps;
  backgroundColor?: string;
  onServicePrimaryClick?: (service: ServiceData) => void;
  onServiceSecondaryClick?: (service: ServiceData) => void;
  className?: string;
}

export function ServicesSection({
  services,
  sectionTitle,
  backgroundColor = "bg-[#f6f6f6]",
  onServicePrimaryClick,
  onServiceSecondaryClick,
  className = "",
}: ServicesSectionProps) {
  // Default services data
  const defaultServices: ServiceData[] = [
    {
      id: "maintenance",
      title: "Periodic Maintenance & Rapid Repairs for Continuous Performance",
      description:
        "We offer regular system maintenance and fast, effective repair services to ensure your AC systems operate reliably and efficiently.",
      image: "/services/Service-1.jpg",
      imageAlt: "HVAC Maintenance Service",
      primaryButtonLink: "/services/maintenance",
      secondaryButtonLink: "/contact",
    },
    {
      id: "installation",
      title: "Supply & Installation of High-performance AC Units",
      description:
        "We provide end-to-end solutions for supplying and installing AC systems, ensuring precision, performance, and energy efficiency through the use of cutting-edge technologies and expert teams.",
      image: "/services/Service-2.jpg",
      imageAlt: "HVAC Installation Service",
      primaryButtonLink: "/services/supply-installation",
      secondaryButtonLink: "/contact",
    },
    {
      id: "air-quality",
      title: "Indoor Air Quality (IAQ) Enhancement",
      description:
        "We offer regular system maintenance and fast, effective repair services to ensure your AC systems operate reliably and efficiently.",
      image: "/services/Service-3.jpg",
      imageAlt: "Indoor Air Quality Enhancement",
      primaryButtonLink: "/services/indoor-air-quality",
      secondaryButtonLink: "/contact",
    },
  ];

  const servicesToRender = services || defaultServices;

  return (
    <section
      className={`w-full ${backgroundColor} py-16 md:py-20 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-[140px] ${className}`}
    >
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-[48px] items-center">
        {/* Section Title */}
        <SectionTitle {...sectionTitle} />

        {/* Services Container */}
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-[48px] w-full">
          {servicesToRender.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              reverse={index % 2 === 1}
              onPrimaryClick={onServicePrimaryClick}
              onSecondaryClick={onServiceSecondaryClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Export individual components for flexibility
export { SectionTitle, ServiceCard };
export type {
  ServiceData,
  ServicesSectionProps,
  ServiceCardProps,
  SectionTitleProps,
};
