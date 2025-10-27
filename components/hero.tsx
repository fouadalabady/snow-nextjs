"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

// Hero button components with responsive design
interface HeroButtonProps {
  className?: string;
  text?: string;
  type?: "Primary" | "Secondary";
  style?: "white";
  onClick?: () => void;
}

function HeroButton({
  className = "",
  text = "Contact Us",
  type = "Primary",
  style,
  onClick,
}: HeroButtonProps) {
  if (type === "Primary" && style === "white") {
    return (
      <Button
        onClick={onClick}
        className={`bg-white hover:bg-white/90 hover:scale-105 text-[#384d82] border-0 rounded-[8px] px-4 sm:px-6 lg:px-[16px] py-3 sm:py-[8px] h-auto lg:h-[40px] font-medium text-sm sm:text-base lg:text-[16px] leading-normal transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[140px] ${className}`}
        style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
      >
        {text}
      </Button>
    );
  }

  if (type === "Secondary" && style === "white") {
    return (
      <Button
        onClick={onClick}
        variant="outline"
        className={`bg-transparent hover:bg-white/10 hover:scale-105 text-white border-[1.5px] border-solid border-white rounded-[8px] px-4 sm:px-6 lg:px-[16px] py-3 sm:py-[8px] h-auto lg:h-[40px] font-medium text-sm sm:text-base lg:text-[16px] leading-normal transition-all duration-300 hover:shadow-lg w-full sm:w-auto min-w-[140px] ${className}`}
        style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
      >
        {text}
      </Button>
    );
  }

  return null;
}

// Main hero component with responsive design
interface HeroProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  backgroundImage?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
}

export function Hero({
  title = "Excellence in HVAC & Cooling, Maintenance, and Indoor Air Quality",
  subtitle = "Delivering energy-efficient HVAC solutions for homes, offices, and industrial sites across the Kingdom.",
  primaryButtonText = "Contact Us",
  secondaryButtonText = "Call Us Now",
  backgroundImage = "/Stocks/HeroBackground.jpg",
  onPrimaryClick,
  onSecondaryClick,
  className = "",
}: HeroProps) {
  return (
    <section
      className={`relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[820px] flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background image with responsive positioning */}
      <div className="absolute inset-0">
        <Image
          alt="HVAC Equipment Background"
          className="w-full h-full object-cover object-center"
          src={backgroundImage}
          fill
          sizes="100vw"
          priority
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content container with responsive design */}
      <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 lg:gap-[24px] w-full max-w-[1160px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[140px] text-center">
        {/* Main heading with responsive typography */}
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight sm:leading-normal font-extrabold text-white max-w-[900px]"
          style={{ fontFamily: "var(--font-poppins)", fontWeight: 800 }}
        >
          {title}
        </h1>

        {/* Subtitle with responsive specifications */}
        <p
          className="text-base sm:text-lg md:text-xl lg:text-[22px] leading-relaxed sm:leading-normal font-normal text-[#e1e4ec] max-w-[800px]"
          style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
        >
          {subtitle}
        </p>

        {/* CTA buttons group with responsive spacing */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-[24px] items-center justify-center w-full sm:w-auto mt-2 sm:mt-4">
          <HeroButton
            type="Primary"
            style="white"
            text={primaryButtonText}
            onClick={onPrimaryClick}
          />
          <HeroButton
            type="Secondary"
            style="white"
            text={secondaryButtonText}
            onClick={onSecondaryClick}
          />
        </div>

        {/* Optional trust indicators for mobile */}
        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-6 sm:mt-8 text-white/80">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span 
              className="text-xs sm:text-sm font-medium"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              20+ Years Experience
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12,6 12,12 16,14"></polyline>
              </svg>
            </div>
            <span 
              className="text-xs sm:text-sm font-medium"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              24/7 Emergency Service
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span 
              className="text-xs sm:text-sm font-medium"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              Licensed Professionals
            </span>
          </div>
        </div> */}
      </div>
    </section>
  );
}

// Export button component for reuse
export { HeroButton };
export type { HeroButtonProps, HeroProps };
