import * as React from "react"
import {
  Typographi,
  AppBar,
  Card,
  CardActions,
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
import useStyles from "./styles"

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const MUTest = props => {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon className={classes.icon} />
          <Typography variant="h6">Photo album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Typography variant="h1">Photo Album</Typography>
        <Container className={classes.container} maxWidth="sm">
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
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                >
                  See my photos
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlines" color="primary">
                  Secondary action{" "}
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
        <Container className="classes.cardGrid" maxWidth="lg">
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Card name
                    </Typography>
                    <Typography paragraph variant="body1">
                      This is used for adding media description
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      view
                    </Button>
                    <Button size="small" color="primary">
                      edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>I am footer</footer>
    </>
  )
}

export default MUTest
