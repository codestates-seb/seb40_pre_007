/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "main-orange": "#F48225",
        "main-yellow": "#FDF7E2",
        "light-yellow": "#FBF3D5",
        "border-yellow": "#f1e5bc",
        "main-gray": "#F1F2F3",
        "light-gray": "#F6F6F6",
        "font-gray": "#525960",
        "main-blue": "#0A95FF",
        "deep-blue": "#0074CC",
        "button-blue": "#E1ECF4",
        "button-border-blue": "#39739d",
      },
    },
  },
  plugins: [],
};
