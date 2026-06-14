"use client";

/* eslint-disable @next/next/no-img-element */

import { Volume2 } from "lucide-react";
import { useCallback, useRef, useState } from "react";

const logoSrc = "/aubries/aubries/aubries-circle-logo-transparent-512.webp";

export function AubriesLogo() {
  const [soundOn, setSoundOn] = useState(true);
  const audioContext = useRef<AudioContext | null>(null);
  const lastPlayed = useRef(0);

  const playChime = useCallback(() => {
    if (!soundOn || typeof window === "undefined") return;

    const now = Date.now();
    if (now - lastPlayed.current < 900) return;
    lastPlayed.current = now;

    const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextCtor) return;

    const context = audioContext.current || new AudioContextCtor();
    audioContext.current = context;

    const master = context.createGain();
    master.gain.setValueAtTime(0.0001, context.currentTime);
    master.gain.exponentialRampToValueAtTime(0.09, context.currentTime + 0.02);
    master.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.42);
    master.connect(context.destination);

    [392, 523.25, 659.25].forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(frequency, context.currentTime + index * 0.045);
      gain.gain.setValueAtTime(0.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.45, context.currentTime + 0.03 + index * 0.045);
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.25 + index * 0.045);
      oscillator.connect(gain).connect(master);
      oscillator.start(context.currentTime + index * 0.045);
      oscillator.stop(context.currentTime + 0.36 + index * 0.045);
    });
  }, [soundOn]);

  return (
    <div className="relative mx-auto h-44 w-44 sm:h-72 sm:w-72 lg:h-[27rem] lg:w-[27rem]">
      <button
        type="button"
        onMouseEnter={playChime}
        onFocus={playChime}
        onClick={playChime}
        className="logo-pop group absolute inset-0 rounded-full outline-none"
        aria-label="Aubries Handyman and Maintenance logo"
      >
        <span className="absolute -inset-3 rounded-full bg-[#ff5a12]/20 blur-2xl transition duration-500 group-hover:bg-[#ff5a12]/35 sm:-inset-5" />
        <img
          src={logoSrc}
          alt="Aubries Handyman and Maintenance logo"
          width={512}
          height={512}
          className="relative h-full w-full rounded-full object-contain drop-shadow-[0_24px_48px_rgba(12,12,12,0.36)] transition duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_42px_rgba(255,90,18,0.82)]"
        />
      </button>
      <button
        type="button"
        onClick={() => setSoundOn((value) => !value)}
        className="absolute bottom-2 right-2 z-10 grid size-10 place-items-center rounded-full border border-white/20 bg-black/70 text-white shadow-lg transition hover:bg-[#ff5a12] sm:bottom-4 sm:right-4 sm:size-11"
        aria-label={soundOn ? "Turn logo sound off" : "Turn logo sound on"}
        title={soundOn ? "Sound on" : "Sound off"}
      >
        <Volume2 size={20} aria-hidden="true" className={soundOn ? "" : "opacity-35"} />
      </button>
    </div>
  );
}

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}
