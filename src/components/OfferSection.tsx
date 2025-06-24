
import { Button } from "@/components/ui/button";

const OfferSection = () => {
  const deliverables = [
    {
      title: "تحليل شامل لمتجرك ومنتجاتك و حساباتك الاعلانية",
      description: "نكتشف الثغرات ونقترح حلول فعلية"
    },
    {
      title: "إعادة تصميم وتحسين الفانل",
      description: "نظبط الفانل من الألف للياء نقفل كل الثغرات اللي تضيع العملاء المحتملين، ونحوّل الزوار إلى عملاء"
    },
    {
      title: "إعلانات بداتا حقيقية",
      description: "مش عشوائية، بل مبنية على أرقام ونتائج سابقة"
    },
    {
      title: "تقارير ومتابعة أسبوعية",
      description: "نتابع الأداء ونعدل باستمرار حسب الأهداف"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
            هتساعدك تبني نظام تسويقي يضاعف مبيعاتك خلال 30 - 60 يوم
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {deliverables.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 bg-lime/10 border-2 border-lime rounded-lg animate-fade-up hover:bg-lime/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-8 h-8 bg-lime rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-black font-bold text-lg">{index + 1}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-lime text-black hover:bg-lime/90 text-xl px-12 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            احجز استشارتك المجانية دلوقتي
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
