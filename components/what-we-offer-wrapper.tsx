interface WhatWeOfferWrapperProps {
  children: React.ReactNode;
}

export function WhatWeOfferWrapper({ children }: WhatWeOfferWrapperProps) {
  return (
    <section className="w-full">
      {/* Section Title */}
      <div className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 text-center">
        <div className="max-w-[766px] mx-auto">
          <p
            className="text-xl md:text-[24px] font-medium bg-gradient-to-b from-snow-primary to-snow-light bg-clip-text text-transparent capitalize mb-3"
            style={{
              fontFamily: "var(--font-poppins)",
              fontWeight: 500,
              WebkitTextFillColor: "transparent",
            }}
          >
            What Do We Offer
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-[32px] font-semibold text-[#585959] leading-tight"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
          >
            Custom HVAC Solutions
          </h2>
          <p
            className="text-sm md:text-base text-[#6a7aa1] mt-4 leading-relaxed"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
          >
            Snow offers tailored HVAC solutions for residential, commercial, and
            industrial spaces. Our certified team designs, installs, and maintains
            efficient systems that lower energy use, extend equipment life, and
            improve air quality.
          </p>
        </div>
      </div>

      {/* Service Detail Sections */}
      <div>{children}</div>
    </section>
  );
}
