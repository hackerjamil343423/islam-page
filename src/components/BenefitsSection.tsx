
import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "مضاعفة الأرباح",
      description: "بتشتغل على تحسين كل نقطة تؤثر في التحويل والمبيعات"
    },
    {
      title: "وضوح في الأهداف",
      description: "كل إعلان وكل صفحة له هدف واضح وقياس مباشر"
    },
    {
      title: "توفير وقت وفلوس",
      description: "نمنعك من تجربة أشياء عشوائية بتكلفك من غير فايدة"
    }
  ];

  return (
    <section className="py-12 md:py-16 section-bg scroll-mt-24">
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-foreground mb-8">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            مميزاتنا الحصرية
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            ليه <span className="text-primary">تختارنا؟</span>
          </h2>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="enterprise-card p-8 text-center hover:border-primary/30 transition-colors duration-200"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            عايز تبدأ تربح بدل ما تخسر؟
          </h3>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            انضم لأكثر من 200+ متجر نجحوا في مضاعفة مبيعاتهم معنا
          </p>

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

export default BenefitsSection;
