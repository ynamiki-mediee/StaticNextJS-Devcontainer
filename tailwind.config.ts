import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        'header': '68px',
        'footer': '72px',
      },
      minHeight: {
        'main': 'calc(100vh - 68px - 72px)',
      },
      colors: {
        primary: "#73C4FD",
      },
      spacing: {
        'header-height': '68px',
        'footer-height': '72px',
      }
    },
  },
  plugins: [],
};
export default config;
