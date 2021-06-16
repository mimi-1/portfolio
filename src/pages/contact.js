import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import Section from "../components/layout/section"
import ContactForm from "../components/contact/contactForm"
import { Box, Typography, Grid } from "@material-ui/core"
import ContactEmail from "../components/contact/contactEmail"

const ContactPage = () => {
  const text = "We'd love to hear from you."
  
  return (
    <Layout>
      <Seo title="Contact StarDust Jazz Duo" />
      <Section>
        <Box marginTop={3} marginBottom={3}>
          <Typography variant="h1">Contact us</Typography>
          <Typography variant="subtitle1" component="p">
            {text}
          </Typography>
        </Box>
        <Grid container>
          <Grid item>
            <ContactForm />
          </Grid>
          <Grid item><ContactEmail/></Grid>
        </Grid>
      </Section>
    </Layout>
  )
}

export default ContactPage

/* Mailgo Gatsby plugin* https://www.gatsbyjs.com/plugins/gatsby-plugin-mailgo*/

/**DataFire
 * https://github.com/DataFire-repos/contact-us-base/blob/master/actions/contact_me.js
 * https://medium.com/datafire-io/simple-backends-four-ways-to-implement-a-contact-us-form-on-a-static-website-10fc430984a4*/
