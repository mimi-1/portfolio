import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import palette from "./palette"
import typography from "./typography"

const darkPalette = { ...palette, type: "dark" }

const darkTheme = createMuiTheme({
  palette: darkPalette,
  typography,
})

export default responsiveFontSizes(darkTheme)
