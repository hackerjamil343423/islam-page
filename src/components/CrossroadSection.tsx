
import { Button } from "@/components/ui/button";

const CrossroadSection = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            عندك طريقين...
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left Path - Negative */}
          <div className="p-8 bg-red-900/20 border-2 border-red-500 rounded-xl animate-fade-up">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">✗</span>
              </div>
              <h3 className="text-2xl font-bold text-red-400 mb-4">الطريق الأول</h3>
            </div>
            <p className="text-lg leading-relaxed text-center">
              إما تكمّل زي ما أنت، وتصرف فلوس أكتر كل شهر بدون نتائج
            </p>
          </div>

          {/* Right Path - Positive */}
          <div className="p-8 bg-lime/20 border-2 border-lime rounded-xl animate-fade-up-delay-1">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-2xl font-bold text-lime mb-4">الطريق الثاني</h3>
            </div>
            <p className="text-lg leading-relaxed text-center">
              أو تبدأ دلوقتي تبني نظام تسويق بيشتغل لصالحك، ويحققلك نمو حقيقي ومستقر
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-lime text-black hover:bg-lime/90 text-2xl px-16 py-8 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            احجز استشارتك المجانية الآن
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CrossroadSection;
