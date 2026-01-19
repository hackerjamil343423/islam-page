import { Button } from "@/components/ui/button";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { BarChart3, Target, TrendingUp, FileText, Gauge, Scale } from "lucide-react";

const OfferSection = () => {
  return (
    <section className="py-12 md:py-16 section-bg scroll-mt-24">

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-foreground mb-8">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            عرضنا المميز
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            هنساعدك تبني نظام تسويقي يضاعف مبيعاتك خلال <span className="text-primary">30 - 60 يوم</span>
          </h2>
        </div>

        {/* Deliverables Bento Grid */}
        <BentoGrid className="max-w-7xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <BentoGridItem
            title="تحليل شامل لمتجرك"
            description="نكتشف الثغرات ونقترح حلول فعلية - منتجاتك، حساباتك الإعلانية، وكل شيء يحتاج تحليل"
            header={
              <div className="flex h-40 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5">
                <BarChart3 className="h-12 w-12 text-primary" />
              </div>
            }
          />
          <BentoGridItem
            title="إعادة تصميم وتحسين الفانل"
            description="نظبط الفانل من الألف للياء نقفل كل الثغرات اللي تضيع العملاء المحتملين"
            header={
              <div className="flex h-40 items-center justify-center rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5">
                <TrendingUp className="h-12 w-12 text-accent" />
              </div>
            }
          />
          <BentoGridItem
            title="إعلانات بداتا حقيقية"
            description="مش عشوائية، بل مبنية على أرقام ونتائج سابقة - كل دولار بيشتغل لصالحك"
            header={
              <div className="flex h-40 items-center justify-center rounded-3xl bg-gradient-to-br from-teal/20 to-teal/5">
                <Target className="h-12 w-12 text-teal" />
              </div>
            }
          />
          <BentoGridItem
            title="تتبّع وقياس حقيقي"
            description="Pixel، CAPI، Events، وربط المبيعات بالإعلانات عشان نعرف كل جنيه راح فين ورجع إزاي"
            header={
              <div className="flex h-40 items-center justify-center rounded-3xl bg-gradient-to-br from-teal-dark/20 to-teal-dark/5">
                <Gauge className="h-12 w-12 text-teal-dark" />
              </div>
            }
          />
          <BentoGridItem
            title="Scaling مبني على أرقام"
            description="ما بنزودش الميزانية لمجرد إن الإعلان شكله شغال. بنحدد نقطة الـ breakeven، نثبت الـ ROAS الأول، وبعدها نوسّع الصرف تدريجيًا"
            header={
              <div className="flex h-40 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/30 to-primary/10">
                <Scale className="h-12 w-12 text-primary" />
              </div>
            }
          />
          <BentoGridItem
            title="تقارير ومتابعة أسبوعية"
            description="نتابع الأداء ونعدل باستمرار حسب الأهداف - شفافية كاملة ونتائج واضحة"
            header={
              <div className="flex h-40 items-center justify-center rounded-3xl bg-gradient-to-br from-mint/20 to-mint/5">
                <FileText className="h-12 w-12 text-mint" />
              </div>
            }
          />
        </BentoGrid>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            جاهز تبدأ رحلة نجاحك؟
          </h3>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold px-8 py-4 rounded-full"
          >
            تواصل معنا الان
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
