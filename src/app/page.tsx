import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LoadingIntro from "@/components/LoadingIntro";
import BuildSequence from "@/components/BuildSequence";
import ComparisonSlider from "@/components/ComparisonSlider";
import TargetAudience from "@/components/TargetAudience";
import RoiCalculator from "@/components/RoiCalculator";
import DemoShowcase from "@/components/DemoShowcase";
import Pricing from "@/components/Pricing";
import Workflow from "@/components/Workflow";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloatingWidget from "@/components/WhatsAppFloatingWidget";
import SaaSCommandBar from "@/components/SaaSCommandBar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-zinc-900 relative">
      <LoadingIntro />
      <Header />
      <Hero />
      <BuildSequence />
      <ComparisonSlider />
      <TargetAudience />
      <RoiCalculator />
      <DemoShowcase />
      <Pricing />
      <Workflow />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloatingWidget />
      <SaaSCommandBar />
    </main>
  );
}
