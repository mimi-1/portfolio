import { createMuiTheme } from "@material-ui/core/styles"
import { blue, purple, black } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[100],
      main: purple[500],
      dark: purple[900],
    },
    secondary: {
      light: blue[100],
      main: blue[500],
      dark: blue[900],
    },
    type: "light",
  },
  typography: {
    fontFamily: ["Barlow", "Oswald", "Anton", "san-serif"].join(","),
    h1: {
      fontWeight: 500,
      fontSize: "2rem",
    },
    h2: { fontWeight: 500, fontSize: "1.5rem" },
    h3: { fontWeight: 500, fontSize: "1.2rem" },
    h4: { fontWeight: 500, fontSize: "1rem" },
  },
  overrides: {
    MuiButton: {
      contained: {
        primary: {
          backgroundColor: black,
        },
      },
    },
  },
})

export default theme
