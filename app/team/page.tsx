import { Numbers } from "@/components/numbers";
import { ImmediateResponse } from "@/components/immediate-response";
import { FAQ } from "@/components/faq";
import { ContactUs } from "@/components/contact-us";
import {TeamMembers} from "@/components/TeamMembers"
import Image from "next/image";
export default function TeamPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] lg:h-[584px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Stocks/ourTeam.jpg"
            alt="our team Hero Background"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-[rgba(56,77,130,0.8)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl text-center px-4 sm:px-6 md:px-8">
          <p className="bg-clip-text bg-gradient-to-b from-[#44c5e2] to-[#e3f6fb] text-transparent font-medium text-xl md:text-2xl capitalize mb-3">
            Our Team
          </p>
          <h1 className="font-semibold text-2xl md:text-3xl lg:text-[32px] text-white mb-4 lg:mb-6 capitalize leading-tight">
            The 1st maintenances specialists in the region
          </h1>
          <p className="font-normal text-sm md:text-base text-[#e1e4ec] mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed">
            We are a Saudi company specialized in providing integrated
            engineering solutions in the field of air conditioning and
            refrigeration, with a strong focus on quality and professionalism at
            every stage of the work process.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center justify-center">
            <button className="bg-white text-[#384d82] px-6 py-3 rounded-lg font-medium text-sm md:text-base hover:bg-gray-50 hover:scale-105 transition-all duration-200 w-full sm:w-auto">
              Contact Us
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium text-sm md:text-base flex items-center justify-center gap-2 hover:bg-white hover:text-[#384d82] hover:scale-105 transition-all duration-200 w-full sm:w-auto">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Call us
            </button>
          </div>
        </div>
      </section>
      
      {/* Numbers Section */}
      <Numbers />
      
      {/* Team Members Section - Based on Figma Design */}
      <TeamMembers/>
      
      {/* Immediate Response Section */}
      <ImmediateResponse />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Contact Us Section */}
      <ContactUs />
    </div>
  );
}