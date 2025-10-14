import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Numbers } from "@/components/numbers";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { WhyChoose } from "@/components/why-choose";
import { Team } from "@/components/team";
import { ImmediateResponse } from "@/components/immediate-response";
import { FAQ } from "@/components/faq";
import { ContactUs } from "@/components/contact-us";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Numbers />
      <About />
      <Services />
      <WhyChoose />
      <Team />
      <ImmediateResponse />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
}
