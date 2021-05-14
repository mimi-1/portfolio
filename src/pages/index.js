//stackoverflow.com/questions/63817826/react-js-framer-motion-animate-only-on-initial-page-load

import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Container from "@material-ui/core/Container"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import Hero from "../components/hero/hero"
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
      <Seo title="Home" />
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
            {/* <h2>{isAnimated ? "isAnimated is true" : "IsAnimated is false"}</h2> */}
            <p>
              I have created mailchimp account and contentful Content managment
              system to keep content so that you can edit it yourself!
            </p>
            <p>
              The link to submit email works, try to subscribe. There is no
              feedback yet.
            </p>
            <p>About: Lets talk about it ...</p>

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
