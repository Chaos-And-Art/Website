import { Component, OnInit } from '@angular/core';
import type { Container, ISourceOptions } from "tsparticles";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  id = 'tsparticles';
  constructor() { }

  ngOnInit(): void { }

  public particlesLoaded(container: Container): void {
    console.log(container);
  }
  options: ISourceOptions = {
    background: {
      color: {
        value: "#333"
      }
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "window",
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
