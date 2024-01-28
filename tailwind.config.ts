import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        BrandWhite: "rgb(var(--Brand-White) / <alpha-value>)",
        BrandBlack: "rgb(var(--Brand-Black)/ <alpha-value>)",
        BrandGrey: "rgb(var(--Brand-Grey)/ <alpha-value>)",
      },
      fontFamily: {
        header: "brother-1816, sans-serif;",
        body: "tenon, sans-serif",
      },
    },
  },
  plugins: [],
};
export default config;
