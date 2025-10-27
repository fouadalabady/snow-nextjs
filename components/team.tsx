"use client"

import { Button } from "@/components/ui/button"

// Enhanced Our Team section component with image aligned to bottom
export function Team() {
  return (
    <section className="w-full pt-[56px] m-0">
      <div className="container-section">
        <div className="bg-gradient-to-b from-[#44c5e2] to-[#384d82] pt-[56px] px-4 lg:px-[197px] rounded-[12px] overflow-hidden relative">
          {/* Content Section */}
          <div className="flex flex-col items-center gap-[38px] pb-[38px]">
            <div className="flex flex-col items-center justify-center gap-[16px] w-full max-w-[766px] text-center">
              {/* Section header */}
              <div className="flex flex-col items-center gap-[6px]">
                {/* Gradient label */}
                <p 
                  className="text-[24px] font-medium bg-gradient-to-b from-white to-[#e3f6fb] bg-clip-text text-transparent capitalize"
                  style={{ 
                    fontFamily: "var(--font-poppins)", 
                    fontWeight: 500,
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  Our Team
                </p>
                
                {/* Main title */}
                <h2 
                  className="text-[32px] font-semibold text-white capitalize leading-normal"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
                >
                  The 1st maintenances specialists in the region
                </h2>
                
                {/* Description */}
                <p 
                  className="text-[16px] font-normal text-[#e1e4ec] leading-normal mt-[12px]"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                >
                  We are a Saudi company specialized in providing integrated engineering solutions in the field of air conditioning and refrigeration, with a strong focus on quality and professionalism at every stage of the work process.
                </p>
              </div>
              
              {/* CTA buttons */}
              <div className="flex gap-[24px] items-start flex-wrap justify-center">
                <Button 
                  className="bg-white hover:bg-white/90 text-[#384d82] border-0 rounded-[8px] px-[16px] py-[8px] h-auto font-medium text-[16px] leading-normal transition-all duration-300 hover:shadow-lg hover:scale-105"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
                >
                  Meet our team
                </Button>
                
                <Button 
                  variant="outline"
                  className="bg-transparent hover:bg-white/10 text-white border-[1.5px] border-solid border-white rounded-[8px] px-[16px] py-[8px] h-auto font-medium text-[16px] leading-normal transition-all duration-300 hover:shadow-lg hover:scale-105"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
                >
                  Contact us
                </Button>
              </div>
            </div>
          </div>
          
          {/* Team illustration - aligned to bottom with no padding */}
          <div className="flex justify-center">
            <div className="relative w-[375px] h-[289px] shrink-0">
              <img 
                src="/illustrations/OurTeamStock.svg"
                alt="Our Professional HVAC Team"
                className="w-full h-full object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}