"use client";

import React, { useState, useEffect } from "react";
import { Grid, Eye, Compass, Activity } from "lucide-react";

export default function DraftingCursorHUD() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [gridEnabled, setGridEnabled] = useState(true);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
      setShowCursor(true);
    };

    const handleMouseLeave = () => {
      setShowCursor(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const toggleGrid = () => {
    setGridEnabled(!gridEnabled);
    if (gridEnabled) {
      document.body.classList.add("no-drafting-grid");
    } else {
      document.body.classList.remove("no-drafting-grid");
    }
  };

  return (
    <>
      {/* Floating Top-Right Technical Readout HUD */}
      <div className="fixed bottom-4 left-4 z-40 hidden sm:flex items-center gap-2 bg-[#1C1B17]/90 text-[#F2EEE1] backdrop-blur-md px-3 py-1.5 border border-[#B08D45]/40 text-[11px] font-mono shadow-lg select-none">
        <div className="flex items-center gap-1.5 text-[#B08D45]">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          <span className="font-bold">SPEC HUD</span>
        </div>
        <span className="text-white/20">|</span>
        <div className="text-white/80">
          X: <span className="text-[#B08D45]">{coords.x.toString().padStart(4, "0")}</span> Y:{" "}
          <span className="text-[#B08D45]">{coords.y.toString().padStart(4, "0")}</span>
        </div>
        <span className="text-white/20">|</span>
        <button
          onClick={toggleGrid}
          className="flex items-center gap-1 text-white/70 hover:text-white transition-colors cursor-pointer"
          title="Toggle Drafting Grid Overlay"
        >
          <Grid className="w-3 h-3 text-[#B08D45]" />
          <span>{gridEnabled ? "GRID: ON" : "GRID: OFF"}</span>
        </button>
      </div>

      {/* Subtle Precision Drafting Crosshair Follower (Desktop only) */}
      {showCursor && (
        <div
          className="pointer-events-none fixed z-50 transition-opacity duration-300 hidden lg:block"
          style={{
            left: `${coords.x}px`,
            top: `${coords.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="w-8 h-8 rounded-full border border-[#B08D45]/30 relative flex items-center justify-center">
            <div className="w-1 h-1 bg-[#B08D45] rounded-full" />
            <div className="absolute top-0 w-[1px] h-2 bg-[#B08D45]/50 -translate-y-1" />
            <div className="absolute bottom-0 w-[1px] h-2 bg-[#B08D45]/50 translate-y-1" />
            <div className="absolute left-0 h-[1px] w-2 bg-[#B08D45]/50 -translate-x-1" />
            <div className="absolute right-0 h-[1px] w-2 bg-[#B08D45]/50 translate-x-1" />
          </div>
        </div>
      )}
    </>
  );
}
