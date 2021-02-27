package com.santosediego.movieflix.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.santosediego.movieflix.dto.GenreDTO;
import com.santosediego.movieflix.entities.Genre;
import com.santosediego.movieflix.repositories.GenreRepository;

@Service
public class GenreService {

	@Autowired
	private GenreRepository repository;

	@Transactional(readOnly = true)
	public List<GenreDTO> findAll() {
		List<Genre> list = repository.findAll();
		List<GenreDTO> listDTO = list.stream().map(x -> new GenreDTO(x)).collect(Collectors.toList());
		return listDTO;
	}
}