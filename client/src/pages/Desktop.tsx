import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

type CardType = {
  id: number;
  title: string;
  backgroundImage: string;
  backgroundGradient: string;
  type: "image" | "video" | "map" | "document" | "download";
  contentUrl?: string;
  route?: string;
};

const cardData: CardType[] = [
  {
    id: 1,
    title: "IMAGES",
    backgroundImage: "/figmaAssets/frame-2.png",
    backgroundGradient:
      "linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)",
    type: "image",
    route: "/images",
  },
  {
    id: 2,
    title: "VIDEOS",
    backgroundImage: "/videos/property-tour.mp4",
    backgroundGradient:
      "linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)",
    type: "video",
    route: "/videos",
    contentUrl: "/videos/property-tour.mp4",
  },
  {
    id: 3,
    title: "LOCATION MAP",
    backgroundImage: "/figmaAssets/location-map.webp",
    backgroundGradient:
      "linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)",
    type: "map",
    route: "/location-map",
  },
  {
    id: 4,
    title: "BROCHURE",
    backgroundImage: "/figmaAssets/brochure-thumb.webp",
    backgroundGradient:
      "linear-gradient(0deg,rgba(108,103,71,1)_0%,rgba(108,103,71,1)_100%)",
    type: "document",
    route: "/brochure",
  },
  {
    id: 5,
    title: "FACTSHEET",
    backgroundImage: "/figmaAssets/factsheet-thumb.webp",
    backgroundGradient:
      "linear-gradient(0deg,rgba(108,103,71,1)_0%,rgba(108,103,71,1)_100%)",
    type: "document",
    route: "/factsheet",
  },
  {
    id: 6,
    title: "FLOORPLANS",
    backgroundImage: "/figmaAssets/floorplans-thumb.webp",
    backgroundGradient:
      "linear-gradient(0deg,rgba(108,103,71,1)_0%,rgba(108,103,71,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)",
    type: "document",
    route: "/floorplans",
  },
  {
    id: 7,
    title: "DOWNLOAD",
    backgroundImage: "/figmaAssets/frame-7.png",
    backgroundGradient:
      "linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)",
    type: "download",
    route: "/downloads",
  },
];

export const Desktop = (): JSX.Element => {
  const [, setLocation] = useLocation();

  const handleCardClick = (card: CardType) => {
    if (card.route) {
      setLocation(card.route);
    } else if (card.type === "download") {
      window.open(card.backgroundImage, "_blank");
    }
  };
  return (
    <div className="bg-white w-full min-h-screen flex items-center justify-center overflow-x-hidden">
      <div className="min-h-screen w-full max-w-[1440px] flex items-center justify-center relative overflow-hidden py-8 md:py-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/property-tour.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[rgba(155,112,95,0.7)]"></div>
        <div className="flex w-full max-w-[1140px] px-4 md:px-8 flex-col items-center gap-8 md:gap-[60px] relative z-10">
          <img
            className="w-32 h-auto md:w-48 md:h-[178px]"
            alt="White"
            src="/figmaAssets/white.png"
          />

          <div className="flex flex-col items-start gap-4 md:gap-[18px] w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-[18px] w-full">
              {cardData.slice(0, 3).map((card) => (
                <div
                  key={card.id}
                  onClick={() => handleCardClick(card)}
                  className="h-[228px] rounded-lg overflow-hidden shadow-[0px_0px_16px_4px_#00000029] cursor-pointer transition-transform hover:scale-[1.02] relative"
                >
                  {card.type === "video" ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={card.backgroundImage} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={card.backgroundImage}
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  <div className="flex flex-col h-full items-start justify-end gap-2.5 p-0 relative z-10">
                    <div className="flex flex-col h-[114px] items-start justify-end gap-2.5 w-full bg-[linear-gradient(180deg,rgba(30,30,30,0)_0%,rgba(30,30,30,0.6)_100%)]">
                      <div className="flex h-14 items-center justify-between p-4 w-full">
                        <h3 className="[font-family:'Tajawal',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                          {card.title}
                        </h3>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-6 h-6 p-0 rounded-lg overflow-hidden hover:bg-white/20"
                        >
                          <ArrowUpRightIcon className="w-6 h-6 text-white" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[18px] w-full">
              {cardData.slice(3, 7).map((card) => (
                <div
                  key={card.id}
                  onClick={() => handleCardClick(card)}
                  className="h-[228px] rounded-lg overflow-hidden shadow-[0px_0px_16px_4px_#00000029] cursor-pointer transition-transform hover:scale-[1.02] relative"
                >
                  <img
                    src={card.backgroundImage}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="flex flex-col h-full items-start justify-end gap-2.5 p-0 relative z-10">
                    <div className="flex flex-col h-[114px] items-start justify-end gap-2.5 w-full bg-[linear-gradient(180deg,rgba(30,30,30,0)_0%,rgba(30,30,30,0.6)_100%)]">
                      <div className="flex h-14 items-center justify-between p-4 w-full">
                        <h3 className="[font-family:'Tajawal',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                          {card.title}
                        </h3>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-6 h-6 p-0 rounded-lg overflow-hidden hover:bg-white/20"
                        >
                          <ArrowUpRightIcon className="w-6 h-6 text-white" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
