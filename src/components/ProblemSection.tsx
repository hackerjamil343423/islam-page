
import { Button } from "@/components/ui/button";

const ProblemSection = () => {
  const painPoints = [
    "بتصرف آلاف الدولارات على إعلانات عشوائية ومفيش نتائج حقيقية",
    "بتجيب ترافيك كتير لكن مفيش مبيعات، و معدل التحويل قليل جدا",
    "مفيش خطة تسويق واضحة، بس تجارب وخساير",
    "كل شهر الوضع بيتغير ومفيش نمو ثابت"
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-4 md:mb-6 leading-tight px-2">
            هل تهدر ميزانيتك الإعلانية بدون تحقيق نتائج
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 p-4 md:p-5 bg-red-50 border-l-4 border-red-500 rounded-lg animate-fade-up hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-5 h-5 bg-red-500 rounded-full flex-shrink-0 mt-1">
                <span className="text-white text-xs font-bold flex items-center justify-center h-full">✗</span>
              </div>
              <p className="text-sm md:text-base text-gray-800 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-lime text-black hover:bg-lime/90 text-base md:text-lg px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto max-w-lg mx-auto"
          >
            احجز مكالمتك الآن وشوف فين المشكلة الحقيقية
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
