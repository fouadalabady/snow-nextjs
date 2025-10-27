import { Numbers } from "@/components/numbers";
import { Values } from "@/components/values";
import { WhyChooseSnow } from "@/components/why-choose-snow";
import { ImmediateResponse } from "@/components/immediate-response";
import Image from "next/image";
export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="container-section relative h-[584px] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <Image 
              alt="About Snow Hero Background" 
              className="absolute max-w-none object-cover size-full"
              src="/Stocks/About Us.jpg"
              width={1920}
              height={1080}
            />
            <div 
              className="absolute inset-0" 
              style={{ 
                backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), linear-gradient(90deg, rgba(68, 197, 226, 0.5) 0%, rgba(68, 197, 226, 0.5) 100%)" 
              }} 
            />
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 flex flex-col gap-3 items-center justify-center max-w-[766px] text-center">
            <p className="bg-clip-text bg-gradient-to-b capitalize font-medium from-[#44c5e2] to-[#e3f6fb] text-2xl" 
               style={{ WebkitTextFillColor: "transparent" }}>
              About Snow
            </p>
            <h1 className="capitalize font-semibold text-[32px] text-white whitespace-pre-wrap">
              The 1st maintenances specialists in the region
            </h1>
            <p className="font-normal text-base text-[#e1e4ec] max-w-full">
              We are a Saudi company specialized in providing integrated engineering solutions in the field of air conditioning and refrigeration, with a strong focus on quality and professionalism at every stage of the work process.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex gap-6 items-start mt-4">
              <button className="bg-white flex gap-2.5 h-10 items-center justify-center px-4 py-2 rounded-lg">
                <span className="font-medium text-base text-[#384d82]">
                  Contact Us
                </span>
              </button>
              <button className="border-[1.5px] border-white h-10 rounded-lg">
                <div className="flex gap-2.5 h-10 items-center justify-center px-4 py-2">
                  <div className="flex gap-2.5 items-center">
                    <div className="w-6 h-6">
                      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <span className="font-medium text-base text-white">
                    Call us
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Numbers Section */}
      <div className="py-[69px]">
        <Numbers />
      </div>



      {/* Our Story Section */}
      <div className="bg-[#384d82] h-[511px] relative overflow-hidden">
        <div className="container-section h-full flex items-center">
          <div className="flex flex-col gap-3 max-w-[469px]">
            <p className="bg-clip-text bg-gradient-to-b capitalize font-medium from-[#44c5e2] to-[#e3f6fb] text-2xl" 
               style={{ WebkitTextFillColor: "transparent" }}>
              our Story
            </p>
            <h2 className="capitalize font-semibold text-[32px] text-white whitespace-pre-wrap">
              The 1st maintenances specialists in the region
            </h2>
            <p className="font-normal text-lg text-[#e1e4ec]">
              We are a Saudi company specialized in providing integrated engineering solutions in the field of air conditioning and refrigeration, with a strong focus on quality and professionalism at every stage of the work process.
            </p>
          </div>
          
          {/* Story Image */}
          <div className="absolute right-0 top-0 h-full w-[707px] hidden lg:block">
            <img 
              alt="Our Story" 
              className="w-full h-full object-cover"
              src="/Stocks/OurStory.jpg"
            />
          </div>
        </div>
      </div>


      {/* Values Section */}
      <Values />

      {/* Immediate Response Section */}
      <ImmediateResponse />



      {/* Why Choose Section */}
      <WhyChooseSnow />
    </div>
  );
}