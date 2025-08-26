import { Button } from "@/components/ui/button";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: "📊",
      title: "تحليل بيانات حقيقي",
      description: "مش تخمين. بنفهم العميل من أرقامه وسلوكياته.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: "🧭", 
      title: "خطة تسويق مترابطة",
      description: "كل شيء شغال مع بعض: الإعلانات، المحتوى، الصفحات، التتبع.",
      gradient: "from-lime to-green-500"
    },
    {
      icon: "🛠️",
      title: "تحسين مستمر", 
      description: "كل مرحلة في الفانل بيتم مراقبتها وتحسينها أسبوعيًا.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-cream via-white to-cream overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-16 left-10 w-24 h-24 bg-lime/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-16 right-16 w-32 h-32 bg-lime-dark/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-lime/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block glass-morphism px-6 py-3 rounded-2xl mb-6 shadow-premium">
            <span className="text-lime-dark font-semibold text-sm md:text-base">✨ الحل الأمثل</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 md:mb-8 leading-tight px-2">
            الحل مش في إعلان جديد... الحل في نظام كامل يشتغل لصالحك
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed px-2 font-medium">
            بعد تجربة طويلة مع عشرات المتاجر الالكترونية، طورنا نظاما متكامل لزيادة المبيعات واليوم نقدمه لك
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-lime to-lime-dark mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 md:p-10 lg:p-12 rounded-3xl shadow-premium hover:shadow-glow border border-gray-100 text-center animate-fade-up hover-lift transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background gradient overlay */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${solution.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500 rounded-bl-3xl`}></div>
              
              {/* Icon */}
              <div className="text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8 group-hover:animate-bounce">{solution.icon}</div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-4 md:mb-6 group-hover:text-lime-dark transition-colors duration-300">{solution.title}</h3>
              
              {/* Description */}
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed font-medium">{solution.description}</p>
              
              {/* Decorative element */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-lime to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-lime to-lime-dark text-black hover:from-lime-dark hover:to-lime text-lg md:text-xl lg:text-2xl px-10 md:px-14 lg:px-18 py-4 md:py-6 lg:py-8 rounded-full font-bold shadow-premium hover:shadow-glow transition-all duration-500 hover:scale-110 hover-lift w-full sm:w-auto max-w-3xl mx-auto transform"
          >
            ابدأ ببناء نظام التسويق بتاعك دلوقتي
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
