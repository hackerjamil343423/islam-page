
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonialImages = [
    "/images/testimonial-1.png",
    "/images/testimonial-2.png", 
    "/images/testimonial-3.png",
    "/images/testimonial-4.png",
    "/images/testimonial-5.png",
    "/images/testimonial-6.png",
    "/images/testimonial-7.png",
    "/images/testimonial-8.png",
    "/images/testimonial-9.png"
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-4 md:mb-6 leading-relaxed">
            نتائج حقيقية من عملاء فعليين
          </h2>
        </div>

        <div className="mb-8 md:mb-12">
          <Carousel 
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonialImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="animate-fade-up">
                    <div 
                      className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 p-2"
                      style={{ 
                        boxShadow: '0 10px 30px rgba(217, 252, 103, 0.4)' 
                      }}
                    >
                      <img 
                        src={image} 
                        alt={`نتائج العميل ${index + 1}`}
                        className="w-full h-auto object-contain rounded-xl"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-2 border-lime bg-white text-lime hover:bg-lime hover:text-black transition-all duration-300 shadow-lg -left-4 md:-left-12" />
            <CarouselNext className="border-2 border-lime bg-white text-lime hover:bg-lime hover:text-black transition-all duration-300 shadow-lg -right-4 md:-right-12" />
          </Carousel>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-lime text-black hover:bg-lime/90 text-base md:text-lg px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto max-w-lg mx-auto"
          >
            عايز تكون أنت القصة الجاية؟ احجز دلوقتي
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
