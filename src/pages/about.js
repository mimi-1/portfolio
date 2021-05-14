import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import Section from "../components/layout/section"
import About from "../components/about/about"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <Section>
      <h1>Who we are</h1>
      <About />
    </Section>
  </Layout>
)

export default AboutPage
