"use client";

import { useEffect, useRef } from "react";

export default function SpatialStreamVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = 1000; // Fixed height for hero area

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      // Keep height fixed for hero
    };

    window.addEventListener("resize", handleResize);

    // Geospatial characters (coordinates, hex, symbols)
    const chars = "0123456789.°,NWSE ABCDEF -+:";
    const charArray = chars.split("");
    
    const fontSize = 10;
    const columns = Math.floor(width / fontSize);
    
    // Drops: { x, y, speed, length, opacity, text }
    const drops: { x: number; y: number; speed: number; chars: string[]; opacity: number }[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      if (Math.random() > 0.9) { // Sparse streams
        drops.push({
          x: i * fontSize,
          y: Math.random() * -height,
          speed: 1 + Math.random() * 2,
          chars: Array.from({ length: 15 + Math.floor(Math.random() * 20) }, () => charArray[Math.floor(Math.random() * charArray.length)]),
          opacity: 0.05 + Math.random() * 0.1
        });
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      ctx.font = `${fontSize}px monospace`;
      
      drops.forEach((drop) => {
        drop.chars.forEach((char, index) => {
          const yPos = drop.y + (index * fontSize);
          if (yPos > 0 && yPos < height) {
            // Gradient effect: last char is brighter
            const isLast = index === drop.chars.length - 1;
            const alpha = isLast ? drop.opacity * 2 : drop.opacity;
            
            // Alternate colors between gold and blue
            if (drop.x % (fontSize * 4) === 0) {
              ctx.fillStyle = `rgba(143, 190, 220, ${alpha})`; // Blue
            } else {
              ctx.fillStyle = `rgba(201, 162, 77, ${alpha})`; // Gold
            }
            
            ctx.fillText(char, drop.x, yPos);
          }
          
          // Randomly change characters for flickering effect
          if (Math.random() > 0.98) {
            drop.chars[index] = charArray[Math.floor(Math.random() * charArray.length)];
          }
        });

        drop.y += drop.speed;
        if (drop.y > height) {
          drop.y = -fontSize * drop.chars.length;
          drop.x = Math.floor(Math.random() * columns) * fontSize;
        }
      });

      requestAnimationFrame(draw);
    };

    const animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.4]"
      style={{ maskImage: 'radial-gradient(ellipse at 50% 0%, black 0%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black 0%, transparent 80%)' }}
    />
  );
}
