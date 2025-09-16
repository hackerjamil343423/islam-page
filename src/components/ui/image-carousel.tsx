
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
          className="flex-shrink-0 w-10 h-10 rounded border border-border bg-card text-foreground hover:bg-muted transition-colors duration-200 flex items-center justify-center z-10"
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
                <div className="bg-card rounded-lg overflow-hidden border border-border p-2 hover:border-primary/30 transition-colors duration-200">
                  <img
                    src={item.src}
                    alt={`نتائج العميل ${item.index + 1}`}
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-md"
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
          className="flex-shrink-0 w-10 h-10 rounded border border-border bg-card text-foreground hover:bg-muted transition-colors duration-200 flex items-center justify-center z-10"
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
              "w-2 h-2 rounded-full transition-colors duration-200",
              index === currentIndex ? "bg-primary" : "bg-muted hover:bg-muted-foreground"
            )}
          />
        ))}
      </div>
    </div>
  )
}
