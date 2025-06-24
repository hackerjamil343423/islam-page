import { Button } from "@/components/ui/button";

const OfferSection = () => {
  const deliverables = [
    {
      icon: "🔍",
      title: "تحليل شامل لمتجرك ومنتجاتك و حساباتك الاعلانية",
      description: "نكتشف الثغرات ونقترح حلول فعلية"
    },
    {
      icon: "⚙️",
      title: "إعادة تصميم وتحسين الفانل",
      description: "نظبط الفانل من الألف للياء نقفل كل الثغرات اللي تضيع العملاء المحتملين، ونحوّل الزوار إلى عملاء"
    },
    {
      icon: "📱",
      title: "إعلانات بداتا حقيقية",
      description: "مش عشوائية، بل مبنية على أرقام ونتائج سابقة"
    },
    {
      icon: "📊",
      title: "تقارير ومتابعة أسبوعية",
      description: "نتابع الأداء ونعدل باستمرار حسب الأهداف"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6 lg:mb-8 leading-tight px-2">
            هنساعدك تبني نظام تسويقي يضاعف مبيعاتك خلال 30 - 60 يوم
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12 lg:mb-16">
          {deliverables.map((deliverable, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 md:gap-6 p-4 md:p-6 bg-cream rounded-xl shadow-lg animate-fade-up hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl flex-shrink-0">{deliverable.icon}</div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-black mb-2 md:mb-3 leading-relaxed">{deliverable.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{deliverable.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-lime text-black hover:bg-lime/90 text-base md:text-lg lg:text-xl px-6 md:px-8 lg:px-12 py-4 md:py-5 lg:py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            احجز استشارتك المجانية دلوقتي
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
