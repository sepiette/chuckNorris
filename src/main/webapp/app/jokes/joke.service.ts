import { Injectable } from '@angular/core';
import { Observable, forkJoin, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FavoriteJoke, Joke } from 'app/jokes/joke';
import { map } from 'rxjs/operators';
import { SERVER_API_URL } from 'app/app.constants';
import { AccountService } from 'app/core';
import { Account } from 'app/core/user/account.model';

@Injectable({
    providedIn: 'root'
})
export class JokeService {
    private _jokes: BehaviorSubject<Joke[]>;
    jokes: Observable<Joke[]>;
    private account: Account;

    constructor(private http: HttpClient, private accountService: AccountService) {
        this._jokes = new BehaviorSubject<Joke[]>([]);
        this.jokes = this._jokes.asObservable();
        this.accountService.fetch().subscribe((response: HttpResponse<Account>) => {
            this.account = response.body;
        });
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

    favoriteJoke(joke: Joke) {
        const requestBody = {
            jokeId: joke.id,
            jokeText: joke.value,
            userEmail: this.account.email
        };
        this.http.post(`${SERVER_API_URL}/api/jokes`, requestBody).subscribe(response => response);
    }

    getFavoritedJokes(): Observable<FavoriteJoke[]> {
        return this.http
            .get(`${SERVER_API_URL}/api/jokes?userEmail=${this.account.email}`)
            .pipe(map((response: FavoriteJoke[]) => response));
    }
}
