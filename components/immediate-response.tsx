"use client"

import { Button } from "@/components/ui/button"

// Immediate Response section component based on Figma design
export function ImmediateResponse() {
  return (
    <section className="w-full py-[56px] px-4 lg:px-[140px]">
      <div className="flex flex-col gap-[48px] items-center w-full">
        {/* Hero Image Section */}
        <div className="relative w-full max-w-[1162px] h-[491px] rounded-[12px] overflow-hidden">
          <img 
            src="/Stocks/ContactUsSection.jpg"
            alt="HVAC Emergency Response Team"
            className="w-full h-full object-cover"
          />
          {/* Optional overlay for better text readability if needed */}
          <div className="absolute inset-0 bg-black/10 rounded-[12px]" />
        </div>
        
        {/* Content Section */}
        <div className="flex gap-[24px] items-start w-full max-w-[1162px] flex-col lg:flex-row">
          {/* Left Column - Title */}
          <div className="flex-1 flex flex-col gap-[6px] items-start">
            {/* Gradient Label */}
            <p 
              className="text-[24px] font-medium bg-gradient-to-b from-[#44c5e2] to-[#e3f6fb] bg-clip-text text-transparent capitalize"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              24 / 7
            </p>
            
            {/* Main Title */}
            <h2 
              className="text-[32px] font-semibold text-[#585959] capitalize leading-normal"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
            >
              immediate response 24/7 for emergency
            </h2>
          </div>
          
          {/* Right Column - Description and CTA */}
          <div className="flex-1 flex flex-col gap-[10px] items-start">
            {/* Description */}
            <p 
              className="text-[16px] font-normal text-[#6a7aa1] leading-normal"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              Snow offers tailored HVAC solutions for residential, commercial, and industrial spaces. Our certified team designs, installs, and maintains efficient systems that lower energy use, extend equipment life, and improve air quality.
            </p>
            
            {/* CTA Button */}
            <Button 
              className="bg-[#44c5e2] hover:bg-[#44c5e2]/90 text-white border-0 rounded-[8px] px-[16px] py-[8px] h-auto font-medium text-[16px] leading-normal transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}