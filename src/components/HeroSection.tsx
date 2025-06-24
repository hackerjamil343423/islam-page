
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-cream px-4 py-8 md:py-12 flex flex-col justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto text-center w-full">
        {/* Eyebrow Text */}
        <div className="animate-fade-up mb-6 md:mb-8">
          <div className="inline-block bg-white px-4 md:px-6 lg:px-8 py-3 md:py-4 rounded-2xl shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:scale-105 animate-fade-up backdrop-blur-sm bg-white/90">
            <p className="text-sm md:text-base lg:text-lg text-gray-600 font-medium leading-relaxed">
              لأصحاب المتاجر الإلكترونية الذين يصرفون آلاف الدولارات شهريًا بدون نتائج واضحة
            </p>
          </div>
        </div>

        {/* Main Headline */}
        <div className="animate-fade-up-delay-2 mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4 md:mb-6 leading-[2] px-2">
            ضاعف مبيعات متجرك خلال{" "}
            <span className="text-lime">
              60 يوم
            </span>
            <br className="hidden md:block" />
            <span className="block md:inline"> بدون إهدار دولار إضافي واحد على إعلانات فاشلة</span>
          </h1>
        </div>

        {/* Subheadline */}
        <div className="animate-fade-up-delay-3 mb-8 md:mb-12">
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-2">
            نحن نبني لك نظام تسويقي مبني على الداتا، يحلل كل خطوة في رحلة العميل ويحولها لفرص ربح حقيقية.
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-up-delay-3 mb-8 md:mb-16">
          <Button 
            size="lg" 
            className="bg-lime text-black hover:bg-lime/90 text-base md:text-lg px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto max-w-md mx-auto"
          >
            احجز استشارتك المجانية الآن
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
