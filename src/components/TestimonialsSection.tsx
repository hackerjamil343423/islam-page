
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";

const TestimonialsSection = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const openLightbox = (image: string) => {
    const index = testimonialImages.indexOf(image);
    setCurrentIndex(index);
    setLightboxImage(image);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : testimonialImages.length - 1;
    setCurrentIndex(newIndex);
    setLightboxImage(testimonialImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex < testimonialImages.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setLightboxImage(testimonialImages[newIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setLightboxImage(null);
    } else if (e.key === "ArrowLeft") {
      goToPrevious();
    } else if (e.key === "ArrowRight") {
      goToNext();
    }
  };

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
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-card border border-border/50"
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image}
                  alt={`نتيجة العميل ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-primary/90 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0014 0z" />
                  </svg>
                  <span>اضغط للتكبير</span>
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

      {/* Modern Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-black/95 backdrop-blur-md animate-in fade-in"
          onClick={() => setLightboxImage(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 md:p-6 z-10">
            <div className="text-white/80 text-sm font-medium">
              نتيجة {currentIndex + 1} من {testimonialImages.length}
            </div>
            <button
              onClick={() => setLightboxImage(null)}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10"
            aria-label="الصورة السابقة"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 rotate-180" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10"
            aria-label="الصورة التالية"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-6xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt="نتيجة العميل"
              className="w-full max-h-[70vh] md:max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />

            {/* Download button */}
            <a
              href={lightboxImage}
              download
              className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              aria-label="تحميل الصورة"
            >
              <Download className="w-5 h-5" />
            </a>
          </div>

          {/* Footer hint */}
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white/50 text-xs md:text-sm">
              اضغط خارج الصورة أو Escape للإغلاق • استخدم الأسهم للتنقل
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
