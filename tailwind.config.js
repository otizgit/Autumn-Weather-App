/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ["Oswald", "Arial"],
        urbanist: ["Urbanist", "system-ui", "sans-serif"],
      },
      colors: {
        purewhite: "hsla(0, 0%, 100%, 1)",
        white: "hsla(0, 0%, 90%, 1)",
        darkGrey: "hsla(0, 0%, 0%, 1)",
      },
    },
  },
  plugins: [],
};
