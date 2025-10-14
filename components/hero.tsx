"use client";

import { Button } from "@/components/ui/button";

// Hero button components with exact Figma specifications
interface HeroButtonProps {
  className?: string;
  text?: string;
  type?: "Primary" | "Secondary";
  style?: "white";
}

function HeroButton({
  className,
  text = "Contact Us",
  type = "Primary",
  style,
}: HeroButtonProps) {
  if (type === "Primary" && style === "white") {
    return (
      <Button
        className={`bg-white hover:bg-white/90 text-[#384d82] border-0 rounded-[8px] px-[16px] py-[8px] h-[40px] font-medium text-[16px] leading-normal ${className}`}
        style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
      >
        {text}
      </Button>
    );
  }

  if (type === "Secondary" && style === "white") {
    return (
      <Button
        variant="outline"
        className={`bg-transparent hover:bg-white/10 text-white border-[1.5px] border-solid border-white rounded-[8px] px-[16px] py-[8px] h-[40px] font-medium text-[16px] leading-normal ${className}`}
        style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
      >
        {text}
      </Button>
    );
  }

  return null;
}

// Main hero component with exact Figma specifications
export function Hero() {
  const heroBackground =
    "Stocks/HeroBackground.jpg";

  return (
    <section className="relative w-full h-[820px] flex flex-col items-start justify-start box-border p-4 lg:p-[140px]">
      {/* Background image with exact positioning */}
      <img
        alt="HVAC Equipment Background"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        src={heroBackground}
      />

      {/* Content container with exact specifications */}
      <div className="relative z-10 flex flex-col items-center gap-[24px] w-full max-w-[1160px] mx-auto">
        {/* Main heading with exact Figma typography */}
        <h1
          className="text-[28px] lg:text-[42px] leading-normal font-extrabold text-white text-center w-full"
          style={{ fontFamily: "var(--font-poppins)", fontWeight: 800 }}
        >
          Excellence in HVAC & Cooling, Maintenance, and Indoor Air Quality
        </h1>

        {/* Subtitle with exact specifications */}
        <p
          className="text-[18px] lg:text-[22px] leading-normal font-normal text-[#e1e4ec] text-center w-full"
          style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
        >
          Delivering energy-efficient HVAC solutions for homes, offices, and
          industrial sites across the Kingdom.
        </p>

        {/* CTA buttons group with exact spacing */}
        <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[24px] items-center">
          <HeroButton type="Primary" style="white" text="Contact Us" />
          <HeroButton type="Secondary" style="white" text="Contact Us" />
        </div>
      </div>
    </section>
  );
}
