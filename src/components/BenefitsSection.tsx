
import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "💰",
      title: "مضاعفة الأرباح",
      description: "بتشتغل على تحسين كل نقطة تؤثر في التحويل والمبيعات",
      gradient: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50"
    },
    {
      icon: "🎯",
      title: "وضوح في الأهداف", 
      description: "كل إعلان وكل صفحة له هدف واضح وقياس مباشر",
      gradient: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50"
    },
    {
      icon: "⏱",
      title: "توفير وقت وفلوس",
      description: "نمنعك من تجربة أشياء عشوائية بتكلفك من غير فايدة",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-cream via-white to-cream overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-16 right-16 w-32 h-32 bg-lime/10 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-28 h-28 bg-lime-dark/10 rounded-full blur-2xl animate-float delay-1000"></div>
      <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-lime/5 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block glass-morphism px-6 py-3 rounded-2xl mb-6 shadow-premium animate-slideInFromTop">
            <span className="text-lime-dark font-semibold text-sm md:text-base">⭐ مميزاتنا الحصرية</span>
          </div>
          
          <div className="iphone-container max-w-4xl mx-auto p-8 md:p-12 lg:p-16 mb-8">
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
              <span className="block mb-2">ليه</span>
              <span className="text-lime-dark bg-gradient-to-r from-lime-dark via-lime to-green-500 bg-clip-text text-transparent font-extrabold">
                تختارنا؟
              </span>
            </h2>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-lime to-lime-dark mx-auto rounded-full"></div>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br ${benefit.bgColor} p-8 md:p-10 lg:p-12 rounded-3xl shadow-premium hover:shadow-glow border border-gray-100 text-center animate-fade-up hover-lift transition-all duration-500 overflow-hidden`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid-bg h-full w-full"></div>
              </div>
              
              {/* Floating gradient orb */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r ${benefit.gradient} opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              {/* Icon with enhanced styling */}
              <div className="relative mb-6 md:mb-8">
                <div className="text-5xl md:text-6xl lg:text-7xl mb-2 group-hover:animate-bounce relative z-10">
                  {benefit.icon}
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-30 rounded-full blur-xl scale-150 group-hover:scale-200 transition-transform duration-500`}></div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-4 md:mb-6 group-hover:text-lime-dark transition-colors duration-300">
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                {benefit.description}
              </p>
              
              {/* Bottom accent */}
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${benefit.gradient} group-hover:w-20 transition-all duration-500 rounded-full`}></div>
              
              {/* Floating dots */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-lime rounded-full opacity-60 group-hover:animate-ping"></div>
              <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-lime-dark rounded-full opacity-40 group-hover:animate-ping delay-200"></div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="glass-morphism max-w-4xl mx-auto p-8 md:p-12 lg:p-16 rounded-3xl shadow-premium relative overflow-hidden">
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-lime/10 via-transparent to-lime-dark/10 animate-shimmer"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-6 md:mb-8">
                عايز تبدأ تربح بدل ما تخسر؟
              </h3>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                انضم لأكثر من 200+ متجر نجحوا في مضاعفة مبيعاتهم معنا
              </p>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-lime to-lime-dark text-black hover:from-lime-dark hover:to-lime text-lg md:text-xl lg:text-2xl px-12 md:px-16 lg:px-20 py-4 md:py-6 lg:py-8 rounded-full font-bold shadow-premium hover:shadow-glow transition-all duration-500 hover:scale-110 hover-lift w-full sm:w-auto max-w-2xl mx-auto transform"
              >
                ابدأ رحلة النجاح دلوقتي 🚀
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
