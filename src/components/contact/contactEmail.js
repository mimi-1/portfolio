import React from "react"
import { Typography, Button, Paper } from "@material-ui/core"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import useStyles from "./contactStyles"

const ContactEmail = () => {
  const classes = useStyles()
  const email = "stardustjazzduo3@gmail.com"
  return (
    <Paper className={classes.root} elevation={3}>
      <Typography variant="h3" component="h3" color="primary">
        Contact us using email:
      </Typography>
      <Button
        startIcon={<MailOutlineIcon />}
        style={{ textTransform: "none", margin: 20 }}
        href={`mailto:${email}`}
      >
        {email}
      </Button>
    </Paper>
  )
}

export default ContactEmail
