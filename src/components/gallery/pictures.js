import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  GridList,
  GridListTile,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core"
// import tileData from "./tileData"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { useStaticQuery, graphql } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: "red",
    color: theme.palette.primary.main,
    overflow: "hidden",
  },
  gridList: {
    width: "85vw",
    height: "80vh",
    margin: 0,
    border: 0,
    padding: 0,
    [theme.breakpoints.down("md")]: {
      width: "82vw",
    },
    [theme.breakpoints.down("sm")]: { width: "80vw" },
    [theme.breakpoints.down("xs")]: { width: "80vw" },
  },
  gridListTile: {
    backgroundColor: theme.palette.white.light,
    margin: 0,
    border: 0,
    padding: 2,
    fontSize: 0,
    verticalAlign: "bottom",
  },
  image: {
    height: "100%",
    width: "100%",
    objectPosition: "50% 50%",
  },
}))
// https://material-ui.com/components/grid-list/

const Pictures = () => {
  const classes = useStyles()
  const theme = useTheme()

  const matchesMdDown = useMediaQuery(theme.breakpoints.down("md"))
  const matchesSmDown = useMediaQuery(theme.breakpoints.down("sm"))
  const matchesXsDown = useMediaQuery(theme.breakpoints.down("xs"))
  const { allFile } = useStaticQuery(graphql`
    {
      allFile(
        filter: { relativeDirectory: { eq: "images/gallery" } }
        limit: 18
        sort: { fields: birthTime, order: DESC }
      ) {
        imageData: edges {
          node {
            id
            name
            childImageSharp {
              fluid {
                aspectRatio
              }
              gatsbyImageData(
                placeholder: TRACED_SVG
                layout: CONSTRAINED
                width: 400
                aspectRatio: 0.8
                transformOptions: { fit: COVER, cropFocus: CENTER }
              )
            }
          }
        }
      }
    }
  `)

  console.log("Images count:", allFile.imageData.length)
  return (
    <div className={classes.root}>
      <Typography
        color="primary"
        variant="h2"
        component="h2"
        gutterBottom={true}
      >
        StarDust Duo behind the scene
      </Typography>

      <GridList
        cellHeight="auto" //children determin the height
        className={classes.gridList}
        cols={matchesMdDown ? (matchesSmDown ? (matchesXsDown ? 1 : 1) : 2) : 4}
        spacing={4}
      >
        {allFile.imageData.map(entry => {
          const { node } = entry

          const image = getImage(node)
          const cols = Math.ceil(image.width / image.height)
          console.log("Image data: ", image)
          console.log("COLS:", image.width, "X", image.height)
          console.log(node.childImageSharp.fluid.aspectRatio)
          return (
            <GridListTile
              key={node.id}
              cols={1}
              rows={1}
              className={classes.gridListTile}
            >
              <GatsbyImage
                className={classes.image}
                image={image}
                alt={node.name}
              />
              //
            </GridListTile>
          )
        })}
      </GridList>
    </div>
  )
}

export default Pictures
