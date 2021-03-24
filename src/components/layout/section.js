import * as React from "react"
import PropTypes from "prop-types"
import { Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    //top left bottom right
    padding: "1em 2em 1em 2em",
  },
}))

const Section = props => {
  const classes = useStyles()
  return (
    <Container className={classes.root} component="section" maxWidth="md">
      <Typography variant="h2" component="h2" gutterBottom>
        {props.heading}
      </Typography>
      {props.children}
    </Container>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section
