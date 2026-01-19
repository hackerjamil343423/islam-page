
import { Button } from "@/components/ui/button";
import { Wallet, TrendingDown, Frown, Activity } from "lucide-react";

const ProblemSection = () => {
  const painPoints = [
    {
      icon: Wallet,
      title: "إهدار الميزانية",
      description: "بتصرف آلاف الدولارات على إعلانات عشوائية ومفيش نتائج حقيقية"
    },
    {
      icon: TrendingDown,
      title: "ترافيك بدون مبيعات",
      description: "بتجيب ترافيك كتير لكن مفيش مبيعات، و معدل التحويل قليل جدا"
    },
    {
      icon: Frown,
      title: "غياب الخطة",
      description: "مفيش خطة تسويق واضحة، بس تجارب وخساير"
    },
    {
      icon: Activity,
      title: "عدم الاستقرار",
      description: "كل شهر الوضع بيتغير ومفيش نمو ثابت"
    }
  ];

  return (
    <section className="py-12 md:py-16 section-bg overflow-hidden relative scroll-mt-24">

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-3 px-6 py-3 bg-red-500/10 border border-red-500/20 rounded-full text-sm font-medium text-foreground mb-8">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            المشكلة الحقيقية
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            هل تهدر ميزانيتك الإعلانية بدون تحقيق نتائج
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16 lg:mb-20">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {point.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
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

export default ProblemSection;
