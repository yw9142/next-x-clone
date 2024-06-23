import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        "twitter-blue": "#1D9BF9",
        "signup-hover": "#1a8cd8",
        "login-hover": "#1d9bf01a",
        "modal-background": "#00000066",
        "bg-search": "#4287f5",
      },
      width: {
        inherit: "inherit",
      },
    },
  },
  plugins: [],
} satisfies Config;
export default config;
