package com.santosediego.movieflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.santosediego.movieflix.dto.ReviewDTO;
import com.santosediego.movieflix.entities.Movie;
import com.santosediego.movieflix.entities.Review;
import com.santosediego.movieflix.entities.User;
import com.santosediego.movieflix.repositories.MovieRepository;
import com.santosediego.movieflix.repositories.ReviewRepository;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository repository;

	@Autowired
	private MovieRepository movieRepository;

	@Autowired
	private AuthService authService;

	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {

		Movie movie = movieRepository.getOne(dto.getMovieId());
		User user = authService.authenticated();

		authService.validateUserMember(user.getId());

		Review review = new Review();
		review.setText(dto.getText());
		review.setMovie(movie);
		review.setUser(user);
		review = repository.save(review);

		return new ReviewDTO(review);
	}
}