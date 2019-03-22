package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.FavoriteJoke;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FavoriteJokeRepository extends JpaRepository<FavoriteJoke, String> {
    List<FavoriteJoke> findAllByUserEmail(String userEmail);
}
