import { Button } from "@/components/ui/button";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "تحليل متجرك بالتفصيل",
      description: "بنفحص الأداء، الفانل، الإعلانات، وتجربة العميل"
    },
    {
      number: "2",
      title: "إطلاق الحملات + قياس النتائج",
      description: "بنطلق الحملات ونحلل كل شيء أسبوعيًا لتحقيق استقرار وربح ثابت"
    }
  ];

  return (
    <section className="py-12 md:py-16 section-bg">
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 enterprise-card px-6 py-3 text-sm font-medium text-muted-foreground mb-8">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            خطة العمل
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            إزاي <span className="text-primary">هنشتغل سوا؟</span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12 lg:space-y-16 mb-12 md:mb-16 lg:mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="enterprise-card p-8 hover:border-primary/30 transition-colors duration-200"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <div className="enterprise-card max-w-4xl mx-auto p-12">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              مستعد للبداية؟
            </h3>

            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              انضم لفريق محترف عنده خطة واضحة ونتائج مثبتة
            </p>
              
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

export default ProcessSection;
