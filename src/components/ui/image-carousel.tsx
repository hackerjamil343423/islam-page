
import * as React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageCarouselProps {
  images: string[]
  className?: string
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, className }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isTransitioning, setIsTransitioning] = React.useState(false)

  const goToNext = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    
    setTimeout(() => setIsTransitioning(false), 300)
  }, [images.length, isTransitioning])

  const goToPrev = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    
    setTimeout(() => setIsTransitioning(false), 300)
  }, [images.length, isTransitioning])

  const getVisibleImages = () => {
    const visibleCount = 3
    const result = []
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % images.length
      result.push({
        src: images[index],
        index: index
      })
    }
    
    return result
  }

  return (
    <div className={cn("relative w-full", className)}>
      <div className="flex items-center justify-center gap-4 md:gap-6">
        {/* Previous Button */}
        <button
          onClick={goToPrev}
          className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-lime bg-white text-lime hover:bg-lime hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center z-10"
          disabled={isTransitioning}
        >
          <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
        </button>

        {/* Images Container */}
        <div className="flex-1 overflow-hidden">
          <div 
            className={cn(
              "flex gap-4 md:gap-6 transition-transform duration-300 ease-in-out",
              isTransitioning && "opacity-75"
            )}
          >
            {getVisibleImages().map((item, idx) => (
              <div
                key={`${item.index}-${idx}`}
                className="flex-1 min-w-0"
              >
                <div 
                  className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 p-2"
                  style={{ 
                    boxShadow: '0 10px 30px rgba(217, 252, 103, 0.4)' 
                  }}
                >
                  <img 
                    src={item.src}
                    alt={`نتائج العميل ${item.index + 1}`}
                    className="w-full h-auto object-contain rounded-xl max-h-96"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-lime bg-white text-lime hover:bg-lime hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center z-10"
          disabled={isTransitioning}
        >
          <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              if (!isTransitioning) {
                setIsTransitioning(true)
                setCurrentIndex(index)
                setTimeout(() => setIsTransitioning(false), 300)
              }
            }}
            className={cn(
              "w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300",
              index === currentIndex ? "bg-lime scale-125" : "bg-gray-300 hover:bg-gray-400"
            )}
          />
        ))}
      </div>
    </div>
  )
}
