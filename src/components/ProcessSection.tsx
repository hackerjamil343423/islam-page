import { Button } from "@/components/ui/button";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "تحليل متجرك بالتفصيل",
      description: "بنفحص الأداء، الفانل، الإعلانات، وتجربة العميل",
      icon: "🔍",
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50"
    },
    {
      number: "2",
      title: "إطلاق الحملات + قياس النتائج",
      description: "بنطلق الحملات ونحلل كل شيء أسبوعيًا لتحقيق استقرار وربح ثابت",
      icon: "🚀",
      gradient: "from-lime to-green-500",
      bgGradient: "from-lime-50 to-green-50"
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-16 w-24 h-24 bg-lime/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-24 right-20 w-32 h-32 bg-lime-dark/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block glass-morphism px-6 py-3 rounded-2xl mb-6 shadow-premium animate-bounceIn">
            <span className="text-lime-dark font-semibold text-sm md:text-base">🔄 خطة العمل</span>
          </div>
          
          <div className="iphone-container max-w-5xl mx-auto p-8 md:p-12 lg:p-16 mb-8">
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
              <span className="block mb-4">إزاي</span>
              <span className="text-lime-dark bg-gradient-to-r from-lime-dark via-lime to-green-500 bg-clip-text text-transparent font-extrabold">
                هنشتغل سوا؟
              </span>
            </h2>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-lime to-lime-dark mx-auto rounded-full"></div>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12 lg:space-y-16 mb-12 md:mb-16 lg:mb-20">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br ${step.bgGradient} p-8 md:p-12 lg:p-16 rounded-3xl shadow-premium hover:shadow-glow border border-gray-100 animate-fade-up hover-lift transition-all duration-500 overflow-hidden`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid-bg h-full w-full"></div>
              </div>
              
              {/* Floating gradient */}
              <div className={`absolute -top-16 -left-16 w-48 h-48 bg-gradient-to-r ${step.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 md:gap-12 relative z-10">
                {/* Step Number & Icon */}
                <div className="flex items-center gap-6">
                  <div className={`w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center flex-shrink-0 shadow-premium group-hover:shadow-glow group-hover:scale-110 transition-all duration-500`}>
                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{step.number}</span>
                  </div>
                  <div className="text-4xl md:text-5xl lg:text-6xl group-hover:animate-bounce">
                    {step.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-4 md:mb-6 group-hover:text-lime-dark transition-colors duration-300 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Progress connector for non-last items */}
              {index < steps.length - 1 && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-lime to-lime-dark rounded-full opacity-30"></div>
              )}
              
              {/* Accent line */}
              <div className={`absolute bottom-0 left-0 h-2 bg-gradient-to-r ${step.gradient} w-0 group-hover:w-full transition-all duration-700 rounded-full`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <div className="glass-morphism max-w-4xl mx-auto p-8 md:p-12 lg:p-16 rounded-3xl shadow-premium relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-lime/10 via-transparent to-lime-dark/10 animate-shimmer"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-6 md:mb-8">
                مستعد للبداية؟
              </h3>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                انضم لفريق محترف عنده خطة واضحة ونتائج مثبتة
              </p>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-lime to-lime-dark text-black hover:from-lime-dark hover:to-lime text-lg md:text-xl lg:text-2xl px-12 md:px-16 lg:px-20 py-4 md:py-6 lg:py-8 rounded-full font-bold shadow-premium hover:shadow-glow transition-all duration-500 hover:scale-110 hover-lift w-full sm:w-auto max-w-2xl mx-auto transform"
              >
                ابدأ الرحلة دي مع فريق عنده خطة ونتائج 🎯
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
