import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useCallback } from "react";

interface ImageViewerProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export const ImageViewer = ({ images, initialIndex, onClose }: ImageViewerProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrevious, onClose]);

  return (
    <div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      onClick={onClose}
      data-testid="image-viewer"
    >
      <Button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        data-testid="close-viewer"
        variant="ghost"
        size="icon"
        className="absolute top-10 right-10 text-white rounded-full bg-white/10"
      >
        <X className="w-6 h-6" />
      </Button>

      {images.length > 1 && currentIndex > 0 && (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
          data-testid="viewer-prev"
          variant="ghost"
          size="lg"
          className="absolute left-10 top-1/2 -translate-y-1/2 text-white rounded-full bg-white/10"
        >
          <ChevronLeft className="w-8 h-8" />
        </Button>
      )}

      {images.length > 1 && currentIndex < images.length - 1 && (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          data-testid="viewer-next"
          variant="ghost"
          size="lg"
          className="absolute right-10 top-1/2 -translate-y-1/2 text-white rounded-full bg-white/10"
        >
          <ChevronRight className="w-8 h-8" />
        </Button>
      )}

      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1} of ${images.length}`}
        className="max-w-[90vw] max-h-[90vh] object-contain"
        onClick={(e) => e.stopPropagation()}
        data-testid="viewer-image"
      />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};
