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
      appearance: {
        none: "none",
      },
      colors: {
        "red-500": "#ef4444",
        "blue-500": "#3b82f6",
        "green-500": "#10b981",
        "yellow-500": "#f59e0b",
        "purple-500": "#8b5cf6",
        "orange-500": "#f97316",
        "pink-500": "#ec4899",
        "brown-500": "#a52a2a",
        "gray-500": "#6b7280",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
