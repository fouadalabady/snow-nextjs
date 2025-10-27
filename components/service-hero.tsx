import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ServiceHeroProps {
  breadcrumbService: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export function ServiceHero({
  breadcrumbService,
  title,
  description,
  imageSrc,
  imageAlt,
}: ServiceHeroProps) {
  return (
    <section className="w-full bg-[#384d82] py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-[140px]">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-[24px] items-center max-w-[1440px] mx-auto">
        {/* Left Column - Content */}
        <div className="flex-1 flex flex-col gap-[12px] items-start justify-center max-w-[766px]">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-[6px] mb-2">
            <Link
              href="/"
              className="text-white/40 text-[12px] font-medium capitalize hover:text-white/60 transition-colors"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              home
            </Link>
            <span className="text-white/40 text-[12px] font-medium">
              &gt;&gt;
            </span>
            <Link
              href="/services"
              className="text-white/40 text-[12px] font-medium capitalize hover:text-white/60 transition-colors"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              services
            </Link>
            <span className="text-white/40 text-[12px] font-medium">
              &gt;&gt;
            </span>
            <span
              className="bg-clip-text bg-gradient-to-b from-[#44c5e2] to-[#e3f6fb] text-transparent text-[12px] font-medium capitalize"
              style={{
                fontFamily: "var(--font-poppins)",
                fontWeight: 500,
                WebkitTextFillColor: "transparent",
              }}
            >
              {breadcrumbService}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-white text-[32px] font-semibold capitalize leading-normal w-full"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className="text-[#e1e4ec] text-[16px] font-normal leading-normal w-full"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
          >
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-[24px] items-start mt-4">
            <Button
              className="bg-white text-[#384d82] hover:bg-gray-100 border-0 rounded-[8px] px-[16px] py-[8px] h-[40px] font-medium text-[16px] leading-normal transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              Contact Us
            </Button>

            <button
              className="border-[1.5px] border-white text-white rounded-[8px] px-[16px] py-[8px] h-[40px] font-medium text-[16px] leading-normal flex items-center gap-[10px] hover:bg-white hover:text-[#384d82] transition-all duration-300 hover:scale-105"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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

        {/* Right Column - Image */}
        <div className="flex-1 relative h-[300px] md:h-[356px] w-full rounded-[12px] overflow-hidden shadow-[0px_8px_16px_0px_rgba(56,77,130,0.15)]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
