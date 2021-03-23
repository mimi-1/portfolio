//https://www.digitalocean.com/community/tutorials/how-to-handle-images-with-graphql-and-the-gatsby-image-api

import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { Button } from "gatsby-theme-material-ui"
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined"
import { makeStyles } from "@material-ui/styles"
import Avatar from "@material-ui/core/Avatar"
import { StaticImage } from "gatsby-plugin-image"

import aboutdata from "../../data/about"

const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  [theme.breakpoints.down("sm")]: {
    avatar: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
  },
}))

const About = () => {
  console.log(aboutdata)
  const classes = useStyles()
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

            <Avatar className={classes.avatar}>
              <StaticImage
                //src="../../images/victor.jpg"
                src={person.avatar}
                alt={person.name}
                placeholder="blurred"
                layout="fixed"
                height={100}
                width={100}
              />
            </Avatar>
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
