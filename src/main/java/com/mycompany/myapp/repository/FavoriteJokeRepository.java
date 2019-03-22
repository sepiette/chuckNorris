package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.FavoriteJoke;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface FavoriteJokeRepository extends JpaRepository<FavoriteJoke, UUID> {
    List<FavoriteJoke> findAllByUserId(Long userId);
}
