import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import { makeStyles } from "@material-ui/styles"
import Avatar from "@material-ui/core/Avatar"

// Using default MUI breakpoints
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 960px
// lg, large: 1280px
// xl, extra-large: 1920px

const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  [theme.breakpoints.down("md")]: {
    avatar: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
  },
}))

const GatsbyMuiAvatar = ({ images }) => {
  const classes = useStyles()

  return (
    <Avatar className={classes.avatar}>
      <GatsbyImage image={images} />
    </Avatar>
  )
}

export default GatsbyMuiAvatar
