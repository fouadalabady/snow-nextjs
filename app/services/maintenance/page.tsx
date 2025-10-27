import { ImmediateResponse } from "@/components/immediate-response";
import { ContactUs } from "@/components/contact-us";
import { FAQ } from "@/components/faq";
import { Numbers } from "@/components/numbers";
import { ServiceHero } from "@/components/service-hero";
import { ServiceOverview } from "@/components/service-overview";
import { ServiceDetailSection } from "@/components/service-detail-section";
import { WhatWeOfferWrapper } from "@/components/what-we-offer-wrapper";
import { TeamMembers } from "@/components/TeamMembers";
import { OtherServices } from "@/components/other-services";

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

      {/* What Do We Offer Sections */}
      <WhatWeOfferWrapper>
        {/* Section 1: Immediate Emergency Response */}
        <ServiceDetailSection
          title="Immediate Emergency Response"
          description="Snow Immediate Emergency Response is available 24/7. Our team handles emergencies swiftly and professionally, minimizing downtime and restoring comfort."
          features={["24/7 Immediate Assistance", "0 Downtime and Disruption"]}
          illustrationSrc="/services/service-1-1.svg"
          illustrationAlt="Immediate Emergency Response"
          backgroundColor="white"
        />

        {/* Section 2: Annual Maintenance Contracts (AMC) */}
        <ServiceDetailSection
          title="Annual Maintenance Contracts (AMC)"
          description="Our Annual Maintenance Contracts (AMC) offer regular visits and fixed Performance Maintenance to keep your systems running smoothly year-round."
          features={[
            "Scheduled Inspections And Maintenance Visits",
            "Cleaning Of Filters And Heat Exchangers",
            "Full Inspection Of Electrical And Mechanical Components",
            "Detailed Performance Reports And Observations",
            "Emergency Response As Part Of The Contract",
            "Contract Customization By Facility Type (Residential, Commercial, Industrial)",
          ]}
          illustrationSrc="/services/service-1-2.svg"
          illustrationAlt="Annual Maintenance Contracts"
          benefits={{
            title: "Contract Benefits",
            cards: [
              {
                icon: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#44c5e2]"
                  >
                    <path
                      d="M22 12h-4l-3 9L9 3l-3 9H2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                title: "Fewer Unexpected Breakdowns",
              },
              {
                icon: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#44c5e2]"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                title: "Extended System Life",
              },
              {
                icon: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#44c5e2]"
                  >
                    <path
                      d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                title: "Better Energy Efficiency",
              },
              {
                icon: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#44c5e2]"
                  >
                    <path
                      d="M3 3v18h18M7 16l4-4 4 4 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                title: "Lower Long-term Operating Costs",
              },
            ],
          }}
          backgroundColor="gray"
          reversed={true}
        />

        {/* Section 3: Planned Preventive Maintenance (PPM) */}
        <ServiceDetailSection
          title="Planned Preventive Maintenance (PPM)"
          description="Planned Preventive Maintenance (PPM) follows manufacturer recommendations and historical data to prevent failures before they occur."
          features={[
            "Visits Are Scheduled According To OEM Guidelines And Operating Data",
            "Proactive Cleaning, Inspection, And Part Replacement",
            "Full Inspection Of Electrical And Mechanical Components",
            "Keeps Systems In Top Condition And Prevents Sudden Failures",
            "Maintains Consistent Performance And Uptime",
          ]}
          illustrationSrc="/services/service-1-3.svg"
          illustrationAlt="Planned Preventive Maintenance"
          benefits={{
            title: "PPM Objectives",
            cards: [
              {
                icon: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#44c5e2]"
                  >
                    <path
                      d="M22 12h-4l-3 9L9 3l-3 9H2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                title: "Minimize Unplanned Downtime",
              },
              {
                icon: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#44c5e2]"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                title: "Extend Equipment Life",
              },
              {
                icon: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#44c5e2]"
                  >
                    <path
                      d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                title: "Lower Emergency Repair Costs",
              },
              {
                icon: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#44c5e2]"
                  >
                    <path
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                title: "Improve Workplace Safety",
              },
              {
                icon: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#44c5e2]"
                  >
                    <path
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                title: "Ensure Quality And Productivity",
              },
            ],
          }}
          backgroundColor="white"
        />

        {/* Section 4: Specialized Maintenance For Central AC Units & Chillers */}
        <ServiceDetailSection
          title="Specialized Maintenance For Central AC Units & Chillers"
          description="Specialized maintenance for central AC units and chillers ensures optimal performance, energy efficiency, and extended equipment life through expert care."
          features={["24/7 Immediate Assistance", "0 Downtime and Disruption"]}
          illustrationSrc="/services/service-1-4.svg"
          illustrationAlt="Specialized Maintenance"
          backgroundColor="gray"
          reversed={true}
        />
      </WhatWeOfferWrapper>

      {/* Team Members Section */}
      <TeamMembers />

      {/* Other Services Section */}
      <OtherServices
        services={[
          {
            title: "Supply & Installation Of High-Performance AC Units",
            description:
              "We Provide End-To-End Solutions For Supplying And Installing AC Systems, Ensuring Precision, Performance, And Energy Efficiency Through The Use Of Cutting-Edge Technologies And Expert Teams.",
            imageSrc: "/services/Service-2.jpg",
            imageAlt: "Supply & Installation Service",
            link: "/services/supply-installation",
          },
          {
            title: "Indoor Air Quality (IAQ) Enhancement",
            description:
              "We Offer Regular System Maintenance And Fast, Effective Repair Services To Ensure Your AC Systems Operate Reliably And Efficiently.",
            imageSrc: "/services/Service-3.jpg",
            imageAlt: "Indoor Air Quality Service",
            link: "/services/indoor-air-quality",
          },
        ]}
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
              We offer comprehensive maintenance services tailored to different
              needs and system types
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Preventive Maintenance */}
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#44c5e2]/10 rounded-xl flex items-center justify-center mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-[#44c5e2]"
                >
                  <path
                    d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-[#384d82] mb-3">
                Preventive Maintenance
              </h3>
              <p className="text-sm text-[#6a7aa1] mb-4 leading-relaxed">
                Regular scheduled maintenance to prevent breakdowns and ensure
                optimal performance
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
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-[#44c5e2]"
                >
                  <path
                    d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-[#384d82] mb-3">
                Emergency Repairs
              </h3>
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
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-[#44c5e2]"
                >
                  <path
                    d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-[#384d82] mb-3">
                System Optimization
              </h3>
              <p className="text-sm text-[#6a7aa1] mb-4 leading-relaxed">
                Performance tuning and efficiency improvements for existing
                systems
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
              Our systematic approach ensures thorough maintenance and optimal
              system performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#44c5e2] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-lg text-[#384d82] mb-2">
                Inspection
              </h3>
              <p className="text-sm text-[#6a7aa1] leading-relaxed">
                Comprehensive system inspection and diagnostic assessment
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#44c5e2] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-lg text-[#384d82] mb-2">
                Planning
              </h3>
              <p className="text-sm text-[#6a7aa1] leading-relaxed">
                Detailed maintenance plan based on system condition and needs
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#44c5e2] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-lg text-[#384d82] mb-2">
                Execution
              </h3>
              <p className="text-sm text-[#6a7aa1] leading-relaxed">
                Professional maintenance work performed by certified technicians
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#44c5e2] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-lg text-[#384d82] mb-2">
                Testing
              </h3>
              <p className="text-sm text-[#6a7aa1] leading-relaxed">
                System testing and performance verification to ensure optimal
                operation
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
  );
}
