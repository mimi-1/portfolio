import React from "react"
import { makeStyles } from "@material-ui/core/styles"
// import { useStaticQuery, graphql } from "gatsby"
import {
  StaticImage,
  // GatsbyImage,
  // getImage,
  // withArtDirection,
} from "gatsby-plugin-image"
import { Hidden, Fade, Zoom, Box } from "@material-ui/core/"
import theme from "../theme"
import HeroParticles from "./heroParticles"

const useStyles = makeStyles(theme => ({
  heroContainer: {
    backgroundColor: "#000000",
  },
  heroImage: {
    backgroundColor: "#000000",
    minHeight: theme.spacing(50),
    maxHeight: "calc(100vh - 3rem)",
    [theme.breakpoints.down("xs")]: {
      top: "0",
      height: "100%",
    },
  },
  heroText: {
    top: "20%",
    // left="40%"
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    minWidth: 300,
    width: "35%",
    [theme.breakpoints.down("md")]: {
      top: "20%",
      minWidth: 300,
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      // width: 100,
      // left: 0,
      // right: 0,
      top: "35%",
      width: "50%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}))

const Hero = props => {
  const classes = useStyles()
  const smallWidth = theme.breakpoints.values.md
  // const smallHeight = smallWidth * 0.75
  // // getting images from graphql
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
      <Box position="relative" className={classes.heroContainer}>
        <Hidden smDown>
          <Fade in timeout={props.isAnimated ? 8000 : 0}>
            <StaticImage
              className={classes.heroImage}
              objectPosition="center top"
              src="../../images/hero_desktop.png"
              alt="StartDust Jazz Duo hero image"
              placeholder="dominantColor"
              layout="fullWidth"
              fit="cover"
            />
          </Fade>
        </Hidden>
        <Hidden mdUp>
          <Fade in>
            <StaticImage
              className={classes.heroImage}
              objectPosition="center top"
              backgroundColor="#000"
              src="../../images/hero_mobile.png"
              alt="StartDust Jazz Duo hero mobile image"
              placeholder="dominantColor"
              layout="fullWidth"
              fit="cover"
            />
          </Fade>
        </Hidden>
        <Zoom in timeout={props.isAnimated ? 5000 : 0}>
          <Box className={classes.heroText} position="absolute" zIndex={1000}>
            <StaticImage
              layout="constrained"
              placeholder="none"
              src="../../images/hero_logo.png"
              alt="StartDust Jazz Duo"
              transformOptions={{ fit: "cover" }}
            />
          </Box>
        </Zoom>
        <HeroParticles />
      </Box>
    </>
  )
}

export default Hero
