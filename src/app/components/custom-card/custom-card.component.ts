import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardType, CustomCard } from 'src/app/models/customCard';
import { Selected } from 'src/app/models/selectedTab';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent implements OnInit {

  @Input() data: any;

  cards = new Array<CustomCard>();
  cardData: any = [];

  default = "/assets/_misc/default.png";

  constructor(public router: Router) {
    this.cards.push(
      { id: 1, type: CardType.Game, topRated: true, imgSrc: "/assets/images-videos/compressed/apps/2048.jpg", imgLazy: "/assets/images-videos/tiny/apps/tiny_2048.jpg" },
      { id: 2, type: CardType.Game, topRated: true, imgSrc: "/assets/images-videos/compressed/apps/Balls.jpg", imgLazy: "/assets/images-videos/tiny/apps/tiny_balls.jpg" },
      { id: 3, type: CardType.App, topRated: false, imgSrc: "/assets/images-videos/compressed/apps/Notes.jpg", imgLazy: "/assets/images-videos/tiny/apps/tiny_notes.jpg" },
      { id: 4, type: CardType.Game, topRated: true, imgSrc: "/assets/images-videos/compressed/apps/Spinner.jpg", imgLazy: "/assets/images-videos/tiny/apps/tiny_spinner.jpg" },
      { id: 5, type: CardType.App, topRated: false, imgSrc: "/assets/images-videos/compressed/apps/Weather.jpg", imgLazy: "/assets/images-videos/tiny/apps/tiny_weather.jpg" },
      // { id: 6, type: CardType.App, topRated: true, imgSrc: "https://images.pexels.com/photos/7799298/pexels-photo-7799298.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", imgLazy: "" },
      // { id: 7, type: CardType.App, topRated: false, imgSrc: "https://images.pexels.com/photos/9723176/pexels-photo-9723176.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", imgLazy: "" },
    )
  }

  ngOnInit(): void {
    if (this.data.selected == Selected.ShowAll) {
      this.cardData = this.cards;
    } else if (this.data.selected == Selected.TopRated) {
      this.cards.forEach(card => {
        if (card.topRated == true) {
          this.cardData.push(card)
        }
      });
    }
    else if (this.data.selected == Selected.Apps) {
      this.cards.forEach(card => {
        if (card.type == CardType.App) {
          this.cardData.push(card)
        }
      });
    } else if (this.data.selected == Selected.Games) {
      this.cards.forEach(card => {
        if (card.type == CardType.Game) {
          this.cardData.push(card)
        }
      });
    }
  }
}
