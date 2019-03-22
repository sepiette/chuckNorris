package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.FavoriteJoke;
import com.mycompany.myapp.repository.FavoriteJokeRepository;
import com.mycompany.myapp.repository.UserRepository;
import com.mycompany.myapp.service.UserService;
import com.mycompany.myapp.service.dto.FavoriteJokeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class FavoriteJokeController {

    @Autowired
    FavoriteJokeRepository repository;

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;

    @PostMapping("/jokes")
    public void favoriteJoke(@RequestBody FavoriteJokeDTO jokeRequest) {
            FavoriteJoke joke = new FavoriteJoke(jokeRequest.getJokeId(), jokeRequest.getJokeText(), jokeRequest.getUserEmail());
            repository.save(joke);
    }

    @GetMapping("/jokes")
    public List<FavoriteJoke> getJokesByUserId(@RequestParam String userEmail) {
            return repository.findAllByUserEmail(userEmail);
    }
}
