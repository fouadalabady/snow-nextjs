"use client";

import { useState, useEffect, useRef } from "react";

// Section title component
interface SectionTitleProps {
  className?: string;
  label?: string;
  title?: string;
}

function SectionTitle({ 
  className, 
  label = "Our Numbers", 
  title = "The 1st Maintenances Specialists In The Region"
}: SectionTitleProps) {
  return (
    <div className={`flex flex-col gap-[12px] items-center justify-center text-center ${className}`}>
      {/* Gradient label text */}
      <p 
        className="text-xl md:text-[24px] font-medium bg-gradient-to-b from-snow-primary to-snow-light bg-clip-text text-transparent"
        style={{ 
          fontFamily: "var(--font-poppins)", 
          fontWeight: 500,
          WebkitTextFillColor: "transparent"
        }}
      >
        {label}
      </p>
      
      {/* Main title */}
      <h2 
        className="text-2xl md:text-3xl lg:text-[32px] font-semibold text-[#585959] leading-tight"
        style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
      >
        {title}
      </h2>
    </div>
  );
}

// Individual stat item component with counter animation
interface StatItemProps {
  number: string;
  description: string;
  isVisible: boolean;
  delay?: number;
}

function StatItem({ number, description, isVisible, delay = 0 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const targetNumber = parseInt(number.replace(/\D/g, ""));
  const prefix = number.match(/[^\d]/)?.[0] || "";
  
  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetNumber / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [isVisible, targetNumber]);
  
  return (
    <div 
      className={`flex flex-col items-center text-center gap-[10px] p-[10px] w-full max-w-[272px] capitalize transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Large number with animation */}
      <p 
        className="text-4xl md:text-5xl lg:text-[56px] leading-tight font-bold text-snow-secondary"
        style={{ fontFamily: "var(--font-poppins)", fontWeight: 700 }}
      >
        {prefix}{count}
      </p>
      
      {/* Description */}
      <p 
        className="text-base md:text-lg lg:text-[18px] leading-normal font-medium text-[#6a7aa1]"
        style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
      >
        {description}
      </p>
    </div>
  );
}

// Vertical divider component
function Divider() {
  return <div className="w-[3px] h-[97px] bg-[#e1e4ec] shrink-0" />;
}

// Custom hook for intersection observer
function useIntersectionObserver(threshold: number = 0.3) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, isVisible]);

  return { ref, isVisible };
}

// Main numbers section component
export function Numbers() {
  const { ref, isVisible } = useIntersectionObserver(0.2);
  
  const stats = [
    { number: "+20", description: "Years of Experience" },
    { number: "500", description: "Projects Completed" },
    { number: "100", description: "Happy Clients" }
  ];

  return (
    <section className="w-full  py-16 md:py-20 lg:py-[120px] px-4 sm:px-6 md:px-8">
      <div className="max-w-[1160px] mx-auto flex flex-col items-center gap-12 lg:gap-[60px]">
        {/* Section title */}
        <SectionTitle 
          className="max-w-[766px] w-full"
          label="Our Numbers"
          title="Trusted by Hundreds of Clients Across the Region"
        />
        
        {/* Stats container */}
        <div 
          ref={ref}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-0 w-full max-w-[1000px] mx-auto"
        >
          <StatItem 
            number={stats[0].number} 
            description={stats[0].description}
            isVisible={isVisible}
            delay={0}
          />
          
          <div className="hidden lg:block">
            <Divider />
          </div>
          
          <StatItem 
            number={stats[1].number} 
            description={stats[1].description}
            isVisible={isVisible}
            delay={200}
          />
          
          <div className="hidden lg:block">
            <Divider />
          </div>
          
          <StatItem 
            number={stats[2].number} 
            description={stats[2].description}
            isVisible={isVisible}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
}