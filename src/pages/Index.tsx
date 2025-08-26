
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
    <div className="min-h-screen scroll-smooth relative overflow-hidden">
      {/* Global Background with Grid Pattern */}
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none"></div>
      
      {/* Floating Elements */}
      <div className="fixed top-20 left-10 w-2 h-2 bg-lime/40 rounded-full animate-ping pointer-events-none"></div>
      <div className="fixed top-1/3 right-16 w-3 h-3 bg-lime-dark/40 rounded-full animate-ping delay-1000 pointer-events-none"></div>
      <div className="fixed bottom-32 left-1/4 w-2.5 h-2.5 bg-lime/50 rounded-full animate-ping delay-500 pointer-events-none"></div>
      
      {/* Content with enhanced spacing */}
      <div className="relative z-10">
        <HeroSection />
        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          <ProblemSection />
          <SolutionsSection />
          <OfferSection />
          <BenefitsSection />
          <ProcessSection />
          <TestimonialsSection />
          <VisionSection />
          <CrossroadSection />
          <FAQSection />
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
