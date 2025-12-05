/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        rice: "#F5F0E6", // 宣纸色
        ink: "#2D2D2A", // 墨色
        ancient: "#8B4513", // 古代史-棕色
        medieval: "#9E2A2B", // 中古史-暗红
        modern: "#1A3A59", // 近代史-靛蓝
        contemporary: "#0F515C", // 现代史-深青
      },
      fontFamily: {
        calligraphy: ['"Ma Shan Zheng"', "cursive"],
        song: ['"Noto Serif SC"', "serif"],
      },
    },
  },
  plugins: [],
};
