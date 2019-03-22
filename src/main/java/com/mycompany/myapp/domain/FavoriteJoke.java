package com.mycompany.myapp.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "favorite_joke" )
public class FavoriteJoke {

    @Id
    @Column(name = "joke_id")
    private String jokeId;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "joke_text")
    private String jokeText;

    public FavoriteJoke() {
    }

    public FavoriteJoke(String jokeId, String jokeText, Long userId) {
        this.jokeId = jokeId;
        this.userId = userId;
        this.jokeText = jokeText;
    }

    public String getJokeId() {
        return jokeId;
    }

    public Long getUserId() {
        return userId;
    }

    public String getJokeText() {
        return jokeText;
    }

    @Override
    public String toString() {
        return "FavoriteJoke{" +
            "jokeId='" + jokeId + '\'' +
            ", userId=" + userId +
            ", jokeText='" + jokeText + '\'' +
            '}';
    }
}
