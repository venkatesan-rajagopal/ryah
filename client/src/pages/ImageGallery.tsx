import { ArrowLeft, Download, Maximize2 } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ImageViewer } from "@/components/ImageViewer";

const exteriorImages = [
  "/figmaAssets/frame-2.png",
  "/figmaAssets/brochure-thumb.webp",
  "/figmaAssets/floorplans-thumb.webp",
];

const interiorImages = [
  "/figmaAssets/frame-4.png",
  "/figmaAssets/factsheet-thumb.webp",
  "/figmaAssets/frame-7.png",
];

const galleryImages = [
  {
    id: 1,
    title: "EXTERIOR",
    image: "/figmaAssets/frame-2.png",
    category: "exterior" as const,
  },
  {
    id: 2,
    title: "INTERIOR",
    image: "/figmaAssets/frame-4.png",
    category: "interior" as const,
  },
];

export const ImageGallery = (): JSX.Element => {
  const [, setLocation] = useLocation();
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

  const handleExpand = (image: string, category: "exterior" | "interior") => {
    let imagesToShow: string[] = [];
    let initialIndex = 0;

    if (category === "exterior") {
      imagesToShow = exteriorImages;
      initialIndex = exteriorImages.indexOf(image);
    } else if (category === "interior") {
      imagesToShow = interiorImages;
      initialIndex = interiorImages.indexOf(image);
    }

    setViewerState({ images: imagesToShow, initialIndex });
  };

  return (
    <div className="bg-[#f6e3c5] w-full min-h-screen flex items-center justify-center relative overflow-x-hidden py-20 px-4 md:px-8">
      <Button
        onClick={handleBack}
        data-testid="back-button"
        variant="default"
        className="absolute top-4 left-4 md:top-10 md:left-10 bg-[#9b705f] text-white h-10 rounded-[14px] px-4 md:px-6 uppercase font-bold text-sm md:text-base border border-black/8 z-10"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </Button>

      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {galleryImages.map((item) => (
          <div
            key={item.id}
            data-testid={`gallery-image-${item.id}`}
            onClick={() => handleExpand(item.image, item.category)}
            className="relative h-[500px] md:h-[660px] rounded-2xl overflow-hidden shadow-[0px_0px_16px_4px_rgba(0,0,0,0.16)] cursor-pointer transition-transform hover:scale-[1.02]"
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
