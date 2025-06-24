
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
    },
    {
      question: "لو مفيش نتائج، إيه اللي بيحصل؟",
      answer: "ده مش بيحصل لأن النظام بتاعنا مختبر ومضمون، بس لو حصل ومشفتش تحسن، هنرجعلك فلوسك كاملة ونكمل شغال معاك مجانًا."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            أسئلة بنسمعها كتير
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="mb-4">
              <AccordionTrigger className="text-right text-lg font-semibold hover:text-lime transition-colors p-6 bg-gray-50 rounded-t-xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-right text-gray-700 leading-relaxed p-6 bg-white border border-gray-100 rounded-b-xl">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
