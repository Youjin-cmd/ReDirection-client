/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      red: "#C32F2F",
      hoverRed: "#db4d4d",
      pureRed: "#FF0000",
      lightRed: "#F4ECEC",
      black: "#000000",
      white: "#FFFFFF",
      green: "#0ec435",
      blue: "#4287f5",
      blueHover: "#5693f5",
      gray: "#dbdbdb",
    },
    fontFamily: {
      basic: ["basic"],
      beauRivage: ["beauRivage"],
      bebasNeue: ["bebasNeue"],
      gochiHand: ["gochiHand"],
      handjet: ["handjet"],
      hanuman: ["hanuman"],
      justMeAgainDownHere: ["justMeAgainDownHere"],
      pacifico: ["pacifico"],
    },
  },
  plugins: [],
};
