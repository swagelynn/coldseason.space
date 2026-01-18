module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	plugins: [
		require('@catppuccin/tailwindcss')({
			prefix: 'ctp',
			defaultFlavour: 'mocha',
		}),
		require("@tailwindcss/typography")
	],
	safelist: [
		"bg-ctp-text",
		"bg-ctp-mantle",
		"h-1/2",
		"h-1/3",
		"h-1/4",
		"h-1/5",
		"h-1/6",
		"w-64",
		"w-18",
		"max-w-18",
		'border-ctp-rosewater',
		'border-ctp-flamingo',
		'border-ctp-pink',
		'border-ctp-mauve',
		'border-ctp-red',
		'border-ctp-maroon',
		'border-ctp-peach',
		'border-ctp-yellow',
		'border-ctp-green',
		'border-ctp-teal',
		'border-ctp-sky',
		'border-ctp-sapphire',
		'border-ctp-blue',
		"gap-10"
	],
	theme: {
		extend: {
			colors: {
				bg: {
					DEFAULT: "#000000"
				},
				accentpink: {
					DEFAULT: "#c09cb0"
				},
				white: {
					DEFAULT: "#fdfdf8"
				},
			}
		}
	}
};
