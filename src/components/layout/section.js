import * as React from "react"
import PropTypes from "prop-types"
import { Container, Typography, Slide } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    //top left bottom right -> refactor to use spacing
    padding: "2em 2em 1em 3em",
  },
}))

const Section = props => {
  const classes = useStyles()
  return (
    <Slide in={props.in} direction="up" timeout={props.timeout}>
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
  timeout: 5000,
}

Section.propTypes = {
  in: PropTypes.bool,
}

export default Section
