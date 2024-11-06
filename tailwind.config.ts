import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        inlinePage: "20px",
        blockPage: "25px"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'slide-out-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scroll: {
          // '0%': { transform: 'translateX(100%)' },
          // '100%': { transform: 'translateX(-100%)' },
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'slide-out-left': 'slide-out-left 0.5s ease-in-out',
        'slide-in-left': 'slide-in-left 0.5s ease-in-out',
        'slide-out-right': 'slide-out-right 0.5s ease-in-out',
        'slide-in-right': 'slide-in-right 0.5s ease-in-out',
        scroll: 'scroll 15s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
