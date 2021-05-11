import React from "react"
import Layout from "../components/layout/layout"
import Section from "../components/layout/section"
import Particles from "react-tsparticles"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Button } from "@material-ui/core"

const useStyles = makeStyles(theme => {
  console.log(theme)
  return {
    container: {
      color: theme.palette.primary.light,
      backgroundColor: theme.palette.secondary.dark,
    },
    particles: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      // minHeight: "calc(100vh - 8rem)",
      height: "100vh",
    },
  }
})

const NotFoundPage = () => {
  const classes = useStyles()
  const particles0 = {
    fullScreen: {
      enable: true,
    },
    fpsLimit: 60,
    background: {
      color: {
        value: "#000000",
      },
      size: "cover",
      opacity: 0,
      position: "50% 50%",
    },
    particles: {
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 8,
      },
      value: 20,
      color: {
        value: ["#FFFFFF", "FFFBE6", "#E6EAFF", "#FFE6FB", "#FFE6FF"],
        animation: {
          enable: true,
          speed: 20,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        random: {
          enable: true,
          minimumValue: 10,
        },
        value: {
          min: 10,
          max: 30,
        },
      },
    },
    detectRetina: true,
  }

  return (
    <Layout>
      <Box classes={{ root: classes.container }} p={1}>
        <Section>
          <h1>404: Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... It is cold here.</p>
          <Button color="primary">Go home</Button>
          <Button color="secondary">Secondary color</Button>
        </Section>
        <Particles
          id="tsparticles"
          options={particles0}
          width={"100%"}
          height={"100%"}
        />
      </Box>
    </Layout>
  )
}
export default NotFoundPage
