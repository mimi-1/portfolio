import React, { useState } from "react"
import { Button, IconButton, Link } from "gatsby-theme-material-ui"

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

// import MenuItem from "@material-ui/core/MenuItem"
// import Menu from "@material-ui/core/Menu"
import MenuIcon from "@material-ui/icons/Menu"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import { grey, black, pink } from "@material-ui/core/colors"

const menu = [
  {
    name: `Home`,
    link: `/`,
  },
  {
    name: `About`,
    link: `/about`,
  },
  {
    name: `Galery`,
    link: `/galery`,
  },
  {
    name: `Contact`,
    link: `/contact`,
  },
]

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  drawerPaper: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingTop: 30,
  },
}))

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: grey[900],
    },
    secondary: {
      light: pink[200],
      main: pink[500],
      dark: pink[900],
    },
  },
})

const Header = props => {
  const classes = useStyles()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const toggleDrawer = open => event => {
    //open false or true
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    } else {
      setIsMobileMenuOpen(!isMobileMenuOpen)
    }
  }

  const mobileMenuId = "menu-mobile"

  const renderMobileMenu = (
    <Drawer
      id={mobileMenuId}
      anchor="right"
      elevation={20}
      in
      timeout={200}
      open={isMobileMenuOpen}
      onClose={toggleDrawer(false)}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        color="default"
      >
        {menu.map(item => (
          <ListItem key={item.name} color="default">
            <Button
              color="transparent"
              to={item.link}
              fullWidth
              disableElevation
              onClick={toggleDrawer(false)}
            >
              {item.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.grow}>
        <AppBar position="sticky" elevation={0}>
          <Toolbar color="default">
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {menu.map(item => (
                <Button to={item.link}>{item.name}</Button>
              ))}
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    </ThemeProvider>
  )
}

export default Header
