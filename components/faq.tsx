"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

// FAQ item component
interface FAQItemProps {
  question: string;
  answer?: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

function FAQItem({ question, answer, isOpen = false, onToggle }: FAQItemProps) {
  return (
    <div
      className={`rounded-[12px] p-[16px] w-full transition-all duration-300 ease-in-out hover:shadow-md ${
        isOpen
          ? "bg-[#e1e4ec] shadow-sm"
          : "bg-[rgba(225,228,236,0.27)] hover:bg-[rgba(225,228,236,0.4)]"
      }`}
    >
      {/* Question header */}
      <button
        className="flex items-center justify-between w-full cursor-pointer text-left group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <p
          className={`text-[18px] font-medium capitalize leading-normal transition-colors duration-200 pr-4 ${
            isOpen
              ? "text-snow-secondary"
              : "text-[#6a7aa1] group-hover:text-snow-secondary"
          }`}
          style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
        >
          {question}
        </p>

        {/* Toggle icon with rotation animation */}
        <div
          className={`w-[32px] h-[32px] flex items-center justify-center rounded-full transition-all duration-300 flex-shrink-0 ${
            isOpen
              ? "bg-snow-primary/20 rotate-180"
              : "bg-transparent group-hover:bg-snow-primary/10"
          }`}
        >
          {isOpen ? (
            <Minus className="w-[18px] h-[18px] text-snow-secondary transition-transform duration-300" />
          ) : (
            <Plus className="w-[18px] h-[18px] text-[#6a7aa1] group-hover:text-snow-primary transition-colors duration-200" />
          )}
        </div>
      </button>

      {/* Answer content with smooth expand/collapse animation */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mt-[12px]" : "max-h-0 opacity-0"
        }`}
      >
        <p
          className="text-[15px] font-normal text-[#585959] leading-relaxed"
          style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

// Main FAQ section component
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0); // First item open by default

  const faqs = [
    {
      question: "What services does Snow HVAC provide?",
      answer:
        "Snow offers tailored HVAC solutions for residential, commercial, and industrial spaces. Our certified team designs, installs, and maintains efficient systems that lower energy use, extend equipment life, and improve air quality.",
    },
    {
      question: "Do you offer emergency repair services?",
      answer:
        "Yes! We provide 24/7 emergency repair services with rapid response times. Our experienced technicians are available around the clock to handle urgent HVAC issues and ensure your comfort is restored quickly.",
    },
    {
      question: "How often should I schedule HVAC maintenance?",
      answer:
        "We recommend scheduling preventive maintenance at least twice a year - once before the cooling season and once before the heating season. Regular maintenance helps prevent breakdowns, improves efficiency, and extends your system's lifespan.",
    },
    {
      question: "What brands of HVAC equipment do you work with?",
      answer:
        "We work with all major HVAC brands and manufacturers. Our team is certified to install, maintain, and repair systems from leading brands, ensuring you get the best quality equipment and service for your needs.",
    },
    {
      question: "How long does a typical HVAC installation take?",
      answer:
        "Installation time varies depending on the system type and complexity. A standard residential installation typically takes 1-3 days, while commercial projects may take longer. We'll provide a detailed timeline during your consultation.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-gray-50 py-16 md:py-20 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-[140px]">
      <div className="max-w-[1160px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-[60px]">
          {/* Section header - Sticky on desktop */}
          <div className="flex flex-col gap-[12px] items-start w-full lg:w-[468px] lg:sticky lg:top-24">
            {/* Gradient label */}
            <p
              className="text-xl md:text-[24px] font-medium bg-gradient-to-b from-[#44c5e2] to-[#e3f6fb] bg-clip-text text-transparent capitalize"
              style={{
                fontFamily: "var(--font-poppins)",
                fontWeight: 500,
                WebkitTextFillColor: "transparent",
              }}
            >
              Frequently Asked Questions
            </p>

            {/* Main title */}
            <h2
              className="text-2xl md:text-3xl lg:text-[32px] font-semibold text-[#585959] leading-tight"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
            >
              Everything You Need to Know About Our HVAC Services
            </h2>

            {/* Description */}
            <p
              className="text-[16px] font-normal text-[#6a7aa1] leading-relaxed mt-2"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              Have questions? We&apos;ve got answers. Browse our most frequently
              asked questions below.
            </p>
          </div>

          {/* FAQ items */}
          <div className="flex flex-col gap-[16px] w-full lg:w-[592px]">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
