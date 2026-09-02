"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function LoadingIntro() {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing RACH Core Engine...");
  const [isFinished, setIsFinished] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const startTime = Date.now();
    // 3.0 seconds guaranteed cinematic loading showcase so everyone sees the experience
    const minFakeDuration = 3000;
    let actualPageLoaded = typeof document !== "undefined" && document.readyState === "complete";

    const onPageLoad = () => {
      actualPageLoaded = true;
    };

    if (typeof window !== "undefined" && !actualPageLoaded) {
      window.addEventListener("load", onPageLoad);
    }

    const interval = setInterval(() => {
      if (!isMounted) return;
      const elapsed = Date.now() - startTime;

      if (elapsed < minFakeDuration) {
        // Stage 1: Simulated cinematic loading up to 90% across 3 seconds
        const fakeRatio = elapsed / minFakeDuration;
        // Ease out cubic for a polished acceleration/deceleration feel
        const easedProgress = Math.floor((1 - Math.pow(1 - fakeRatio, 2.5)) * 90);
        setProgress(Math.max(2, easedProgress));

        if (easedProgress < 25) {
          setStatusText("Initializing RACH Core Engine...");
        } else if (easedProgress < 50) {
          setStatusText("Connecting Hyderabad Edge Node (< 0.4s)...");
        } else if (easedProgress < 75) {
          setStatusText("Compiling High-Conversion Storefronts...");
        } else {
          setStatusText("Synchronizing Pakka Local Network...");
        }
      } else {
        // Stage 2: Finalize actual loading to 100%
        setProgress(100);
        setStatusText("Hyderabad Systems Ready • Welcome to RACH");
        clearInterval(interval);

        // Graceful reveal after 600ms so user clearly registers 100% completion
        setTimeout(() => {
          if (!isMounted) return;
          setIsFinished(true);
          setTimeout(() => {
            if (isMounted) setShouldRender(false);
          }, 850);
        }, 600);
      }
    }, 30);

    // Keyboard shortcut (Escape) to skip if desired
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsFinished(true);
        setTimeout(() => setShouldRender(false), 500);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      isMounted = false;
      clearInterval(interval);
      if (typeof window !== "undefined") {
        window.removeEventListener("load", onPageLoad);
        window.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#09090B] text-white transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] select-none ${
        isFinished ? "-translate-y-full opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Google/Stripe Style Atmospheric Radial Glow Behind Emblem */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-emerald-500/15 via-amber-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="flex flex-col items-center text-center px-4 max-w-sm">
        {/* Metallic 3D Hexagon Emblem with Shimmer Effect */}
        <div className="relative mb-6 group">
          <div className="relative w-24 h-28 sm:w-28 sm:h-32 transition-transform duration-500 hover:scale-105">
            <Image
              src="/rach-emblem-transparent.png"
              alt="RACH"
              fill
              className="object-contain drop-shadow-[0_15px_35px_rgba(11,107,56,0.35)]"
              priority
            />
          </div>
          {/* Ambient Pulse Ring */}
          <div
            className="absolute inset-0 -m-3 rounded-full border border-emerald-500/20 animate-ping pointer-events-none"
            style={{ animationDuration: "3s" }}
          />
        </div>

        {/* Wordmark with Precision Letter Spacing */}
        <div className="space-y-1 mb-2">
          <div className="relative h-9 w-40 sm:h-10 sm:w-44 mx-auto">
            <Image
              src="/rach-metallic-wordmark.png"
              alt="RACH"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-zinc-400 uppercase">
            Build • Hosted • Managed
          </div>
        </div>

        {/* Precision Progress Bar & Telemetry */}
        <div className="w-56 sm:w-64 mt-6 space-y-2.5">
          <div className="w-full bg-zinc-800/80 rounded-full h-1 overflow-hidden p-0.5 border border-zinc-700/50">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#0B6B38] via-emerald-400 to-amber-300 transition-all duration-75 ease-out shadow-[0_0_12px_rgba(52,211,153,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span className="text-zinc-500 truncate max-w-[170px]">{statusText}</span>
            <span className="font-bold text-emerald-400 tabular-nums">
              {progress.toString().padStart(2, "0")}%
            </span>
          </div>
        </div>

        {/* Skip Button */}
        <button
          onClick={() => {
            setIsFinished(true);
            setTimeout(() => setShouldRender(false), 500);
          }}
          className="mt-6 text-[10px] tracking-wider uppercase text-zinc-500 hover:text-zinc-300 transition-colors py-1 px-3 rounded-full hover:bg-zinc-800/50 cursor-pointer"
        >
          Skip Intro ↗
        </button>
      </div>

      {/* Footer Credentials */}
      <div className="absolute bottom-6 text-[10px] tracking-widest text-zinc-600 uppercase font-mono">
        Hyderabad Node • Pakka Local
      </div>
    </div>
  );
}
