package com.mycompany.myapp.service.dto;

public class FavoriteJokeDTO {
    private Long userId;
    private String jokeId;
    private String jokeText;

    public FavoriteJokeDTO() {
    }

    public Long getUserId() {
        return userId;
    }

    public String getJokeId() {
        return jokeId;
    }

    public String getJokeText() {
        return jokeText;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public void setJokeId(String jokeId) {
        this.jokeId = jokeId;
    }

    public void setJokeText(String jokeText) {
        this.jokeText = jokeText;
    }
}
