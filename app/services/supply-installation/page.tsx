import Image from 'next/image'
import { ImmediateResponse } from '@/components/immediate-response'
import { ContactUs } from '@/components/contact-us'
import { FAQ } from '@/components/faq'
import { Numbers } from '@/components/numbers'
import { ServiceHero } from '@/components/service-hero'

export default function SupplyInstallationPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <ServiceHero
        breadcrumbService="Supply & Installation"
        title="Supply & Installation of High-performance AC Units"
        description="We provide end-to-end solutions for supplying and installing AC systems, ensuring precision, performance, and energy efficiency through the use of cutting-edge technologies and expert teams."
        imageSrc="/services/Service-2.jpg"
        imageAlt="Supply & Installation of High-performance AC Units"
      />

      {/* About Service Section */}
      <section className="py-16 md:py-20 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-[140px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Illustration */}
            <div className="relative">
              <Image
                src="/services/SupplyAndInstallation.svg"
                alt="Supply & Installation Service"
                width={467}
                height={390}
                className="w-full h-auto"
              />
            </div>
            
            {/* Content */}
            <div>
              <p className="bg-clip-text bg-gradient-to-b from-[#44c5e2] to-[#e3f6fb] text-transparent font-medium text-xl md:text-2xl capitalize mb-3">
                Professional Installation
              </p>
              <h2 className="font-semibold text-2xl md:text-3xl lg:text-[32px] text-[#384d82] capitalize mb-4 lg:mb-6 leading-tight">
                Complete AC System Supply & Installation
              </h2>
              <p className="font-normal text-sm md:text-base text-[#6a7aa1] mb-6 lg:mb-8 leading-relaxed">
                Our comprehensive service covers everything from system selection to professional installation, ensuring optimal performance and efficiency.
              </p>
              
              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#44c5e2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-[#6a7aa1]">Expert consultation and system design</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#44c5e2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-[#6a7aa1]">High-quality equipment from leading manufacturers</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#44c5e2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-[#6a7aa1]">Professional installation by certified technicians</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#44c5e2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-[#6a7aa1]">Complete system testing and commissioning</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#44c5e2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-[#6a7aa1]">Warranty and after-sales support</span>
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

      {/* What Do We Offer - System Selection */}
      <section className="py-16 md:py-20 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-[140px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
            {/* Illustration */}
            <div className="relative">
              <Image
                src="/Illustrations/AboutIllustration.svg"
                alt="System Selection"
                width={345}
                height={397}
                className="w-full h-auto"
              />
            </div>
            
            {/* Content */}
            <div>
              <p className="bg-clip-text bg-gradient-to-b from-[#44c5e2] to-[#e3f6fb] text-transparent font-medium text-xl md:text-2xl capitalize mb-3">
                System Selection
              </p>
              <h2 className="font-semibold text-2xl md:text-3xl lg:text-[32px] text-[#384d82] capitalize mb-4 lg:mb-6 leading-tight">
                Tailored AC Solutions for Your Needs
              </h2>
              <p className="font-normal text-sm md:text-base text-[#6a7aa1] mb-6 lg:mb-8 leading-relaxed">
                We help you choose the right system based on your space requirements, budget, and efficiency goals.
              </p>
              
              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#44c5e2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-[#6a7aa1]">Load calculation and system sizing</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#44c5e2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-[#6a7aa1]">Energy efficiency analysis</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#44c5e2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-[#6a7aa1]">Equipment recommendations</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#44c5e2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-[#6a7aa1]">Budget planning and cost estimates</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div>
            <h3 className="font-semibold text-xl md:text-2xl text-[#384d82] text-center mb-8 lg:mb-12">
              Why Choose Our Installation Service
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Expert Installation */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#44c5e2]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#44c5e2]">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-lg text-[#384d82] mb-2">Expert Installation</h4>
                <p className="text-sm text-[#6a7aa1] leading-relaxed">
                  Certified technicians with years of experience
                </p>
              </div>

              {/* Quality Equipment */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#44c5e2]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#44c5e2]">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-lg text-[#384d82] mb-2">Quality Equipment</h4>
                <p className="text-sm text-[#6a7aa1] leading-relaxed">
                  Premium brands with proven reliability
                </p>
              </div>

              {/* Energy Efficient */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#44c5e2]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#44c5e2]">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-lg text-[#384d82] mb-2">Energy Efficient</h4>
                <p className="text-sm text-[#6a7aa1] leading-relaxed">
                  Systems designed for optimal performance
                </p>
              </div>

              {/* Cost Effective */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#44c5e2]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#44c5e2]">
                    <path d="M3 3v18h18M7 16l4-4 4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-lg text-[#384d82] mb-2">Cost Effective</h4>
                <p className="text-sm text-[#6a7aa1] leading-relaxed">
                  Competitive pricing with long-term value
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Do We Offer - Installation Process */}
      <section className="bg-[#f6f6f6] py-16 md:py-20 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-[140px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
            {/* Content - Reversed Order */}
            <div className="lg:order-1">
              <p className="bg-clip-text bg-gradient-to-b from-[#44c5e2] to-[#e3f6fb] text-transparent font-medium text-xl md:text-2xl capitalize mb-3">
                Installation Process
              </p>
              <h2 className="font-semibold text-2xl md:text-3xl lg:text-[32px] text-[#384d82] capitalize mb-4 lg:mb-6 leading-tight">
                Professional Installation Standards
              </h2>
              <p className="font-normal text-sm md:text-base text-[#6a7aa1] mb-6 lg:mb-8 leading-relaxed">
                Our installation process follows industry best practices to ensure safety, efficiency, and longevity.
              </p>
              
              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#44c5e2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-[#6a7aa1]">Site preparation and safety measures</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#44c5e2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-[#6a7aa1]">Precise equipment placement and mounting</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#44c5e2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-[#6a7aa1]">Proper refrigerant charging and leak testing</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#44c5e2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-[#6a7aa1]">Electrical connections and controls setup</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#44c5e2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-[#6a7aa1]">System testing and performance verification</span>
                </div>
              </div>
            </div>

            {/* Illustration - Reversed Order */}
            <div className="relative lg:order-2">
              <Image
                src="/Illustrations/AboutIllustration.svg"
                alt="Installation Process"
                width={345}
                height={397}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Benefits Grid */}
          <div>
            <h3 className="font-semibold text-xl md:text-2xl text-[#384d82] text-center mb-8 lg:mb-12">
              Installation Benefits
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Quick Installation */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#44c5e2]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#44c5e2]">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-lg text-[#384d82] mb-2">Quick Installation</h4>
                <p className="text-sm text-[#6a7aa1] leading-relaxed">
                  Minimal disruption to your operations
                </p>
              </div>

              {/* Safety First */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#44c5e2]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#44c5e2]">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-lg text-[#384d82] mb-2">Safety First</h4>
                <p className="text-sm text-[#6a7aa1] leading-relaxed">
                  All safety protocols strictly followed
                </p>
              </div>

              {/* Quality Assurance */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#44c5e2]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#44c5e2]">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-lg text-[#384d82] mb-2">Quality Assurance</h4>
                <p className="text-sm text-[#6a7aa1] leading-relaxed">
                  Thorough testing before handover
                </p>
              </div>

              {/* Full Support */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#44c5e2]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#44c5e2]">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-lg text-[#384d82] mb-2">Full Support</h4>
                <p className="text-sm text-[#6a7aa1] leading-relaxed">
                  Training and documentation provided
                </p>
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
