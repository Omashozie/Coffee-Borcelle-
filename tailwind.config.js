/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        Pompiere: ["Pompiere"],
        Galada: ["Galada"],
        PoppinsBold: ["Poppins"],
        RegularPoppins: ["RegularPoppins"],
        Inter: ["Inter"],
        InterBold: ["Inter"],
        Montserrat: ["Montserrat"],
      },
      colors: {
        blackBrown: "#2f1f14",
        coffeeBrown: "#220404",
        Cameo: "#dbbca1",
        Eclipse: "#2f1f14",
        SealBrown: "#1b0b0b",
        Kabul: "#655546",
        Cola: "#291600",
      },
    },
  },
  plugins: [],
};
