
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "إزاي بتختلفوا عن الوكالات التسويقية التقليدية؟",
      answer: "إحنا مش بنشتغل بالتخمين أو القوالب الجاهزة. كل حاجة عندنا مبنية على داتا حقيقية من متجرك، وبنحلل كل خطوة في رحلة العميل عشان نحسن التحويلات، مش بس نجيب ترافيك.",
      icon: "🎯"
    },
    {
      question: "هل في ضمان للنتائج؟",
      answer: "نعم، إحنا واثقين في النظام بتاعنا. لو مشفتش تحسن ملحوظ في الأرقام خلال أول 60 يوم، هنكمل شغال معاك مجانًا لحد ما نوصل للهدف.",
      icon: "✅"
    },
    {
      question: "إزاي بتابع الشغل والتقارير؟",
      answer: "هتوصلك تقارير مفصلة كل أسبوع فيها كل الأرقام والتحليلات، وهيكون عندك مكالمة أسبوعية مع مدير الحساب بتاعك عشان نتناقش في النتائج والخطة الجاية.",
      icon: "📊"
    },
    {
      question: "هل الخدمة تشمل تصميم صفحات الهبوط؟",
      answer: "أكيد، إحنا بنصمم ونحسن كل صفحات الهبوط، صفحات المنتجات، وصفحة الـ Checkout عشان نضمن أعلى معدل تحويل ممكن.",
      icon: "🎨"
    },
    {
      question: "هل لازم يكون عندي تيم داخلي؟",
      answer: "مش شرط خالص. إحنا بنتولى كل شيء من الألف للياء، بس لو عندك تيم داخلي هنشتغل معاهم ونقوم بتدريبهم على النظام.",
      icon: "👥"
    },
    {
      question: "هل في حد بيكون مسؤول عن الحساب بتاعي؟",
      answer: "طبعاً، هيكون معاك مدير حساب مخصص ليك وفريق كامل من المتخصصين في التحليل، التصميم، والإعلانات.",
      icon: "🤝"
    },
    {
      question: "هل بتشتغلوا على كل المنصات؟",
      answer: "إحنا بنشتغل على فيسبوك، إنستجرام، جوجل، تيك توك، وأي منصة تانية بتجيب نتائج لمتجرك. اختيار المنصات بيكون مبني على تحليل العملاء بتوعك.",
      icon: "🌐"
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-16 w-32 h-32 bg-lime/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-24 left-20 w-36 h-36 bg-lime-dark/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-lime/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block glass-morphism px-6 py-3 rounded-2xl mb-6 shadow-premium animate-bounceIn">
            <span className="text-lime-dark font-semibold text-sm md:text-base">❓ أسئلة شائعة</span>
          </div>
          
          <div className="iphone-container max-w-5xl mx-auto p-8 md:p-12 lg:p-16 mb-8">
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
              <span className="block mb-4">أسئلة</span>
              <span className="text-lime-dark bg-gradient-to-r from-lime-dark via-lime to-green-500 bg-clip-text text-transparent font-extrabold">
                بنسمعها كتير
              </span>
            </h2>
            <div className="mt-6 md:mt-8">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                هنجاوب على كل اللي في بالك قبل ما تاخد القرار
              </p>
            </div>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-lime to-lime-dark mx-auto rounded-full"></div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-6 md:space-y-8">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="group bg-white rounded-3xl shadow-premium hover:shadow-glow border border-gray-100 overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-right text-lg md:text-xl lg:text-2xl font-bold hover:text-lime-dark transition-all duration-300 p-6 md:p-8 lg:p-10 hover:bg-lime/5 group">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl md:text-3xl lg:text-4xl group-hover:animate-bounce">
                        {faq.icon}
                      </div>
                      <span className="flex-1">{faq.question}</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-right text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed p-6 md:p-8 lg:p-10 bg-gradient-to-br from-lime/5 to-transparent font-medium">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-lime rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-black font-bold text-sm">✓</span>
                    </div>
                    <p>{faq.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-12 md:mt-16 lg:mt-20">
          <div className="glass-morphism max-w-4xl mx-auto p-8 md:p-12 lg:p-16 rounded-3xl shadow-premium relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-lime/10 via-transparent to-lime-dark/10 animate-shimmer"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-lime to-lime-dark rounded-full flex items-center justify-center animate-pulse shadow-premium">
                  <span className="text-black text-2xl">💡</span>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black">
                  لسه عندك أسئلة؟
                </h3>
                <div className="w-16 h-16 bg-gradient-to-r from-lime-dark to-green-500 rounded-full flex items-center justify-center animate-pulse delay-300 shadow-premium">
                  <span className="text-black text-2xl">📞</span>
                </div>
              </div>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
                احجز استشارة مجانية واسأل كل اللي عايز تعرفه
              </p>
              
              <button className="bg-gradient-to-r from-lime to-lime-dark text-black hover:from-lime-dark hover:to-lime text-lg md:text-xl lg:text-2xl px-12 md:px-16 lg:px-20 py-4 md:py-6 lg:py-8 rounded-full font-bold shadow-premium hover:shadow-glow transition-all duration-500 hover:scale-110 hover-lift w-full sm:w-auto max-w-2xl mx-auto transform">
                احجز مكالمتك المجانية الآن 📱
              </button>
              
              {/* Contact assurance */}
              <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm md:text-base text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime rounded-full animate-pulse"></span>
                  مكالمة مجانية 30 دقيقة
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-dark rounded-full animate-pulse delay-100"></span>
                  بدون التزامات
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime rounded-full animate-pulse delay-200"></span>
                  إجابات شافية لكل أسئلتك
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
