/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: [
		"./shared/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				herosection: "url('../shared/assets/images/hero-bg.svg')",
				circleBg: "url('../shared/assets/images/circles.svg')",
			},
			colors: {
				theme: {
					blue: "#18C8FF",
					purple: "#933FFE",
					white: "#ffffff",
					darkBlue: "#0B0B0F",
					gray: "#898CA9",
					darkGray: "#1A1B23",
					dark: "#333333",
				},
			},
		},
	},
	plugins: [],
};
