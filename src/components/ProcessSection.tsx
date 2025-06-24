
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
      title: "تحسين شامل للرحلة",
      description: "من أول الإعلان لغاية الدفع – كل خطوة محسوبة ومعدّلة"
    },
    {
      number: "3",
      title: "إطلاق الحملات + قياس النتائج", 
      description: "بنطلق الحملات ونحلل كل شيء أسبوعيًا لتحقيق استقرار وربح ثابت"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            إزاي هنشتغل سوا؟
          </h2>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-16 left-1/2 w-0.5 h-96 bg-lime transform -translate-x-1/2"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex items-center gap-8 mb-16 animate-fade-up ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="flex-1">
                <div className={`bg-white p-8 rounded-2xl shadow-lg border-2 border-lime ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-lime rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-black">
                    {step.number}
                  </span>
                </div>
              </div>
              
              <div className="flex-1 hidden md:block">
                {index % 2 !== 0 && (
                  <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-lime">
                    <h3 className="text-2xl font-bold text-black mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-lime text-black hover:bg-lime/90 text-xl px-12 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            ابدأ الرحلة دي مع فريق عنده خطة ونتائج
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
