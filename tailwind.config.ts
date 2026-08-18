
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['Fraunces', 'Georgia', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#C0714F',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#F4F0EA',
					foreground: '#5A544D'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: '#F4F0EA',
					foreground: '#5A544D'
				},
				accent: {
					DEFAULT: '#3E5A50',
					foreground: '#FFFFFF'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// New palette
				bone: '#FBF9F6',
				sand: '#F4F0EA',
				sage: {
					DEFAULT: '#3E5A50',
					lt: '#7EA294'
				},
				clay: {
					DEFAULT: '#C0714F',
					lt: '#E8CFC2'
				},
				ink: {
					DEFAULT: '#211E1B',
					2: '#5A544D',
					3: '#8A827A'
				},
				line: '#E4DED5',
				// Legacy aliases remapped to the new palette
				'rosa-coral': '#C0714F',
				'rosa-empolvado': '#E4DED5',
				'blanco-calido': '#FBF9F6',
				'gris-oscuro': '#5A544D',
				'gris-muy-oscuro': '#211E1B',
				'blanco': '#FFFFFF'
			},
			boxShadow: {
				soft: '0 2px 10px rgba(33,30,27,0.06)',
				lift: '0 12px 28px rgba(33,30,27,0.10)'
			},
			borderRadius: {
				lg: '14px',
				md: '12px',
				sm: '10px'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
