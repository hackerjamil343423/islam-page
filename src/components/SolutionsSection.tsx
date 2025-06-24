
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
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
            الحل مش في إعلان جديد...{" "}
            <br />
            <span className="text-lime bg-black px-4 py-2 rounded-lg inline-block mt-4">
              الحل في نظام كامل يشتغل لصالحك
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up border-2 border-transparent hover:border-lime"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-6xl mb-6 text-center">
                {solution.icon}
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 text-center">
                {solution.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-lime text-black hover:bg-lime/90 text-xl px-12 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            ابدأ ببناء نظام التسويق بتاعك دلوقتي
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
