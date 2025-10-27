"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Feature card data interface
interface FeatureCardData {
  id: string;
  icon: string;
  title: string;
  delay?: number;
}

// Individual feature card component with animation
interface FeatureCardProps {
  feature: FeatureCardData;
  isVisible: boolean;
  index: number;
}

function FeatureCard({ feature, isVisible, index }: FeatureCardProps) {
  return (
    <div
      className={`bg-[rgba(227,246,251,0.4)] rounded-[12px] p-[24px] flex flex-col gap-[12px] items-start w-full max-w-[272px] h-[162px] transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
      }}
    >
      {/* Icon */}
      <div className="w-[48px] h-[48px] relative shrink-0">
        <Image
          src={feature.icon}
          alt={feature.title}
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Title */}
      <p
        className="text-[18px] font-medium text-snow-primary leading-normal capitalize"
        style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
      >
        {feature.title}
      </p>
    </div>
  );
}

// Custom hook for intersection observer
function useIntersectionObserver(
  elementRef: React.RefObject<HTMLDivElement | null>,
  threshold: number = 0.1
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [elementRef, threshold]);

  return isVisible;
}

// Main why choose snow component
export function WhyChooseSnow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const isTitleVisible = useIntersectionObserver(titleRef, 0.3);
  const areCardsVisible = useIntersectionObserver(cardsRef, 0.2);

  // Feature cards data with icon paths
  const features: FeatureCardData[] = [
    {
      id: "trusted-partner",
      title: "Trusted Partner in HVAC Solutions",
      icon: "/icons/trusted-partner.svg",
    },
    {
      id: "leading-expertise",
      title: "Leading Expertise Powered by Advanced Technologies",
      icon: "/icons/leading-expertise.svg",
    },
    {
      id: "tailored-systems",
      title: "Tailored Systems for Your Project's Specific Needs",
      icon: "/icons/tailored-systems.svg",
    },
    {
      id: "proactive-control",
      title: "Proactive HVAC Control for Lasting Comfort",
      icon: "/icons/proactive-control.svg",
    },
    {
      id: "sustainability",
      title: "Sustainability Built into Every Solution",
      icon: "/icons/sustainability.svg",
    },
    {
      id: "reliable-support",
      title: "Reliable Support at Every Stage of the Project",
      icon: "/icons/reliable-support.svg",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 md:py-20 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-[140px] overflow-hidden"
    >
      <div className="max-w-[1160px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[568px_1fr] gap-8 lg:gap-[24px] items-start">
          {/* Fixed Title Section */}
          <div
            ref={titleRef}
            className={`sticky top-24 flex flex-col gap-[24px] items-start transition-all duration-1000 ease-out ${
              isTitleVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Section header */}
            <div className="flex flex-col gap-[6px] items-start">
              {/* Gradient label */}
              <p
                className="text-xl md:text-[24px] font-medium bg-gradient-to-b from-snow-primary to-snow-light bg-clip-text text-transparent capitalize"
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontWeight: 500,
                  WebkitTextFillColor: "transparent",
                }}
              >
                Why Choose Snow !
              </p>

              {/* Main title */}
              <h2
                className="text-2xl md:text-3xl lg:text-[32px] font-semibold text-[#585959] leading-tight"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
              >
                Pick The Qualified Team With +20 Years Of Experience , And More
              </h2>
            </div>

            {/* CTA button */}
            <Button
              className="bg-snow-primary hover:bg-snow-primary/90 text-snow-secondary border-0 rounded-[8px] px-[16px] py-[8px] h-auto font-medium text-[16px] leading-normal transition-all duration-200 hover:scale-105"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              Contact Us
            </Button>
          </div>

          {/* Animated Cards Grid */}
          <div ref={cardsRef} className="w-full">
            {/* Desktop Grid Layout - 2 columns, 3 rows */}
            <div className="hidden lg:grid grid-cols-2 gap-[24px] max-w-[568px] ml-auto">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.id}
                  feature={feature}
                  isVisible={areCardsVisible}
                  index={index}
                />
              ))}
            </div>

            {/* Mobile/Tablet Layout - Single column */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.id}
                  feature={feature}
                  isVisible={areCardsVisible}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Export individual components for flexibility
export { FeatureCard };
export type { FeatureCardData, FeatureCardProps };
