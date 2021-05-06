import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, withArtDirection } from "gatsby-plugin-image"
// import aboutdata from "../../data/about"
import GatsbyMuiAvatar from "../avatar/avatar"
import { makeStyles } from "@material-ui/core/styles"
import MoreLink from "../utils/morelink"

const useStyles = makeStyles(theme => ({
  skipLink: {
    position: "absolute",
    //bottom: theme.spacing(1),
    right: theme.spacing(0),
  },
}))

const About = props => {
  const isLengthLimit =
    typeof props.length === "number" && props.length > 50 && props.length < 3000
      ? true
      : false
  const classes = useStyles()

  const aboutData = useStaticQuery(graphql`
    {
      allContentfulAuthor(
        limit: 2
        filter: { isMain: { eq: true } }
        sort: { fields: name, order: DESC }
      ) {
        nodes {
          about {
            about
          }
          fullname
          name
          digest {
            digest
          }
          avatar {
            largeImage: gatsbyImageData(
              layout: CONSTRAINED
              width: 250
              aspectRatio: 1
            )
            smallImage: gatsbyImageData(
              layout: CONSTRAINED
              width: 100
              aspectRatio: 1
            )
          }
        }
      }
    }
  `)

  console.log(aboutData)

  return (
    <>
      <Grid container spacing={6}>
        {aboutData.allContentfulAuthor.nodes.map(person => {
          const {
            name,
            fullname,
            avatar,
            digest: { digest },
            about: { about },
          } = person

          return (
            <Grid item key={name} xs={12} lg={6}>
              <Typography
                variant="h3"
                className="mobile-header"
                component="h3"
                gutterBottom
              >
                {fullname}
              </Typography>

              <GatsbyMuiAvatar
                images={withArtDirection(getImage(avatar.largeImage), [
                  {
                    media: "(max-width: 1280px)",
                    image: getImage(avatar.smallImage),
                  },
                ])}
                alt={`${name} avatar`}
              ></GatsbyMuiAvatar>
              <Typography
                variant="body1"
                className="mobile-header"
                component="p"
                gutterBottom
              >
                {isLengthLimit ? digest : about}
              </Typography>
            </Grid>
          )
        })}
      </Grid>
      {props.isMoreLink && <MoreLink>find more about us</MoreLink>}
    </>
  )
}

export default About
