import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export const LocationMap = (): JSX.Element => {
  const [, setLocation] = useLocation();

  const handleBack = () => {
    setLocation("/");
  };

  return (
    <div className="bg-[#f6e3c5] w-full min-w-[1440px] h-[900px] flex items-center justify-center relative overflow-hidden">
      <Button
        onClick={handleBack}
        data-testid="back-button"
        variant="default"
        className="absolute top-10 left-10 bg-[#9b705f] text-white h-10 rounded-[14px] px-6 uppercase font-bold text-base border border-black/8 z-20"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </Button>

      <div className="w-full max-w-[1200px] mx-auto px-10" data-testid="location-map-container">
        <div className="w-full rounded-2xl overflow-hidden shadow-[0px_0px_16px_4px_rgba(0,0,0,0.16)]">
          <img
            src="/figmaAssets/frame-5.png"
            alt="Ryah Living Location Map - Dubai Studio City"
            className="w-full h-auto object-contain"
            data-testid="location-map-image"
          />
        </div>
      </div>
    </div>
  );
};
