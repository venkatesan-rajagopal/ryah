import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

const totalPages = 8;

export const FactsheetViewer = (): JSX.Element => {
  const [, setLocation] = useLocation();

  const handleBack = () => {
    setLocation("/");
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="bg-black w-full min-h-screen relative overflow-x-hidden">
      <Button
        onClick={handleBack}
        data-testid="back-button"
        variant="default"
        className="fixed top-4 left-4 md:top-10 md:left-10 bg-[#9b705f] text-white h-10 rounded-[14px] px-4 md:px-6 uppercase font-bold text-sm md:text-base border border-black/8 z-20 hover:bg-[#8a6453]"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </Button>

      <div className="flex flex-col items-center w-full py-24 px-4 overflow-y-auto">
        {pages.map((pageNum) => (
          <div key={pageNum} className="w-full flex justify-center mb-0">
            <img
              src={`/factsheet/page-${pageNum}.png`}
              alt={`Factsheet page ${pageNum}`}
              className="w-auto max-w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
