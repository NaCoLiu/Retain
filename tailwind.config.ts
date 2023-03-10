/** @type {import('tailwindcss').Config} */
import clamp from "@tailwindcss/line-clamp";
module.exports = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,vue,ts,tsx}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  plugins: [clamp],
};
