
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen section-bg px-4 py-16 md:py-24 flex flex-col justify-center relative">
      <div className="max-w-7xl mx-auto text-center w-full relative z-10">

        <div className="max-w-6xl mx-auto shadow-hero rounded-3xl p-4 md:p-8 bg-card/30 backdrop-blur-sm">
          {/* Target Audience */}
          <div className="mb-8 md:mb-12">
            <div className="enterprise-card px-4 md:px-8 py-4 md:py-6 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                لأصحاب المتاجر الإلكترونية الذين يصرفون آلاف الدولارات شهريًا بدون نتائج واضحة
              </p>
            </div>
          </div>

          {/* Main Headline */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
              ضاعف مبيعات متجرك خلال{" "}
              <span className="text-primary">
                60 يوم
              </span>
              <br className="hidden md:block" />
              <span className="block text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-4 text-muted-foreground font-normal">
                بدون إهدار دولار إضافي واحد على إعلانات فاشلة
              </span>
            </h1>
          </div>

          {/* Value Proposition */}
          <div className="mb-12 md:mb-16">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              نحن نبني لك نظام تسويقي مبني على الداتا، يحلل كل خطوة في رحلة العميل ويحولها لفرص ربح حقيقية.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-elevated hover:shadow-intense"
            >
              تواصل معنا الان
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
