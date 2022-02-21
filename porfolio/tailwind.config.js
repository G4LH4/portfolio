module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#1E1E1E",
      },
      backgroundImage: {
        bubble: "url(./src/Img/burbuja.svg)",
        secondBubble: "url(./src/Img/burbuja2.svg)",
      },
      fontFamily: {
        Sora: "Sora",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
