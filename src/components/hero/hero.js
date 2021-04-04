import React from "react"
import { makeStyles } from "@material-ui/core/styles"
// import { useStaticQuery, graphql } from "gatsby"
import {
  StaticImage,
  // GatsbyImage,
  // getImage,
  // withArtDirection,
} from "gatsby-plugin-image"
import { Hidden, Fade, Zoom, Container, Box } from "@material-ui/core/"
import { createMuiTheme } from "@material-ui/core/styles"
// import { positions, compose } from "@material-ui/system"

const useStyles = makeStyles(theme => ({
  hero: {
    position: "relative",
    height: "auto",
    marginBottom: theme.spacing(4),
    zIndex: "5",
  },
}))

const theme = createMuiTheme()

const Hero = () => {
  const classes = useStyles()

  //getting images from graphql
  // const backgrounds = useStaticQuery(graphql`
  //   query {
  //     mobile: file(name: { eq: "hero_mobile" }) {
  //       relativePath
  //       childImageSharp {
  //         gatsbyImageData(
  //           layout: FULL_WIDTH
  //           aspectRatio: 1.05
  //           backgroundColor: "#ffffff"
  //           transformOptions: { fit: CONTAIN }
  //         )
  //       }
  //     }
  //     desktop: file(name: { eq: "hero_desktop" }) {
  //       relativePath
  //       childImageSharp {
  //         gatsbyImageData(
  //           layout: FULL_WIDTH
  //           aspectRatio: 3.19
  //           backgroundColor: "#ffffff"
  //           transformOptions: { fit: CONTAIN }
  //         )
  //       }
  //     }
  //   }
  // `)

  console.log(theme.spacing)
  // const images = withArtDirection(
  //   getImage(backgrounds.desktop.childImageSharp),
  //   [
  //     {
  //       media: "(max-width: 1024px)",
  //       image: getImage(backgrounds.mobile.childImageSharp),
  //     },
  //   ]
  // )

  return (
    <>
      <Hidden smDown>
        <Box position="relative">
          <Fade in timeout={8000}>
            <StaticImage
              objectPosition="left top"
              src="../../images/hero_desktop.jpg"
              alt="StartDust Jazz Duo hero image"
              placeholder="none"
              objectPosition="left top"
              transformOptions={{ fit: "cover" }}
            />
          </Fade>
          <Zoom in timeout={5000}>
            <Box
              position="absolute"
              top="35%"
              left="40%"
              zIndex="tooltip"
              width="25%"
              minWidth={300}
            >
              <StaticImage
                layout="constrained"
                placeholder="none"
                src="../../images/hero_logo.png"
                alt="StartDust Jazz Duo"
                transformOptions={{ fit: "cover" }}
              />
            </Box>
          </Zoom>
        </Box>
        {/* </Container> */}
      </Hidden>
      <Hidden mdUp>
        <Container maxWidth="md" disableGutters>
          <StaticImage
            // layout="fullWidth"
            backgroundColor="#FFF"
            src="../../images/hero_mobile.jpg"
            alt="StartDust Jazz Duo hero mobile image"
            placeholder="blurred"
            objectPosition="left top"
          />
        </Container>
      </Hidden>
    </>
  )
}

export default Hero
