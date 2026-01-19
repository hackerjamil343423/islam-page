
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionsSection from "@/components/SolutionsSection";
import OfferSection from "@/components/OfferSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VisionSection from "@/components/VisionSection";
import CrossroadSection from "@/components/CrossroadSection";
import FAQSection from "@/components/FAQSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth relative overflow-hidden bg-background">
      <Header />

      <div className="relative z-10 pt-16 md:pt-20">
        <HeroSection />
        <div className="space-y-24 md:space-y-32">
          <div id="problem">
            <ProblemSection />
          </div>
          <div id="solutions">
            <SolutionsSection />
          </div>
          <div id="offer">
            <OfferSection />
          </div>
          <BenefitsSection />
          <ProcessSection />
          <div id="testimonials">
            <TestimonialsSection />
          </div>
          <VisionSection />
          <CrossroadSection />
          <div id="faq">
            <FAQSection />
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
