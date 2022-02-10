export interface CustomCard {
    id: number;
    type: CardType;
    topRated: boolean;
    imgSrc: string;
}

export enum CardType {
    TopRated,
    App,
    Game
}
