
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-cream px-4 py-12 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto text-center">
        {/* Eyebrow Text */}
        <div className="animate-fade-up mb-8">
          <div className="inline-block bg-white px-8 py-4 rounded-2xl shadow-lg animate-fade-up">
            <p className="text-lg md:text-xl text-gray-600 font-medium">
              لأصحاب المتاجر الإلكترونية الذين يصرفون آلاف الدولارات شهريًا بدون نتائج واضحة
            </p>
          </div>
        </div>

        {/* Main Headline */}
        <div className="animate-fade-up-delay-2 mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6" style={{ lineHeight: 2 }}>
            ضاعف مبيعات متجرك خلال{" "}
            <span className="text-lime">
              60 يوم
            </span>
            <br />
            بدون إهدار دولار إضافي واحد على إعلانات فاشلة
          </h1>
        </div>

        {/* Subheadline */}
        <div className="animate-fade-up-delay-3 mb-12">
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            نحن نبني لك نظام تسويقي مبني على الداتا، يحلل كل خطوة في رحلة العميل ويحولها لفرص ربح حقيقية.
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-up-delay-3 mb-16">
          <Button 
            size="lg" 
            className="bg-lime text-black hover:bg-lime/90 text-xl px-12 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            احجز استشارتك المجانية الآن
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
