
import { Button } from "@/components/ui/button";

const VisionSection = () => {
  const visionPoints = [
    {
      text: "عدد طلبات يومي ثابت ومستمر"
    },
    {
      text: "حملات إعلانية مربحة بدون نزيف ميزانية"
    },
    {
      text: "بيانات واضحة تقولك إيه اللي شغال"
    },
    {
      text: "وقت أكتر تركز فيه على التوسع مش حل المشاكل"
    }
  ];

  return (
    <section className="py-12 md:py-16 section-bg">
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 enterprise-card px-6 py-3 text-sm font-medium text-muted-foreground mb-8">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            تصور المستقبل
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            تخيل متجرك بعد <span className="text-primary">60 يوم...</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            شوف نفسك وأنت بتحقق أحلامك التجارية
          </p>
        </div>

        {/* Vision Points Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
          {visionPoints.map((point, index) => (
            <div
              key={index}
              className="enterprise-card p-8 hover:border-primary/30 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">✓</span>
                </div>
                <p className="text-lg text-foreground leading-relaxed font-medium">
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="enterprise-card max-w-4xl mx-auto p-12">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                خلي ده واقع بدل ما يفضل حلم
              </h3>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                مش مجرد حلم - ده واقع ممكن تحققه في أقل من شهرين
              </p>
              
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold px-8 py-4 rounded-lg"
              >
                تواصل معنا الان
              </Button>
              
              <div className="flex flex-wrap justify-center items-center gap-8 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  نتائج مضمونة خلال 60 يوم
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  استراتيجية مخصصة لمتجرك
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  دعم مستمر من فريق الخبراء
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
