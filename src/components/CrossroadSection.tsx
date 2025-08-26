
import { Button } from "@/components/ui/button";

const CrossroadSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-16 w-32 h-32 bg-red-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-24 right-20 w-36 h-36 bg-lime/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gray-700/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block glass-morphism px-6 py-3 rounded-2xl mb-6 shadow-premium animate-bounceIn backdrop-blur-sm bg-white/10">
            <span className="text-lime font-semibold text-sm md:text-base">⚡ لحظة الحسم</span>
          </div>
          
          <div className="iphone-container max-w-5xl mx-auto p-8 md:p-12 lg:p-16 mb-8 bg-gradient-to-br from-white/5 to-white/10">
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="block mb-4">عندك</span>
              <span className="text-lime bg-gradient-to-r from-lime via-yellow-400 to-lime bg-clip-text text-transparent font-extrabold">
                طريقين...
              </span>
            </h2>
            <div className="mt-6 md:mt-8">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-medium">
                اختار مسارك بحكمة - مستقبل متجرك في يدك
              </p>
            </div>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-lime mx-auto rounded-full"></div>
        </div>

        {/* Paths Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 mb-12 md:mb-16 lg:mb-20">
          {/* Left Path - Negative */}
          <div className="group relative bg-gradient-to-br from-red-900/30 via-red-800/20 to-red-900/30 p-8 md:p-10 lg:p-12 rounded-3xl shadow-premium border-2 border-red-500/50 animate-fade-up hover-lift transition-all duration-500 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid-bg h-full w-full"></div>
            </div>
            
            {/* Floating gradient */}
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-gradient-to-r from-red-500 to-red-600 opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500"></div>
            
            <div className="text-center relative z-10">
              {/* Icon */}
              <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-premium group-hover:shadow-glow group-hover:scale-110 transition-all duration-500">
                  <span className="text-white text-2xl md:text-3xl font-bold">✗</span>
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl group-hover:animate-bounce">😞</div>
              </div>
              
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-400 mb-6 md:mb-8">
                الطريق الأول
              </h3>
              
              <div className="space-y-4 mb-8">
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-red-200 font-medium">
                  إما تكمّل زي ما أنت، وتصرف فلوس أكتر كل شهر بدون نتائج
                </p>
                
                {/* Negative consequences */}
                <div className="space-y-3 text-sm md:text-base text-red-300/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    هدر مستمر للميزانية
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    إحباط وفقدان الثقة
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    تأخير في تحقيق الأهداف
                  </div>
                </div>
              </div>
              
              {/* Bottom warning line */}
              <div className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-red-500 to-red-600 w-0 group-hover:w-full transition-all duration-700 rounded-full"></div>
            </div>
          </div>

          {/* Right Path - Positive */}
          <div className="group relative bg-gradient-to-br from-lime/20 via-green-500/10 to-lime/20 p-8 md:p-10 lg:p-12 rounded-3xl shadow-premium border-2 border-lime/50 animate-fade-up-delay-1 hover-lift transition-all duration-500 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid-bg h-full w-full"></div>
            </div>
            
            {/* Floating gradient */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-r from-lime to-green-500 opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500"></div>
            
            <div className="text-center relative z-10">
              {/* Icon */}
              <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-lime to-green-500 rounded-full flex items-center justify-center shadow-premium group-hover:shadow-glow group-hover:scale-110 transition-all duration-500">
                  <span className="text-black text-2xl md:text-3xl font-bold">✓</span>
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl group-hover:animate-bounce">🚀</div>
              </div>
              
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-lime mb-6 md:mb-8">
                الطريق الثاني
              </h3>
              
              <div className="space-y-4 mb-8">
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-lime-200 font-medium">
                  أو تبدأ دلوقتي تبني نظام تسويق بيشتغل لصالحك، ويحققلك نمو حقيقي ومستقر
                </p>
                
                {/* Positive benefits */}
                <div className="space-y-3 text-sm md:text-base text-lime-300/90">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-lime rounded-full"></span>
                    نتائج مضمونة خلال 60 يوم
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-lime rounded-full"></span>
                    نمو مستقر ومربح
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-lime rounded-full"></span>
                    راحة بال وثقة في المستقبل
                  </div>
                </div>
              </div>
              
              {/* Bottom success line */}
              <div className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-lime to-green-500 w-0 group-hover:w-full transition-all duration-700 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="glass-morphism max-w-5xl mx-auto p-8 md:p-12 lg:p-16 rounded-3xl shadow-premium relative overflow-hidden backdrop-blur-sm bg-white/10">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-lime/20 via-transparent to-lime/20 animate-shimmer"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-lime to-green-500 rounded-full flex items-center justify-center animate-pulse shadow-premium">
                  <span className="text-black text-2xl">⚡</span>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
                  الوقت ينفد... اختار الآن
                </h3>
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-lime rounded-full flex items-center justify-center animate-pulse delay-300 shadow-premium">
                  <span className="text-black text-2xl">🏆</span>
                </div>
              </div>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
                كل يوم تتأخر فيه... منافسك بيتقدم عليك خطوة
              </p>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-lime to-green-500 text-black hover:from-green-500 hover:to-lime text-lg md:text-xl lg:text-2xl px-12 md:px-16 lg:px-20 py-4 md:py-6 lg:py-8 rounded-full font-bold shadow-premium hover:shadow-glow transition-all duration-500 hover:scale-110 hover-lift w-full sm:w-auto max-w-2xl mx-auto transform"
              >
                احجز استشارتك المجانية الآن ⚡
              </Button>
              
              {/* Urgency indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm md:text-base text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime rounded-full animate-ping"></span>
                  مقاعد محدودة
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full animate-ping delay-100"></span>
                  استشارة مجانية 100%
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime rounded-full animate-ping delay-200"></span>
                  لا تضيع الفرصة
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrossroadSection;
