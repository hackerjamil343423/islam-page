
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
    <section className="py-24 bg-gradient-to-br from-lime/20 to-lime/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-6xl mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                {benefit.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-lime text-black hover:bg-lime/90 text-xl px-12 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            عايز تبدأ تربح بدل ما تخسر؟
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
