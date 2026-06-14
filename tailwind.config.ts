import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1f2933",
        mist: "#f5f7fb",
        leaf: "#2f855a",
        amber: "#d97706",
        berry: "#9f1239",
        skyDeep: "#075985"
      },
      boxShadow: {
        soft: "0 14px 40px rgba(31, 41, 51, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
