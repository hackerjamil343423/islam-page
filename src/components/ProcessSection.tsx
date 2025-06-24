import { Button } from "@/components/ui/button";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "تحليل متجرك بالتفصيل",
      description: "بنفحص الأداء، الفانل، الإعلانات، وتجربة العميل"
    },
    {
      number: "2",
      title: "إطلاق الحملات + قياس النتائج",
      description: "بنطلق الحملات ونحلل كل شيء أسبوعيًا لتحقيق استقرار وربح ثابت"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6 lg:mb-8 leading-tight px-2">
            إزاي هنشتغل سوا؟
          </h2>
        </div>

        <div className="space-y-6 md:space-y-8 mb-8 md:mb-12 lg:mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 p-6 md:p-8 bg-cream rounded-xl shadow-lg animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-lime rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg md:text-xl font-bold text-black">{step.number}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3">{step.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-lime text-black hover:bg-lime/90 text-base md:text-lg lg:text-xl px-6 md:px-8 lg:px-12 py-4 md:py-5 lg:py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            ابدأ الرحلة دي مع فريق عنده خطة ونتائج
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
