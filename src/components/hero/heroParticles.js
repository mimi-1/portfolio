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
    // fullScreen: {
    //   enable: true,
    // },
    fpsLimit: 60,
    background: {
      color: {
        value: "#fff7a1",
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
        character: {
          fill: true,
          font: "Verdana",
          value: ["✦", "✧", "★"],
          // value: ["A", "B", "C"],
          style: "normal",
          weight: 800,
        },

        image: [
          {
            height: 100,
            replace_color: true,
            src: "",
            width: 100,
          },
        ],
        type: ["character", "char"],
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
        // animation: {
        //   enable: true,
        //   count: 10,
        //   speed: 10,
        //   sync: false,
        //   destroy: "none",
        //   minimumValue: 5,
        //   startValue: "random",
        // },
      },
      opacity: {
        value: 0.8,
        random: true,
        animation: {
          enable: true,
          speed: 1,
          opacityMin: 0,
          sync: false,
        },
      },
      life: {
        duration: {
          sync: false,
          value: 2,
        },
        count: 10,
      },
      move: {
        direction: "none",
        enable: true,
        random: true,
        speed: 0.5,
        straight: false,
        // decay: 0.05,
        outMode: "out",
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
        resize: true,
      },
      modes: {
        bubble: {
          distance: 200,
          duration: 4,
          size: 40,
          opacity: 8,
        },
      },
    },
    emitters: [
      {
        direction: "none",
        // life: {
        //   count: 3,
        //   duration: 2,
        //   delay: 4,
        // },
        rate: {
          delay: 3,
          quantity: 2,
        },
        position: {
          x: 90,
          y: 90,
        },
        size: {
          width: 50,
          height: 50,
          mode: "percent",
        },
      },
    ],
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
        options={particles0}
        init={particlesInit}
        loaded={particlesLoaded}
        width={"100%"}
        height={"100vh"}
      />
    </div>
  )
}

export default HeroParticles
