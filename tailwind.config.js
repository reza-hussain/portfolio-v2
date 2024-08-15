module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        themeWhite: "#fafafa",
        themeBlack: {
          light: "#212122",
          dark: "#1C1D1D",
        },
        themeGray: "#CFC9C9",
        themeGreen: {
          light: "#C0E4E0",
          dark: "#55BD8B",
        },
      },
    },
  },
  plugins: [],
};
