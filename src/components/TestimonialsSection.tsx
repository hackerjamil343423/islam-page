
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            نتائج حقيقية من عملاء فعليين
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Video Testimonial */}
          <div className="animate-fade-up">
            <div className="aspect-video bg-black rounded-xl relative overflow-hidden border-2 border-lime shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-lime rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[8px] border-r-0 border-b-[6px] border-t-[6px] border-l-black border-t-transparent border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-white font-medium">شهادة فيديو</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-gray-600">أحمد محمد - متجر الأزياء</p>
          </div>

          {/* Dashboard Screenshot */}
          <div className="animate-fade-up-delay-1">
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-lime">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">+180%</div>
                  <p className="text-green-700 font-medium">زيادة في المبيعات</p>
                </div>
              </div>
              <p className="text-center text-gray-600">Shopify Dashboard - شهر مارس</p>
            </div>
          </div>

          {/* Quote */}
          <div className="animate-fade-up-delay-2">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-lime h-full flex flex-col justify-center">
              <div className="text-6xl text-lime mb-4">"</div>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                ضاعفنا المبيعات خلال أول 45 يوم بس، والأداء ثابت من وقتها
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="font-bold text-black">سارة أحمد</p>
                  <p className="text-gray-600">مؤسسة متجر Beauty Plus</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-lime text-black hover:bg-lime/90 text-xl px-12 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            عايز تكون أنت القصة الجاية؟ احجز دلوقتي
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
