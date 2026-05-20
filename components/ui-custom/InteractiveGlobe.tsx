"use client";

import { useEffect, useRef, useState } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
  px: number; // projected x
  py: number; // projected y
  scale: number;
  color: string;
}

export default function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ lat: "48.1351° N", lon: "11.5820° E" });
  const isInViewRef = useRef(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.01 }
    );
    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Reduced motion preference
    const prefersReducedMotion = typeof window !== "undefined" 
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches 
      : false;

    // Coordinate tracking animation
    const coordInterval = setInterval(() => {
      if (prefersReducedMotion) return;
      const latOffset = (Math.random() - 0.5) * 0.005;
      const lonOffset = (Math.random() - 0.5) * 0.005;
      setCoords({
        lat: `${(48.1351 + latOffset).toFixed(4)}° N`,
        lon: `${(11.5820 + lonOffset).toFixed(4)}° E`,
      });
    }, 2500);

    // Spherical point distribution (Fibonacci Sphere)
    const points: Point3D[] = [];
    const numPoints = 120;
    const globeRadius = Math.min(width, height) * 0.35 || 180;

    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints);
      const theta = Math.sqrt(numPoints * Math.PI) * phi;

      const x = Math.cos(theta) * Math.sin(phi) * globeRadius;
      const y = Math.sin(theta) * Math.sin(phi) * globeRadius;
      const z = Math.cos(phi) * globeRadius;

      // Assign colors randomly to accents (gold vs signal blue)
      const color = Math.random() > 0.75 
        ? "rgba(225, 184, 74, 0.8)"  // Gold
        : "rgba(91, 141, 239, 0.7)"; // Signal Blue

      points.push({ x, y, z, px: 0, py: 0, scale: 1, color });
    }

    // Rotation angles (zeroed if reduced motion is requested)
    let angleY = prefersReducedMotion ? 0.0 : 0.0015;
    let angleX = prefersReducedMotion ? 0.0 : 0.0008;

    // Mouse coordinates
    const mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;

      // Slowly steer rotation based on mouse offset from center
      const centerX = width / 2;
      const centerY = height / 2;
      angleY = 0.001 + (mouse.x - centerX) * 0.000005;
      angleX = 0.0005 + (mouse.y - centerY) * 0.000005;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
      angleY = prefersReducedMotion ? 0.0 : 0.0015;
      angleX = prefersReducedMotion ? 0.0 : 0.0008;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const focalLength = 400;
    const centerX = width / 2;
    const centerY = height / 2;

    const render = () => {
      if (!isInViewRef.current) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }
      ctx.clearRect(0, 0, width, height);

      // Render radial ambient glows behind the globe
      const ambientGlow = ctx.createRadialGradient(
        width / 2,
        height / 2,
        20,
        width / 2,
        height / 2,
        globeRadius * 1.5
      );
      ambientGlow.addColorStop(0, "rgba(11, 18, 32, 0.4)");
      ambientGlow.addColorStop(0.5, "rgba(91, 141, 239, 0.04)");
      ambientGlow.addColorStop(1, "rgba(5, 8, 15, 0)");
      ctx.fillStyle = ambientGlow;
      ctx.fillRect(0, 0, width, height);

      // Render Mouse Glow Spotlight
      if (mouse.active) {
        const mouseGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          150
        );
        mouseGlow.addColorStop(0, "rgba(91, 141, 239, 0.07)");
        mouseGlow.addColorStop(1, "rgba(91, 141, 239, 0)");
        ctx.fillStyle = mouseGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 150, 0, Math.PI * 2);
        ctx.fill();
      }

      // Rotate and project points
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      points.forEach((p) => {
        // Rotate around Y-axis
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.x * sinY + p.z * cosY;

        // Rotate around X-axis
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Save rotated coordinates
        p.x = x1;
        p.y = y2;
        p.z = z2;

        // Perspective projection
        const scale = focalLength / (focalLength + z2);
        p.scale = scale;
        p.px = x1 * scale + width / 2;
        p.py = y2 * scale + height / 2;
      });

      // Sort points by Z-index (render back lines and points first, then front)
      // This creates actual 3D overlap occlusion
      const sortedIndices = Array.from({ length: points.length }, (_, i) => i);
      sortedIndices.sort((a, b) => points[b].z - points[a].z);

      // Draw connection lines
      ctx.lineWidth = 0.55;
      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        
        // Skip connections if point is too far in the back for clean UI depth
        if (p1.z > globeRadius * 0.7) continue;

        let connectionsCount = 0;

        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          if (connectionsCount > 2) break; // Limit connectivity for neatness

          // 3D Distance check
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          // Connect points within threshold
          if (dist < globeRadius * 0.52) {
            connectionsCount++;
            
            // Fade lines based on depth
            const alpha = Math.min(p1.scale, p2.scale) * 0.12 * (1 - (p1.z + p2.z) / (2 * globeRadius));
            
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            
            // Line color matches closer node color
            ctx.strokeStyle = p1.z < p2.z ? p1.color.replace("0.8", String(alpha)) : p2.color.replace("0.7", String(alpha));
            ctx.stroke();
          }
        }
      }

      // Draw points
      sortedIndices.forEach((index) => {
        const p = points[index];
        
        // Size based on depth
        const radius = Math.max(1, p.scale * 2.2);
        const alpha = Math.max(0.1, p.scale * 0.8 * (1 - p.z / (globeRadius * 1.5)));

        ctx.beginPath();
        
        // Dynamic node size pulsing if mouse is close
        let isHovered = false;
        if (mouse.active) {
          const dx = p.px - mouse.x;
          const dy = p.py - mouse.y;
          const dist2d = Math.sqrt(dx * dx + dy * dy);
          if (dist2d < 65) {
            isHovered = true;
            // Draw a subtle line connecting node to mouse cursor
            ctx.beginPath();
            ctx.moveTo(p.px, p.py);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(225, 184, 74, ${0.12 * (1 - dist2d / 65)})`;
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(p.px, p.py, isHovered ? radius * 1.5 : radius, 0, Math.PI * 2);
        
        // Highlight color if hovered
        ctx.fillStyle = isHovered 
          ? `rgba(225, 184, 74, ${alpha})`
          : p.color.replace("0.8", String(alpha)).replace("0.7", String(alpha));
        ctx.fill();

        // Extra halo for gold nodes
        if (p.color.includes("225") && p.z < 0) {
          ctx.beginPath();
          ctx.arc(p.px, p.py, radius * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(225, 184, 74, ${alpha * 0.08})`;
          ctx.fill();
        }
      });

      // Render overlay orbits/grids
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, globeRadius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(30, 42, 64, 0.15)";
      ctx.lineWidth = 1;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      clearInterval(coordInterval);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-auto opacity-[0.62]"
      />
      {/* Dynamic tracking HUD coordinates */}
      <div className="absolute bottom-6 left-6 font-mono text-[9px] sm:text-[10px] text-muted select-none pointer-events-none flex flex-col gap-1 tracking-wider bg-bg-base/40 backdrop-blur-sm p-3 rounded-lg border border-line">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse"></span>
          <span className="text-white/60">SYS_TRACKER: ACTIVE</span>
        </div>
        <div className="text-white/80">LAT: {coords.lat}</div>
        <div className="text-white/80">LON: {coords.lon}</div>
        <div className="text-[8px] text-gold/60 mt-0.5 uppercase">EPSG:4326 // WGS84</div>
      </div>
    </div>
  );
}
