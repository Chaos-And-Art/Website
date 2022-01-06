export interface SelectedTab {
    id: number;
    page: Page;
    selected: Selected;
}

export enum Page{
    Chaos,
    Art,
    Apps,
    Music,
}

export enum Selected {
    RecentlyAdded,
    ShowAll,
    Photos,
    Videos,
    Drawings,
    Paintings,
    TopRated,
    Apps,
    Games,
}