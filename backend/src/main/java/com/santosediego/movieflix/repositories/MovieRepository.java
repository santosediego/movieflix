package com.santosediego.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.santosediego.movieflix.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}