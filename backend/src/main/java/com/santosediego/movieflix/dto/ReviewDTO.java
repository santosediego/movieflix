package com.santosediego.movieflix.dto;

import java.io.Serializable;

public class ReviewDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String text;
	private UserDTO user;
	private Long movieId;

	public ReviewDTO() {
	}

	public ReviewDTO(String text, UserDTO user, Long movieId) {
		super();
		this.text = text;
		this.user = user;
		this.movieId = movieId;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}
}