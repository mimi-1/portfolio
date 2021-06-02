import * as React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography, Grid } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"
import footerImage from "../../images/footer_SDJD.png"

const useStyles = makeStyles(theme => ({
  footer: {
    height: "8rem",
    color: theme.palette.secondary,
    backgroundColor: theme.palette.black.main,
    backgroundImage: footerImage,
    "& *": {
      color: theme.palette.secondary,
      backgroundColor: theme.palette.black.main,
    },
    backgroundOrigin: "border-box",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  image: {
    position: "fixed",
    bottom: -100,
    left: 12,
  },
}))

const Footer = () => {
  const classes = useStyles()
  const copyright = "Star Dust Jazz Duo"
  return (
    <Box className={classes.footer} component="footer">
      {/* <StaticImage
        src={"../../images/footer_SDJD.png"}
        layout="constrained"
        placeholder="blurred"
      /> */}
      {/* <Grid container alignContent="" spacing={2} direction="row" wrap="nowrap">
        <Grid item> */}
      <Box padding={1}>
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
