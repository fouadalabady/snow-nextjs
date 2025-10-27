import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ServiceOverviewProps {
  label?: string;
  title: string;
  description: string;
  illustrationSrc: string;
  illustrationAlt: string;
}

export function ServiceOverview({
  label = "About The Service",
  title,
  description,
  illustrationSrc,
  illustrationAlt,
}: ServiceOverviewProps) {
  return (
    <section className="w-full py-16 md:py-20 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-[140px]">
      <div className="max-w-[1160px] mx-auto">
        <div className="bg-snow-light/40 rounded-[12px] p-6 md:p-10 lg:p-[48px_100px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Content Section */}
          <div className="flex flex-col gap-[12px] items-start w-full lg:w-[467px]">
            {/* Gradient Label */}
            <p
              className="text-xl md:text-[24px] font-medium bg-gradient-to-b from-snow-primary to-snow-light bg-clip-text text-transparent capitalize"
              style={{
                fontFamily: "var(--font-poppins)",
                fontWeight: 500,
                WebkitTextFillColor: "transparent",
              }}
            >
              {label}
            </p>

            {/* Title */}
            <h2
              className="text-2xl md:text-[28px] font-semibold text-[#384d82] capitalize leading-tight"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
            >
              {title}
            </h2>

            {/* Description */}
            <p
              className="text-sm md:text-[14px] font-normal text-[#6a7aa1] capitalize leading-relaxed"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-[24px] items-start mt-4">
              <Button
                className="bg-snow-primary hover:bg-snow-primary/90 text-[#384d82] border-0 rounded-[8px] px-[16px] py-[8px] h-[40px] font-medium text-[16px] leading-normal transition-all duration-300 hover:scale-105 flex items-center gap-[10px]"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
              >
                Learn More
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>

              <button
                className="border-[1.5px] border-snow-primary text-snow-primary rounded-[8px] px-[16px] py-[8px] h-[40px] font-medium text-[16px] leading-normal hover:bg-snow-primary hover:text-white transition-all duration-300 hover:scale-105"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Illustration Section */}
          <div className="relative w-full lg:w-[467px] h-[300px] md:h-[390px] flex items-center justify-center">
            <Image
              src={illustrationSrc}
              alt={illustrationAlt}
              width={467}
              height={390}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
