package com.santosediego.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.santosediego.movieflix.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long>{

}