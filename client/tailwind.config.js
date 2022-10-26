/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "1024px",
      // => @media (min-width: 1024px) { ... }

      lg: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        "main-orange": "#F48225",
        "main-yellow": "#FDF7E2",
        "light-yellow": "#FBF3D5",
        "main-grey": "#F1F2F3",
        "light-grey": "#F6F6F6",
        "main-blue": "#0A95FF",
        "deep-blue": "#0074CC",
      },
    },
  },
  plugins: [],
};
