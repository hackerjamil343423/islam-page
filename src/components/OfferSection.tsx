import { Button } from "@/components/ui/button";

const OfferSection = () => {
  const deliverables = [
    {
      title: "تحليل شامل لمتجرك ومنتجاتك و حساباتك الاعلانية",
      description: "نكتشف الثغرات ونقترح حلول فعلية"
    },
    {
      title: "إعادة تصميم وتحسين الفانل",
      description: "نظبط الفانل من الألف للياء نقفل كل الثغرات اللي تضيع العملاء المحتملين، ونحوّل الزوار إلى عملاء"
    },
    {
      title: "إعلانات بداتا حقيقية",
      description: "مش عشوائية، بل مبنية على أرقام ونتائج سابقة"
    },
    {
      title: "تقارير ومتابعة أسبوعية",
      description: "نتابع الأداء ونعدل باستمرار حسب الأهداف"
    }
  ];

  return (
    <section className="py-12 md:py-16 section-bg">
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 enterprise-card px-6 py-3 text-sm font-medium text-muted-foreground mb-8">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            عرضنا المميز
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            هنساعدك تبني نظام تسويقي يضاعف مبيعاتك خلال <span className="text-primary">30 - 60 يوم</span>
          </h2>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
          {deliverables.map((deliverable, index) => (
            <div
              key={index}
              className="enterprise-card p-8 hover:border-primary/30 transition-colors duration-200"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4 leading-relaxed">
                {deliverable.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {deliverable.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="enterprise-card max-w-4xl mx-auto p-12">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              جاهز تبدأ رحلة نجاحك؟
            </h3>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold px-8 py-4 rounded-lg"
            >
              تواصل معنا الان
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
