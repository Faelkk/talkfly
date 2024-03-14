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
        p2: "560px",
        p: "500px",

        pp: "360px",
        md2: "850px",
      },
      fontFamily: {
        poppins: ["var(--font-primary-poppins)"],
        dmSans: ["var(--font-primary-dmSans)"],
        roboto: ["var(--font-body)"],
      },
      colors: {
        purple: {
          50: "#9ca6ff",
          100: "#746df8",
          200: "#6C63FF",
        },
        gray: {
          50: "#FFFFFF",
          80: "#F1F1F1",
          100: "#F8F9FA",
          150: "#F2F2F2",
          200: "#E5E5E5",
          250: " #F4F4F4",
          300: "#BBBBBB",
          350: "#F0F0F0",
          400: "#D9D9D9",
          500: "#8D8A8A",
          600: "#4E4E4E",
        },
      },
    },
  },

  plugins: [],
};
export default config;
