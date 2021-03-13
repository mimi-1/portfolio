import * as React from "react"
import {
  Typographi,
  AppBar,
  Card,
  CardAction,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
  Container,
} from "@material-ui/core"

import PhotoCameraIcon from "@material-ui/icons/PhotoCamera"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}))

const MUTest = props => {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon />
          <Typography variant="h6">Photo album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Typography variant="h1">Photo Album</Typography>
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Heading 2
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            This is a photo ablum jsl;jflsjfs;ljldsjfl;jfljfl;describe(' lfjsfj
          </Typography>
          <div className={classes.root}>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
            <Grid></Grid>
          </div>
        </Container>
      </main>
    </>
  )
}

export default MUTest
