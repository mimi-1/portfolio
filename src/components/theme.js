import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
// import { purple } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#9467ff",
      main: "#5939EA",
      dark: "#0006b6",
    },
    secondary: {
      light: "#72ffff",
      main: "#00ffff",
      dark: "#00cbcc",
    },
    type: "light",
  },
  typography: {
    // fontFamily: ["Roboto", "Oswald"].join(","),
    fontSize: 16,
    h1: {
      fontWeight: 600,
      fontSize: "3rem",
      fontFamily: "Oswald",
    },
    h2: {
      fontWeight: 400,
      fontSize: "2rem",
      fontFamily: "Oswald",
    },
    h3: { fontWeight: 400, fontSize: "1.5rem", fontFamily: "Oswald" },
    h4: { fontWeight: 400, fontSize: "1rem" },
  },
  // overrides: {
  //   MuiButton: {
  //     contained: {
  //       primary: {
  //         backgroundColor: black,
  //       },
  //     },
  //   },
  // },
})

export default responsiveFontSizes(theme)
