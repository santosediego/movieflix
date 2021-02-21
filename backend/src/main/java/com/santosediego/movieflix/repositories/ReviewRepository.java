package com.santosediego.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.santosediego.movieflix.entities.Review;

public interface ReviewRepository extends JpaRepository<Review, Long>{

}