
import { Button } from "@/components/ui/button";

const ProblemSection = () => {
  const painPoints = [
    "بتصرف آلاف الدولارات على إعلانات عشوائية ومفيش نتائج حقيقية",
    "بتجيب ترافيك كتير لكن مفيش مبيعات، و معدل التحويل قليل جدا",
    "مفيش خطة تسويق واضحة، بس تجارب وخساير",
    "كل شهر الوضع بيتغير ومفيش نمو ثابت"
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-red-100 rounded-full blur-xl opacity-60"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-red-50 rounded-full blur-2xl opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block glass-morphism px-6 py-3 rounded-2xl mb-6 shadow-premium">
            <span className="text-red-600 font-semibold text-sm md:text-base">❌ المشكلة الحقيقية</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 md:mb-8 leading-tight px-2">
            هل تهدر ميزانيتك الإعلانية بدون تحقيق نتائج
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16 lg:mb-20">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="group flex items-start gap-4 p-6 md:p-8 lg:p-10 bg-gradient-to-br from-red-50 via-white to-red-50 border-l-4 border-red-500 rounded-2xl animate-fade-up hover:shadow-premium hover-lift transition-all duration-500 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex-shrink-0 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-sm font-bold flex items-center justify-center h-full">✗</span>
              </div>
              <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed font-medium">{point}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-lime to-lime-dark text-black hover:from-lime-dark hover:to-lime text-lg md:text-xl lg:text-2xl px-10 md:px-12 lg:px-16 py-4 md:py-6 lg:py-8 rounded-full font-bold shadow-premium hover:shadow-glow transition-all duration-500 hover:scale-110 hover-lift w-full sm:w-auto max-w-2xl mx-auto transform"
          >
            احجز مكالمتك الآن وشوف فين المشكلة الحقيقية
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
