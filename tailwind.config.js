/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ["Cinzel", "Arial"],
        urbanist: ["Urbanist", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#226ba3",
        purewhite: "hsla(0, 0%, 100%, 1)",
        white: "hsla(0, 0%, 90%, 1)",
        lightGrey: "hsla(0, 0%, 70%, 1)",
      },
    },
  },
  plugins: [],
};
