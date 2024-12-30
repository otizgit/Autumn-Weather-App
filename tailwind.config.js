/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ["Oswald", "Arial"],
        urbanist: ["Urbanist", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
