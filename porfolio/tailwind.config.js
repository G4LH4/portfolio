module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#0E1136",
        bgColor: "#355FF3",
        imgBG: "#F53081",
      },
      backgroundImage: {},
      fontFamily: {
        Sora: "Sora",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
