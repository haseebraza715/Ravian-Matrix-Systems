import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			gold: {
  				DEFAULT: '#C9A24D',
  				soft: '#E3C76D',
  				ink: '#6E5618'
  			},
  			blue: {
  				light: '#8FBEDC',
  				muted: '#4E7F9E'
  			},
  			status: {
  				green: '#4CD982'
  			},
  			brand: {
  				black: '#080A0C',
  				dark: '#050605',
  				cream: '#F4EFE3'
  			},
        bg: '#080A0C',
        paper: '#050605',
  			ink: {
  				DEFAULT: '#080A0C',
  				'2': '#2A2823'
  			},
  			line: {
  				DEFAULT: 'rgba(244, 239, 227, 0.1)',
  				soft: 'rgba(244, 239, 227, 0.05)'
  			},
  			muted: '#6B655B'
  		},
  		fontFamily: {
  			sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  			mono: ['Geist Mono', 'ui-monospace', 'monospace']
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      boxShadow: {
        'card': '0 1px 0 rgba(14,14,12,0.04), 0 20px 40px -20px rgba(14,14,12,0.12)',
        'card-hover': '0 1px 0 rgba(14,14,12,0.04), 0 30px 60px -30px rgba(14,14,12,0.20)',
      },
      backgroundImage: {
        'spatial-grid': 'linear-gradient(rgba(14,14,12,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(14,14,12,0.07) 1px, transparent 1px)',
        'spatial-grid-dark': 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-sm': '24px 24px',
        'grid-md': '40px 40px',
        'grid-lg': '64px 64px',
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
