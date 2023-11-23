// https://codepen.io/matteobruni/pen/QWbrLoK

tsParticles.load("tsparticles", {
    fps_limit: 60,
    interactivity: {
      detect_on: "canvas",
      events: {
        onclick: { enable: true, mode: "repulse" },
        onhover: {
          enable: true,
          mode: "bubble",
          parallax: { enable: false, force: 60, smooth: 10 }
        },
        resize: true
      },
      modes: {
        bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40, speed: 3 },
        grab: { distance: 400, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
        repulse: { distance: 200, duration: 0.4 }
      }
    },
    particles: {
      color: { value: "random" },
      line_linked: {
        color: "random",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 3
      },
      move: {
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
        bounce: false,
        direction: "none",
        enable: true,
        out_mode: "out",
        random: false,
        speed: 3,
        straight: false
      },
      number: { density: { enable: true, value_area: 800 }, value: 100 },
      opacity: {
        anim: { enable: true, opacity_min: 0.5, speed: 1, sync: false },
        random: false,
        value: 1
      },
      shape: {
        character: [
          {
            fill: true,
            font: "Font Awesome 5 Brands",
            style: "",
            value: ["\uf179", "\uf38b", "\uf3b9", "\uf13b", "\uf1cb"],
            weight: "400"
          },
          {
            fill: true,
            font: "Font Awesome 5 Free",
            style: "",
            value: ["\uf06a", "\uf7ba", "\uf3ed", "\uf55f", "\uf013"],
            weight: "900"
          }
        ],
        image: {
          height: 100,
          replace_color: true,
          src: "images/github.svg",
          width: 100
        },
        polygon: { nb_sides: 5 },
        stroke: { color: "#ffffff", width: 1 },
        type: "char"
      },
      size: {
        anim: { enable: true, size_min: 10, speed: 10, sync: false },
        random: false,
        value: 16
      }
    },
    polygon: {
      draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
      move: { radius: 10 },
      scale: 1,
      type: "none",
      url: ""
    },
    retina_detect: true
  });
  