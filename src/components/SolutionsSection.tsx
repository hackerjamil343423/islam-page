import { Button } from "@/components/ui/button";

const SolutionsSection = () => {
  const solutions = [
    {
      title: "تحليل بيانات حقيقي",
      description: "مش تخمين. بنفهم العميل من أرقامه وسلوكياته."
    },
    {
      title: "خطة تسويق مترابطة",
      description: "كل شيء شغال مع بعض: الإعلانات، المحتوى، الصفحات، التتبع."
    },
    {
      title: "تحسين مستمر",
      description: "كل مرحلة في الفانل بيتم مراقبتها وتحسينها أسبوعيًا."
    }
  ];

  return (
    <section className="py-12 md:py-16 section-bg">
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 enterprise-card px-6 py-3 text-sm font-medium text-muted-foreground mb-8">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            الحل الأمثل
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            الحل مش في إعلان جديد... الحل في نظام كامل يشتغل لصالحك
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            بعد تجربة طويلة مع عشرات المتاجر الالكترونية، طورنا نظاما متكامل لزيادة المبيعات واليوم نقدمه لك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="enterprise-card p-8 text-center hover:border-primary/30 transition-colors duration-200"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4">{solution.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{solution.description}</p>
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

export default SolutionsSection;
