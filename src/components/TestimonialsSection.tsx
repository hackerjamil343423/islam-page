
import { Button } from "@/components/ui/button";
import { useState } from "react";

const TestimonialsSection = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  // Testimonial result images
  const testimonialImages = [
    "https://i.imgur.com/nROVylE.jpeg",
    "https://i.imgur.com/qOsPKJK.jpeg",
    "https://i.imgur.com/LQKyycb.jpeg",
    "https://i.imgur.com/JWJEi6v.jpeg",
    "https://i.imgur.com/RkoiRKe.jpeg",
    "https://i.imgur.com/PJFd3XG.jpeg",
    "https://i.imgur.com/bvZOyBA.jpeg",
    "https://i.imgur.com/4O2CW6t.jpeg"
  ];

  const stats = [
    { number: "200+", label: "متجر نجح معنا" },
    { number: "300%", label: "متوسط زيادة المبيعات" },
    { number: "60", label: "يوم لرؤية النتائج" },
    { number: "95%", label: "معدل رضا العملاء" }
  ];

  return (
    <section className="py-12 md:py-16 section-bg">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 enterprise-card px-6 py-3 text-sm font-medium text-muted-foreground mb-8">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            نتائج مثبتة
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            نتائج <span className="text-primary">حقيقية</span> من عملاء فعليين
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            صور حقيقية لنتائج عملائنا - مش مجرد كلام
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="enterprise-card p-8 text-center hover:border-primary/30 transition-all duration-300 shadow-deep hover:shadow-elevated">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-20">
          <div className="enterprise-card p-8 shadow-elevated">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                شوف بنفسك النتائج اللي حققناها
              </h3>
            </div>

            <div className="relative">
              {/* Image Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {testimonialImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-lg shadow-deep hover:shadow-elevated transition-all duration-300 cursor-pointer group"
                    onClick={() => setLightboxImage(image)}
                  >
                    <img
                      src={image}
                      alt={`نتيجة العميل ${index + 1}`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-medium">
                        اضغط للتكبير
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Professional trust indicators */}
              <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-medium">
                نتائج حقيقية
              </div>
              <div className="absolute -bottom-3 -left-3 bg-card border border-border text-foreground px-3 py-1 rounded text-xs font-medium">
                مثبتة 100%
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="enterprise-card max-w-4xl mx-auto p-12">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              عايز تكون أنت القصة الجاية؟
            </h3>

            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              انضم لمئات العملاء اللي حققوا نتائج مذهلة معنا
            </p>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold px-8 py-4 rounded-lg mb-8"
            >
              تواصل معنا الان
            </Button>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                استشارة مجانية 100%
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                بدون التزامات
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                نتائج مضمونة
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            {/* Close button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors duration-200 text-xl font-bold z-10"
            >
              ✕ إغلاق
            </button>

            {/* Image */}
            <img
              src={lightboxImage}
              alt="نتيجة العميل"
              className="max-w-full max-h-full object-contain rounded-lg shadow-intense"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
