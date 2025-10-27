"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

// Feature card component
interface FeatureCardProps {
  icon: string;
  title: string;
  highlighted?: boolean;
}

function FeatureCard({ icon, title, highlighted = false }: FeatureCardProps) {
  return (
    <div
      className={`rounded-[12px] p-[24px] flex flex-col gap-[12px] items-start w-[272px] h-[162px] ${
        highlighted
          ? "bg-snow-light/40 border-2 border-snow-primary"
          : "bg-snow-light/40"
      }`}
    >
      {/* Icon */}
      <div className="w-[48px] h-[48px] relative shrink-0">
        <Image
          alt="Feature Icon"
          className="w-full h-full object-contain"
          src={icon}
          width={48}
          height={48}
        />
      </div>

      {/* Title */}
      <p
        className="text-[18px] font-medium text-snow-primary leading-normal"
        style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
      >
        {title}
      </p>
    </div>
  );
}

// Main why choose section component
export function WhyChoose() {
  const features = [
    {
      icon: "/icons/trusted-partner.svg",
      title: "Trusted Partner in HVAC Solutions",
      highlighted: false,
    },
    {
      icon: "icons/leading-expertise.svg",
      title: "Leading Expertise Powered by Advanced Technologies",
      highlighted: false,
    },
    {
      icon: "/icons/tailored-systems.svg",
      title: "Tailored Systems for Your Project's Specific Needs",
      highlighted: false,
    },
    {
      icon: "/icons/proactive-control.svg",
      title: "Proactive HVAC Control for Lasting Comfort",
      highlighted: false,
    },
    {
      icon: "/icons/sustainability.svg",
      title: "Sustainability Built into Every Solution",
      highlighted: true,
    },
    {
      icon: "/icons/reliable-support.svg",
      title: "Reliable Support at Every Stage of the Project",
      highlighted: false,
    },
  ];

  return (
    <section className="w-full bg-white py-[80px]">
      <div className="container-section">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-[60px]">
          {/* Content side */}
          <div className="flex flex-col gap-[24px] items-start w-full lg:w-[568px]">
            {/* Section header */}
            <div className="flex flex-col gap-[6px] items-start">
              {/* Gradient label */}
              <p
                className="text-[24px] font-medium bg-gradient-to-b from-snow-primary to-snow-light bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
              >
                Why Choose Snow !
              </p>

              {/* Main title */}
              <h2
                className="text-[32px] font-semibold text-gray-700 leading-normal"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
              >
                Pick The Qualified Team With +20 Years Of Experience , And More
              </h2>
            </div>

            {/* CTA button */}
            <Button
              className="bg-snow-primary hover:bg-snow-primary/90 text-white border-0 rounded-[8px] px-[16px] py-[8px] h-auto font-medium text-[16px] leading-normal"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              Contact Us
            </Button>
          </div>

          {/* Features grid - Custom layout matching the design */}
          <div className="relative w-full lg:w-[592px]">
            {/* Top row - 2 cards */}
            <div className="flex gap-[24px] mb-[24px]">
              <FeatureCard
                icon={features[0].icon}
                title={features[0].title}
                highlighted={features[0].highlighted}
              />
              <FeatureCard
                icon={features[1].icon}
                title={features[1].title}
                highlighted={features[1].highlighted}
              />
            </div>

            {/* Middle row - 2 cards */}
            <div className="flex gap-[24px] mb-[24px]">
              <FeatureCard
                icon={features[2].icon}
                title={features[2].title}
                highlighted={features[2].highlighted}
              />
              <FeatureCard
                icon={features[3].icon}
                title={features[3].title}
                highlighted={features[3].highlighted}
              />
            </div>

            {/* Bottom row - 2 cards */}
            <div className="flex gap-[24px]">
              <FeatureCard
                icon={features[4].icon}
                title={features[4].title}
                highlighted={features[4].highlighted}
              />
              <FeatureCard
                icon={features[5].icon}
                title={features[5].title}
                highlighted={features[5].highlighted}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
