"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Customer logo component
interface CustomerLogoProps {
  src: string;
  alt: string;
}

function CustomerLogo({ src, alt }: CustomerLogoProps) {
  return (
    <div className="flex items-center justify-center min-w-[180px] h-[90px] px-6 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
      <Image
        src={src}
        alt={alt}
        width={140}
        height={70}
        className="object-contain max-h-[70px] w-auto"
      />
    </div>
  );
}

// Main customers section component
export function Customers() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Customer logos data
  const customers = [
    { src: "/customers/customer-1.png", alt: "Client 1" },
    { src: "/customers/customer-2.png", alt: "Client 2" },
    { src: "/customers/customer-3.png", alt: "Client 3" },
    { src: "/customers/customer-4.png", alt: "Client 4" },
    { src: "/customers/customer-5.png", alt: "Client 5" },
    { src: "/customers/customer-6.png", alt: "Client 6" },
    { src: "/customers/customer-7.png", alt: "Client 7" },
    { src: "/customers/customer-8.png", alt: "Client 8" },
  ];

  // Duplicate customers for seamless loop
  const duplicatedCustomers = [...customers, ...customers];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.4; // Slightly slower than suppliers

    const scroll = () => {
      scrollPosition += scrollSpeed;

      // Reset scroll position for seamless loop
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  return (
    <section className="w-full bg-gray-50 py-16 md:py-20 lg:py-[100px] px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="max-w-[1160px] mx-auto">
        {/* Section header */}
        <div className="flex flex-col gap-[12px] items-center text-center mb-12 lg:mb-16">
          <p
            className="text-xl md:text-[24px] font-medium bg-gradient-to-b from-snow-primary to-snow-light bg-clip-text text-transparent"
            style={{
              fontFamily: "var(--font-poppins)",
              fontWeight: 500,
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Valued Clients
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-[32px] font-semibold text-[#585959] leading-tight max-w-[700px]"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
          >
            Trusted by Leading Organizations Across the Region
          </h2>
        </div>

        {/* Scrolling logos container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden"
            style={{ scrollBehavior: "auto" }}
          >
            {duplicatedCustomers.map((customer, index) => (
              <CustomerLogo
                key={`${customer.alt}-${index}`}
                src={customer.src}
                alt={customer.alt}
              />
            ))}
          </div>
        </div>

        {/* Optional description */}
        <p
          className="text-center text-[#6a7aa1] text-sm md:text-base mt-8 max-w-[600px] mx-auto"
          style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
        >
          Proud to serve a diverse range of clients from various industries
          across the region.
        </p>
      </div>
    </section>
  );
}
