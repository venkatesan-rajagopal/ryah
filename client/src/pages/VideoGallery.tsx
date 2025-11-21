import { ArrowLeft, Play } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

const videoSources = [
  {
    id: 1,
    title: "PROPERTY TOUR",
    poster: "/figmaAssets/frame-4.png",
    videoUrl: "/videos/property-tour.mp4",
  },
];

export const VideoGallery = (): JSX.Element => {
  const [, setLocation] = useLocation();
  const [isPlaying, setIsPlaying] = useState(true);

  const handleBack = () => {
    setLocation("/");
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="bg-black w-full min-w-[1440px] h-[900px] flex items-center justify-center relative overflow-hidden">
      <Button
        onClick={handleBack}
        data-testid="back-button"
        variant="default"
        className="absolute top-10 left-10 bg-[#9b705f] text-white h-10 rounded-[14px] px-6 uppercase font-bold text-base border border-black/8 z-20"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </Button>

      <div className="absolute inset-0" data-testid="video-gallery-container">
        {videoSources.map((video) => (
          <div
            key={video.id}
            className="relative w-full h-full"
            data-testid={`video-card-${video.id}`}
          >
            {video.videoUrl && isPlaying ? (
              <video
                controls
                autoPlay
                className="w-full h-full object-cover"
                poster={video.poster}
                data-testid="video-player"
              >
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <>
                <img
                  src={video.poster}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  {video.videoUrl ? (
                    <Button
                      onClick={handlePlayClick}
                      data-testid="play-button"
                      variant="ghost"
                      size="lg"
                      className="rounded-full bg-white/90"
                    >
                      <Play className="w-10 h-10 text-black fill-black ml-1" />
                    </Button>
                  ) : (
                    <div className="text-center p-8 bg-black/40 rounded-lg backdrop-blur-sm">
                      <p className="text-white text-xl font-semibold mb-3">Video Player Ready</p>
                      <p className="text-white/80 text-sm max-w-md">
                        This fullscreen HTML5 video player is configured and ready.
                        Add your video URL in <code className="bg-white/20 px-2 py-1 rounded">VideoGallery.tsx</code> to enable playback with controls.
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
