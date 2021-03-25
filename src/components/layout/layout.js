import * as React from "react"
import PropTypes from "prop-types"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"

import Header from "../header/header"
import Footer from "../footer/footer"
import Sidebar from "../sidebar/sidebar"
import { MuiThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "../theme"

import "./layout.css"

import { Fab } from "gatsby-theme-material-ui"
import UpIcon from "@material-ui/icons/KeyboardArrowUp"
import { makeStyles } from "@material-ui/core/styles"
import { Grow } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  skipLink: {
    position: "fixed",
    bottom: theme.spacing(1),
    right: theme.spacing(1),
  },
}))

function ShowFabOnScroll(props) {
  //threshold should be different for different media 200 - for less them sm, 600 starting md
  // also make it smooth
  const classes = useStyles()
  const trigger = useScrollTrigger({ threshold: 600 })

  return (
    <Grow in={trigger} timeout={1000}>
      <Fab to="#" color="secondary" size="small" className={classes.skipLink}>
        <UpIcon />
      </Fab>
    </Grow>
  )
}

const Layout = props => {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Sidebar />
        <Header />
        <div>
          <main>{props.children}</main>
        </div>
        <div>
          <ShowFabOnScroll />
        </div>

        {/* <Footer /> */}
      </MuiThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
