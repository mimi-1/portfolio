import React from "react"
import Particles from "react-tsparticles"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  particles: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    // minHeight: "calc(100vh - 8rem)",
    height: "100vh",
  },
}))

const HeroParticles = () => {
  const classes = useStyles()
  const particles0 = {
    fpsLimit: 60,
    background: {
      color: {
        value: "#fff7a1",
      },
      size: "cover",
      opacity: 0,
      // position: "50% 50%",
    },
    particles: {
      number: {
        density: {
          enable: true,
          value_area: 200,
        },
        value: 10,
      },
      value: 20,
      color: {
        value: ["#FFFFFF", "FFFBE6", "#E6EAFF", "#FFE6FB", "#FFE6FF"],
      },
      shape: {
        character: {
          fill: true,
          font: "Verdana",
          value: ["✦", "✧", "✶", "★"],
          // value: ["A", "B", "C"],
          style: "normal",
          weight: 800,
        },

        image: [
          {
            height: 100,
            replace_color: true,
            src: "images/star1.png",
            width: 100,
          },
        ],
        type: ["image", "character", "char"],
      },
      size: {
        random: {
          enable: true,
          minimumValue: 1,
        },
        value: {
          min: 6,
          max: 20,
        },
        animation: {
          count: 10,
          enable: true,
          speed: 10,
          sync: false,
          destroy: "none",
          minimumValue: 1,
          startValue: "random",
        },
      },
      opacity: {
        animation: {
          speed: 10,
          opacityMin: 0,
          sync: true,
        },
        value: 1,
        random: true,
      },
      move: {
        direction: "none",
        enable: true,
        random: true,
        speed: 1,
        straight: false,
        outMode: "bounce",
        // trail: {
        //   fillColor: "rgba(48, 49, 62, 0.08)",
        //   enable: true,
        //   length: 10,
        // },
      },
    },
    detectRetina: true,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "bubble",
        },
        // resize: true,
      },
      modes: {
        bubble: {
          distance: 200,
          duration: 4,
          size: 22,
          opacity: 8,
        },
      },
    },
  }

  const particlesInit = main => {
    console.log(main)
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  const particlesLoaded = container => {
    console.log(container)
  }

  return (
    <div className={classes.particles}>
      <Particles
        id="tsparticles"
        params={particles0}
        init={particlesInit}
        loaded={particlesLoaded}
        width={"100%"}
        height={"80vh"}
      />
    </div>
  )
}

export default HeroParticles
