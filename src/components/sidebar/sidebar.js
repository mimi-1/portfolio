import * as React from "react"
import { AppBar, makeStyles } from "@material-ui/core"
import Logo from "../logo/logo"
import Social from "../social/social"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import { grey, pink } from "@material-ui/core/colors"
//https://www.youtube.com/watch?v=m-2_gb_3L7Q  45min
//www.youtube.com/watch?v=nmCcr-Y9qdc&list=PUoYzQqZNCRqqAomJwJ6yEdg&index=15

const color = "#F8F8FF"
const backgroundColor = "C2E9EC"

const useStyles = makeStyles({
  sidebar: {
    //backgroundColor: backgroundColor,
    //position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "2.5rem",
    //display: "flex",
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
        light: pink[200],
        main: pink[500],
        dark: pink[900],
      },
    },
  })
  const classes = useStyles()
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="default" position="fixed" className={classes.sidebar}>
        <Logo />
        <Social />
      </AppBar>
    </ThemeProvider>
  )
}

export default Sidebar
