import * as React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Container, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  footer: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.grey[900],
  },
}))

const Footer = () => {
  const classes = useStyles()
  const copyright = "Star Dust Jazz Duo"
  return (
    <Box component="footer" className={classes.footer}>
      <Container maxWidth="md">
        <Box padding={4}>
          <Box textAlign="center" marginTop={2}>
            <Typography variant="caption">
              &copy; {new Date().getFullYear()} {copyright}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
