import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		screens: {
  			xs: '475px',
  			sm: '640px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1536px'
  		},
  		gridTemplateColumns: {
  			'responsive-fit': 'repeat(auto-fit, minmax(280px, 1fr))',
  			'responsive-fit-two': 'repeat(auto-fit, minmax(250px, 1fr))',
  			'responsive-fit-large': 'repeat(auto-fit, minmax(320px, 1fr))'
  		},
  		keyframes: {
  			pulseBorder: {
  				'0%': {
  					boxShadow: '0 0 0 0 #25D366'
  				},
  				'100%': {
  					boxShadow: '0 0 0 25px rgba(255, 0, 0, 0)'
  				}
  			},
  			pulseBorderPack: {
  				'0%': {
  					boxShadow: '0 0 0 0 #FF5A00'
  				},
  				'100%': {
  					boxShadow: '0 0 0 25px rgba(255, 0, 0, 0)'
  				}
  			},
  			opacityNormal: {
  				'0%': {
  					opacity: '0'
  				},
  				'50%': {
  					opacity: '1'
  				}
  			},
  			opacity: {
  				'0%': {
  					opacity: '0'
  				},
  				'50%': {
  					opacity: '1'
  				},
  				'100%': {
  					opacity: '0'
  				}
  			},
  			rightToLeft: {
  				from: {
  					transform: 'translate(0)'
  				},
  				to: {
  					transform: 'translate(-85vw)'
  				}
  			},
  			leftToRight: {
  				from: {
  					transform: 'translate(-85vw)'
  				},
  				to: {
  					transform: 'translate(0)'
  				}
  			},
  			arrowHome: {
  				'0%': {
  					transform: 'translate(0,-10px) rotate(45deg)',
  					opacity: '0'
  				},
  				'50%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'translate(0,10px) rotate(45deg)',
  					opacity: '0'
  				}
  			}
  		},
  		animation: {
  			'right-roll': 'leftToRight infinite alternate 180s linear',
  			'left-roll': 'rightToLeft infinite alternate 180s linear',
  			'arrow-scroll': 'arrowHome 3s ease-in-out infinite',
  			opacity: 'opacity 2s ease-in-out infinite',
  			'opacity-normal': 'opacityNormal 1s ease-in-out',
  			'pulse-border': 'pulseBorder 2s infinite',
  			'pulse-border-pack': 'pulseBorderPack 2s infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	},
  	fontFamily: {
  		'blue-dream': 'var(--font-blue-dream)',
  		'work-sans': 'var(--font-work-sans)',
  		'bardon-stamp': 'var(--font-bardon-stamp)',
  		'bardon-clean': 'var(--font-bardon-clean)'
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
