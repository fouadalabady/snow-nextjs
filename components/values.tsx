export function Values() {
  return (
    <section className="relative py-[80px] overflow-hidden">
      {/* Full Width Background - Bottom Half */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#f8f9fa]"></div>
      
      <div className="container-section flex flex-col gap-[48px] items-start relative z-10">
      
      {/* Header Section */}
      <div className="flex items-start justify-between w-full max-w-[1160px] mx-auto flex-col lg:flex-row gap-8">
        <div className="flex flex-col gap-[6px] flex-1">
          <h2 className="bg-gradient-to-b from-[#44c5e2] to-[#e3f6fb] bg-clip-text text-transparent font-medium text-[24px] capitalize">
            Snow Values
          </h2>
          <h3 className="font-semibold text-[32px] text-[#585959] capitalize">
            we are aiming for the best
          </h3>
        </div>
        <p className="font-normal text-[16px] text-[#6a7aa1] max-w-[567px]">
          Snow offers tailored HVAC solutions for residential, commercial, and industrial spaces. Our certified team designs, installs, and maintains efficient systems that lower energy use, extend equipment life, and improve air quality.
        </p>
      </div>

      {/* Values Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1160px] mx-auto">
        {/* Our Vision Card */}
        <div className="bg-white rounded-[8px] shadow-[0px_4px_16px_0px_rgba(56,77,130,0.05)] overflow-hidden">
          <div className="p-[12px]">
            <div className="bg-[#e3f6fb] rounded-[12px] p-[24px] flex items-center justify-center w-fit">
              <div className="w-[56px] h-[56px] flex items-center justify-center">
                {/* Vision Icon - Eye/View */}
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28 18.6667C21.3733 18.6667 16 24.04 16 30.6667C16 37.2933 21.3733 42.6667 28 42.6667C34.6267 42.6667 40 37.2933 40 30.6667C40 24.04 34.6267 18.6667 28 18.6667ZM28 37.3333C24.32 37.3333 21.3333 34.3467 21.3333 30.6667C21.3333 26.9867 24.32 24 28 24C31.68 24 34.6667 26.9867 34.6667 30.6667C34.6667 34.3467 31.68 37.3333 28 37.3333Z" fill="#44c5e2"/>
                  <path d="M28 26.6667C25.7867 26.6667 24 28.4533 24 30.6667C24 32.88 25.7867 34.6667 28 34.6667C30.2133 34.6667 32 32.88 32 30.6667C32 28.4533 30.2133 26.6667 28 26.6667Z" fill="#44c5e2"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="p-[12px] flex flex-col gap-[10px]">
            <h4 className="font-semibold text-[20px] text-[#384d82] capitalize">
              Our Vision
            </h4>
            <p className="font-normal text-[14px] text-[#6a7aa1]">
              Our tech team swiftly addresses emergency breakdowns to restore AC systems. We prioritize annual maintenance contract holders and provide genuine spare parts for improved reliability.
            </p>
          </div>
        </div>

        {/* Our Mission Card */}
        <div className="bg-white rounded-[8px] shadow-[0px_4px_16px_0px_rgba(56,77,130,0.05)] overflow-hidden">
          <div className="p-[12px]">
            <div className="bg-[#e3f6fb] rounded-[12px] p-[24px] flex items-center justify-center w-fit">
              <div className="w-[56px] h-[56px] flex items-center justify-center">
                {/* Mission Icon - Target */}
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28 14C20.268 14 14 20.268 14 28C14 35.732 20.268 42 28 42C35.732 42 42 35.732 42 28C42 20.268 35.732 14 28 14ZM28 37.3333C22.8453 37.3333 18.6667 33.1547 18.6667 28C18.6667 22.8453 22.8453 18.6667 28 18.6667C33.1547 18.6667 37.3333 22.8453 37.3333 28C37.3333 33.1547 33.1547 37.3333 28 37.3333Z" fill="#44c5e2"/>
                  <path d="M28 21C24.134 21 21 24.134 21 28C21 31.866 24.134 35 28 35C31.866 35 35 31.866 35 28C35 24.134 31.866 21 28 21ZM28 30.3333C26.7107 30.3333 25.6667 29.2893 25.6667 28C25.6667 26.7107 26.7107 25.6667 28 25.6667C29.2893 25.6667 30.3333 26.7107 30.3333 28C30.3333 29.2893 29.2893 30.3333 28 30.3333Z" fill="#44c5e2"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="p-[12px] flex flex-col gap-[10px]">
            <h4 className="font-semibold text-[20px] text-[#384d82] capitalize">
              Our Mission
            </h4>
            <p className="font-normal text-[14px] text-[#6a7aa1]">
              We perform thorough annual maintenance visits that include detailed inspections, cleaning, and performance optimization of each system component to ensure efficient operation and minimize the risk of breakdowns.
            </p>
          </div>
        </div>

        {/* Our Goals Card */}
        <div className="bg-white rounded-[8px] shadow-[0px_4px_16px_0px_rgba(56,77,130,0.05)] overflow-hidden">
          <div className="p-[12px]">
            <div className="bg-[#e3f6fb] rounded-[12px] p-[24px] flex items-center justify-center w-fit">
              <div className="w-[56px] h-[56px] flex items-center justify-center">
                {/* Goals Icon - Racing Flag */}
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 14V42H18.6667V35H37.3333L32.6667 28L37.3333 21H18.6667V14H14ZM23.3333 25.6667H32.6667L30.3333 28L32.6667 30.3333H23.3333V25.6667Z" fill="#44c5e2"/>
                  <path d="M23.3333 25.6667H28V30.3333H23.3333V25.6667Z" fill="#44c5e2" fillOpacity="0.5"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="p-[12px] flex flex-col gap-[10px]">
            <h4 className="font-semibold text-[20px] text-[#384d82] capitalize">
              our Goals
            </h4>
            <p className="font-normal text-[14px] text-[#6a7aa1]">
              We develop customized maintenance plans tailored to your specific environment and operations. These plans help protect warranties, reduce energy consumption, and prevent unexpected equipment failures.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}