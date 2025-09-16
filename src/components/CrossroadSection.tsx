
import { Button } from "@/components/ui/button";

const CrossroadSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-16 w-32 h-32 bg-red-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-24 right-20 w-36 h-36 bg-lime/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gray-700/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 enterprise-card px-6 py-3 text-sm font-medium text-muted-foreground mb-8">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            لحظة الحسم
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            عندك <span className="text-primary">طريقين...</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            اختار مسارك بحكمة - مستقبل متجرك في يدك
          </p>
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
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">×</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-red-400 mb-6">
                الطريق الأول
              </h3>
              
              <div className="space-y-4 mb-8">
                <p className="text-lg text-red-200">
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
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-2xl font-bold">✓</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-6">
                الطريق الثاني
              </h3>
              
              <div className="space-y-4 mb-8">
                <p className="text-lg text-muted-foreground">
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
          <div className="enterprise-card max-w-4xl mx-auto p-12">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                الوقت ينفد... اختار الآن
              </h3>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                كل يوم تتأخر فيه... منافسك بيتقدم عليك خطوة
              </p>
              
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold px-8 py-4 rounded-lg"
              >
                تواصل معنا الان
              </Button>
              
              <div className="flex flex-wrap justify-center items-center gap-8 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  مقاعد محدودة
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  استشارة مجانية 100%
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  لا تضيع الفرصة
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrossroadSection;
