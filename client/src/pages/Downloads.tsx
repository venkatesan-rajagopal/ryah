import { ArrowLeft, Download } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

type DownloadItem = {
  id: number;
  title: string;
  backgroundImage: string;
  downloadUrl: string;
  fileName: string;
};

const downloadItems: DownloadItem[] = [
  {
    id: 1,
    title: "GALLERY",
    backgroundImage: "/figmaAssets/frame-2.png",
    downloadUrl: "/figmaAssets/frame-2.png",
    fileName: "gallery-image.png",
  },
  {
    id: 2,
    title: "BROCHURE",
    backgroundImage: "/figmaAssets/frame-2-1.png",
    downloadUrl: "/brochures/brochure-1.png",
    fileName: "ryah-living-brochure.png",
  },
  {
    id: 3,
    title: "FACT SHEET",
    backgroundImage: "/figmaAssets/frame-5-1.png",
    downloadUrl: "/factsheets/factsheet-1.png",
    fileName: "ryah-living-factsheet.png",
  },
  {
    id: 4,
    title: "FLOORPLANS",
    backgroundImage: "/figmaAssets/frame-6.png",
    downloadUrl: "/floorplans/floor-layout.png",
    fileName: "floor-layout.png",
  },
];

export const Downloads = (): JSX.Element => {
  const [, setLocation] = useLocation();

  const handleBack = () => {
    setLocation("/");
  };

  const handleDownload = async (item: DownloadItem) => {
    try {
      const response = await fetch(item.downloadUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = item.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="bg-[#F6E3C5] w-full min-h-screen relative overflow-x-hidden">
      <Button
        onClick={handleBack}
        data-testid="back-button"
        variant="default"
        className="absolute top-10 left-10 bg-[#9b705f] text-white h-10 rounded-[14px] px-6 uppercase font-bold text-base border border-black/8 z-20 hover:bg-[#8a6453]"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </Button>

      <div className="flex items-center justify-center min-h-screen py-24 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
          {downloadItems.map((item) => (
            <div
              key={item.id}
              className="relative h-[280px] rounded-xl overflow-hidden shadow-lg group bg-[#6C6747]"
            >
              <img
                src={item.backgroundImage}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute bottom-6 left-6 text-white font-bold text-lg uppercase tracking-wide">
                {item.title}
              </div>
              
              <button
                onClick={() => handleDownload(item)}
                className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[#F6E3C5] flex items-center justify-center shadow-md hover:bg-white transition-colors"
                aria-label={`Download ${item.title}`}
              >
                <Download className="w-5 h-5 text-[#9b705f]" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
