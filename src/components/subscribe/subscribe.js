//https://mailchimp.com/developer/marketing/docs/fundamentals/
//https://mailchimp.com/developer/marketing/guides/create-your-first-audience/
//https://www.gatsbyjs.com/docs/building-a-contact-form/

import React, { useState, useEffect } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core"

const Subscribe = () => {
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  const [email, setEmail] = useState("")
  const [listFields, setListFields] = useState({ FNAME: "Unknown", LNAME: "" })
  const [result, setResult] = useState({})

  const handleSubmit = e => {
    console.log("HANDLE SUBMIT FORM")
    addToMailchimp(email, listFields)
      .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data)
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
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
    const newListFileds = { ...listFields, ...{ name: value } }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="FNAME"
        label="First Name"
        type="text"
        name="FNAME"
        variant="outlined"
        onChange={handleFieldsChange}
        // value={listFields.FNAME}
        error={false}
      />

      <TextField
        id="LNAME"
        label="Last Name"
        type="text"
        name="LNAME"
        variant="outlined"
        onChange={handleFieldsChange}
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
        helperText="Email is required field"
      />

      <Button variant="contained" color="primary" label="Submit" type="submit">
        <Typography variant="button">Subscribe</Typography>
      </Button>
    </form>
  )
}

export default Subscribe
