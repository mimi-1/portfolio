import * as React from "react"
import { makeStyles } from "@material-ui/core"
// import { Typography } from "@material-ui/core"
import { Button } from "gatsby-theme-material-ui"

const useStyles = makeStyles({
  logo: {
    padding: 0,
    margin: 0,
    position: "static",
    fontSize: "1rem",
    fontWeight: 600,
    noWrap: "true",
    color: "white",
    textTransform: "capitalize",
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    textDecoration: "none",
    marginTop: "2rem",
    paddingLeft: 0,
    paddingRight: "1rem",
  },
})

const Logo = () => {
  const classes = useStyles()
  return (
    <Button className={classes.logo} to="/">
      SDJD
    </Button>
  )
}

export default Logo
