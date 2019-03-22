package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.FavoriteJoke;
import com.mycompany.myapp.repository.FavoriteJokeRepository;
import com.mycompany.myapp.service.dto.FavoriteJokeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class FavoriteJokeController {

    @Autowired
    FavoriteJokeRepository repository;


    @PostMapping("/jokes")
    public void favoriteJoke(@RequestBody FavoriteJokeDTO jokeRequest) {
        FavoriteJoke joke = new FavoriteJoke(jokeRequest.getJokeId(), jokeRequest.getJokeText(), jokeRequest.getUserId());
        repository.save(joke);
        repository.flush();
    }

    @GetMapping("/jokes/{userId}")
    public List<FavoriteJoke> getJokesByUserId(@PathVariable Long userId) {
        return repository.findAllByUserId(userId);
    }
}
