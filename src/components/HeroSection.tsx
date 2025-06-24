
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-cream px-4 py-12 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto text-center">
        {/* Eyebrow Text */}
        <div className="animate-fade-up mb-8">
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            لأصحاب المتاجر الإلكترونية الذين يصرفون آلاف الدولارات شهريًا بدون نتائج واضحة
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="animate-fade-up-delay-1 mb-12">
          <div className="relative max-w-4xl mx-auto">
            <div 
              className="aspect-video bg-black rounded-2xl shadow-2xl relative overflow-hidden border-4 border-lime"
              style={{
                boxShadow: '0 0 30px rgba(217, 252, 103, 0.3)'
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-lime rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[12px] border-r-0 border-b-[8px] border-t-[8px] border-l-black border-t-transparent border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-white text-lg font-medium">انقر للمشاهدة</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="animate-fade-up-delay-2 mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight mb-6">
            ضاعف مبيعات متجرك خلال{" "}
            <span className="text-lime bg-black px-4 py-2 rounded-lg inline-block">
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

        {/* Social Proof */}
        <div className="animate-fade-up-delay-3">
          <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-12 h-12 bg-gray-300 rounded-full border-2 border-white shadow-md"></div>
            ))}
          </div>
          <p className="text-lg text-gray-600 font-medium">
            موثوق به من قبل أكثر من 150 متجر إلكتروني
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
