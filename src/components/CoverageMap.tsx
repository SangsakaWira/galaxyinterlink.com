import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ZoomIn, ZoomOut, Info, MapPin } from "lucide-react";

interface CoverageMapProps {
  initialZoom?: number;
  showControls?: boolean;
  height?: string;
  width?: string;
}

const CoverageMap = ({
  initialZoom = 5,
  showControls = true,
  height = "500px",
  width = "100%",
}: CoverageMapProps) => {
  const [zoom, setZoom] = useState(initialZoom);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  // Mock coverage data - in a real implementation this would come from an API
  const coverageAreas = [
    {
      id: "1",
      name: "Mountain Valley",
      level: "High",
      color: "#4ade80",
      coordinates: { x: 30, y: 40 },
    },
    {
      id: "2",
      name: "Riverside County",
      level: "Medium",
      color: "#facc15",
      coordinates: { x: 60, y: 30 },
    },
    {
      id: "3",
      name: "Pine Ridge",
      level: "Low",
      color: "#f87171",
      coordinates: { x: 45, y: 70 },
    },
    {
      id: "4",
      name: "Eagle Peak",
      level: "High",
      color: "#4ade80",
      coordinates: { x: 75, y: 55 },
    },
    {
      id: "5",
      name: "Lakeside",
      level: "Medium",
      color: "#facc15",
      coordinates: { x: 20, y: 60 },
    },
  ];

  const handleZoomIn = () => {
    if (zoom < 10) setZoom(zoom + 1);
  };

  const handleZoomOut = () => {
    if (zoom > 1) setZoom(zoom - 1);
  };

  const handleRegionClick = (regionId: string) => {
    setSelectedRegion(regionId === selectedRegion ? null : regionId);
  };

  return (
    <Card className="bg-white border rounded-lg shadow-md overflow-hidden">
      <CardContent className="p-0">
        <div className="relative" style={{ height, width }}>
          {/* Map background */}
          <div
            className="w-full h-full bg-slate-100 relative overflow-hidden"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1553825250-68aafc8b8022?w=1200&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: `brightness(${0.7 + zoom * 0.03})`,
            }}
          >
            {/* Coverage area indicators */}
            {coverageAreas.map((area) => (
              <div
                key={area.id}
                className={`absolute rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center
                  ${selectedRegion === area.id ? "ring-4 ring-blue-500 z-10" : ""}`}
                style={{
                  backgroundColor: `${area.color}80`, // Adding transparency
                  border: `2px solid ${area.color}`,
                  width: `${zoom * 8}px`,
                  height: `${zoom * 8}px`,
                  left: `${area.coordinates.x}%`,
                  top: `${area.coordinates.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => handleRegionClick(area.id)}
              >
                <MapPin
                  className={`text-white ${zoom < 3 ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
                  size={zoom * 2}
                />
              </div>
            ))}

            {/* Selected region info */}
            {selectedRegion && (
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-3 rounded-md shadow-lg">
                <h3 className="font-medium text-lg">
                  {coverageAreas.find((a) => a.id === selectedRegion)?.name}
                </h3>
                <div className="flex items-center mt-1">
                  <span className="font-medium mr-2">Coverage:</span>
                  <span
                    className="px-2 py-0.5 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: coverageAreas.find(
                        (a) => a.id === selectedRegion,
                      )?.color,
                      color: "white",
                    }}
                  >
                    {coverageAreas.find((a) => a.id === selectedRegion)?.level}
                  </span>
                </div>
                <p className="text-sm mt-1">
                  Click on the map to view more coverage areas.
                </p>
              </div>
            )}
          </div>

          {/* Map controls */}
          {showControls && (
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <Button
                variant="secondary"
                size="icon"
                onClick={handleZoomIn}
                className="bg-white/80 hover:bg-white"
              >
                <ZoomIn size={18} />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={handleZoomOut}
                className="bg-white/80 hover:bg-white"
              >
                <ZoomOut size={18} />
              </Button>
            </div>
          )}

          {/* Map legend */}
          <div className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-md shadow-md">
            <div className="flex items-center gap-2 mb-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info size={16} className="text-gray-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Coverage level indicators</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <span className="text-sm font-medium">Coverage Legend</span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#4ade80]"></div>
                <span className="text-xs">High Coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#facc15]"></div>
                <span className="text-xs">Medium Coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#f87171]"></div>
                <span className="text-xs">Low Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoverageMap;
