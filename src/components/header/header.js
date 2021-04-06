import React, { useState } from "react"
import { Button, IconButton } from "gatsby-theme-material-ui"
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import MenuIcon from "@material-ui/icons/Menu"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import { grey, pink } from "@material-ui/core/colors"

import { useStaticQuery, graphql } from "gatsby"

const stubMenu = [
  {
    name: `Home`,
    link: `/`,
  },
  {
    name: `About`,
    link: `/about`,
  },
]

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButtonDesktop: {
    marginRight: theme.spacing(2),
    "&:active": {
      color: theme.palette.secondary.light,
    },
  },
  menuButtonDesktopActive: {
    borderBottomWidth: 3,
    borderBottomStyle: "groove",
    borderBottomColor: theme.palette.primary.light,
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
  mobileMenu: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingTop: theme.spacing(10),
  },
}))

const appBarTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: grey[900],
    },
    secondary: {
      main: pink[500],
    },
  },
})

const Header = props => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            menuLinks {
              link
              name
            }
          }
        }
      }
    `
  )

  const menu =
    site.siteMetadata.menuLinks.length > 0
      ? site.siteMetadata.menuLinks
      : stubMenu
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
      setIsMobileMenuOpen(open)
    }
  }

  const mobileMenuId = "menu-mobile"
  const renderMobileMenu = (
    <Drawer
      id={mobileMenuId}
      anchor="right"
      elevation={0}
      in
      timeout={200}
      open={isMobileMenuOpen}
      onClose={toggleDrawer(false)}
      classes={{
        paper: classes.mobileMenu,
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
    <ThemeProvider theme={appBarTheme}>
      <div className={classes.grow}>
        <AppBar position="sticky" elevation={0}>
          <Toolbar color="default">
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {menu.map(item => (
                <Button
                  key={item.name}
                  className={classes.menuButtonDesktop}
                  to={item.link}
                  activeClassName={classes.menuButtonDesktopActive}
                >
                  {item.name}
                </Button>
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
