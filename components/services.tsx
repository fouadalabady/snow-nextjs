"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Section title component
function SectionTitle() {
  return (
    <div className="flex flex-col gap-[12px] items-center justify-center text-center max-w-[766px] mx-auto">
      {/* Gradient label */}
      <p
        className="text-[24px] font-medium bg-gradient-to-b from-snow-primary to-snow-light bg-clip-text text-transparent capitalize"
        style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
      >
        our Services
      </p>

      {/* Main title */}
      <h2
        className="text-[32px] font-semibold text-[#585959] capitalize leading-normal"
        style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
      >
        Custom HVAC Solutions
      </h2>

      {/* Description */}
      <p
        className="text-[16px] font-normal text-[#6a7aa1] leading-normal"
        style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
      >
        Snow offers tailored HVAC solutions for residential, commercial, and
        industrial spaces. Our certified team designs, installs, and maintains
        efficient systems that lower energy use, extend equipment life, and
        improve air quality.
      </p>
    </div>
  );
}

// Individual service card component
interface ServiceCardProps {
  title: string;
  description: string;
  illustration: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  reverse?: boolean;
}

function ServiceCard({
  title,
  description,
  illustration,
  primaryButtonText = "Learn More",
  secondaryButtonText = "Contact Us",
  reverse = false,
}: ServiceCardProps) {
  return (
    <div
      className={`bg-white rounded-[8px] flex items-center justify-between overflow-hidden h-[438px] ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      {/* Content side */}
      <div className="flex flex-col gap-[12px] items-start  max-w-[766px] pt-[48px] pb-0 pl-[100px] pr-[97px]">
        {/* Title */}
        <h3
          className="text-[28px] font-semibold text-snow-secondary leading-normal w-full"
          style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-[14px] font-normal text-[#6a7aa1] leading-normal w-full"
          style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
        >
          {description}
        </p>

        {/* CTA buttons */}
        <div className="flex gap-[24px] items-start">
          <Button
            className="bg-snow-primary hover:bg-snow-primary/90 text-snow-secondary border-0 rounded-[8px] px-[16px] py-[8px] h-[40px] font-medium text-[16px] leading-normal flex items-center gap-[10px]"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
          >
            {primaryButtonText}
            <ArrowRight className="w-[24px] h-[24px] rotate-90 scale-y-[-1]" />
          </Button>

          <Button
            variant="outline"
            className="bg-transparent hover:bg-snow-primary/10 text-snow-primary border-[1.5px] border-solid border-snow-primary rounded-[8px] px-[16px] py-[8px] h-[40px] font-medium text-[16px] leading-normal"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
          >
            {secondaryButtonText}
          </Button>
        </div>
      </div>

      {/* Illustration side */}
      <div className="w-[467px] h-[390px] overflow-hidden relative shrink-0">
        <Image
          alt="HVAC Service Illustration"
          className="w-full h-full object-contain"
          src={illustration}
          width={467}
          height={390}
        />
      </div>
    </div>
  );
}

// Main services section component
export function Services() {
  const services = [
    {
      title: "Periodic Maintenance & Rapid Repairs for Continuous Performance",
      description:
        "We offer regular system maintenance and fast, effective repair services to ensure your AC systems operate reliably and efficiently.",
      illustration: "/services/PeriodicMaintenance.svg",
      reverse: false,
    },
    {
      title: "Supply & Installation of High-performance AC Units",
      description:
        "We provide end-to-end solutions for supplying and installing AC systems, ensuring precision, performance, and energy efficiency through the use of cutting-edge technologies and expert teams.",
      illustration: "/services/SupplyAndInstallation.svg",
      reverse: true,
    },
    {
      title: "Indoor Air Quality (IAQ) Enhancement",
      description:
        "We provide fully integrated air-purification systems that eliminate odors, fine particles, and harmful microbes, ensuring a safe and healthy environment.",
      illustration: "/services/IndoorAirQuality.svg",
      reverse: false,
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-[80px]">
      <div className="px-4 lg:px-[140px]">
        {/* Section Title */}
        <div className="mb-[69px]">
          <SectionTitle />
        </div>

        {/* Services Container */}
        <div className="flex flex-col gap-[60px]">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              illustration={service.illustration}
              reverse={service.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
