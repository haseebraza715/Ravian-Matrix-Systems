"use client";

import { useEffect, useState } from "react";

const DEFAULT_INTERVAL_MS = 4500;

export function useRotatingHighlight(
  itemCount: number,
  intervalMs: number = DEFAULT_INTERVAL_MS
) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (itemCount <= 0) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReduceMotion(motionQuery.matches);
    updateMotion();
    motionQuery.addEventListener("change", updateMotion);

    if (motionQuery.matches) {
      return () => motionQuery.removeEventListener("change", updateMotion);
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % itemCount);
    }, intervalMs);

    return () => {
      window.clearInterval(timer);
      motionQuery.removeEventListener("change", updateMotion);
    };
  }, [itemCount, intervalMs]);

  const isFeatured = (index: number) => activeIndex === index;

  return { activeIndex, setActiveIndex, reduceMotion, isFeatured };
}
