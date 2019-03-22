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

    @Column(name = "user_email")
    private String userEmail;

    @Column(name = "joke_text")
    private String jokeText;

    public FavoriteJoke() {
    }

    public FavoriteJoke(String jokeId, String jokeText, String userEmail) {
        this.jokeId = jokeId;
        this.userEmail = userEmail;
        this.jokeText = jokeText;
    }

    public String getJokeId() {
        return jokeId;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public String getJokeText() {
        return jokeText;
    }

    @Override
    public String toString() {
        return "FavoriteJoke{" +
            "jokeId='" + jokeId + '\'' +
            ", userEmail=" + userEmail +
            ", jokeText='" + jokeText + '\'' +
            '}';
    }
}
