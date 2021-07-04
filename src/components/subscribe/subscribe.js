//https://mailchimp.com/developer/marketing/docs/fundamentals/
//https://mailchimp.com/developer/marketing/guides/create-your-first-audience/
//https://www.gatsbyjs.com/docs/building-a-contact-form/

import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { StaticImage } from "gatsby-plugin-image"
import {
  Container,
  Typography,
  TextField,
  Button,
  makeStyles,
  Link,
  IconButton,
} from "@material-ui/core"
import DialogComponent from "./dialogComponent"

const useStyles = makeStyles(theme => ({
  form: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    backgroundColor: theme.palette.white.light,
    width: "25ch",
  },
  heading: {
    color: theme.palette.primary.dark,
  },
  privacy: {
    color: theme.palette.primary.dark,
  },
  button: {
    color: theme.palette.secondary.main,
  },
}))

const Subscribe = () => {
  const classes = useStyles()
  const [openDialog, setOpenDialog] = React.useState(false)
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState({ state: false, text: "" })
  const [listFields, setListFields] = useState({ FNAME: "" })
  const [submissionState, setSubmissionState] = useState({
    email: "",
    fname: "",
    result: "",
  })

  const handleOpenDialog = () => {
    setOpenDialog(true)
    console.log(openDialog)
  }

  const handleClose = () => {
    setOpenDialog(false)
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log("HANDLE SUBMIT FORM")
    addToMailchimp(email, listFields)
      .then(resp => {
        setSubmissionState({
          email: email,
          fname: listFields.FNAME,
          result: resp,
        })
        setOpenDialog(true)
        if (resp.result == "success") {
          setEmail("")
          setListFields({ FNAME: "" })
        }
      })
      .catch(err => {
        // unnecessary because Mailchimp always
        // returns a 200 status code
      })

    // const resp = await addToMailchimp(email)
    // setResult(resp)
    // console.log("Resuls is:", resp)
  }

  const handleEmailChange = event => {
    setEmail(event.target.value)
  }

  const handleFieldsChange = event => {
    console.log(event.target.value)
    console.log(event.target.name)
    const value = event.target.value
    const name = event.target.name
    const newListFileds = { ...listFields }
    newListFileds[name] = value
    setListFields(newListFileds)
  }

  return (
    <Container maxWidth="sm">
      <Typography
        className={classes.heading}
        variant="h3"
        component="h3"
        align="center"
        gutterBottom={true}
      >
        Join StarDust Jazz Duo newsletter!
      </Typography>
      <Typography
        variant="body2"
        align="center"
        paragraph={true}
        display="block"
      >
        If you don't like it, there is an unsubscribe link at the bottom of
        every email we send. No spam garanteed!
      </Typography>
      <form className={classes.form} onSubmit={event => handleSubmit(event)}>
        <TextField
          size="small"
          className={classes.input}
          id="FNAME"
          label="Your Name"
          type="text"
          name="FNAME"
          variant="outlined"
          onChange={handleFieldsChange}
          value={listFields.FNAME}
          error={false}
        />

        <TextField
          size="small"
          classes={{ root: classes.input }}
          error={emailError.state}
          required
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          variant="outlined"
          onChange={handleEmailChange}
          value={email}
          // helperText={emailError.text}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          label="Submit"
          type="submit"
        >
          <Typography variant="button">Subscribe</Typography>
        </Button>
      </form>
      <Typography
        className={classes.privacy}
        variant="caption"
        component="p"
        paragraph={true}
        display="block"
        color="primary"
      >
        We respect your privacy. We promise never to share, trade, sell,
        deliver, reveal, publicize, or market your email address in any way,
        shape, or form.
      </Typography>

      <Typography
        variant="caption"
        component="p"
        paragraph={true}
        display="block"
      >
        Our subscription campaign is powered by
        <IconButton
          size="small"
          href="https://mailchimp.com/legal/privacy/#3._Privacy_for_Contacts"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage
            src="../../images/mailchimp.png"
            alt="Mailchimp Link"
            width={100}
          />
        </IconButton>
        {". You can read their privacy policy "}
        <Link
          href={"https://mailchimp.com/legal/privacy/#3._Privacy_for_Contacts"}
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </Link>
        .
      </Typography>
      <DialogComponent
        title={submissionState.result.result}
        message={submissionState.result.msg}
        open={openDialog}
        handleClose={handleClose}
      />
    </Container>
  )
}

export default Subscribe
