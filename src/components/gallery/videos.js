import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GridList, GridListTile, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Video from "./video"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const useStyles = makeStyles(theme => ({
  root: { color: theme.palette.primary.main, overflow: "hidden" },
  gridList: {
    flexWrap: "nowrap",
    width: "85vw",
    // overflow: "hidden",
    // flexDirection: "row",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
}))

const Videos = () => {
  const classes = useStyles()
  const theme = useTheme()

  const matchesMdDown = useMediaQuery(theme.breakpoints.down("md"))
  const matchesSmDown = useMediaQuery(theme.breakpoints.down("sm"))
  const matchesXsDown = useMediaQuery(theme.breakpoints.down("xs"))

  const cols = { lg: 3.2, md: 2.2, sm: 1.5, xs: 1.1 }

  const data = useStaticQuery(graphql`
    {
      allYoutubeVideo(limit: 6, sort: { fields: publishedAt, order: DESC }) {
        nodes {
          channelId
          title
          channelTitle
          videoId
          description
          thumbnail {
            url
          }
          internal {
            type
            contentDigest
          }
        }
        totalCount
      }
    }
  `)

  const videos = data.allYoutubeVideo.nodes

  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h2" gutterBottom>
        StarDust Jazz Duo YouTube Video Gallery
      </Typography>
      <GridList
        className={classes.gridList}
        cellHeight="auto"
        cols={
          matchesMdDown
            ? matchesSmDown
              ? matchesXsDown
                ? 1.2
                : 1.5
              : 2.2
            : 3.2
        }
      >
        {videos.map(video => {
          const { description, videoId } = video
          const shortLength = description.indexOf("***")
          const shortDescription = description.slice(0, shortLength)
          return (
            <GridListTile key={videoId} cols={1}>
              <Video videoId={videoId} description={shortDescription} />
            </GridListTile>
          )
        })}
      </GridList>
    </div>
  )
}

export default Videos
