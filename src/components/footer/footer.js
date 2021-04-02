import * as React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography } from "@material-ui/core"
import image from "../../images/wave.svg"

const useStyles = makeStyles(theme => ({
  footer: {
    //color: theme.palette.common.white,
    color: theme.palette.common.black,
    // backgroundColor: theme.palette.grey[900],
    backgroundImage: `url(${image})`,
    backgroundOrigin: "border-box",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}))

const Footer = () => {
  const classes = useStyles()
  const copyright = "Star Dust Jazz Duo"
  return (
    <Box component="footer" className={classes.footer}>
      <Box padding={4}>
        <Box textAlign="center" marginTop={2}>
          <Typography variant="caption">
            &copy; {new Date().getFullYear()} {copyright}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
