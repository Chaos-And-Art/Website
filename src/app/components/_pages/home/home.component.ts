import { Component, OnInit } from '@angular/core';
import type { Container, ISourceOptions } from "tsparticles";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  width: number = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  height: number = (window.innerHeight > 0) ? window.innerHeight : screen.height;
  id = 'tsparticles';

  constructor() { }

  ngOnInit(): void { }

  onExploreButton() {
    if (this.width < 733) {
      window.scroll()
      window.scrollTo(0, this.height / 1.3)
    }
    else {
      window.scrollTo(0, this.height / 1.1)
    }
  }

  options: ISourceOptions = {
    fpsLimit: 60,
    fullScreen: {
      enable: false,
    },
    background: {
      color: {
        value: "#333"
      },
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse"
        },
        onHover: {
          enable: true,
          mode: "connect"
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40
        },
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        connect: {
          distance: 100,
          links: {
            opacity: .5,
          },
          radius: 100,
        }
      }
    },
    particles: {
      color: {
        value: "#fff"
      },
      links: {
        color: "#fff",
        distance: 125,
        enable: true,
        opacity: 0.5,
        width: .1
      },
      collisions: {
        enable: false
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: { min: 0.1, max: 0.3 },
        straight: false
      },
      number: {
        density: {
          enable: true,
          value_area: 500
        },
        value: 200
      },
      opacity: {
        value: 1
      },
      shape: {
        type: "circle"
      },
      size: {
        random: false,
        value: .1
      }
    },
    detectRetina: true
  };
}
