import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import { Link } from "gatsby-theme-material-ui"

import aboutdata from "../../data/about"

const About = () => {
  console.log(aboutdata)
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography
          variant="h2"
          className="mobile-header"
          component="h1"
          gutterBottom
        >
          About
        </Typography>
        <Typography
          variant="base1"
          className="mobile-header"
          component="p"
          gutterBottom
        >
          For step-by-step installation instructions and detailed explanations
          of the required software, head on over to the Gatsby tutorial. The
          quick start is also available for intermediate to advanced developers.
        </Typography>

        <Link to="/">Go to the main page</Link>
      </Box>
    </Container>
  )
}

export default About
