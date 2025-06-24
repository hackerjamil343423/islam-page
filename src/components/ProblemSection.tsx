
import { Button } from "@/components/ui/button";

const ProblemSection = () => {
  const painPoints = [
    "بتصرف آلاف الدولارات على إعلانات عشوائية ومفيش نتائج حقيقية",
    "بتجيب ترافيك كتير لكن مفيش مبيعات، والموقع مش بيحوّل",
    "مفيش خطة تسويق واضحة، بس تجارب وخساير",
    "كل شهر الوضع بيتغير ومفيش نمو ثابت"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
            هل ميزانيتك الإعلانية تتحول إلى{" "}
            <span className="text-red-600">خسائر</span>{" "}
            بدون نتائج؟
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 bg-red-50 border-l-4 border-red-500 rounded-lg animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold flex items-center justify-center h-full">✗</span>
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
            احجز مكالمتك الآن وشوف فين المشكلة الحقيقية
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
