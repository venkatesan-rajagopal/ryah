import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Desktop } from "@/pages/Desktop";
import { ImageGallery } from "@/pages/ImageGallery";
import { VideoGallery } from "@/pages/VideoGallery";
import { LocationMap } from "@/pages/LocationMap";
import { BrochureViewer } from "@/pages/BrochureViewer";
import { FactsheetViewer } from "@/pages/FactsheetViewer";
import { FloorplansViewer } from "@/pages/FloorplansViewer";
import { Downloads } from "@/pages/Downloads";
import { DownloadSource } from "@/pages/DownloadSource";

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={Desktop} />
      <Route path="/images" component={ImageGallery} />
      <Route path="/videos" component={VideoGallery} />
      <Route path="/location-map" component={LocationMap} />
      <Route path="/brochure" component={BrochureViewer} />
      <Route path="/factsheet" component={FactsheetViewer} />
      <Route path="/floorplans" component={FloorplansViewer} />
      <Route path="/downloads" component={Downloads} />
      <Route path="/download-source" component={DownloadSource} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
