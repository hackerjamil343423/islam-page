
import { Button } from "@/components/ui/button";
import { ImageCarousel } from "@/components/ui/image-carousel";

const TestimonialsSection = () => {
  // Updated with Imgur direct image URLs
  const testimonialImages = [
    "https://i.imgur.com/qOsPKJK.jpeg",
    "https://i.imgur.com/nROVylE.jpeg",
    "https://i.imgur.com/LQKyycb.jpeg",
    "https://i.imgur.com/4O2CW6t.jpeg",
    "https://i.imgur.com/bvZOyBA.jpeg",
    "https://i.imgur.com/PJFd3XG.jpeg",
    "https://i.imgur.com/RkoiRKe.jpeg",
    "https://i.imgur.com/JWJEi6v.jpeg"
  ];

  const stats = [
    { number: "200+", label: "متجر نجح معنا", icon: "🏪" },
    { number: "300%", label: "متوسط زيادة المبيعات", icon: "📈" },
    { number: "60", label: "يوم لرؤية النتائج", icon: "⏰" },
    { number: "95%", label: "معدل رضا العملاء", icon: "⭐" }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-cream via-white to-cream overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-16 left-12 w-28 h-28 bg-green-200/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-36 h-36 bg-lime/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-lime-dark/10 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block glass-morphism px-6 py-3 rounded-2xl mb-6 shadow-premium animate-bounceIn">
            <span className="text-green-600 font-semibold text-sm md:text-base">✅ نتائج مثبتة</span>
          </div>
          
          <div className="iphone-container max-w-5xl mx-auto p-8 md:p-12 lg:p-16 mb-8">
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
              <span className="block mb-4">نتائج</span>
              <span className="text-green-600 bg-gradient-to-r from-green-600 via-lime-dark to-green-500 bg-clip-text text-transparent font-extrabold">
                حقيقية
              </span>
              <span className="block mt-2">من عملاء فعليين</span>
            </h2>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-lime-dark mx-auto rounded-full"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group text-center bg-white p-6 md:p-8 lg:p-10 rounded-3xl shadow-premium hover:shadow-glow border border-gray-100 animate-fade-up hover-lift transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl mb-4 group-hover:animate-bounce">{stat.icon}</div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-lime-dark mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm md:text-base lg:text-lg text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <div className="glass-morphism p-6 md:p-8 lg:p-10 rounded-3xl shadow-premium">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-4">
                شوف بنفسك النتائج اللي حققناها
              </h3>
              <p className="text-base md:text-lg text-gray-600 font-medium">
                صور حقيقية لنتائج عملائنا - مش مجرد كلام
              </p>
            </div>
            
            <div className="animate-fade-up-delay-2 relative">
              <ImageCarousel 
                images={testimonialImages}
                className="max-w-6xl mx-auto"
              />
              
              {/* Floating trust indicators */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
                نتائج حقيقية
              </div>
              <div className="absolute -bottom-4 -left-4 bg-lime-dark text-black px-3 py-1 rounded-full text-sm font-semibold animate-bounce delay-500">
                مثبتة 100%
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="glass-morphism max-w-4xl mx-auto p-8 md:p-12 lg:p-16 rounded-3xl shadow-premium relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-lime/10 animate-shimmer"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black">
                  عايز تكون أنت القصة الجاية؟
                </h3>
                <div className="w-12 h-12 bg-lime-dark rounded-full flex items-center justify-center animate-pulse delay-300">
                  <span className="text-black text-xl">🚀</span>
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                انضم لمئات العملاء اللي حققوا نتائج مذهلة معنا
              </p>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-lime-dark text-white hover:from-green-600 hover:to-lime text-lg md:text-xl lg:text-2xl px-12 md:px-16 lg:px-20 py-4 md:py-6 lg:py-8 rounded-full font-bold shadow-premium hover:shadow-glow transition-all duration-500 hover:scale-110 hover-lift w-full sm:w-auto max-w-2xl mx-auto transform"
              >
                احجز استشارتك المجانية واحقق نتائج مماثلة 🏆
              </Button>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm md:text-base text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  استشارة مجانية 100%
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-dark rounded-full"></span>
                  بدون التزامات
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  نتائج مضمونة
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
