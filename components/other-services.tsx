import Image from "next/image";
import Link from "next/link";

interface ServiceCard {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
}

interface OtherServicesProps {
  services: ServiceCard[];
}

export function OtherServices({ services }: OtherServicesProps) {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-[140px]">
      <div className="max-w-[1160px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p
            className="text-xl md:text-[24px] font-medium bg-gradient-to-b from-snow-primary to-snow-light bg-clip-text text-transparent capitalize mb-3"
            style={{
              fontFamily: "var(--font-poppins)",
              fontWeight: 500,
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Services
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-[32px] font-semibold text-[#585959] leading-tight mb-4"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
          >
            Custom HVAC Solutions
          </h2>
          <p
            className="text-sm md:text-base text-[#6a7aa1] max-w-[700px] mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
          >
            Snow offers tailored HVAC solutions for residential, commercial, and
            industrial spaces. Our certified team designs, installs, and maintains
            efficient systems that lower energy use, extend equipment life, and
            improve air quality.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Service Image */}
              <div className="relative h-[247px] w-full overflow-hidden">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Service Content */}
              <div className="p-6 lg:p-8">
                <h3
                  className="text-xl md:text-2xl font-semibold text-[#384d82] mb-3 leading-tight"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm md:text-base text-[#6a7aa1] mb-6 leading-relaxed"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                >
                  {service.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={service.link}
                    className="bg-snow-primary hover:bg-snow-primary/90 text-[#384d82] px-6 py-3 rounded-lg font-medium text-sm md:text-base transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
                  >
                    Learn More
                    <svg
                      width="20"
                      height="20"
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
                  </Link>
                  <button
                    className="border-[1.5px] border-snow-primary text-snow-primary px-6 py-3 rounded-lg font-medium text-sm md:text-base hover:bg-snow-primary hover:text-white transition-all duration-300 hover:scale-105"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
