import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: "1200px",
        p: "500px",
        pp: "360px",
      },
      fontFamily: {
        poppins: ["var(--font-primary-poppins)"],
        dmSans: ["var(--font-primary-dmSans)"],
      },
      colors: {
        purple: {
          50: "#9ca6ff",
          100: "#746df8",
          200: "#6C63FF",
        },
        gray: {
          50: "#FFFFFF",
          100: "#F8F9FA",
          200: "#E5E5E5",
          300: "#BBBBBB",
        },
      },
    },
  },

  plugins: [],
};
export default config;
