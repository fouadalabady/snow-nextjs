"use client";

import { Button } from "@/components/ui/button";

// About section component with exact Figma specifications
export function About() {
  return (
    <section className="w-full bg-[#384d82] relative overflow-hidden h-[659px]">
      {/* Background decorative shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main background shape at top right */}
        <img
          src="illustrations/AboutSectionShape.svg"
          alt=""
          className="absolute w-[976.5px] h-[658.5px] object-contain"
          style={{ left: "464.5px", top: "0.5px" }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-between px-4 lg:px-[140px] py-[80px] h-full">
        {/* Content side */}
        <div className="flex flex-col gap-[12px] items-start justify-center w-full lg:w-[567px]">
          {/* Section label */}
          <p
            className="text-[18px] font-medium text-[#44c5e2] capitalize leading-normal"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
          >
            About Snow
          </p>

          {/* Content container */}
          <div className="flex flex-col gap-[6px] items-start">
            {/* Main heading */}
            <h2
              className="text-[32px] font-bold text-white capitalize leading-normal"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 700 }}
            >
              The 1st maintenances specialists in the region
            </h2>

            {/* Description */}
            <p
              className="text-[16px] font-normal text-[#e1e4ec] leading-normal"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              We are a Saudi company specialized in providing integrated
              engineering solutions in the field of air conditioning and
              refrigeration, with a strong focus on quality and professionalism
              at every stage of the work process.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex gap-[24px] items-start mt-[12px]">
            <Button
              className="bg-white hover:bg-white/90 text-[#384d82] border-0 rounded-[8px] px-[16px] py-[8px] h-auto font-medium text-[16px] leading-normal"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              Learn More
            </Button>

            <Button
              variant="outline"
              className="bg-transparent hover:bg-white/10 text-white border-[1.5px] border-solid border-white rounded-[8px] px-[16px] py-[8px] h-auto font-medium text-[16px] leading-normal"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              Contact us
            </Button>
          </div>
        </div>

        {/* Illustration side with exact positioning */}
        <div className="hidden lg:block absolute right-0 top-0">
          <div className="relative w-[496.5px] h-[397px] mt-[149px] mr-[140px]">
            {/* Main HVAC illustration */}
            <img
              src="illustrations/AboutIllustration.svg"
              alt="HVAC Maintenance Illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
