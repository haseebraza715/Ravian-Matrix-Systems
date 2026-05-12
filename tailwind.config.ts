import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#FFFFFF",
          2: "#F3F4F6",
        },
        paper: "#FFFFFF",
        ink: {
          DEFAULT: "#0A1733",
          2: "#1E2D4A",
        },
        muted: "#64748B",
        line: {
          DEFAULT: "rgba(10, 23, 51, 0.1)",
          soft: "rgba(10, 23, 51, 0.05)",
        },
        mustard: {
          DEFAULT: "#D4A84B",
          2: "#E8CA7A",
          ink: "#9A7528",
          bright: "#F0D88A",
        },
        navy: {
          DEFAULT: "#0A1733",
          2: "#1E2D4A",
          3: "#2A3D5E",
          light: "#0F2042",
        },
        dark: {
          DEFAULT: "#060D1E",
          2: "#0A1733",
          line: "rgba(255,255,255,0.10)",
          mute: "rgba(255,255,255,0.55)",
        },
      },
      fontFamily: {
        sans: ["Geist", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "spatial-grid": "linear-gradient(var(--line-soft) 1px, transparent 1px), linear-gradient(90deg, var(--line-soft) 1px, transparent 1px)",
        "spatial-grid-dark": "linear-gradient(var(--dark-line) 1px, transparent 1px), linear-gradient(90deg, var(--dark-line) 1px, transparent 1px)",
        "gold-gradient": "linear-gradient(135deg, #C59D45 0%, #D8B564 50%, #E8CA7A 100%)",
        "navy-gradient": "linear-gradient(135deg, #060D1E 0%, #0A1733 50%, #1E2D4A 100%)",
      },
      backgroundSize: {
        "grid-lg": "64px 64px",
        "grid-md": "48px 48px",
        "grid-sm": "40px 40px",
      },
      boxShadow: {
        "gold-glow": "0 0 40px -10px rgba(197, 157, 69, 0.3)",
        "gold-glow-sm": "0 0 20px -5px rgba(197, 157, 69, 0.2)",
        "card": "0 1px 3px rgba(10, 23, 51, 0.06), 0 8px 24px -4px rgba(10, 23, 51, 0.08)",
        "card-hover": "0 8px 30px -4px rgba(10, 23, 51, 0.12), 0 0 0 1px rgba(197, 157, 69, 0.1)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
