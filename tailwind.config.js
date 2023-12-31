/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // ### Primary

        OrangeC: "hsl(25, 97%, 53%)",
        OrangeS: "hsla(35, 97%, 40%, 1)",

        // ### Neutral

        White: "hsl(0, 0%, 100%)",
        LightGrey: "hsl(217, 12%, 63%)",
        MediumGrey: "hsl(216, 12%, 54%)",
        DarkBlue: "hsl(213, 19%, 18%)",
        VeryDarkBlue: "hsl(216, 12%, 8%)",
      },
      fontFamily: {
        body: "Overpass, sans-serif",
      },
    },
  },
  plugins: [],
};
