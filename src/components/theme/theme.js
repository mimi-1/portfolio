import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import palette from "./palette"
import typography from "./typography"

const lightPalette = { ...palette, type: "light" }

const theme = createMuiTheme({
  palette: lightPalette,
  typography,
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
