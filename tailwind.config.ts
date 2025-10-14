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
        // Snow Design System Colors
        'snow-primary': '#44c5e2',
        'snow-secondary': '#384d82', 
        'snow-light': '#e3f6fb',
        'snow-white': '#ffffff',
      },
    },
  },
  plugins: [],
};

export default config;