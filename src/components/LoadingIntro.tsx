"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function LoadingIntro() {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing RACH Core...");
  const [isFinished, setIsFinished] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check if intro has already played in this browser session
    const hasSeenIntro = sessionStorage.getItem("rach_intro_seen");
    if (hasSeenIntro) {
      setShouldRender(false);
      return;
    }

    const startTime = Date.now();
    const duration = 4000; // 4.0s duration for a classic, immersive cinematic intro

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 22) {
        setStatusText("Initializing RACH Core Architecture...");
      } else if (pct < 45) {
        setStatusText("Connecting Hyderabad Edge Node (< 0.4s)...");
      } else if (pct < 70) {
        setStatusText("Compiling High-Conversion Storefronts...");
      } else if (pct < 92) {
        setStatusText("Synchronizing Pakka Local Network...");
      } else {
        setStatusText("Hyderabad Systems Ready.");
      }

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          sessionStorage.setItem("rach_intro_seen", "true");
          // Remove from DOM after slide-up animation completes
          setTimeout(() => setShouldRender(false), 900);
        }, 400);
      }
    }, 30);

    return () => clearInterval(interval);
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
          {/* Subtle Ambient Ring */}
          <div className="absolute inset-0 -m-3 rounded-full border border-emerald-500/20 animate-ping pointer-events-none" style={{ animationDuration: "3s" }} />
        </div>

        {/* Wordmark with Precision Letter Spacing */}
        <div className="space-y-1">
          <div className="font-display font-extrabold text-2xl sm:text-3xl tracking-[0.35em] text-white flex items-center justify-center pl-2">
            <span>R</span>
            <span className="mx-1">A</span>
            <span className="mx-1">C</span>
            <span>H</span>
          </div>
          <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-zinc-400 uppercase">
            Build • Hosted • Managed
          </div>
        </div>

        {/* Precision Progress Bar & Telemetry */}
        <div className="w-56 sm:w-64 mt-8 space-y-2.5">
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
            sessionStorage.setItem("rach_intro_seen", "true");
            setTimeout(() => setShouldRender(false), 500);
          }}
          className="mt-6 text-[10px] tracking-wider uppercase text-zinc-500 hover:text-zinc-300 transition-colors py-1 px-3 rounded-full hover:bg-zinc-800/50"
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
