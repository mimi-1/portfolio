import * as React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography, Grid } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"
import footerImage from "../../images/footer_SDJD.png"
import { useScrollRestoration } from "gatsby"

const useStyles = makeStyles(theme => ({
  footer: {
    display: "inline-block",
    overflow: "hidden",
    position: "relative",
    width: "100%",
    height: "8rem",
    color: theme.palette.secondary.light,
    backgroundColor: theme.palette.black.main,
    "& *": {
      color: theme.palette.secondary,
      // backgroundColor: theme.palette.black.main,
    },
    backgroundOrigin: "border-box",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  image: {
    pointerEvents: "none",
    position: "absolute",
    // width: "100%",
    // height: "100%",
    zIndex: 0,
  },
}))

const Footer = () => {
  const classes = useStyles()
  const copyright = "Star Dust Jazz Duo"
  return (
    <Box className={classes.footer} component="footer">
      <StaticImage
        className={classes.image}
        src={"../../images/footer_SDJD.png"}
        layout="constrained"
        width={496}
        hight={152}
        placeholder="none"
        backgroundColor="transparent"
        alt="colorful notes footer image"
      />
      {/* <Grid container alignContent="" spacing={2} direction="row" wrap="nowrap">
        <Grid item> */}
      <div>Bla bla bla</div>
      <Box padding={1} style={{ zIndex: 20 }}>
        <Box textAlign="right" marginTop={2}>
          <Typography variant="caption" color="secondary">
            &copy; {new Date().getFullYear()} {copyright}
          </Typography>
        </Box>
      </Box>
      {/* </Grid>
      </Grid> */}
    </Box>
  )
}

export default Footer
