import * as React from "react"
import { Hidden, AppBar, makeStyles } from "@material-ui/core"
import Logo from "../logo/logo"
import Social from "../social/social"
import { ThemeProvider } from "@material-ui/core/styles"
import darkTheme from "../theme/darkTheme"

const useStyles = makeStyles(theme => ({
  sidebar: {
    top: 0,
    left: 0,
    height: "100%",
    width: "3em",
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "center",
    backgroundColor: theme.palette.black.main,
  },
}))
const Sidebar = props => {
  const classes = useStyles()
  return (
    <Hidden smDown>
      <ThemeProvider theme={darkTheme}>
        <AppBar
          component="div"
          position="fixed"
          className={classes.sidebar}
          elevation={0}
        >
          <Logo />
          <Social orientation="vertical" />
        </AppBar>
      </ThemeProvider>
    </Hidden>
  )
}

export default Sidebar
