module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bubble: "url(./src/Img/burbuja.svg)",
        bubble2: "url(./src/Img/burbuja2.svg)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
