import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ContactUs() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/Stocks/ContactUsStock.jpg" 
          alt="Professional HVAC Team - Contact Snow HVAC" 
          className="w-full h-full object-cover"
          fill
          sizes="100vw"
          priority
        />
        {/* Overlay with specified color #384D82 */}
        <div className="absolute inset-0 bg-[#384D82]/90" />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-[960px] mx-auto px-4 sm:px-6 md:px-8 text-center">
        {/* Contact Us Label */}
        <p 
          className="text-snow-primary text-lg md:text-xl lg:text-[24px] font-medium capitalize mb-3 md:mb-4"
          style={{ 
            fontFamily: "var(--font-poppins)", 
            fontWeight: 500 
          }}
        >
          Contact Us
        </p>
        
        {/* Main Content */}
        <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
          {/* Main Heading */}
          <h2 
            className="text-white text-2xl md:text-3xl lg:text-[32px] font-bold capitalize leading-tight max-w-[800px] mx-auto"
            style={{ 
              fontFamily: "var(--font-poppins)", 
              fontWeight: 700 
            }}
          >
            The 1st Maintenances Specialists In The Region
          </h2>
          
          {/* Description */}
          <p 
            className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed max-w-[700px] mx-auto"
            style={{ 
              fontFamily: "var(--font-poppins)", 
              fontWeight: 400 
            }}
          >
            We are a Saudi company specialized in providing integrated engineering solutions in the field of air conditioning and refrigeration, with a strong focus on quality and professionalism at every stage of the work process.
          </p>
        </div>
        
        {/* Enhanced Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center">
          {/* Call Us Button - Primary CTA */}
          <Button 
            className="bg-white text-[#384D82] hover:bg-gray-100 hover:scale-105 px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 w-full sm:w-auto min-w-[140px]"
            style={{ 
              fontFamily: "var(--font-poppins)", 
              fontWeight: 500 
            }}
            aria-label="Call Snow HVAC for immediate assistance"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call us
          </Button>
          
          {/* Message Us Button - Secondary CTA */}
          <Button 
            variant="outline" 
            className="border-white border-2 text-white hover:bg-white hover:text-[#384D82] hover:scale-105 px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium text-sm md:text-base transition-all duration-300 bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 w-full sm:w-auto min-w-[140px]"
            style={{ 
              fontFamily: "var(--font-poppins)", 
              fontWeight: 500 
            }}
            aria-label="Send a message to Snow HVAC"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Message Us
          </Button>
        </div>

        {/* Additional Trust Elements */}
        {/* <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 text-white/80">

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-snow-primary/20 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-snow-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12,6 12,12 16,14"></polyline>
              </svg>
            </div>
            <span 
              className="text-sm md:text-base font-medium"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              24/7 Emergency Service
            </span>
          </div>


          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-snow-primary/20 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-snow-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span 
              className="text-sm md:text-base font-medium"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              Licensed Professionals
            </span>
          </div>


          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-snow-primary/20 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-snow-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <span 
              className="text-sm md:text-base font-medium"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              Free Estimates
            </span>
          </div>
        </div> */}
      </div>
    </section>
  );
}