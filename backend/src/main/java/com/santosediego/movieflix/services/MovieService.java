package com.santosediego.movieflix.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.santosediego.movieflix.dto.MovieDTO;
import com.santosediego.movieflix.entities.Genre;
import com.santosediego.movieflix.entities.Movie;
import com.santosediego.movieflix.entities.Review;
import com.santosediego.movieflix.repositories.GenreRepository;
import com.santosediego.movieflix.repositories.MovieRepository;
import com.santosediego.movieflix.repositories.ReviewRepository;
import com.santosediego.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService {

	@Autowired
	private MovieRepository repository;

	@Autowired
	private ReviewRepository reviewRepository;

	@Autowired
	private GenreRepository genreRepository;

	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Optional<Movie> obj = repository.findById(id);
		Movie movie = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		List<Review> reviews = reviewRepository.findAllByMovieId(movie.getId());
		return new MovieDTO(movie, reviews);
	}

	public Page<MovieDTO> findAllPaged(Long genreId, PageRequest pageRequest) {
		Genre genre = (genreId == 0) ? null : genreRepository.getOne(genreId);
		return repository.find(genre, pageRequest).map(x -> new MovieDTO(x));
	}
}