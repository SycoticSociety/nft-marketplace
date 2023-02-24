/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "575px",
      md: "768px",
      lg: "1025px",
      xl: "1202px",
    },
    fontFamily: {
      display: ['"CalSans-SemiBold"', "sans-serif"],
      body: ['"DM Sans"', "sans-serif"],
    },
    container: {
      backgroundColor:'#f87171',
      center: true,
      padding: "1rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      accent: "#991b1b",
      "accent-dark": "#7f1d1d",
      "accent-light": "#f87171",
      "accent-lighter": "#fca5a5",
      "light-base": "#F5F8FA",
      green: "#10b981",
      orange: "#FEB240",
      red: "#EF4444",
      purple:"#9400D3",
      blue: "#428AF8",
      jacarta: {
        base: "#5A5D79",
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
    },
    boxShadow: {
      none: "none",
      sm: "0px 1px 2px 0px #f87171",
      base: "0px 1px 2px -1px #f87171, 0px 2px 4px 0px #f87171",
      md: "0px 2px 4px -2px #f87171, 0px 4px 6px -1px #f87171",
      lg: "0px 4px 6px -4px #f87171, 0px 10px 15px -3px #f87171",
      xl: "0px 8px 10px -6px #f87171, 0px 20px 25px -5px #f87171",
      "2xl":
        "0px 25px 50px -12px  #f87171, 0px 12px 24px 0px  #f87171",
      "accent-volume":
        "5px 5px 10px #f87171, inset 2px 2px 6px #fca5a5, inset -5px -5px 10px #fca5a5",
      "white-volume":
        "5px 5px 10px rgba(108, 106, 212, 0.25), inset 2px 2px 6px #EEF1F9, inset -5px -5px 10px #DFE3EF",
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "normal" }],
      "2xs": ["0.8125rem", { lineHeight: "normal" }],
      sm: ["0.875rem", { lineHeight: "normal" }],
      base: ["1rem", { lineHeight: "normal" }],
      lg: ["1.25rem", { lineHeight: "normal" }],
      xl: ["1.5rem", { lineHeight: "normal" }],
      "2xl": ["1.75rem", { lineHeight: "normal" }],
      "3xl": ["2rem", { lineHeight: "normal" }],
      "4xl": ["2.25rem", { lineHeight: "normal" }],
      "5xl": ["2.5rem", { lineHeight: "normal" }],
      "6xl": ["3.5rem", { lineHeight: "normal" }],
      "7xl": ["4.25rem", { lineHeight: "normal" }],
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },

    extend: {
      borderRadius: {
        "2lg": "0.625rem",
      },
      transitionProperty: {
        height: "height",
        width: "width",
      },
      animation: {
        fly: "fly 6s cubic-bezier(0.75, 0.02, 0.31, 0.87) infinite",
        heartBeat: "heartBeat 1s cubic-bezier(0.75, 0.02, 0.31, 0.87) infinite",
        progress: "progress 5s linear",
      },
      keyframes: {
        fly: {
          "0%, 100%": { transform: "translateY(5%)" },
          "50%": { transform: "translateY(0)" },
        },
        heartBeat: {
          "0%, 40%, 80%, 100%": { transform: "scale(1.1)" },
          "20%, 60%": { transform: "scale(.8)" },
        },
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
    namedGroups: ["dropdown"],
  },
  // variants: {
  // 	display: ['children', 'children-not'],
  // },
  plugins: [],
};
