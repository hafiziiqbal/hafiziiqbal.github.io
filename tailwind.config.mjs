/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brown: {
          1: "#f0e9e4",
          2: "#d7c5b6",
          3: "#bea092",
          4: "#a5827a",
          5: "#927154", // Base Color
          6: "#7e5c46",
          7: "#6b4739",
          8: "#57322b",
          9: "#44221e",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
