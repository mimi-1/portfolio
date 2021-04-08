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

const useStyles = makeStyles(theme => ({
  heroImage: {
    minHeight: theme.spacing(50),
  },
  heroText: {
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    minWidth: 300,
    [theme.breakpoints.down("md")]: {
      minWidth: 300,
    },
    [theme.breakpoints.down("xs")]: {
      width: 100,
      left: 0,
      right: 0,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}))

const Hero = props => {
  const classes = useStyles()
  const smallWidth = theme.breakpoints.values.md
  const smallHeight = smallWidth * 0.75
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
      {/* <Hidden smDown> */}
      <Box position="relative">
        <Fade in timeout={props.isAnimated ? 8000 : 0}>
          <StaticImage
            className={classes.heroImage}
            objectPosition="center top"
            src="../../images/hero_desktop.jpg"
            alt="StartDust Jazz Duo hero image"
            placeholder="none"
            transformOptions={{ fit: "cover" }}
          />
        </Fade>
        <Zoom in timeout={props.isAnimated ? 5000 : 0}>
          <Box
            className={classes.heroText}
            position="absolute"
            top="35%"
            left="40%"
            zIndex={1000}
            width="25%"
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
      {/* </Hidden> */}
      {/* <Hidden mdUp>
        <Container maxWidth="md" disableGutters>
          <StaticImage
            width={smallWidth}
            height={smallWidth}
            backgroundColor="#FFF"
            src="../../images/hero_desktop.jpg"
            alt="StartDust Jazz Duo hero mobile image"
            placeholder="blurred"
            objectPosition="left top"
          />
        </Container>
      </Hidden> */}
    </>
  )
}

export default Hero
