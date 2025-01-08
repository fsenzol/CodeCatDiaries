/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import colors from "tailwindcss/colors.js";


export default {
	content: ['./src/**/*.{jsx,js,ts,tsx}', './node_modules/daisyui/dist/**/*.js'],
	darkMode: ['class', 'class'],
	mode: 'jit',
	theme: {
    	extend: {
    		fontFamily: {
    			montserrat: [
    				'Montserrat',
    				'sans-serif'
    			],
    			kanit: [
    				'Kanit',
    				'sans-serif'
    			],
    			lato: [
    				'Lato',
    				'sans-serif'
    			],
    			roboto: [
    				'Roboto',
    				'sans-serif'
    			]
    		},
    		gridTemplateColumns: {
    			'3-cols': 'repeat(3, minmax(0, 1fr))'
    		},
    		backgroundImage: {
    			'custom-radial': '`radial-gradient(rgb(0, 0, 0, 0) 1px, rgba(239, 68, 68, 0.2) 1px)`',
    			'center-radial-blur': 'radial-gradient(ellipse 150% 100% at center, rgba(112, 128, 144, 0.2), transparent 100%)',
    			'center-radial-red': 'radial-gradient(ellipse 150% 100% at center, rgba(239, 68, 68, 0.2), transparent 100%)'
    		},
    		backgroundSize: {
    			'4x4': '4px 4px'
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
    	}
    },

	plugins: [
		daisyui, // This should be outside of the `theme` object
        require("tailwindcss-animate")
    ],

	// daisyui: {
	// 	themes: [
	// 		{
	// 			"dark": {
	// 				"primary": "#00C7FF",           // Bright Cyan
	// 				"primary-content": "#FFFFFF",   // White
	// 				"secondary": "#329200",         // Vibrant Green
	// 				"secondary-content": "#F0F0F0", // Light Gray
	// 				"accent": "#FF6D75",            // Soft Red
	// 				"accent-content": "#FFFFFF",    // White
	// 				"neutral": "#1A1A1A",           // Dark Gray
	// 				"neutral-content": "#E0E0E0",   // Light Gray
	// 				"base-100": "#1e293b",          // Almost Black
	// 				"base-200": "#1E1E1E",          // Dark Gray
	// 				"base-300": "#2A2A2A",          // Medium Gray
	// 				"base-content": "#D0D0D0",      // Light Gray
	// 				"info": "#00F7FF",              // Bright Cyan
	// 				"info-content": "#000000",      // Black
	// 				"success": "#00D99F",           // Teal
	// 				"success-content": "#000000",   // Black
	// 				"warning": "#FFAE58",           // Warm Orange
	// 				"warning-content": "#000000",   // Black
	// 				"error": "#EF4444",             // Red
	// 				"error-content": "#FFFFFF"      // White
	// 			},
	// 			"light": {
	// 				"primary": "#009BCE",           // Deep Sky Blue
	// 				"primary-content": "#000000",   // Black
	// 				"secondary": "#00C300",         // Bright Green
	// 				"secondary-content": "#000000", // Black
	// 				"accent": "#0092EA",            // Vivid Blue
	// 				"accent-content": "#000000",    // Black
	// 				"neutral": "#F5F5F5",           // Light Gray
	// 				"neutral-content": "#1A1A1A",   // Dark Gray
	// 				"base-100": "#FFFFFF",          // White
	// 				"base-200": "#F0F0F0",          // Very Light Gray
	// 				"base-300": "#E0E0E0",          // Light Gray
	// 				"base-content": "#1A1A1A",      // Dark Gray
	// 				"info": "#00F7FF",              // Bright Cyan
	// 				"info-content": "#000000",      // Black
	// 				"success": "#00D99F",           // Teal
	// 				"success-content": "#000000",   // Black
	// 				"warning": "#FFAE58",           // Warm Orange
	// 				"warning-content": "#000000",   // Black
	// 				"error": "#EF4444",             // Red
	// 				"error-content": "#FFFFFF"      // White
	// 			}
	// 		}
	// 	],
	// 	darkTheme: 'dark',
	// 	base: true,
	// 	styled: true,
	// 	utils: true,
	// 	logs: true,
	// 	themeRoot: ':root',
	// }
}
