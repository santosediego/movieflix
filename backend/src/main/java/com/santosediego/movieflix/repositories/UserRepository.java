package com.santosediego.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.santosediego.movieflix.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{

}