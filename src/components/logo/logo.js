import * as React from "react"
import { makeStyles } from "@material-ui/core"
import { Button } from "gatsby-theme-material-ui"
// import { StaticImage } from "gatsby-plugin-image"
//https://material-ui.com/customization/components/#overriding-styles-with-classes
const useStyles = makeStyles(theme => ({
  logoButton: {
    padding: 0,
    margin: "0 0 0 0",
    position: "static",
    paddingTop: "1em",
    paddingBottom: "1em",
    paddingLeft: "0px",
    paddingRight: "0px",
    borderRadius: "0px",
  },
  logo: {
    margin: "0 0 0 0",
    padding: "0 0 0 0",
    marginLeft: 0,
    marginRight: 0,
    fontSize: "1em",
    fontWeight: 600,
    noWrap: "true",
    color: theme.palette.secondary.main,
    textTransform: "capitalize",
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    textDecoration: "none",
    // textShadow: "1px 1px 2px #00ffff",
  },
}))

const Logo = () => {
  const classes = useStyles()
  return (
    <Button
      classes={{ root: classes.logoButton, label: classes.logo }}
      to="/"
      color="primary"
      size="small"
    >
      StarDust Jazz Duo
    </Button>
  )
}

export default Logo
