import * as React from "react"
import { AppBar, makeStyles } from "@material-ui/core"
import Logo from "../logo/logo"
import Social from "../social/social"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import { grey, pink } from "@material-ui/core/colors"

const useStyles = makeStyles({
  sidebar: {
    //backgroundColor: backgroundColor,
    //position: "absolute",
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
      secondary: {
        main: pink[500],
      },
    },
  })
  const classes = useStyles()
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar
        component="div"
        color="default"
        position="fixed"
        className={classes.sidebar}
      >
        <Logo />
        <Social />
      </AppBar>
    </ThemeProvider>
  )
}

export default Sidebar
