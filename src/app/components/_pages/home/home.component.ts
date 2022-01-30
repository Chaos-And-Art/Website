import { Component, OnInit } from '@angular/core';
import type { ISourceOptions } from "tsparticles";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  width: number = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  height: number = (window.innerHeight > 0) ? window.innerHeight : screen.height;
  colorTheme: any;
  darkmode: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  private getColorTheme(): any {
    if (localStorage.getItem('user-theme')) {
      this.colorTheme = localStorage.getItem('user-theme');
    } else {
      this.colorTheme = 'light-mode';
    }
    return this.colorTheme;
  }

  onExploreButton() {
    window.scrollTo({ left: 0, top: this.height / 1.1, behavior: 'smooth' })
  }

  options: ISourceOptions = {
    fpsLimit: 60,
    fullScreen: {
      enable: false,
    },
    themes: [
      {
        name: "dark",
        default: {
          value: (this.getColorTheme() == "dark-mode") ? true : false,
        },
        options: {
          background: {
            color: "rgb(40, 40,40)"
          },
          particles: {
            color: {
              value: "#fff"
            },
            links: {
              color: {
                value: "#fff"
              }
            }
          },
        },
      },
      {
        name: "light",
        default: {
          value: (this.getColorTheme() == "light-mode") ? true : false,
        },
        options: {
          background: {
            color: "rgb(250, 250, 250)"
          },
          particles: {
            color: {
              value: "#000"
            },
            links: {
              color: {
                value: "#000"
              }
            }
          },
        },
      }
    ],
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
            opacity: .8,
          },
          radius: 100,
        }
      }
    },
    particles: {
      links: {
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