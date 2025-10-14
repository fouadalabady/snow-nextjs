import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ContactUs() {
  return (
    <section className="relative min-h-[600px] bg-snow-secondary flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image 
          src="/Stocks/ContactUsStock.jpg" 
          alt="Contact Us Background" 
          className="w-full h-[198.3%] object-cover absolute top-[-78.38%] left-0"
          fill
          sizes="100vw"
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-[960px] mx-auto px-6 text-center">
        {/* Contact Us Label */}
        <p className="text-snow-primary text-lg font-medium capitalize mb-3">
          Contact us
        </p>
        
        {/* Main Content */}
        <div className="space-y-6 mb-8">
          {/* Main Heading */}
          <h2 className="text-white text-[32px] font-bold capitalize leading-tight">
            The 1st maintenances specialists in the region
          </h2>
          
          {/* Description */}
          <p className="text-gray-200 text-base leading-relaxed max-w-4xl mx-auto">
            We are a Saudi company specialized in providing integrated engineering solutions in the field of air conditioning and refrigeration, with a strong focus on quality and professionalism at every stage of the work process.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          {/* Call Us Button */}
          <Button 
            className="bg-white text-snow-secondary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Call us
          </Button>
          
          {/* Message Us Button */}
          <Button 
            variant="outline" 
            className="border-white border-[1.5px] text-white hover:bg-white hover:text-snow-secondary px-6 py-3 rounded-lg font-medium transition-colors duration-200 bg-transparent"
          >
            Message Us
          </Button>
        </div>
      </div>
    </section>
  );
}