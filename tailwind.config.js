/** @type {import('tailwindcss').Config} */
import flowbitePlugin from "flowbite/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: "#EB6617",
        customPurpure: "#8A50F7",
        customHover: "#CD0ADB",
        customGray: "#EBEBEB",
        customLilaBg: "#F4EDFF",
        customPromos: "#FED1B2",
        customGaryBg: "#F4F4F4",
        customMelon: '#CD6926',
        customPink: '#FFE2EC'
      },
    },
  },
  plugins: [flowbitePlugin()],
};
