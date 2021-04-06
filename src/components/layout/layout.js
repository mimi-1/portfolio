import * as React from "react"
import PropTypes from "prop-types"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Header from "../header/header"
import Footer from "../footer/footer"
import Sidebar from "../sidebar/sidebar"
import { MuiThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "../theme"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import "./layout.css"
import { Fab } from "gatsby-theme-material-ui"
import UpIcon from "@material-ui/icons/KeyboardArrowUp"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Grow } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  skipLink: {
    position: "fixed",
    bottom: theme.spacing(1),
    right: theme.spacing(1),
  },
  main: {
    minHeight: "calc(100vh - 8rem)",
  },
}))

function ShowFabOnScroll(props) {
  //threshold should be different for different media 200 - for less them sm, 600 starting md
  const { threshold } = props
  const classes = useStyles()
  const trigger = useScrollTrigger({ threshold })

  return (
    <Grow in={trigger} timeout={800}>
      <Fab to="#" color="secondary" size="small" className={classes.skipLink}>
        <UpIcon />
      </Fab>
    </Grow>
  )
}

const Layout = props => {
  const smallMedia = useMediaQuery(theme => theme.breakpoints.down("sm"))
  const threshold = smallMedia ? 150 : 500
  const classes = useStyles()

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Sidebar />
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="stretch"
        >
          <Grid item>
            <main className={classes.main}>{props.children}</main>
          </Grid>
          <Grid item>
            <Footer />
          </Grid>
        </Grid>

        <ShowFabOnScroll threshold={threshold} />
      </MuiThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
