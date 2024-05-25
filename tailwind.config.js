/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxl: { max: "1439px" }, // Targets screens up to 1439px (exclusive)
      xl: { max: "1279px" }, // Targets screens up to 1279px (exclusive)
      lg: { max: "1079px" }, // Targets screens up to 1079px (exclusive)
      md: { max: "979px" }, // Targets screens up to 979px (exclusive)
      sm: { max: "767px" }, // Targets screens up to 767px (exclusive)
      tablet: { max: "639px" }, // Ensures media query applies up to 639px
      mobileL: { max: "539px" }, // Ensures media query applies up to 539px
      mobileM: { max: "479px" }, // Ensures media query applies up to 479px
      mobileS: { max: "359px" }, // Ensures media query applies up to 359px
      xs: "320px", // Regular min-width for xs breakpoint (included for completeness)
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
