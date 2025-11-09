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
    <div className="min-h-screen bg-[#fdf3ff] text-neutral-900">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6">
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
      <div className="bg-neutral-900 px-4 pb-10 pt-16">
        <Footer />
      </div>
    </div>
  );
}
