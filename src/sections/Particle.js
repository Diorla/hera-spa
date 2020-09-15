import React from "react";
import Particles from "react-tsparticles";

const options = {
  fpsLimit: 60,
  emitters: {
    direction: "top",
    size: {
      width: 100,
      height: 0
    },
    position: {
      x: 50,
      y: 100
    },
    rate: {
      delay: 0.1,
      quantity: 2
    }
  },
  particles: {
    number: {
      value: 0,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 3,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 20,
      random: false,
      anim: {
        enable: true,
        speed: 5,
        size_min: 0.1,
        sync: true,
        startValue: "min",
        destroy: "max"
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "destroy",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse"
      },
      onclick: {
        enable: false,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
        speed: 3
      },
      repulse: {
        distance: 200
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true,
  background: {
    color: "#fa8072",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
    opacity: 0.4
  }
}

export default function Particle({ children }) {
  return (
    <Particles id="tsparticles" options={options} style={{ width: "100%" }} />
  );
}
