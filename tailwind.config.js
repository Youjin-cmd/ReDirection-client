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
    extend: {
      animation: {
        appearImage: "appearImage 2s ease-in-out forwards",
        appearFrame: "appearFrame 2s ease-in-out forwards",
        appearBlocker: "appearBlocker 2s ease-in-out forwards",
      },
    },
    keyframes: {
      appearImage: {
        "0%": {
          opacity: "0%",
          transform: "scale(50%)",
        },
        "20%": {
          opacity: "100%",
          transform: "scale(50%)",
        },
        "50%": {
          transform: "scale(50%)",
        },
        "80%": {
          transform: "scale(100%)",
        },
        "100%": {
          transform: "scale(100%) translateX(15%)",
        },
      },
      appearFrame: {
        "0%": {
          opacity: "0%",
          transform: "scale(50%)",
        },
        "20%": {
          opacity: "100%",
          transform: "scale(50.5%)",
        },
        "50%": {
          transform: "scale(50.5%)",
        },
        "80%": {
          transform: "rotate(90deg) scale(50.5%) translateY(-35%)",
        },
        "100%": {
          transform: "rotate(90deg) scale(50.5%) translateY(-87.5%)",
        },
      },
      appearBlocker: {
        "0%": {
          opacity: "0%",
        },
        "40%": {
          opacity: "0%",
        },
        "80%": {
          opacity: "100%",
        },
        "100%": {
          opacity: "100%",
        },
      },
    },
  },
  plugins: [],
};
