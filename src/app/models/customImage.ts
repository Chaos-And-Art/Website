export interface CustomImage {
    id: number;
    type: ImageType;
    new: boolean;
    imgSrc: string;
    imgLazy: string;
}

export enum ImageType {
    Photo,
    Video,
    Drawing,
    Painting
}