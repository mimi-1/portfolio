import React from "react"
import { Typography, Button, Paper } from "@material-ui/core"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import useStyles from "./contactStyles"
import Social from "../social/social"
import { styled } from "@material-ui/core/styles"
import { compose, spacing, palette } from "@material-ui/system"

const Box = styled("div")(compose(spacing, palette))

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
      <Typography variant="h3" component="h3" color="primary">
        Connect with us on our social media:
      </Typography>
      <Box
        bgcolor="primary.dark"
        mt={3}
        mb={3}
        ml={0}
        mr={0}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Social orientation="horizontal" />
      </Box>
    </Paper>
  )
}

export default ContactEmail
