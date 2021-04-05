import * as React from "react"
import { Link } from "gatsby"
import Container from "@material-ui/core/Container"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Hero from "../components/hero/hero"
import MUtest from "../components/MUtest/MUtest"
import About from "../components/about/about"
import Subscribe from "../components/subscribe/subscribe"
import Section from "../components/layout/section"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <Container disableGutters maxWidth={false}>
        <Hero />
        <About />
        <Section>
          <Subscribe />
        </Section>
        <Section>
          <h1>Hi people</h1>
          <p>The link to submit email doesnt work properly yet</p>
          <p>Some pages dont work. Just check the animation and banner</p>
          <p>
            <Link to="/page-2/">Go to page 2</Link> <br />
          </p>
        </Section>
      </Container>
    </Layout>
  </>
  // <MUtest />
)

export default IndexPage
