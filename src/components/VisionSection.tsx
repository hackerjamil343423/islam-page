
import { Button } from "@/components/ui/button";

const VisionSection = () => {
  const visionPoints = [
    {
      text: "عدد طلبات يومي ثابت ومستمر",
      icon: "📈",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      text: "حملات إعلانية مربحة بدون نزيف ميزانية",
      icon: "💰",
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50"
    },
    {
      text: "بيانات واضحة تقولك إيه اللي شغال",
      icon: "📊",
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50"
    },
    {
      text: "وقت أكتر تركز فيه على التوسع مش حل المشاكل",
      icon: "🚀",
      gradient: "from-lime to-green-500",
      bgGradient: "from-lime-50 to-green-50"
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-lime/20 via-lime/10 to-green-100/30 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-lime/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-16 left-16 w-32 h-32 bg-green-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-lime/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block glass-morphism px-6 py-3 rounded-2xl mb-6 shadow-premium animate-bounceIn">
            <span className="text-lime-dark font-semibold text-sm md:text-base">🔮 تصور المستقبل</span>
          </div>
          
          <div className="iphone-container max-w-6xl mx-auto p-8 md:p-12 lg:p-16 mb-8">
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
              <span className="block mb-4">تخيل متجرك بعد</span>
              <span className="text-lime-dark bg-gradient-to-r from-lime-dark via-lime to-green-500 bg-clip-text text-transparent font-extrabold text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
                60 يوم...
              </span>
            </h2>
            <div className="mt-6 md:mt-8">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                شوف نفسك وأنت بتحقق أحلامك التجارية
              </p>
            </div>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-lime to-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Vision Points Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
          {visionPoints.map((point, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br ${point.bgGradient} p-8 md:p-10 lg:p-12 rounded-3xl shadow-premium hover:shadow-glow border border-gray-100 animate-fade-up hover-lift transition-all duration-500 overflow-hidden`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid-bg h-full w-full"></div>
              </div>
              
              {/* Floating gradient */}
              <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-r ${point.gradient} opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              <div className="flex items-center gap-6 md:gap-8 relative z-10">
                {/* Checkmark */}
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${point.gradient} rounded-full flex-shrink-0 flex items-center justify-center shadow-premium group-hover:shadow-glow group-hover:scale-110 transition-all duration-500`}>
                  <span className="text-white font-bold text-lg md:text-xl">✓</span>
                </div>
                
                {/* Icon */}
                <div className="text-4xl md:text-5xl lg:text-6xl group-hover:animate-bounce">
                  {point.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed font-semibold group-hover:text-lime-dark transition-colors duration-300">
                    {point.text}
                  </p>
                </div>
              </div>
              
              {/* Progress line */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${point.gradient} w-0 group-hover:w-full transition-all duration-700 rounded-full`}></div>
              
              {/* Floating dots */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-lime rounded-full opacity-60 group-hover:animate-ping"></div>
              <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-green-500 rounded-full opacity-40 group-hover:animate-ping delay-200"></div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="glass-morphism max-w-5xl mx-auto p-8 md:p-12 lg:p-16 rounded-3xl shadow-premium relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-lime/20 via-transparent to-green-500/20 animate-shimmer"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-lime to-green-500 rounded-full flex items-center justify-center animate-pulse shadow-premium">
                  <span className="text-white text-2xl">✨</span>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black">
                  خلي ده واقع بدل ما يفضل حلم
                </h3>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-lime rounded-full flex items-center justify-center animate-pulse delay-300 shadow-premium">
                  <span className="text-white text-2xl">🎯</span>
                </div>
              </div>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
                مش مجرد حلم - ده واقع ممكن تحققه في أقل من شهرين
              </p>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-lime to-green-500 text-black hover:from-green-500 hover:to-lime text-lg md:text-xl lg:text-2xl px-12 md:px-16 lg:px-20 py-4 md:py-6 lg:py-8 rounded-full font-bold shadow-premium hover:shadow-glow transition-all duration-500 hover:scale-110 hover-lift w-full sm:w-auto max-w-2xl mx-auto transform"
              >
                ابدأ رحلة تحقيق الحلم دلوقتي 🌟
              </Button>
              
              {/* Success indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm md:text-base text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime rounded-full animate-pulse"></span>
                  نتائج مضمونة خلال 60 يوم
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-100"></span>
                  استراتيجية مخصصة لمتجرك
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime rounded-full animate-pulse delay-200"></span>
                  دعم مستمر من فريق الخبراء
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
