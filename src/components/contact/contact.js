import React from "react"
import Section from "../layout/section"
import { TextField, Buttont, makeStyles } from "@material-ui/core"
import { useFormik } from "formik"
import * as yup from "yup"

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "15ch",
    },
  },
}))

const ContactForm = () => {
  const classes = useStyles()
  return (
    <Section>
      <form className={classes.root}>
        <div className="form-row">
          <TextField id="name" name="name" label="your name" />
        </div>
        <div className="form-row">
          <TextField id="email" name="email" label=" your email" />
        </div>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          label="Submit"
          type="submit"
        >
          <Typography variant="button">Subscribe</Typography>
        </Button>
        <Typography
          variant="caption"
          component="p"
          paragraph={true}
          display="block"
          color="primary"
        >
          We respect your privacy. Your name and email address will never be
          shared or sold.
        </Typography>
      </form>
    </Section>
  )
}

export default ContactForm
