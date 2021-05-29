import React from "react"
import PropTypes from "prop-types"
import { Container, Box, Typography, Slide } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    //top left bottom right -> refactor to use spacing
    padding: "4em 4em 4em 10em",
    paddingLeft: theme.spacing(15),
    [theme.breakpoints.down("md")]: {
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  },
}))

const Section = props => {
  const classes = useStyles()
  const background =
    "radial-gradient(ellipse at bottom, RGBA(63, 35, 203, 0), transparent),radial-gradient(ellipse at top left, RGBA(0, 0, 40, 0.3), transparent)"

  return (
    <Slide
      in={props.in}
      direction="up"
      timeout={props.isAnimated ? props.timeout : 0}
    >
      <Box
        style={
          props.style
            ? props.style
            : {
                backgroundImage: background,
              }
        }
      >
        <Container
          classes={{ root: classes.root }}
          component="section"
          maxWidth="xl"
        >
          <Typography variant="h2" component="h2" gutterBottom>
            {props.heading}
          </Typography>
          {props.children}
        </Container>
      </Box>
    </Slide>
  )
}

Section.defaultProps = {
  in: true,
  isAnimated: false,
  timeout: { appear: 0, enter: 5000, exit: 0 },
}

Section.propTypes = {
  in: PropTypes.bool,
  isAnimated: PropTypes.bool,
}

export default Section
