"use client"

// Section title component with exact Figma specifications
interface SectionTitleProps {
  className?: string;
  label?: string;
  title?: string;
  style?: "Default" | "Light";
  direction?: "Center" | "Left";
}

function SectionTitle({ 
  className, 
  label = "Our Numbers", 
  title = "The 1st Maintenances Specialists In The Region", 
  style = "Default", 
  direction = "Center" 
}: SectionTitleProps) {
  return (
    <div className={`flex flex-col gap-[12px] items-center justify-center text-center ${className}`}>
      {/* Gradient label text */}
      <p 
        className="text-[24px] font-medium bg-gradient-to-b from-[#44c5e2] to-[#e3f6fb] bg-clip-text text-transparent"
        style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
      >
        {label}
      </p>
      
      {/* Main title */}
      <h2 
        className="text-[32px] font-semibold text-[#585959] leading-normal"
        style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
      >
        {title}
      </h2>
    </div>
  );
}

// Individual stat item component
interface StatItemProps {
  number: string;
  description: string;
}

function StatItem({ number, description }: StatItemProps) {
  return (
    <div className="flex flex-col items-center text-center gap-[10px] p-[10px] w-[272px] capitalize">
      {/* Large number */}
      <p 
        className="text-[48px] leading-[48px] font-semibold text-[#384d82]"
        style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
      >
        {number}
      </p>
      
      {/* Description */}
      <p 
        className="text-[18px] leading-normal font-medium text-[#6a7aa1]"
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

// Main numbers section component with exact Figma specifications
export function Numbers() {
  const stats = [
    { number: "+20", description: "Years of experience" },
    { number: "+20", description: "Years of experience" },
    { number: "+20", description: "Years of experience" }
  ];

  return (
    <section className="w-full bg-white box-border flex flex-col items-center gap-[69px] px-4 lg:px-[140px] py-[60px]">
      {/* Section title */}
      <SectionTitle 
        className="max-w-[766px] w-full"
        label="Our Numbers"
        title="The 1st Maintenances Specialists In The Region"
      />
      
      {/* Stats container */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 w-full max-w-[962px]">
        <StatItem 
          number={stats[0].number} 
          description={stats[0].description} 
        />
        
        <div className="hidden lg:block">
          <Divider />
        </div>
        
        <StatItem 
          number={stats[1].number} 
          description={stats[1].description} 
        />
        
        <div className="hidden lg:block">
          <Divider />
        </div>
        
        <StatItem 
          number={stats[2].number} 
          description={stats[2].description} 
        />
      </div>
    </section>
  );
}