import React from "react"
import {
  TextField,
  Box,
  Typography,
  Button,
  Paper,
  Grid,
} from "@material-ui/core"

import useStyles from "./contactStyles"

// import { useFormik } from "formik"
// import * as yup from "yup"

const ContactForm = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.root} elevation={3}>
      <Typography variant="h3" component="h3" color="primary">
        Send us a message using form.
      </Typography>
      <form className={classes.form}>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <TextField
              className={classes.input}
              id="name"
              name="name"
              fullWidth
              label="Name"
            />
            <TextField
              className={classes.input}
              id="email"
              name="email"
              fullWidth={true}
              label=" Email"
              required
            />
            <TextField
              className={classes.input}
              label="Message"
              multiline
              fullWidth={true}
              rows={3}
              required
            />
          </Grid>
          <Grid item alignContent="center">
            <Button
              variant="contained"
              color="primary"
              label="Submit"
              type="submit"
            >
              <Typography variant="button">Send message</Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
      <Box color="primary">
        <Typography
          variant="caption"
          component="p"
          paragraph={true}
          display="block"
        >
          We respect your privacy. Your name and email address will never be
          shared or sold.
        </Typography>
      </Box>
    </Paper>
  )
}

export default ContactForm
