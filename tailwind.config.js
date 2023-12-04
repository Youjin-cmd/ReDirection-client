/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./src/**/*.{ts,tsx}"],
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
        spin: "spin 1s linear infinite",
        appearFromBelowToTop: "appearFromBelowToTop 0.3s ease-in-out forwards",
        appearImage: "appearImage 2s ease-in-out forwards",
        appearFrame: "appearFrame 2s ease-in-out forwards",
        appearBlocker: "appearBlocker 2s ease-in-out forwards",
        appearText: "appearText 2.3s ease-in-out forwards",
        moveLeftRight: "moveLeftRight 2s ease-in-out infinite",
        moveLeftRight2: "moveLeftRight2 2s ease-in-out infinite",
        dancing: "dancing 1s infinite",
      },
    },
    keyframes: {
      spin: {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        },
      },
      appearFromBelowToTop: {
        from: {
          opacity: "50%",
          transform: "translateY(2%)",
        },
        to: {
          opacity: "100%",
          transform: "translateY(0%)",
        },
      },
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
      appearText: {
        "0%": {
          opacity: "0%",
        },
        "90%": {
          opacity: "0%",
          transform: "translateX(0%)",
        },
        "100%": {
          opacity: "100%",
          transform: "translateX(-10%)",
        },
      },
      moveLeftRight: {
        "0%": {
          transform: "translateX(0%)",
        },
        "50%": {
          transform: "translateX(-100%)",
        },
        "100%": {
          transform: "translateX(0%)",
        },
      },
      moveLeftRight2: {
        "0%": {
          transform: "translateX(0%)",
        },
        "50%": {
          transform: "translateX(50%)",
        },
        "100%": {
          transform: "translateX(0%)",
        },
      },
      dancing: {
        "0%": {
          transform: "rotate(5deg)",
        },
        "50%": {
          transform: "rotate(-5deg)",
        },
        "100%": {
          transform: "rotate(5deg)",
        },
      },
    },
  },
  plugins: [],
};
