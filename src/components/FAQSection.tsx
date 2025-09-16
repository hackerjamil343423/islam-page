
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const faqs = [
    {
      question: "إزاي بتختلفوا عن الوكالات التسويقية التقليدية؟",
      answer: "إحنا مش بنشتغل بالتخمين أو القوالب الجاهزة. كل حاجة عندنا مبنية على داتا حقيقية من متجرك، وبنحلل كل خطوة في رحلة العميل عشان نحسن التحويلات، مش بس نجيب ترافيك."
    },
    {
      question: "هل في ضمان للنتائج؟",
      answer: "نعم، إحنا واثقين في النظام بتاعنا. لو مشفتش تحسن ملحوظ في الأرقام خلال أول 60 يوم، هنكمل شغال معاك مجانًا لحد ما نوصل للهدف."
    },
    {
      question: "إزاي بتابع الشغل والتقارير؟",
      answer: "هتوصلك تقارير مفصلة كل أسبوع فيها كل الأرقام والتحليلات، وهيكون عندك مكالمة أسبوعية مع مدير الحساب بتاعك عشان نتناقش في النتائج والخطة الجاية."
    },
    {
      question: "هل الخدمة تشمل تصميم صفحات الهبوط؟",
      answer: "أكيد، إحنا بنصمم ونحسن كل صفحات الهبوط، صفحات المنتجات، وصفحة الـ Checkout عشان نضمن أعلى معدل تحويل ممكن."
    },
    {
      question: "هل لازم يكون عندي تيم داخلي؟",
      answer: "مش شرط خالص. إحنا بنتولى كل شيء من الألف للياء، بس لو عندك تيم داخلي هنشتغل معاهم ونقوم بتدريبهم على النظام."
    },
    {
      question: "هل في حد بيكون مسؤول عن الحساب بتاعي؟",
      answer: "طبعاً، هيكون معاك مدير حساب مخصص ليك وفريق كامل من المتخصصين في التحليل، التصميم، والإعلانات."
    },
    {
      question: "هل بتشتغلوا على كل المنصات؟",
      answer: "إحنا بنشتغل على فيسبوك، إنستجرام، جوجل، تيك توك، وأي منصة تانية بتجيب نتائج لمتجرك. اختيار المنصات بيكون مبني على تحليل العملاء بتوعك."
    }
  ];

  return (
    <section className="py-12 md:py-16 section-bg">
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 enterprise-card px-6 py-3 text-sm font-medium text-muted-foreground mb-8">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            أسئلة شائعة
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            أسئلة <span className="text-primary">بنسمعها كتير</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            هنجاوب على كل اللي في بالك قبل ما تاخد القرار
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-6 md:space-y-8">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group bg-card/50 backdrop-blur-sm rounded-3xl shadow-premium hover:shadow-glow border border-border/50 hover:border-primary/30 overflow-hidden animate-fade-up transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-right text-lg font-bold hover:text-primary transition-colors duration-300 p-8">
                  <span>{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-right text-lg text-muted-foreground leading-relaxed p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-foreground font-bold text-sm">✓</span>
                    </div>
                    <p>{faq.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-20">
          <div className="enterprise-card max-w-4xl mx-auto p-12">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                لسه عندك أسئلة؟
              </h3>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                احجز استشارة مجانية واسأل كل اللي عايز تعرفه
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
                  مكالمة مجانية 30 دقيقة
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  بدون التزامات
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  إجابات شافية لكل أسئلتك
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
