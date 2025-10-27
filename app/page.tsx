import { Hero } from "@/components/hero";
import { Numbers } from "@/components/numbers";
import { About } from "@/components/about";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseSnow } from "@/components/why-choose-snow";
import { Team } from "@/components/team";
import { ImmediateResponse } from "@/components/immediate-response";
import { FAQ } from "@/components/faq";
import { ContactUs } from "@/components/contact-us";
import { Suppliers } from '@/components/suppliers'
import { Customers } from '@/components/customers'
export default function Home() {
  return (
    <>
      <Hero />
      <Customers/>

      <Numbers />

      <About />
      <ServicesSection />
      <WhyChooseSnow />
      <Suppliers/>
      <Team />
      <ImmediateResponse />
      <FAQ />
      <ContactUs />
    </>
  );
}
