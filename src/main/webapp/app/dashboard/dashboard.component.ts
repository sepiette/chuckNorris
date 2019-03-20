import { Component, OnInit } from '@angular/core';
import { JokeService } from 'app/jokes/joke.service';
import { Joke } from 'app/jokes/joke';
import { Observable } from 'rxjs';

@Component({
    selector: 'jhi-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    private jokes: Observable<Joke[]>;

    constructor(private jokeService: JokeService) {}

    ngOnInit() {
        this.jokes = this.jokeService.jokes;
        this.jokeService.loadJokes();
    }

    generateJokeList() {
        this.jokeService.loadJokes();
        console.log('COMPONENT JOKES: ', this.jokes);
    }
}
