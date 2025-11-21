import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export const FloorplansViewer = (): JSX.Element => {
  const [, setLocation] = useLocation();

  const handleBack = () => {
    setLocation("/");
  };

  return (
    <div className="bg-[#F6E3C5] w-full min-w-[1440px] min-h-screen relative">
      <Button
        onClick={handleBack}
        data-testid="back-button"
        variant="default"
        className="fixed top-10 left-10 bg-[#9b705f] text-white h-10 rounded-[14px] px-6 uppercase font-bold text-base border border-black/8 z-20 hover:bg-[#8a6453]"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </Button>

      <div className="flex flex-col items-center justify-center w-full min-h-screen py-24">
        <div className="max-w-7xl w-full px-8">
          <img
            src="/floorplans/floor-layout.png"
            alt="Floor Layout 2nd to 6th Floor"
            className="w-full h-auto shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
