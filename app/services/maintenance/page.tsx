import Image from 'next/image'
import { ImmediateResponse } from '@/components/immediate-response'
import { ContactUs } from '@/components/contact-us'
import { FAQ } from '@/components/faq'
import { Numbers } from '@/components/numbers'
import { ServiceHero } from '@/components/service-hero'
import { ServiceOverview } from '@/components/service-overview'

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <ServiceHero
        breadcrumbService="Periodic Maintenance & Rapid Repairs for Continuous Performance"
        title="Periodic Maintenance & Rapid Repairs for Continuous Performance"
        description="We are a Saudi company specialized in providing integrated engineering solutions in the field of air conditioning and refrigeration, with a strong focus on quality and professionalism at every stage of the work process."
        imageSrc="/services/Service-1.jpg"
        imageAlt="Professional HVAC Maintenance Service"
      />

      {/* Service Overview Section */}
      <ServiceOverview
        label="About The Service"
        title="Periodic Maintenance & Rapid Repairs For Continuous Performance"
        description="We offer regular system maintenance and fast, effective repair services to ensure your AC systems operate reliably and efficiently."
        illustrationSrc="/services/service-1-overview.svg"
        illustrationAlt="HVAC Maintenance Service Overview"
      />

      {/* Service Types Section */}
      <section className="bg-[#f6f6f6] py-16 md:py-20 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-[140px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <p className="bg-clip-text bg-gradient-to-b from-[#44c5e2] to-[#e3f6fb] text-transparent font-medium text-xl md:text-2xl capitalize mb-3">
              Maintenance Types
            </p>
            <h2 className="font-semibold text-2xl md:text-3xl lg:text-[32px] text-[#585959] capitalize mb-4 leading-tight">
              Complete Maintenance Solutions
            </h2>
            <p className="font-normal text-sm md:text-base text-[#6a7aa1] max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive maintenance services tailored to different needs and system types
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Preventive Maintenance */}
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#44c5e2]/10 rounded-xl flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#44c5e2]">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-[#384d82] mb-3">Preventive Maintenance</h3>
              <p className="text-sm text-[#6a7aa1] mb-4 leading-relaxed">
                Regular scheduled maintenance to prevent breakdowns and ensure optimal performance
              </p>
              <ul className="space-y-2 text-sm text-[#6a7aa1]">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#44c5e2] rounded-full"></div>
                  Filter replacement
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#44c5e2] rounded-full"></div>
                  System cleaning
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#44c5e2] rounded-full"></div>
                  Performance testing
                </li>
              </ul>
            </div>

            {/* Emergency Repairs */}
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#44c5e2]/10 rounded-xl flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#44c5e2]">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-[#384d82] mb-3">Emergency Repairs</h3>
              <p className="text-sm text-[#6a7aa1] mb-4 leading-relaxed">
                24/7 emergency repair services for urgent HVAC system failures
              </p>
              <ul className="space-y-2 text-sm text-[#6a7aa1]">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#44c5e2] rounded-full"></div>
                  Rapid response
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#44c5e2] rounded-full"></div>
                  System diagnostics
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#44c5e2] rounded-full"></div>
                  Quick fixes
                </li>
              </ul>
            </div>

            {/* System Optimization */}
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-[#44c5e2]/10 rounded-xl flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#44c5e2]">
                  <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-[#384d82] mb-3">System Optimization</h3>
              <p className="text-sm text-[#6a7aa1] mb-4 leading-relaxed">
                Performance tuning and efficiency improvements for existing systems
              </p>
              <ul className="space-y-2 text-sm text-[#6a7aa1]">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#44c5e2] rounded-full"></div>
                  Energy efficiency
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#44c5e2] rounded-full"></div>
                  Performance tuning
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#44c5e2] rounded-full"></div>
                  Cost reduction
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <Numbers />

      {/* Process Section */}
      <section className="py-16 md:py-20 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-[140px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <p className="bg-clip-text bg-gradient-to-b from-[#44c5e2] to-[#e3f6fb] text-transparent font-medium text-xl md:text-2xl capitalize mb-3">
              Our Process
            </p>
            <h2 className="font-semibold text-2xl md:text-3xl lg:text-[32px] text-[#384d82] capitalize mb-4 leading-tight">
              How We Maintain Your Systems
            </h2>
            <p className="font-normal text-sm md:text-base text-[#6a7aa1] max-w-3xl mx-auto leading-relaxed">
              Our systematic approach ensures thorough maintenance and optimal system performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#44c5e2] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-lg text-[#384d82] mb-2">Inspection</h3>
              <p className="text-sm text-[#6a7aa1] leading-relaxed">
                Comprehensive system inspection and diagnostic assessment
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#44c5e2] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-lg text-[#384d82] mb-2">Planning</h3>
              <p className="text-sm text-[#6a7aa1] leading-relaxed">
                Detailed maintenance plan based on system condition and needs
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#44c5e2] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-lg text-[#384d82] mb-2">Execution</h3>
              <p className="text-sm text-[#6a7aa1] leading-relaxed">
                Professional maintenance work performed by certified technicians
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#44c5e2] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-lg text-[#384d82] mb-2">Testing</h3>
              <p className="text-sm text-[#6a7aa1] leading-relaxed">
                System testing and performance verification to ensure optimal operation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Response */}
      <ImmediateResponse />

      {/* FAQ */}
      <FAQ />

      {/* Contact Us Section */}
      <ContactUs />
    </div>
  )
}