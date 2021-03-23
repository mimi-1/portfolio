//https://www.digitalocean.com/community/tutorials/how-to-handle-images-with-graphql-and-the-gatsby-image-api

import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { Button } from "gatsby-theme-material-ui"
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"

import aboutdata from "../../data/about"
import GatsbyMuiAvatar from "../avatar/avatar"

// const useStyles = makeStyles(theme => ({
//   avatar: {
//     width: theme.spacing(10),
//     height: theme.spacing(10),
//   },
//   [theme.breakpoints.down("sm")]: {
//     avatar: {
//       width: theme.spacing(6),
//       height: theme.spacing(6),
//     },
//   },
// }))

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      zhanna: file(name: { eq: "zhanna" }) {
        relativePath
        largeImage: childImageSharp {
          gatsbyImageData(
            formats: WEBP
            width: 250
            aspectRatio: 1
            transformOptions: { fit: COVER, cropFocus: ENTROPY }
          )
        }
        smallImage: childImageSharp {
          gatsbyImageData(
            width: 100
            aspectRatio: 1.8
            transformOptions: { fit: COVER, cropFocus: NORTH }
          )
        }
      }
      victor: file(name: { eq: "zhanna" }) {
        relativePath
        largeImage: childImageSharp {
          gatsbyImageData(
            formats: WEBP
            width: 250
            aspectRatio: 1
            transformOptions: { fit: COVER, cropFocus: ENTROPY }
          )
        }
        smallImage: childImageSharp {
          gatsbyImageData(
            width: 100
            aspectRatio: 1.8
            transformOptions: { fit: COVER, cropFocus: NORTH }
          )
        }
      }
    }
  `)

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h1"
        className="mobile-header"
        component="h1"
        gutterBottom
      >
        About
      </Typography>
      <Grid container spacing={3}>
        {aboutdata.map(person => (
          <Grid item key={person.name} xs={12} lg={6}>
            <Typography
              variant="h2"
              className="mobile-header"
              component="h2"
              gutterBottom
            >
              {person.name}
            </Typography>

            <GatsbyMuiAvatar
              images={withArtDirection(getImage(data.zhanna.largeImage), [
                {
                  media: "(max-width: 1280px)",
                  image: getImage(data.zhanna.smallImage),
                },
              ])}
            ></GatsbyMuiAvatar>
            <Typography
              variant="body1"
              className="mobile-header"
              component="p"
              gutterBottom
            >
              {person.text.substring(0, 200)}
            </Typography>
            <Button
              to="/about"
              color="primary"
              variant="text"
              disableElevation
              size="small"
              startIcon={<ArrowForwardOutlinedIcon fontSize="small" />}
            >
              read more
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default About
