//stackoverflow.com/questions/63817826/react-js-framer-motion-animate-only-on-initial-page-load

import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Container from "@material-ui/core/Container"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Hero from "../components/hero/hero"
import MUtest from "../components/MUtest/MUtest"
import About from "../components/about/about"
import Subscribe from "../components/subscribe/subscribe"
import Section from "../components/layout/section"

const IndexPage = () => {
  const [isAnimated, setIsAnimated] = useState(true)

  useEffect(() => {
    if (window.sessionStorage.getItem("visited") === null) {
      setIsAnimated(true)
      window.sessionStorage.setItem("visited", 1)
    } else {
      setIsAnimated(false)
    }
  }, [])

  // useEffect(() => {
  //   window.alert("use effect")
  // window.alert(`IsAnimated is ${isAnimated}`)
  //   return () => {
  //     window.alert("clenup")
  //   }
  // }, [])
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Container disableGutters maxWidth={false}>
          <Hero isAnimated={isAnimated} />
          <Section heading="About" isAnimated={isAnimated}>
            <About length={200} isMoreLink={true} />
          </Section>
          <Section>
            <Subscribe />
          </Section>
          <Section>
            <h1>Hi people</h1>
            <h2>{isAnimated ? "isAnimated is true" : "IsAnimated is false"}</h2>
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
}

export default IndexPage
