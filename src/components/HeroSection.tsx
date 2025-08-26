
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-cream px-4 py-8 md:py-12 flex flex-col justify-center overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-lime/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-40 h-40 bg-lime-dark/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-lime/30 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* iPhone-like Container */}
      <div className="max-w-7xl mx-auto text-center w-full relative z-10">
        {/* Rounded Header */}
        <div className="mb-8 md:mb-12">
          <div className="inline-flex items-center gap-4 glass-morphism px-6 md:px-8 py-3 md:py-4 rounded-full shadow-premium hover:shadow-glow transition-all duration-500">
            <div className="w-3 h-3 bg-lime rounded-full animate-pulse"></div>
            <span className="text-sm md:text-base font-semibold text-gray-800">✨ حلول تسويقية متقدمة</span>
            <div className="w-3 h-3 bg-lime-dark rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
        
        <div className="iphone-container mx-4 md:mx-8 lg:mx-12 p-8 md:p-12 lg:p-16 xl:p-20">
          {/* Eyebrow Text */}
          <div className="animate-fade-up mb-8 md:mb-12">
            <div className="inline-block glass-morphism px-6 md:px-8 lg:px-12 py-4 md:py-6 rounded-3xl transition-all duration-500 hover:shadow-glow hover:scale-105 animate-scale-in hover-lift shadow-premium">
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-800 font-semibold leading-relaxed">
                لأصحاب المتاجر الإلكترونية الذين يصرفون آلاف الدولارات شهريًا بدون نتائج واضحة
              </p>
            </div>
          </div>

          {/* Main Headline */}
          <div className="animate-fade-up-delay-2 mb-8 md:mb-12">
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-black mb-6 md:mb-8 leading-tight px-2">
              ضاعف مبيعات متجرك خلال{" "}
              <span className="text-lime-dark font-extrabold bg-gradient-to-r from-lime-dark via-lime to-green-500 bg-clip-text text-transparent">
                60 يوم
              </span>
              <br className="hidden md:block" />
              <span className="block md:inline text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mt-4 md:mt-0"> بدون إهدار دولار إضافي واحد على إعلانات فاشلة</span>
            </h1>
          </div>

          {/* Subheadline */}
          <div className="animate-fade-up-delay-3 mb-10 md:mb-16">
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 max-w-5xl mx-auto leading-relaxed px-2 font-medium">
              نحن نبني لك نظام تسويقي مبني على الداتا، يحلل كل خطوة في رحلة العميل ويحولها لفرص ربح حقيقية.
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-up-delay-3 mb-8 md:mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-lime to-lime-dark text-black hover:from-lime-dark hover:to-lime text-lg md:text-xl lg:text-2xl px-10 md:px-14 lg:px-16 py-4 md:py-6 lg:py-8 rounded-full font-bold shadow-premium hover:shadow-glow transition-all duration-500 hover:scale-110 hover-lift w-full sm:w-auto max-w-lg mx-auto transform"
              style={{
                background: 'linear-gradient(135deg, #d9fc67 0%, #c9e650 50%, #b8d63f 100%)',
                boxShadow: '0 20px 40px rgba(217, 252, 103, 0.4), 0 8px 16px rgba(0, 0, 0, 0.1)'
              }}
            >
              احجز استشارتك المجانية الآن
            </Button>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-lime rounded-full animate-ping"></div>
          <div className="absolute top-8 left-8 w-2 h-2 bg-lime-dark rounded-full animate-ping delay-300"></div>
          <div className="absolute bottom-6 right-12 w-4 h-4 bg-lime/60 rounded-full animate-ping delay-700"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
