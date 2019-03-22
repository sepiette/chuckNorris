import { Component, OnInit } from '@angular/core';
import { FavoriteJoke } from 'app/jokes/joke';
import { JokeService } from 'app/jokes/joke.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'jhi-user-favorites',
    templateUrl: './user-favorites.component.html',
    styleUrls: []
})
export class UserFavoritesComponent implements OnInit {
    favoriteJokes: Observable<FavoriteJoke[]>;
    constructor(private jokeService: JokeService) {}

    ngOnInit() {
        this.favoriteJokes = this.jokeService.getFavoritedJokes();
    }
}
