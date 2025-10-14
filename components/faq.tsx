"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

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
      className={`rounded-[12px] p-[12px] w-full transition-colors ${
        isOpen 
          ? "bg-[#e1e4ec]" 
          : "bg-[rgba(225,228,236,0.27)]"
      }`}
    >
      {/* Question header */}
      <div 
        className="flex items-center justify-between w-full cursor-pointer"
        onClick={onToggle}
      >
        <p 
          className={`text-[18px] font-medium capitalize leading-normal ${
            isOpen ? "text-[#384d82]" : "text-[#6a7aa1]"
          }`}
          style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
        >
          {question}
        </p>
        
        {/* Toggle icon */}
        <div className="w-[24px] h-[24px] flex items-center justify-center">
          {isOpen ? (
            <Minus className="w-[16px] h-[16px] text-[#384d82]" />
          ) : (
            <Plus className="w-[16px] h-[16px] text-[#6a7aa1]" />
          )}
        </div>
      </div>
      
      {/* Answer content */}
      {isOpen && answer && (
        <div className="mt-[10px]">
          <p 
            className="text-[14px] font-normal text-[#6a7aa1] leading-normal"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
          >
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

// Main FAQ section component
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0); // First item open by default
  
  const faqs = [
    {
      question: "What do you offer",
      answer: "Snow offers tailored HVAC solutions for residential, commercial, and industrial spaces. Our certified team designs, installs, and maintains efficient systems that lower energy use, extend equipment life, and improve air quality."
    },
    {
      question: "What do you offer",
      answer: "We provide comprehensive maintenance services, emergency repairs, system upgrades, and energy efficiency consultations for all types of HVAC systems."
    },
    {
      question: "What do you offer", 
      answer: "Our services include installation of new HVAC systems, retrofitting existing systems, preventive maintenance programs, and 24/7 emergency support."
    },
    {
      question: "What do you offer",
      answer: "We specialize in commercial and industrial HVAC solutions, including custom system design, installation, maintenance, and energy optimization services."
    },
    {
      question: "What do you offer",
      answer: "Our team provides expert consultation, system design, professional installation, regular maintenance, and reliable repair services for all HVAC needs."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-white py-[80px]">
      <div className="px-4 lg:px-[140px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-[60px]">
          {/* Section header */}
          <div className="flex flex-col gap-[6px] items-start w-full lg:w-[468px]">
            {/* Gradient label */}
            <p 
              className="text-[24px] font-medium bg-gradient-to-b from-[#44c5e2] to-[#e3f6fb] bg-clip-text text-transparent capitalize"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
            >
              FAQS
            </p>
            
            {/* Main title */}
            <h2 
              className="text-[32px] font-semibold text-[#585959] leading-normal"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
            >
              Custom HVAC Solutions
            </h2>
          </div>
          
          {/* FAQ items */}
          <div className="flex flex-col gap-[24px] w-full lg:w-[469px]">
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