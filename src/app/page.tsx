import { CtaBanner } from "@/components/CtaBanner";
import { CaseStudySection } from "@/components/CaseStudySection";
import { Differentiators } from "@/components/Differentiators";
import { FaqSection } from "@/components/FaqSection";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { Hero } from "@/components/Hero";
import { ImpactMetrics } from "@/components/ImpactMetrics";
import { LogosStrip } from "@/components/LogosStrip";
import { Navbar } from "@/components/Navbar";
import { PricingSection } from "@/components/PricingSection";
import { ProblemSection } from "@/components/ProblemSection";
import { Testimonials } from "@/components/Testimonials";
import { Workflow } from "@/components/Workflow";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent text-neutral-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-[#f58529]/20 blur-[140px]" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#dd2a7b]/20 blur-[160px]" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#515bd4]/20 blur-[180px]" />
      </div>
      <Navbar />
      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-24 pt-10 sm:px-6 lg:gap-16">
        <Hero />
        <LogosStrip />
        <ImpactMetrics />
        <ProblemSection />
        <FeatureShowcase />
        <GallerySection />
        <Differentiators />
        <CaseStudySection />
        <Workflow />
        <PricingSection />
        <Testimonials />
        <FaqSection />
        <CtaBanner />
      </main>
      <div className="relative border-t border-neutral-100 bg-white px-4 pb-12 pt-16">
        <Footer />
      </div>
    </div>
  );
}
