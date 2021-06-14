//transition documntation
//http:/reactcommunity.org/react-transition-group/transition
//default transitions for material-ui
//https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/styles/createTransitions.js

/*visibility
Hide component
              mobile|   tablet        | desktop
            0        600      960     1280      1920
innerWidth  |xs      sm       md       lg       xl
            |--------|--------|--------|--------|-------->
width       |   xs   |   sm   |   md   |   lg   |   xl

smUp        |   show | hide
mdUp        |            show | hide
lgUp        |                     show | hide
            |
lgDown      |                              hide | show
mdDown+     |                     hide | show                   - show on large and xlarge screens >1280px
smDown      |             hide | show
xsDown      |   hide | show
*/

import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import {
  StaticImage,
  GatsbyImage,
  getImage,
  withArtDirection,
} from "gatsby-plugin-image"
import { Fade, Zoom, Box } from "@material-ui/core/"
import HeroParticles from "./heroParticles"
import { Transition } from "react-transition-group"

const useStyles = makeStyles(theme => ({
  heroContainer: {
    overflow: "hidden",
    backgroundColor: theme.palette.black.main,
    height: "100vh",
  },
  heroImage: {
    display: "block",
    backgroundColor: theme.palette.black.main,
    maxWidth: "100vw",
    minHeight: theme.spacing(50),
    maxHeight: "calc(100vh)",
    height: "calc(100% - 20px)",
    [theme.breakpoints.down("xs")]: {
      top: "60px",
      height: "calc(100% - 58px)",
    },
  },
  heroText: {
    top: "20%",
    left: 0,
    right: 0,
    // margin: "0 auto",
    marginLeft: "auto",
    marginRight: "auto",
    minWidth: 300,
    maxWidth: "80vw",
    width: "30%",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      top: "38%",
      minWidth: 300,
      width: "60%",
    },
    [theme.breakpoints.down("xs")]: {
      // width: 100,
      overflow: "hidden",
      top: "38%",
    },
  },
}))

const Hero = props => {
  const classes = useStyles()

  const backgrounds = useStaticQuery(graphql`
    fragment getImage on File {
      relativePath
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: DOMINANT_COLOR
          backgroundColor: "#000028"
          transformOptions: { fit: COVER }
        )
      }
    }
    query {
      desktop: file(name: { eq: "hero_desktop" }) {
        ...getImage
      }
      tablet: file(name: { eq: "hero_tablet" }) {
        ...getImage
      }
      mobile: file(name: { eq: "hero_mobile" }) {
        ...getImage
      }
    }
  `)

  const images = withArtDirection(getImage(backgrounds.desktop), [
    {
      media: "(max-width: 1280px)",
      image: getImage(backgrounds.tablet),
    },
    {
      media: "(max-width: 600px)",
      image: getImage(backgrounds.mobile),
    },
  ])

  const duration = 3000
  //transition: <property> <duration> <timing-function> <delay>;
  const defaultStyle = {
    transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
    opacity: 0,
    transform: "scale(5)",
  }

  const transitionStyles = {
    entering: { opacity: 0.5 },
    entered: { opacity: 1, transform: "scale(1)" },
    exiting: { opacity: 1 },
    exited: { opacity: 0 },
  }

  return (
    <>
      <Box position="relative" className={classes.heroContainer}>
        <Fade in timeout={props.isAnimated ? 8000 : 0}>
          <GatsbyImage
            className={classes.heroImage}
            alt="StartDust Jazz Duo hero image"
            objectPosition="center top"
            image={images}
          />
        </Fade>

        <Zoom
          in
          style={{
            transitionDelay: "1000ms",
            transitionTimingFunction: "steps(2, end)",
          }}
          timeout={props.isAnimated ? { appear: 0, enter: 4000, exit: 0 } : 0}
        >
          <Box className={classes.heroText} position="absolute" zIndex={1000}>
            <StaticImage
              layout="constrained"
              placeholder="none"
              src="../../images/hero_text.png"
              alt="StartDust Jazz Duo"
              transformOptions={{ fit: "inside" }}
            />
          </Box>
        </Zoom>
        <Transition
          appear={true}
          in={true}
          timeout={{ appear: 1000, enter: 5000, exit: 0 }}
        >
          {state => (
            <Box
              className={classes.heroText}
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
              position="absolute"
              zIndex={1000}
            >
              <StaticImage
                layout="constrained"
                placeholder="none"
                src="../../images/hero_text_top.png"
                alt="StartDust Jazz Duo"
                transformOptions={{ fit: "inside" }}
              />
            </Box>
          )}
        </Transition>
        <HeroParticles />
      </Box>
    </>
  )
}

export default Hero
