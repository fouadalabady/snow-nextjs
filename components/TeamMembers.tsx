"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

// Team member interface
interface TeamMember {
  name: string;
  position: string;
  experience: string;
  description: string;
  image: string;
}

// Team member card component based on Figma design
function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white flex flex-col rounded-[12px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-[247px] w-full overflow-hidden">
        <Image 
          src={member.image}
          alt={`${member.name} - ${member.position}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      
      {/* Content Section */}
      <div className="flex flex-col gap-[12px] p-[24px]">
        {/* Experience Badge */}
        <div className="flex items-center justify-start w-full">
          <p 
            className="text-[#02bf51] text-[12px] font-medium capitalize leading-normal"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
          >
            {member.experience}
          </p>
        </div>
        
        {/* Name and Position */}
        <div className="flex flex-col items-start leading-normal">
          <h3 
            className="text-snow-secondary text-[24px] font-semibold capitalize"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
          >
            {member.name}
          </h3>
          <p 
            className="text-[#6a7aa1] text-[16px] font-medium capitalize"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
          >
            {member.position}
          </p>
        </div>
        
        {/* Description */}
        <p 
          className="text-[#6a7aa1] text-[14px] font-normal capitalize leading-normal"
          style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
        >
          {member.description}
        </p>
      </div>
    </div>
  );
}

// Enhanced Our Team section component with team member cards
export function TeamMembers() {
  // Team members data
  const teamMembers: TeamMember[] = [
    {
      name: "Ahmed Khaled",
      position: "General Manager",
      experience: "+20 Years of Experience",
      description: "We offer regular system maintenance and fast, effective repair services to ensure your AC systems operate reliably and efficiently.",
      image: "/team/TeamMemebr.jpg"
    },
    {
      name: "Sarah Johnson",
      position: "Technical Director",
      experience: "+15 Years of Experience",
      description: "Leading our technical team with expertise in HVAC system design and implementation for commercial and residential projects.",
      image: "/images/team/sarah-johnson.svg"
    },
    {
      name: "John Smith",
      position: "Operations Manager",
      experience: "+18 Years of Experience",
      description: "Ensuring seamless operations and customer satisfaction through efficient project management and quality control.",
      image: "/images/team/john-smith.svg"
    },
    {
      name: "Emily Chen",
      position: "Service Manager",
      experience: "+12 Years of Experience",
      description: "Coordinating maintenance services and emergency repairs to keep your systems running at peak performance.",
      image: "/images/team/emily-chen.svg"
    },
    {
      name: "Mike Davis",
      position: "Installation Specialist",
      experience: "+14 Years of Experience",
      description: "Expert in HVAC installation with a focus on energy efficiency and sustainable cooling solutions.",
      image: "/images/team/mike-davis.svg"
    },
    {
      name: "Lisa Rodriguez",
      position: "Customer Relations",
      experience: "+10 Years of Experience",
      description: "Dedicated to providing exceptional customer service and ensuring client satisfaction at every touchpoint.",
      image: "/images/team/lisa-rodriguez.svg"
    }
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container-section">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          {/* Section Label */}
          <p 
            className="text-snow-primary text-lg md:text-xl lg:text-[24px] font-medium capitalize mb-3"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
          >
            Our Team
          </p>
          
          {/* Main Title */}
          <h2 
            className="text-snow-secondary text-2xl md:text-3xl lg:text-[32px] font-semibold capitalize leading-tight mb-4 max-w-[800px]"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
          >
            The 1st maintenances specialists in the region
          </h2>
          
          {/* Description */}
          <p 
            className="text-[#6a7aa1] text-sm md:text-base lg:text-[16px] font-normal leading-relaxed max-w-[700px]"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
          >
            We are a Saudi company specialized in providing integrated engineering solutions in the field of air conditioning and refrigeration, with a strong focus on quality and professionalism at every stage of the work process.
          </p>
        </div>
        
        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center">
          <Button 
            className="bg-snow-primary hover:bg-snow-primary/90 text-white border-0 rounded-[8px] px-6 md:px-8 py-3 md:py-4 h-auto font-medium text-sm md:text-base leading-normal transition-all duration-300 hover:shadow-lg hover:scale-105 w-full sm:w-auto min-w-[160px]"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
          >
            Meet our team
          </Button>
          
          <Button 
            variant="outline"
            className="border-snow-primary border-2 text-snow-primary hover:bg-snow-primary hover:text-white rounded-[8px] px-6 md:px-8 py-3 md:py-4 h-auto font-medium text-sm md:text-base leading-normal transition-all duration-300 hover:shadow-lg hover:scale-105 w-full sm:w-auto min-w-[160px]"
            style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
          >
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}