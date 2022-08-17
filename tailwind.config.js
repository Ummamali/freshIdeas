// these variable are used multiple times in the config, change it here to update all
const mainContainer = "1324px";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./Data/**/*.{js,json}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ["Barlow", "sans-serif"],
        body: ["Raleway", "sans-serif"],
      },
      colors: {
        primary: "#2F8F4B",
        primaryDark: "#006633",
        navbg: "hsl(150,3%,15%)",
        categoryBar: "hsl(150,3%,16%)",
        showcaseBg: "hsl(150,7%,19%)",
        showcaseText: "#B1B0B0",
        showcaseHead: "#2E8F4B",
        bannerAccent: "#3096C7",
      },
      maxWidth: {
        container: mainContainer,
      },
      screens: {
        container: mainContainer,
      },
    },
  },
  plugins: [],
};
