"use client";

/* eslint-disable @next/next/no-img-element */

import { Volume2 } from "lucide-react";
import { useCallback, useRef, useState } from "react";

const logoSrc = "/aubries/aubries/aubries-rustic-logo-768.webp";

export function AubriesLogo() {
  const [soundOn, setSoundOn] = useState(true);
  const audioContext = useRef<AudioContext | null>(null);
  const lastPlayed = useRef(0);

  const playChime = useCallback(async (withHaptics = false) => {
    if (!soundOn || typeof window === "undefined") return;

    const now = Date.now();
    if (now - lastPlayed.current < 900) return;
    lastPlayed.current = now;

    if (withHaptics && "vibrate" in navigator) {
      navigator.vibrate([14, 28, 10]);
    }

    const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextCtor) return;

    const context = audioContext.current || new AudioContextCtor();
    audioContext.current = context;

    if (context.state === "suspended") {
      await context.resume();
    }

    const master = context.createGain();
    master.gain.setValueAtTime(0.0001, context.currentTime);
    master.gain.exponentialRampToValueAtTime(0.14, context.currentTime + 0.018);
    master.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.34);
    master.connect(context.destination);

    [329.63, 493.88, 659.25].forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = index === 0 ? "triangle" : "sine";
      oscillator.frequency.setValueAtTime(frequency, context.currentTime + index * 0.04);
      gain.gain.setValueAtTime(0.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.5, context.currentTime + 0.025 + index * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.2 + index * 0.04);
      oscillator.connect(gain).connect(master);
      oscillator.start(context.currentTime + index * 0.04);
      oscillator.stop(context.currentTime + 0.3 + index * 0.04);
    });
  }, [soundOn]);

  const toggleSound = useCallback(() => {
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(12);
    }

    setSoundOn((value) => !value);
  }, []);

  return (
    <div className="relative mx-auto h-[21.5rem] w-[21.5rem] sm:h-96 sm:w-96 lg:h-[30rem] lg:w-[30rem]">
      <button
        type="button"
        onPointerDown={() => playChime(true)}
        onMouseEnter={() => playChime(false)}
        onFocus={() => playChime(false)}
        onClick={() => playChime(true)}
        data-feedback="off"
        className="logo-pop group absolute inset-0 rounded-full outline-none"
        aria-label="Aubries Handyman and Maintenance logo"
      >
        <span className="absolute -inset-4 rounded-full bg-[#d97706]/25 blur-2xl transition duration-500 group-hover:bg-[#f97316]/40 sm:-inset-6" />
        <img
          src={logoSrc}
          alt="Aubries Handyman and Maintenance logo"
          width={512}
          height={512}
          className="relative h-full w-full object-contain drop-shadow-[0_28px_42px_rgba(0,0,0,0.48)] transition duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_42px_rgba(217,119,6,0.72)]"
        />
      </button>
      <button
        type="button"
        onClick={toggleSound}
        data-feedback="off"
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
