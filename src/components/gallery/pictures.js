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
  },
  gridListTile: {
    backgroundColor: theme.palette.white.light,
    margin: 0,
    border: 0,
    padding: 0,
  },
  image: {
    height: "98%",
    width: "98%",
    margin: 4,
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
        limit: 10
        sort: { fields: birthTime, order: DESC }
      ) {
        imageData: edges {
          node {
            id
            birthTime
            name
            childImageSharp {
              gatsbyImageData(
                placeholder: TRACED_SVG
                layout: CONSTRAINED
                transformOptions: { fit: COVER }
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
        cellHeight="auto"
        className={classes.gridList}
        cols={matchesMdDown ? (matchesSmDown ? (matchesXsDown ? 1 : 1) : 2) : 3}
        spacing={4}
      >
        {allFile.imageData.map(entry => {
          const { node } = entry
          const cols = 2
          const image = getImage(node)
          return (
            <GridListTile
              key={node.id}
              cols={1}
              rows={0.8}
              className={classes.gridListTile}
            >
              <GatsbyImage
                className={classes.image}
                image={image}
                alt={node.name}
              />
            </GridListTile>
          )
        })}
      </GridList>
    </div>
  )
}

export default Pictures
