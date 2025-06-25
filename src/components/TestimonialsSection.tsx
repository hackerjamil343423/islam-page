
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

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 animate-fade-up">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4 md:mb-6 leading-relaxed">
            نتائج حقيقية من عملاء فعليين
          </h2>
        </div>

        <div className="mb-8 md:mb-12 animate-fade-up-delay-2">
          <ImageCarousel 
            images={testimonialImages}
            className="max-w-5xl mx-auto"
          />
        </div>

        <div className="text-center animate-fade-up-delay-3">
          <Button 
            size="lg" 
            className="bg-lime text-black hover:bg-lime/90 text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto max-w-lg mx-auto"
          >
            عايز تكون أنت القصة الجاية؟ احجز دلوقتي
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
