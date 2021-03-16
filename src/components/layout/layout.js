import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import Footer from "../footer/footer"
import Sidebar from "../sidebar/sidebar"
import { MuiThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "../theme"

import "./layout.css"

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
        {/* <Footer /> */}
      </MuiThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
