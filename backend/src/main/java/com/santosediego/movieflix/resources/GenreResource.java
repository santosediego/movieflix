package com.santosediego.movieflix.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.santosediego.movieflix.dto.GenreDTO;
import com.santosediego.movieflix.services.GenreService;

@RestController
@RequestMapping(value = "/genres")
public class GenreResource {

	@Autowired
	private GenreService service;

	@GetMapping
	public ResponseEntity<List<GenreDTO>> listAll(){
		List<GenreDTO> listDTO = service.findAll();
		return ResponseEntity.ok().body(listDTO);
	}
}