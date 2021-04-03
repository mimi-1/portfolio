import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import { useStaticQuery, graphql } from "gatsby"
import {
  StaticImage,
  GatsbyImage,
  getImage,
  withArtDirection,
} from "gatsby-plugin-image"
import { Hidden, Grow } from "@material-ui/core/"
import { createMuiTheme } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  hero: {
    width: "calc(100vw - 2.5rem)",
    height: "auto",
    marginBottom: theme.spacing(4),
    zIndex: "1",
  },
  heroText: {
    position: "absolute",
    top: "10%",
    left: "30%",
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
      {/* <Paper className={classes.hero}>
        //{" "}
        {/* <GatsbyImage
    //    alt="StartDust Jazz Duo hero image"
    //    objectPosition="left top"
    //    image={images}
    //  /> */}
      <Hidden smDown>
        <div>
          <StaticImage
            layout="fullWidth"
            aspectRatio={3.19}
            backgroundColor="#FFF"
            src="../../images/hero_desktop.jpg"
            alt="StartDust Jazz Duo hero image"
            placeholder="blurred"
            objectPosition="left top"
            transformOptions={{ fit: "cover" }}
          />

          <StaticImage
            classsName={classes.heroText}
            layout="constrained"
            width={400}
            src="../../images/StarDustJazz_desktop.png"
            alt="StartDust Jazz Duo"
            transformOptions={{ fit: "cover" }}
          />
        </div>
      </Hidden>
      <Hidden mdUp>
        <StaticImage
          layout="fullWidth"
          backgroundColor="#FFF"
          src="../../images/hero_mobile.jpg"
          alt="StartDust Jazz Duo hero mobile image"
          placeholder="blurred"
          objectPosition="left top"
          transformOptions={{ fit: "contain", trim: 40, cropFocus: "center" }}
        />
      </Hidden>
      {/*</Paper> */}
    </>
  )
}

export default Hero
