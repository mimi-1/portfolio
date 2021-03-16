import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import { StaticImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  hero: {
    width: "calc(100vw - 2.5rem)",
    height: "auto",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    zIndex: "1",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  heroText: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}))

const Hero = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.hero}>
      <StaticImage
        src="../../images/neon.jpg"
        alt="StartDust Jazz Duo hero image"
        placeholder="blurred"
        objectFit="cover"
        objectPosition="left top"
        layout="fullWidth"
      />
    </Paper>
  )
}

export default Hero
