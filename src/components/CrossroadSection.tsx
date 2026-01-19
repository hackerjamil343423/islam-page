import { Button } from "@/components/ui/button";

const CrossroadSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-slate-900 via-teal-dark to-slate-900 text-white overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-24 right-20 w-36 h-36 bg-mint/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white/90 mb-8">
            <div className="w-2 h-2 bg-mint rounded-full"></div>
            لحظة الحسم
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            عندك <span className="text-mint">طريقين</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            اختار مسارك بحكمة - مستقبل متجرك في يدك
          </p>
        </div>

        {/* Paths Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 mb-12 md:mb-16 lg:mb-20">
          {/* Left Path - Negative */}
          <div className="group relative bg-gradient-to-br from-red-950/50 via-red-900/30 to-red-950/50 p-8 md:p-10 lg:p-12 rounded-3xl shadow-premium border border-red-500/30 hover:border-red-500/50 animate-fade-up hover-lift transition-all duration-500 overflow-hidden">
            {/* Floating gradient */}
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-gradient-to-r from-red-600 to-red-700 opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500"></div>

            <div className="text-center relative z-10">
              {/* Icon */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
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
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    هدر مستمر للميزانية
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    إحباط وفقدان الثقة
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    تأخير في تحقيق الأهداف
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Path - Positive */}
          <div className="group relative bg-gradient-to-br from-primary/40 via-mint/20 to-primary/40 p-8 md:p-10 lg:p-12 rounded-3xl shadow-premium border border-mint/30 hover:border-mint/50 animate-fade-up-delay-1 hover-lift transition-all duration-500 overflow-hidden">
            {/* Floating gradient */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-r from-mint to-primary opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500"></div>

            <div className="text-center relative z-10">
              {/* Icon */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-mint to-primary rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-bold">✓</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-mint mb-6">
                الطريق الثاني
              </h3>

              <div className="space-y-4 mb-8">
                <p className="text-lg text-white/90">
                  أو تبدأ دلوقتي تبني نظام تسويق بيشتغل لصالحك، ويحققلك نمو حقيقي ومستقر
                </p>

                {/* Positive benefits */}
                <div className="space-y-3 text-sm md:text-base text-mint/90">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-mint rounded-full"></span>
                    نتائج مضمونة خلال 60 يوم
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-mint rounded-full"></span>
                    نمو مستقر ومربح
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-mint rounded-full"></span>
                    راحة بال وثقة في المستقبل
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            الوقت ينفد اختار الآن
          </h3>

          <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto">
            كل يوم تتأخر فيه منافسك بيتقدم عليك خطوة
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-mint to-primary hover:from-mint-light hover:to-primary text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            تواصل معنا الان
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CrossroadSection;
