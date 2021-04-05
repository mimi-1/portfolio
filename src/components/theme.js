import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import { purple } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[100],
      main: purple[600],
      dark: purple[900],
    },
    secondary: {
      main: "#dcedc8",
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
