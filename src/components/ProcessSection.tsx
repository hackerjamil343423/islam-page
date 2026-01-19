import { Button } from "@/components/ui/button";
import { Search, Rocket, TrendingUp, Scale, FileText } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "فحص شامل لمتجرك وإعلاناتك",
      description: "نفحص الأداء الحالي بالتفصيل - مسار المبيعات، الإعلانات، تجربة العميل - ونحدد الثغرات التي تُفقدك الأموال والفرص التي لم تستغلها بعد",
      icon: Search,
      iconBg: "bg-primary/20",
      iconColor: "text-primary"
    },
    {
      number: "2",
      title: "بناء الاستراتيجية وإطلاق الحملات",
      description: "نصمم خطة إعلانية دقيقة تناسب منتجك وجمهورك، ونطلق حملات محسوبة تحقق مبيعات من الأسبوع الأول مع متابعة يومية للأرقام",
      icon: Rocket,
      iconBg: "bg-mint/20",
      iconColor: "text-mint"
    },
    {
      number: "3",
      title: "تحسين مستمر ومضاعفة النتائج",
      description: "لا نتوقف عند أول نتيجة - نحسّن الإعلانات يومياً عند الحاجة، نختبر شرائح جمهور جديدة، ونطوّر الأداء لمضاعفة المبيعات وخفض التكاليف",
      icon: TrendingUp,
      iconBg: "bg-accent/20",
      iconColor: "text-accent"
    },
    {
      number: "4",
      title: "توسيع الحملات الرابحة بأمان",
      description: "عندما نجد الحملة الناجحة، نوسعها بذكاء وتدريجياً - دون خسارة الربحية أو زيادة تكلفة الاكتساب",
      icon: Scale,
      iconBg: "bg-teal/20",
      iconColor: "text-teal"
    },
    {
      number: "5",
      title: "تقارير واضحة ومتابعة دورية",
      description: "كل أسبوع تقرير مفصّل بجميع الأرقام - الإنفاق، المبيعات، الأرباح - تعرف بالضبط أين تذهب أموالك وما العائد منها",
      icon: FileText,
      iconBg: "bg-primary/30",
      iconColor: "text-primary"
    }
  ];

  return (
    <section className="py-12 md:py-16 section-bg scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-foreground mb-8">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            خطة العمل
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            كيف سنعمل <span className="text-primary">معاً؟</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            خطة واضحة بخطوات عملية مضمونة النتائج
          </p>
        </div>

        {/* Process Steps - Modern Cards */}
        <div className="max-w-5xl mx-auto space-y-8 mb-16 md:mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-mint/5 border border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  {/* Icon Circle */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-2xl ${step.iconBg} flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${step.iconColor}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Step Number Badge */}
                    <div className="inline-flex items-center gap-2 mb-4">
                      <span className={`w-8 h-8 rounded-xl ${step.iconBg} ${step.iconColor} flex items-center justify-center font-bold text-sm`}>
                        {step.number}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section - No Wrapper */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            مستعد للبداية؟
          </h3>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            انضم لفريق محترف عنده خطة واضحة ونتائج مثبتة
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-mint hover:from-primary/90 hover:to-mint/90 text-white text-lg font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            تواصل معنا الان
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
