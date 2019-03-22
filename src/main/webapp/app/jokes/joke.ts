export interface Joke {
    id: string;
    category: string[];
    icon_url: string;
    value: string;
}

export interface FavoriteJoke {
    jokeId: string;
    jokeText: string;
}
