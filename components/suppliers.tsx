"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Supplier logo component
interface SupplierLogoProps {
  src: string;
  alt: string;
}

function SupplierLogo({ src, alt }: SupplierLogoProps) {
  return (
    <div className="flex items-center justify-center min-w-[200px] h-[100px] px-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
      <Image
        src={src}
        alt={alt}
        width={160}
        height={80}
        className="object-contain max-h-[80px] w-auto"
      />
    </div>
  );
}

// Main suppliers section component
export function Suppliers() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Supplier logos data
  const suppliers = [
    { src: "/suppliers/supplier-1.png", alt: "Supplier 1" },
    { src: "/suppliers/supplier-2.png", alt: "Supplier 2" },
    { src: "/suppliers/supplier-3.png", alt: "Supplier 3" },
    { src: "/suppliers/supplier-4.png", alt: "Supplier 4" },
    { src: "/suppliers/supplier-5.png", alt: "Supplier 5" },
    { src: "/suppliers/supplier-6.png", alt: "Supplier 6" },
  ];

  // Duplicate suppliers for seamless loop
  const duplicatedSuppliers = [...suppliers, ...suppliers];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

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
    <section className="w-full bg-white py-16 md:py-20 lg:py-[100px] px-4 sm:px-6 md:px-8 overflow-hidden">
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
            Our Trusted Partners
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-[32px] font-semibold text-[#585959] leading-tight max-w-[700px]"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
          >
            Working with Leading HVAC Equipment Suppliers
          </h2>
        </div>

        {/* Scrolling logos container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden"
            style={{ scrollBehavior: "auto" }}
          >
            {duplicatedSuppliers.map((supplier, index) => (
              <SupplierLogo
                key={`${supplier.alt}-${index}`}
                src={supplier.src}
                alt={supplier.alt}
              />
            ))}
          </div>
        </div>

        {/* Optional description */}
        <p
          className="text-center text-[#6a7aa1] text-sm md:text-base mt-8 max-w-[600px] mx-auto"
          style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
        >
          We partner with the world's leading HVAC manufacturers to bring you
          the best quality equipment and solutions.
        </p>
      </div>
    </section>
  );
}
