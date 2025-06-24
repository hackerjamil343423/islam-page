
import { Button } from "@/components/ui/button";

const VisionSection = () => {
  const visionPoints = [
    "عدد طلبات يومي ثابت ومستمر",
    "حملات إعلانية مربحة بدون نزيف ميزانية",
    "بيانات واضحة تقولك إيه اللي شغال",
    "وقت أكتر تركز فيه على التوسع مش حل المشاكل"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-lime/30 to-lime/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            تخيل متجرك بعد 60 يوم...
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {visionPoints.map((point, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg animate-fade-up border-2 border-transparent hover:border-lime transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-6 h-6 bg-lime rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-black font-bold text-sm">✓</span>
              </div>
              <p className="text-lg text-gray-800 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-lime text-black hover:bg-lime/90 text-xl px-12 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            خلي ده واقع بدل ما يفضل حلم
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
