
import { Button } from "@/components/ui/button";

const ProblemSection = () => {
  const painPoints = [
    "بتصرف آلاف الدولارات على إعلانات عشوائية ومفيش نتائج حقيقية",
    "بتجيب ترافيك كتير لكن مفيش مبيعات، و معدل التحويل قليل جدا",
    "مفيش خطة تسويق واضحة، بس تجارب وخساير",
    "كل شهر الوضع بيتغير ومفيش نمو ثابت"
  ];

  return (
    <section className="py-12 md:py-16 section-bg overflow-hidden relative">
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 enterprise-card px-6 py-3 text-sm font-medium text-muted-foreground mb-8">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            المشكلة الحقيقية
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            هل تهدر ميزانيتك الإعلانية بدون تحقيق نتائج
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16 lg:mb-20">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="enterprise-card p-8 hover:border-red-500/30 transition-colors duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">×</span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">{point}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold px-8 py-4 rounded-lg"
          >
            تواصل معنا الان
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
