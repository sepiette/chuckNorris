package com.mycompany.myapp.service.dto;

public class FavoriteJokeDTO {
    private String userEmail;
    private String jokeId;
    private String jokeText;

    public FavoriteJokeDTO() {
    }

    public String getUserEmail() {
        return userEmail;
    }

    public String getJokeId() {
        return jokeId;
    }

    public String getJokeText() {
        return jokeText;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public void setJokeId(String jokeId) {
        this.jokeId = jokeId;
    }

    public void setJokeText(String jokeText) {
        this.jokeText = jokeText;
    }
}
