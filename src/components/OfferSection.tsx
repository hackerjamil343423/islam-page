import { Button } from "@/components/ui/button";

const OfferSection = () => {
  const deliverables = [
    {
      icon: "🔍",
      title: "تحليل شامل لمتجرك ومنتجاتك و حساباتك الاعلانية",
      description: "نكتشف الثغرات ونقترح حلول فعلية",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "⚙️",
      title: "إعادة تصميم وتحسين الفانل",
      description: "نظبط الفانل من الألف للياء نقفل كل الثغرات اللي تضيع العملاء المحتملين، ونحوّل الزوار إلى عملاء",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "📱",
      title: "إعلانات بداتا حقيقية",
      description: "مش عشوائية، بل مبنية على أرقام ونتائج سابقة",
      gradient: "from-lime to-green-500"
    },
    {
      icon: "📊",
      title: "تقارير ومتابعة أسبوعية",
      description: "نتابع الأداء ونعدل باستمرار حسب الأهداف",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-28 h-28 bg-lime/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-16 right-12 w-36 h-36 bg-lime-dark/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-lime/5 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block glass-morphism px-6 py-3 rounded-2xl mb-6 shadow-premium animate-bounceIn">
            <span className="text-lime-dark font-semibold text-sm md:text-base">🚀 عرضنا المميز</span>
          </div>
          
          <div className="iphone-container max-w-5xl mx-auto p-8 md:p-12 lg:p-16 mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight px-2">
              <span className="block mb-4">هنساعدك تبني نظام تسويقي</span>
              <span className="block">يضاعف مبيعاتك خلال</span>
              <span className="text-lime-dark bg-gradient-to-r from-lime-dark via-lime to-green-500 bg-clip-text text-transparent font-extrabold">
                30 - 60 يوم
              </span>
            </h2>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-lime to-lime-dark mx-auto rounded-full"></div>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
          {deliverables.map((deliverable, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 md:p-10 lg:p-12 rounded-3xl shadow-premium hover:shadow-glow border border-gray-100 animate-fade-up hover-lift transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Background gradient accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${deliverable.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500 rounded-bl-3xl`}></div>
              
              {/* Icon with animation */}
              <div className="flex items-start gap-6 md:gap-8">
                <div className="relative">
                  <div className="text-4xl md:text-5xl lg:text-6xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 relative z-10">
                    {deliverable.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${deliverable.gradient} opacity-20 rounded-full blur-xl group-hover:opacity-30 transition-opacity duration-300 scale-150`}></div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4 md:mb-6 leading-relaxed group-hover:text-lime-dark transition-colors duration-300">
                    {deliverable.title}
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed font-medium">
                    {deliverable.description}
                  </p>
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${deliverable.gradient} w-0 group-hover:w-full transition-all duration-500 rounded-full`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-morphism max-w-3xl mx-auto p-8 md:p-12 lg:p-16 rounded-3xl shadow-premium mb-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-6 md:mb-8">
              جاهز تبدأ رحلة نجاحك؟
            </h3>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-lime to-lime-dark text-black hover:from-lime-dark hover:to-lime text-lg md:text-xl lg:text-2xl px-12 md:px-16 lg:px-20 py-4 md:py-6 lg:py-8 rounded-full font-bold shadow-premium hover:shadow-glow transition-all duration-500 hover:scale-110 hover-lift w-full sm:w-auto max-w-2xl mx-auto transform"
            >
              احجز استشارتك المجانية دلوقتي
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
