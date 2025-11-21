import { ArrowLeft, Download, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ImageViewer } from "@/components/ImageViewer";

const exteriorImages = [
  "/figmaAssets/frame-2.png",
  "/figmaAssets/frame-2-1.png",
  "/figmaAssets/frame-6.png",
];

const interiorImages = [
  "/figmaAssets/frame-4.png",
  "/figmaAssets/frame-5-1.png",
  "/figmaAssets/frame-7.png",
];

const galleryImages = [
  {
    id: 1,
    title: "EXTERIOR 1",
    image: "/figmaAssets/frame-2.png",
    category: "exterior" as const,
  },
  {
    id: 2,
    title: "INTERIOR 1",
    image: "/figmaAssets/frame-4.png",
    category: "interior" as const,
  },
  {
    id: 3,
    title: "LOCATION",
    image: "/figmaAssets/location-map.webp",
    category: "other" as const,
  },
  {
    id: 4,
    title: "BROCHURE",
    image: "/figmaAssets/frame-2-1.png",
    category: "exterior" as const,
  },
  {
    id: 5,
    title: "FACTSHEET",
    image: "/figmaAssets/frame-5-1.png",
    category: "interior" as const,
  },
  {
    id: 6,
    title: "FLOORPLANS",
    image: "/figmaAssets/frame-6.png",
    category: "exterior" as const,
  },
  {
    id: 7,
    title: "AMENITIES",
    image: "/figmaAssets/frame-7.png",
    category: "interior" as const,
  },
];

export const ImageGallery = (): JSX.Element => {
  const [, setLocation] = useLocation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [viewerState, setViewerState] = useState<{
    images: string[];
    initialIndex: number;
  } | null>(null);

  const handleBack = () => {
    setLocation("/");
  };

  const handleDownload = (image: string, title: string) => {
    const link = document.createElement("a");
    link.href = image;
    link.download = `${title.toLowerCase().replace(/\s+/g, '-')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExpand = (image: string, category: "exterior" | "interior" | "other") => {
    let imagesToShow: string[] = [];
    let initialIndex = 0;

    if (category === "exterior") {
      imagesToShow = exteriorImages;
      initialIndex = exteriorImages.indexOf(image);
    } else if (category === "interior") {
      imagesToShow = interiorImages;
      initialIndex = interiorImages.indexOf(image);
    } else {
      imagesToShow = [image];
      initialIndex = 0;
    }

    setViewerState({ images: imagesToShow, initialIndex });
  };

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 574; // 550px card width + 24px gap
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <div className="bg-[#f6e3c5] w-full min-h-screen flex items-center justify-center relative overflow-x-hidden">
      <Button
        onClick={handleBack}
        data-testid="back-button"
        variant="default"
        className="absolute top-4 left-4 md:top-10 md:left-10 bg-[#9b705f] text-white h-10 rounded-[14px] px-4 md:px-6 uppercase font-bold text-sm md:text-base border border-black/8 z-10"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </Button>

      <div className="relative w-full max-w-[1200px] px-4 md:px-8">
        {canScrollLeft && (
          <Button
            onClick={() => scroll("left")}
            data-testid="scroll-left"
            variant="ghost"
            size="lg"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
        )}

        {canScrollRight && (
          <Button
            onClick={() => scroll("right")}
            data-testid="scroll-right"
            variant="ghost"
            size="lg"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        )}

        <div
          ref={scrollContainerRef}
          onScroll={checkScrollButtons}
          className="flex items-center gap-6 h-[660px] overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          data-testid="image-gallery-container"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {galleryImages.map((item) => (
            <div
              key={item.id}
              data-testid={`gallery-image-${item.id}`}
              onClick={() => handleExpand(item.image, item.category)}
              className="relative flex-shrink-0 h-full w-[550px] md:w-[550px] rounded-2xl overflow-hidden shadow-[0px_0px_16px_4px_rgba(0,0,0,0.16)] snap-center cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-b from-transparent to-[rgba(30,30,30,0.8)] flex items-end">
                <div className="w-full flex items-end justify-between p-6">
                  <p className="text-white text-base font-medium uppercase">
                    {item.title}
                  </p>
                  <div className="flex items-center gap-4">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(item.image, item.title);
                      }}
                      data-testid={`download-${item.id}`}
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
                    >
                      <Download className="w-5 h-5 text-white" />
                    </Button>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleExpand(item.image, item.category);
                      }}
                      data-testid={`expand-${item.id}`}
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
                    >
                      <Maximize2 className="w-5 h-5 text-white" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {viewerState && (
        <ImageViewer
          images={viewerState.images}
          initialIndex={viewerState.initialIndex}
          onClose={() => setViewerState(null)}
        />
      )}
    </div>
  );
};
