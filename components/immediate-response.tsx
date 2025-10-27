"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button"

// Immediate Response section component with layout matching the screenshot
export function ImmediateResponse() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-[140px]">
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-[48px] items-center">
        
        {/* Hero Image Section - No text overlay */}
        <div className="relative w-full max-w-[1162px] h-64 md:h-80 lg:h-[491px] rounded-[12px] overflow-hidden shadow-[0px_8px_16px_0px_rgba(56,77,130,0.15)]">
          <Image 
            src="/Stocks/ContactUsSection.jpg"
            alt="HVAC Emergency Response Team"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1162px"
          />
        </div>
        
        {/* Two Column Layout - Title/Subtitle on Left, Description/Button on Right */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[24px] items-start w-full max-w-[1162px]">
          {/* Left Column - Title and Subtitle */}
          <div className="flex-1 flex flex-col gap-[6px] items-start">
            {/* Gradient Subtitle */}
            <p
              className="text-[24px] font-medium bg-gradient-to-b from-snow-primary to-snow-light bg-clip-text text-transparent capitalize"
              style={{
                fontFamily: "var(--font-poppins)",
                fontWeight: 500,
                WebkitTextFillColor: "transparent",
              }}
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
              className="bg-snow-primary hover:bg-snow-primary/90 text-snow-secondary border-0 rounded-[8px] px-[16px] py-[8px] h-auto font-medium text-[16px] leading-normal transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
              aria-label="Contact Snow HVAC for Emergency Service"
            >
              Call us Now
            </Button>
          </div>
        </div>
        
        {/* Feature Cards Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-[1162px]">

          <div className="bg-gray-50 rounded-[12px] p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-snow-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-snow-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 
              className="text-lg font-semibold text-[#585959] mb-2"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
            >
              Rapid Response
            </h4>
            <p 
              className="text-sm text-[#6a7aa1]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              Average response time under 2 hours for emergency calls
            </p>
          </div>

  
          <div className="bg-gray-50 rounded-[12px] p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-snow-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-snow-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 
              className="text-lg font-semibold text-[#585959] mb-2"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
            >
              Certified Technicians
            </h4>
            <p 
              className="text-sm text-[#6a7aa1]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              Licensed and experienced professionals available around the clock
            </p>
          </div>

          <div className="bg-gray-50 rounded-[12px] p-6 text-center hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-snow-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-snow-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h4 
              className="text-lg font-semibold text-[#585959] mb-2"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
            >
              Always Available
            </h4>
            <p 
              className="text-sm text-[#6a7aa1]"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              24/7 phone support and emergency dispatch service
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}