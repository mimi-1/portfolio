import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Container from "@material-ui/core/Container"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Hero from "../components/hero/hero"
import MUtest from "../components/MUtest/MUtest"
import About from "../components/about/about"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <Hero />
      <Container component="main" maxWidth="lg">
        <About />

        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <p>
          <Link to="/about/">Go to page 2</Link> <br />
        </p>
        <p>
          <Link to="/page-2/">Go to page 2</Link> <br />
        </p>
      </Container>
    </Layout>
  </>
  // <MUtest />
)

export default IndexPage
