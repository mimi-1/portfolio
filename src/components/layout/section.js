import React from "react"
import PropTypes from "prop-types"
import { Container, Typography, Slide } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    //top left bottom right -> refactor to use spacing
    padding: "2em 2em 1em 6em",
    paddingLeft: theme.spacing(15),
  },
}))

const Section = props => {
  const classes = useStyles()
  return (
    <Slide
      in={props.in}
      direction="up"
      timeout={props.isAnimated ? props.timeout : 0}
    >
      <Container className={classes.root} component="section" maxWidth="xl">
        <Typography variant="h2" component="h2" gutterBottom>
          {props.heading}
        </Typography>
        {props.children}
      </Container>
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
