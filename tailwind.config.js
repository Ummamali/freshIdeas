module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ["Bebas Neue", "sans-serif"],
      },
      colors: {
        primary: "#2F8F4B",
        primaryDark: "#006633",
        navbg: "#3C3C3C",
        showcaseBg: "#333333",
        showcaseText: "#B1B0B0",
        showcaseHead: "#2E8F4B",
        secOneAccent: "#9e6d67",
        bannerAccent: "#3096C7",
      },
      maxWidth: {
        container: "1224px",
      },
    },
  },
  plugins: [],
};
