//https://mailchimp.com/developer/marketing/docs/fundamentals/
//https://mailchimp.com/developer/marketing/guides/create-your-first-audience/
//https://www.gatsbyjs.com/docs/building-a-contact-form/

import React, { useState, useEffect } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

import { Typography, TextField, Button, Modal } from "@material-ui/core"
import DialogComponent from "./dialogComponent"

const Subscribe = () => {
  const [openDialog, setOpenDialog] = React.useState(false)
  const [email, setEmail] = useState("")
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
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
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
    <>
      <form onSubmit={event => handleSubmit(event)}>
        <TextField
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
          id="outlined-email-input"
          required
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          variant="outlined"
          onChange={handleEmailChange}
          // helperText="Email is required field"
          value={email}
        />

        <Button
          variant="contained"
          color="primary"
          label="Submit"
          type="submit"
        >
          <Typography variant="button">Subscribe</Typography>
        </Button>
      </form>

      <DialogComponent
        title={submissionState.result.result}
        message={submissionState.result.msg}
        open={openDialog}
        handleClose={handleClose}
      />
    </>
  )
}

export default Subscribe
