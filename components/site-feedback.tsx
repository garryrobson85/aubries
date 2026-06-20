"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}

function isInteractiveElement(target: EventTarget | null) {
  if (!(target instanceof Element)) return false;

  const interactive = target.closest(
    "a[href], button, summary, input[type='submit'], input[type='button'], input[type='reset'], [role='button']"
  );

  return Boolean(interactive && !interactive.closest("[data-feedback='off']"));
}

export function SiteFeedback() {
  const audioContext = useRef<AudioContext | null>(null);
  const lastPlayed = useRef(0);

  useEffect(() => {
    async function playFeedback(event: PointerEvent) {
      if (!isInteractiveElement(event.target)) return;

      const now = Date.now();
      if (now - lastPlayed.current < 140) return;
      lastPlayed.current = now;

      if ("vibrate" in navigator) {
        navigator.vibrate(9);
      }

      const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextCtor) return;

      const context = audioContext.current || new AudioContextCtor();
      audioContext.current = context;

      if (context.state === "suspended") {
        await context.resume();
      }

      const oscillator = context.createOscillator();
      const gain = context.createGain();

      oscillator.type = "triangle";
      oscillator.frequency.setValueAtTime(520, context.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(330, context.currentTime + 0.07);

      gain.gain.setValueAtTime(0.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.032, context.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.09);

      oscillator.connect(gain).connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + 0.1);
    }

    window.addEventListener("pointerup", playFeedback, { passive: true });
    return () => window.removeEventListener("pointerup", playFeedback);
  }, []);

  return null;
}
