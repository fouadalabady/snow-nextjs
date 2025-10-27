import Image from 'next/image'
import { ImmediateResponse } from '@/components/immediate-response'
import { ContactUs } from '@/components/contact-us'
import { FAQ } from '@/components/faq'
import { Numbers } from '@/components/numbers'

export default function IndoorAirQualityPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] lg:h-[584px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/services/Service-3.jpg"
            alt="Indoor Air Quality (IAQ) Enhancement"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-[rgba(56,77,130,0.8)]" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl text-center px-4 sm:px-6 md:px-8">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 mb-3 text-sm md:text-base">
            <span className="text-white/80">home</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white/60">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-white/80">services</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white/60">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="bg-clip-text bg-gradient-to-b from-[#44c5e2] to-[#e3f6fb] text-transparent font-medium">
              Indoor Air Quality
            </span>
          </div>
          
          <h1 className="font-semibold text-2xl md:text-3xl lg:text-[48px] text-white mb-4 lg:mb-6 capitalize leading-tight">
            Indoor Air Quality (IAQ) Enhancement
          </h1>
          <p className="font-normal text-sm md:text-base lg:text-lg text-[#e1e4ec] mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed">
            We provide fully integrated air-purification systems that eliminate odors, fine particles, and harmful microbes, ensuring a safe and healthy environment.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center justify-center">
            <button className="bg-[#44c5e2] text-[#384d82] px-8 py-4 rounded-lg font-medium text-sm md:text-base hover:bg-[#3bb5d1] hover:scale-105 transition-all duration-200 w-full sm:w-auto">
              Get Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium text-sm md:text-base flex items-center justify-center gap-2 hover:bg-white hover:text-[#384d82] hover:scale-105 transition-all duration-200 w-full sm:w-auto">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Call us
            </button>
          </div>
        </div>
      </section>

      {/* About Service Section */}
      <section className="py-16 md:py-20 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-[140px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Illustration */}
            <div className="relative">
              <Image
                src="/services/IndoorAirQuality.svg"
                alt="Indoor Air Quality Service"
                width={467}
                height={390}
                className="w-full h-auto"
              />
            </div>
            
            {/* Content */}
            <div>
              <p className="bg-clip-text bg-gradient-to-b from-[#44c5e2] to-[#e3f6fb] text-transparent font-medium text-xl md:text-2xl capitalize mb-3">
                Air Quality Solutions
              </p>
              <h2 className="font-semibold text-2xl md:text-3xl lg:text-[32px] text-[#384d82] capitalize mb-4 lg:mb-6 leading-tight">
                Advanced Air Purification Systems
              </h2>
              <p className="font-normal text-sm md:text-base text-[#6a7aa1] mb-6 lg:mb-8 leading-relaxed">
                Our IAQ solutions use cutting-edge technology to improve air quality, creating healthier indoor environments.
              </p>
              
              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#44c5e2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-[#6a7aa1]">Comprehensive air quality assessment</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#44c5e2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-[#6a7aa1]">Advanced filtration and purification systems</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#44c5e2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-[#6a7aa1]">Odor and contaminant elimination</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#44c5e2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-[#6a7aa1]">Continuous monitoring and maintenance</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#44c5e2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-[#6a7aa1]">Certified healthy environment standards</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                <button className="bg-[#44c5e2] text-[#384d82] px-8 py-4 rounded-lg font-medium text-sm md:text-base hover:bg-[#3bb5d1] hover:scale-105 transition-all duration-200">
                  Learn More
                </button>
                <button className="border-2 border-[#44c5e2] text-[#44c5e2] px-8 py-4 rounded-lg font-medium text-sm md:text-base hover:bg-[#44c5e2] hover:text-white hover:scale-105 transition-all duration-200">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <Numbers />

      {/* Immediate Response */}
      <ImmediateResponse />

      {/* FAQ */}
      <FAQ />

      {/* Contact Us Section */}
      <ContactUs />
    </div>
  )
}
