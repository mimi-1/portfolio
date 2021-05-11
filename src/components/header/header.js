import React, { useState } from "react"
import { Button, IconButton } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import MenuIcon from "@material-ui/icons/Menu"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Social from "../social/social"
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
  appBar: {
    backgroundColor: theme.palette.black.main,
  },
  toolbar: {
    [theme.breakpoints.down("sm")]: {
      alignItems: "stretch",
      justifyContent: "center",
      flexDirection: "column",
      alignContent: "center",
    },
  },
  menuButtonDesktop: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
    "&:active": {
      color: theme.palette.secondary.light,
    },
    "&:hover": {
      textShadow: "1px 0px 0px #00FFFF",
      //textShadow: theme.palette.secondary.light,
    },
  },
  menuButtonDesktopActive: {
    borderBottomWidth: 3,
    borderBottomStyle: "solid",
    borderBottomColor: theme.palette.primary,
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
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  mobileMenu: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingTop: theme.spacing(10),
  },
}))

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
      anchor="top"
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
              className={classes.menuButtonDesktop}
              to={item.link}
              fullWidth
              disableElevation
              onClick={toggleDrawer(false)}
            >
              {item.name}
            </Button>
          </ListItem>
        ))}
        <ListItem>
          <Social orientation="horizontal" />
        </ListItem>
      </List>
    </Drawer>
  )

  return (
    // <ThemeProvider theme={appBarTheme}>
    <div className={classes.grow}>
      <AppBar className={classes.appBar} position="fixed" elevation={3}>
        <Toolbar className={classes.toolbar}>
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
            <Social style={{ marginRight: "4rem" }} orientation="horizontal" />
            <IconButton
              color="secondary"
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
    // </ThemeProvider>
  )
}

export default Header
