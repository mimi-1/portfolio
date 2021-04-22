import * as React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography } from "@material-ui/core"
import image from "../../images/wave.svg"

const useStyles = makeStyles(theme => ({
  footer: {
    height: "5rem",
    color: theme.palette.secondary,
    backgroundColor: theme.palette.grey[900],
    // backgroundImage: `url(${image})`,
    // backgroundColor: theme.palette.common.black,
    backgroundOrigin: "border-box",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    //border: "solid red 2px",
  },
}))

const Footer = () => {
  const classes = useStyles()
  const copyright = "Star Dust Jazz Duo"
  return (
    <Box
      component="footer"
      className={classes.footer}
      backgroundColor="primary"
    >
      <Box padding={1}>
        <Box textAlign="center" marginTop={2}>
          <Typography variant="caption" color="secondary">
            &copy; {new Date().getFullYear()} {copyright}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
