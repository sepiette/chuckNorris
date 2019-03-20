import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, BehaviorSubject } from 'rxjs';
import { Joke } from 'app/jokes/joke';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class JokeService {
    private _jokes: BehaviorSubject<Joke[]>;
    jokes: Observable<Joke[]>;

    constructor(private http: HttpClient) {
        this._jokes = new BehaviorSubject<Joke[]>([]);
        this.jokes = this._jokes.asObservable();
    }

    loadJokes() {
        let jokeRequests = [];
        for (let i = 0; i < 10; i++) {
            jokeRequests.push(this.http.get('https://api.chucknorris.io/jokes/random'));
        }
        forkJoin(jokeRequests)
            .pipe(map((response: Joke[]) => response))
            .subscribe(data => {
                this._jokes.next([...data]);
            });
    }
}
