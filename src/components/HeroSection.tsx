
import { Button } from "@/components/ui/button";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { GridPattern } from "@/components/ui/grid-pattern";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen section-bg px-4 py-16 md:py-24 flex flex-col justify-center relative overflow-hidden scroll-mt-20">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0">
        <GridPattern
          width={40}
          height={40}
          x={-1}
          y={-1}
          strokeDasharray="4 4"
          className="fill-primary/5 stroke-primary/10"
        />
      </div>

      <div className="max-w-7xl mx-auto text-center w-full relative z-10">
        {/* Target Audience - Eyebrow Badge */}
        <div className="mb-8 md:mb-12">
          <span className="inline-block px-6 py-3 bg-primary/10 border border-primary/20 rounded-full">
            <AnimatedGradientText
              className="text-base md:text-lg font-medium"
              colorFrom="#00524D"
              colorTo="#48C78E"
              speed={1.5}
            >
              لأصحاب المتاجر الإلكترونية الذين يصرفون آلاف الدولارات شهريًا بدون نتائج واضحة
            </AnimatedGradientText>
          </span>
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
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-elevated hover:shadow-intense"
        >
          تواصل معنا الان
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
