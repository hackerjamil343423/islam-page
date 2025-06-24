
import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "💰",
      title: "مضاعفة الأرباح",
      description: "بتشتغل على تحسين كل نقطة تؤثر في التحويل والمبيعات"
    },
    {
      icon: "🎯",
      title: "وضوح في الأهداف", 
      description: "كل إعلان وكل صفحة له هدف واضح وقياس مباشر"
    },
    {
      icon: "⏱",
      title: "توفير وقت وفلوس",
      description: "نمنعك من تجربة أشياء عشوائية بتكلفك من غير فايدة"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6 lg:mb-8 leading-tight px-2">
            ليه تختارنا؟
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 lg:mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-2 border-lime text-center animate-fade-up hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl md:text-5xl mb-4 md:mb-6">{benefit.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-black mb-3 md:mb-4">{benefit.title}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-lime text-black hover:bg-lime/90 text-base md:text-lg lg:text-xl px-6 md:px-8 lg:px-12 py-4 md:py-5 lg:py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            عايز تبدأ تربح بدل ما تخسر؟
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
