import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Contact } from "@/components/sections/Contact";
import { Estimator } from "@/components/sections/Estimator";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-muted">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TechStack />
        <Portfolio />
        <Estimator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
