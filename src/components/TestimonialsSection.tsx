
import { Button } from "@/components/ui/button";
import { useState } from "react";

const TestimonialsSection = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Testimonial result images - Fixed paths with correct spacing
  const testimonialImages = [
    "/testiominals/WhatsApp Image 2026-01-13 at 15.25.56 (1).jpeg",
    "/testiominals/WhatsApp Image 2026-01-13 at 15.25.56 (2).jpeg",
    "/testiominals/WhatsApp Image 2026-01-13 at 15.25.56.jpeg",
    "/testiominals/WhatsApp Image 2026-01-13 at 15.25.57 (1).jpeg",
    "/testiominals/WhatsApp Image 2026-01-13 at 15.25.57 (2).jpeg",
    "/testiominals/WhatsApp Image 2026-01-13 at 15.25.57 (3).jpeg",
    "/testiominals/WhatsApp Image 2026-01-13 at 15.25.57 (4).jpeg",
    "/testiominals/WhatsApp Image 2026-01-13 at 15.25.57 (5).jpeg",
    "/testiominals/WhatsApp Image 2026-01-13 at 15.25.57.jpeg",
    "/testiominals/WhatsApp Image 2026-01-13 at 15.28.55.jpeg",
    "/testiominals/WhatsApp Image 2026-01-13 at 15.31.10.jpeg",
    "/testiominals/WhatsApp Image 2026-01-13 at 15.32.06.jpeg"
  ];

  // Show only first 6 images initially, or all if showAll is true
  const displayedImages = showAll ? testimonialImages : testimonialImages.slice(0, 6);

  const stats = [
    { number: "200+", label: "متجر نجح معنا" },
    { number: "300%", label: "متوسط زيادة المبيعات" },
    { number: "60", label: "يوم لرؤية النتائج" },
    { number: "95%", label: "معدل رضا العملاء" }
  ];

  return (
    <section className="py-12 md:py-16 section-bg scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-foreground mb-8">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            نتائج مثبتة
          </span>

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
            <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Title */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            شوف بنفسك النتائج اللي حققناها
          </h3>
        </div>

        {/* Image Grid - Modern 3 columns per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setLightboxImage(image)}
            >
              <img
                src={image}
                alt={`نتيجة العميل ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-primary/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  اضغط للتكبير
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && testimonialImages.length > 6 && (
          <div className="text-center relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background -z-10 h-32" />
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowAll(true);
              }}
              className="border-2 border-primary/30 hover:border-primary text-foreground hover:text-primary hover:bg-primary/5 backdrop-blur-sm bg-white/10 px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105"
            >
              عرض المزيد من النتائج
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            عايز تكون أنت القصة الجاية؟
          </h3>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            انضم لمئات العملاء اللي حققوا نتائج مذهلة معنا
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold px-8 py-4 rounded-full"
          >
            تواصل معنا الان
          </Button>
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
