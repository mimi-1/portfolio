import * as React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography, Grid } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  footer: {
    position: "relative",
    display: "block",
    overflow: "visible",
    width: "100%",
    height: 90,
    color: theme.palette.secondary.light,
    backgroundColor: theme.palette.black.main,
    "& *": {
      color: theme.palette.secondary,
    },
    // [theme.breakpoints.up("sm")]: {
    //   height: "8rem",
    // },
  },
  image: {
    position: "absolute",
    marginTop: 20,
    bottom: 20,
    overflow: "hidden",
    pointerEvents: "none",
    width: "100%",
    maxWidth: "100%",
    minWidth: "50%",
    zIndex: 0,
    [theme.breakpoints.up("sm")]: {
      bottom: 0,
      width: "100vw",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "3rem",
    },
  },
  text: {
    display: "block",
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 20,
    [theme.breakpoints.up("sm")]: {
      right: 2,
      top: 0,
      left: "70%",
    },
  },
}))

const Footer = () => {
  const classes = useStyles()
  const copyright = "Star Dust Jazz Duo"
  return (
    <Box component="footer" className={classes.footer} position="relative">
      <Box
        position="absolute"
        bottom={23}
        className={classes.text}
        padding={2}
        textAlign="center"
      >
        <Typography variant="caption" color="secondary">
          &copy; {new Date().getFullYear()} {copyright}
        </Typography>
      </Box>
      <Box position="absolute" className={classes.image}>
        <StaticImage
          src={"../../images/footer_SDJD.png"}
          layout="constrained"
          width={496}
          hight={152}
          transformOptions={{ fit: "cover" }}
          placeholder="none"
          backgroundColor="transparent"
          alt="colorful notes footer image"
        />
      </Box>
    </Box>
  )
}

export default Footer
