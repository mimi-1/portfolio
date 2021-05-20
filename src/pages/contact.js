import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import Section from "../components/layout/section"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact StarDust Jazz Duo" />
    <Section heading="Contact us">
      Contact us page is coming!
      {/* Mailgo Gatsby plugin* https://www.gatsbyjs.com/plugins/gatsby-plugin-mailgo*/}
      {/**DataFire
       * https://github.com/DataFire-repos/contact-us-base/blob/master/actions/contact_me.js
       * https://medium.com/datafire-io/simple-backends-four-ways-to-implement-a-contact-us-form-on-a-static-website-10fc430984a4*/}
    </Section>
  </Layout>
)

export default ContactPage
