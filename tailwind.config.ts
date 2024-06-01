import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-black-red": "linear-gradient(to right, #444, #ff0000)",
        "gradient-white-red": "linear-gradient(to right, #fff, #ff0000)",
      },

      colors: {
        primary: "#eeeeee",
        accent: "#ffc639",
        secondary: "#393e46",
        dark: "#141414",
        sky_primary: "#6FB9F5",
        primary_brown: "#B57F75",
        primary_purple: "#85629A",
        success: "#71CCB7",
        danger: "#ED8775",
        transparent: "transparent",
        Absolute: {
          Black: "#000000",
          White: "#ffffff",
        },
        Red: {
          45: "#e50000",
          50: "#ff0000",
          55: "#ff1919",
          60: "#ff3333",
          80: "#ff9999",
          90: "#ffcccc",
          95: "#ffe5e5",
          99: "#fffafa",
        },
        Black: {
          6: "#0F0F0F",
          8: "#141414",
          10: "#1A1A1A",
          12: "#1F1F1F",
          15: "#262626",
          20: "#333333",
          25: "#404040",
          30: "#4C4C4C",
        },
        Grey: {
          60: "#999999",
          65: "#A6A6A6",
          70: "#B3B3B3",
          75: "#BFBFBF",
          90: "#E4E4E7",
          95: "#F1F1F3",
          97: "#F7F7F8",
          99: "#FCFCFD",
        },
        Form: {
          Blue: "#1A56DB",
          Green: "#238626",
          White: "#F9FAFB",
          Red: "#F85149",
        },
      },
    },
  },
  plugins: [],
}
export default config
