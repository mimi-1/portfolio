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
  const [result, setResult] = useState({})

  const handleSubmit = async e => {
    const resp = await addToMailchimp(email)
    setResult(resp)
    console.log("Resuls is:", resp)
  }

  const handleChange = event => {
    setEmail(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-email-input"
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        variant="outlined"
        onChange={handleChange}
      />
      <br />
      <Button variant="contained" color="primary" label="Submit" type="submit">
        <Typography variant="button">Subscribe</Typography>
      </Button>
    </form>
  )
}

export default Subscribe
