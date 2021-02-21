package com.santosediego.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.santosediego.movieflix.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{

}