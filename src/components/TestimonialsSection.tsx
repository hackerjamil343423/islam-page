
import { Button } from "@/components/ui/button";
import { ImageCarousel } from "@/components/ui/image-carousel";

const TestimonialsSection = () => {
  // Convert Google Drive links to direct image URLs
  const testimonialImages = [
    "https://drive.google.com/uc?export=view&id=1Aua6rPO4SYrJsWibWZ-9AexlV_W2TUz1",
    "https://drive.google.com/uc?export=view&id=1QbIW313fTyJ79yOMGWwc7nDC_tqoMzCN",
    "https://drive.google.com/uc?export=view&id=1RsRYUihVl0vhg2J-dPjdLcUsMt-oouaq",
    "https://drive.google.com/uc?export=view&id=1SaHnXqqnYyJ2oZDeqNfeWpw3wwKoa0Ot",
    "https://drive.google.com/uc?export=view&id=1WB2KoA9bFNMcy35EgjW4GpEqDQbYdu-t",
    "https://drive.google.com/uc?export=view&id=1Yc21SvMT2rlWiuqSgma6fMs_dPIw9d_Z",
    "https://drive.google.com/uc?export=view&id=1aem-tGVhuWqPubSPLpLPrgLbIU56c_N0",
    "https://drive.google.com/uc?export=view&id=1fZVuXlP4wwbII5wT2Gd-gS6bwNON9w3e",
    "https://drive.google.com/uc?export=view&id=1fs3v4G8pU6-ivsK34OuNgZ29VFPoaJ2T",
    "https://drive.google.com/uc?export=view&id=1w4iyqCCvMhfuwT45Ul66vzw3j8WzvraM"
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4 md:mb-6 leading-relaxed">
            نتائج حقيقية من عملاء فعليين
          </h2>
        </div>

        <div className="mb-8 md:mb-12">
          <ImageCarousel 
            images={testimonialImages}
            className="max-w-5xl mx-auto"
          />
        </div>

        <div className="text-center">
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
