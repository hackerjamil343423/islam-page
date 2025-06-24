import { Button } from "@/components/ui/button";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: "📊",
      title: "تحليل بيانات حقيقي",
      description: "مش تخمين. بنفهم العميل من أرقامه وسلوكياته."
    },
    {
      icon: "🧭", 
      title: "خطة تسويق مترابطة",
      description: "كل شيء شغال مع بعض: الإعلانات، المحتوى، الصفحات، التتبع."
    },
    {
      icon: "🛠️",
      title: "تحسين مستمر", 
      description: "كل مرحلة في الفانل بيتم مراقبتها وتحسينها أسبوعيًا."
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-4 md:mb-6 leading-tight px-2">
            الحل مش في إعلان جديد... الحل في نظام كامل يشتغل لصالحك
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
            بعد تجربة طويلة مع عشرات المتاجر الالكترونية، طورنا نظاما متكامل لزيادة المبيعات واليوم نقدمه لك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-2 border-lime text-center animate-fade-up hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl md:text-5xl mb-4 md:mb-6">{solution.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-black mb-3 md:mb-4">{solution.title}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-lime text-black hover:bg-lime/90 text-base md:text-lg px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto max-w-lg mx-auto"
          >
            ابدأ ببناء نظام التسويق بتاعك دلوقتي
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
