import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DownloadSource = (): JSX.Element => {
  const handleDownload = () => {
    window.location.href = "/source-code.tar.gz";
  };

  return (
    <div className="bg-[#F6E3C5] w-full min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-2xl p-12">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-[#9b705f] rounded-full flex items-center justify-center">
              <Download className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-[#9b705f]">
            Ryah Living Source Code
          </h1>
          
          <p className="text-gray-600 text-lg">
            Download the complete source code for the Ryah Living property showcase website.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">File:</span>
              <span className="text-gray-900">source-code.tar.gz</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Size:</span>
              <span className="text-gray-900">~149 MB</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Type:</span>
              <span className="text-gray-900">Compressed Archive</span>
            </div>
          </div>
          
          <Button
            onClick={handleDownload}
            className="w-full bg-[#9b705f] hover:bg-[#8a6453] text-white h-14 text-lg rounded-lg shadow-lg"
          >
            <Download className="w-6 h-6 mr-3" />
            Download Source Code
          </Button>
          
          <div className="pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">What's Included:</h3>
            <ul className="text-left text-gray-600 space-y-2">
              <li>✓ Complete React + TypeScript source code</li>
              <li>✓ All static assets (images, videos, documents)</li>
              <li>✓ Configuration files (package.json, tsconfig.json, etc.)</li>
              <li>✓ README with setup instructions</li>
              <li>✓ Ready for GitHub upload</li>
            </ul>
          </div>
          
          <div className="text-sm text-gray-500">
            <p>Extract with: <code className="bg-gray-100 px-2 py-1 rounded">tar -xzf source-code.tar.gz</code></p>
          </div>
        </div>
      </div>
    </div>
  );
};
