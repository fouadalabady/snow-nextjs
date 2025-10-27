import Image from "next/image";

interface BenefitCard {
  icon: React.ReactNode;
  title: string;
}

interface ServiceDetailSectionProps {
  title: string;
  description: string;
  features: string[];
  illustrationSrc: string;
  illustrationAlt: string;
  benefits?: {
    title: string;
    cards: BenefitCard[];
  };
  reversed?: boolean;
  backgroundColor?: "white" | "gray";
}

export function ServiceDetailSection({
  title,
  description,
  features,
  illustrationSrc,
  illustrationAlt,
  benefits,
  reversed = false,
  backgroundColor = "white",
}: ServiceDetailSectionProps) {
  const bgClass = backgroundColor === "gray" ? "bg-gray-50" : "bg-white";

  return (
    <section className={`w-full py-16 md:py-20 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-[140px] ${bgClass}`}>
      <div className="max-w-[1160px] mx-auto">
        {/* Main Content Section */}
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16 ${reversed ? "lg:grid-flow-dense" : ""}`}>
          {/* Illustration */}
          <div className={`relative ${reversed ? "lg:col-start-2" : ""}`}>
            <Image
              src={illustrationSrc}
              alt={illustrationAlt}
              width={345}
              height={397}
              className="w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className={reversed ? "lg:col-start-1 lg:row-start-1" : ""}>
            <h2 className="font-semibold text-2xl md:text-3xl lg:text-[32px] text-[#384d82] capitalize mb-4 lg:mb-6 leading-tight"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}>
              {title}
            </h2>
            <p className="font-normal text-sm md:text-base text-[#6a7aa1] mb-6 lg:mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}>
              {description}
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-[#6a7aa1]"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Cards Section */}
        {benefits && (
          <div>
            <h3 className="font-semibold text-xl md:text-2xl text-[#384d82] mb-8 lg:mb-12"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}>
              {benefits.title}
            </h3>
            <div className={`grid md:grid-cols-2 ${benefits.cards.length > 3 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-6`}>
              {benefits.cards.map((card, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-[#44c5e2]/10 rounded-xl flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h4 className="font-medium text-base text-[#384d82] leading-relaxed"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}>
                    {card.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
