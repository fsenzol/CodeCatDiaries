/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
	content: ['./src/**/*.{jsx,js,ts,tsx}', './node_modules/daisyui/dist/**/*.js'],
	darkMode: 'class',
	mode: 'jit',
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				kanit: ["Kanit", "sans-serif"],
				lato: ["Lato", "sans-serif"],
				roboto: ["Roboto", "sans-serif"]
			},
			gridTemplateColumns: {
				'3-cols': 'repeat(3, minmax(0, 1fr))',  // Custom grid setting
			},
		},
	},

	plugins: [
		daisyui // This should be outside of the `theme` object
	],

	daisyui: {
		themes: [
			{
				dark: {
					"primary": "#9ca3af",
					"primary-content": "#090a0b",
					"secondary": "#00c7ff",
					"secondary-content": "#000e16",
					"accent": "#329200",
					"accent-content": "#010800",
					"neutral": "#2d211e",
					"neutral-content": "#d1cdcd",
					"base-100": "#262626",
					"base-200": "#202020",
					"base-300": "#191919",
					"base-content": "#cfcfcf",
					"info": "#d9f99d",
					"info-content": "#111509",
					"success": "#008a36",
					"success-content": "#000701",
					"warning": "#fca5a5",
					"warning-content": "#160a0a",
					"error": "#ef4444",
					"error-content": "#140202",
				},
				light: {
					"primary": "#009bcd",
					"primary-content": "#00090f",
					"secondary": "#00c300",
					"secondary-content": "#000e00",
					"accent": "#0092ea",
					"accent-content": "#000813",
					"neutral": "#0f0f0f",
					"neutral-content": "#c8c8c8",
					"base-100": "#fff5ff",
					"base-200": "#ded5de",
					"base-300": "#beb6be",
					"base-content": "#161516",
					"info": "#00f7ff",
					"info-content": "#001516",
					"success": "#00d99f",
					"success-content": "#001109",
					"warning": "#ffae58",
					"warning-content": "#160b03",
					"error": "#ff6d75",
					"error-content": "#160405",
				},
			}
		],
		darkTheme: 'dark',
		base: true,
		styled: true,
		utils: true,
		logs: true,
		themeRoot: ':root',
	}
}
