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
  			foreground: '#F2F4F8',
  			primary: '#F2F4F8',
  			gold: {
  				DEFAULT: '#F5C56B',
  				soft: '#F5C56B',
  				ink: '#B8923A'
  			},
  			blue: {
  				light: '#708090',
  				muted: '#9AA6B8'
  			},
  			status: {
  				green: '#4CD982'
  			},
  			brand: {
  				black: '#05080F',
  				dark: '#0B1220',
  				cream: '#F2F4F8'
  			},
        bg: {
          DEFAULT: '#05080F',
          base: '#05080F',
          surface: '#0B1220',
          elevated: '#121C30'
        },
        paper: '#0B1220',
  			ink: {
  				DEFAULT: '#F2F4F8',
  				'2': '#9AA6B8'
  			},
  			line: {
  				DEFAULT: '#1E2A40',
  				soft: '#1E2A40'
  			},
  			muted: '#9AA6B8',
        signal: '#5B8DEF',
        accent: {
          DEFAULT: '#F5C56B',
          ink: '#B8923A'
        }
      },
  		fontFamily: {
  			sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  			display: ['var(--font-display)', 'Fraunces', 'Georgia', 'ui-serif', 'serif'],
  			mono: ['var(--font-mono)', 'ui-monospace', 'monospace']
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
      },
      backgroundSize: {
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
