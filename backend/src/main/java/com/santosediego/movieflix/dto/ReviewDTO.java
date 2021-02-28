package com.santosediego.movieflix.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.santosediego.movieflix.entities.Review;

public class ReviewDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	@NotBlank(message = "Campo obrigatório")
	private String text;
	private Long userId;
	private Long movieId;

	public ReviewDTO() {
	}

	public ReviewDTO(String text, Long userId, Long movieId) {
		super();
		this.text = text;
		this.userId = userId;
		this.movieId = movieId;
	}

	public ReviewDTO(Review entity) {
		text = entity.getText();
		userId = entity.getUser().getId();
		movieId = entity.getMovie().getId();
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}
}