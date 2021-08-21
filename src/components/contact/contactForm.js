import React from "react"
import useState from "react"

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
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    setForm({
      [name]: value,
    })
  }

  return (
    <Paper className={classes.root} elevation={3}>
      <Typography variant="h3" component="h3" color="primary">
        Send us a message using form.
      </Typography>
      <form
        className={classes.form}
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <Grid container spacing={2} direction="column">
          <Grid item>
            <TextField
              className={classes.input}
              id="name"
              name="name"
              value={form.name}
              fullWidth
              label="Name"
              onChange={handleInputChange}
            />
            <TextField
              className={classes.input}
              id="email"
              name="email"
              value={form.email}
              fullWidth={true}
              label=" Email"
              required
              onChange={handleInputChange}
            />
            <TextField
              className={classes.input}
              name="message"
              id="message"
              value={form.message}
              label="Message"
              multiline
              fullWidth={true}
              rows={3}
              required
              onChange={handleInputChange}
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
