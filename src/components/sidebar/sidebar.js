import * as React from "react"
import { Hidden, AppBar, makeStyles } from "@material-ui/core"
import Logo from "../logo/logo"
import Social from "../social/social"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"

const useStyles = makeStyles({
  sidebar: {
    top: 0,
    left: 0,
    height: "100%",
    width: "3em",
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "center",
  },
})
const Sidebar = props => {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        light: grey[200],
        main: grey[500],
        dark: grey[900],
      },
    },
  })
  const classes = useStyles()
  return (
    // <ThemeProvider theme={darkTheme}>
    <AppBar
      component="div"
      color="transparent"
      position="fixed"
      className={classes.sidebar}
      elevation={0}
    >
      <Logo />
      <Hidden smDown>
        <Social />
      </Hidden>
    </AppBar>
    //{" "}
    // </ThemeProvider>
  )
}

export default Sidebar
