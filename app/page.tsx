import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Contact } from "@/components/sections/Contact";
import { Estimator } from "@/components/sections/Estimator";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-muted">
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <Services />
        <TechStack />
        <Portfolio />
        <Testimonials />
        <Estimator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
