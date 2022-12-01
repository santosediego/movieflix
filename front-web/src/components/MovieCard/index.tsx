import React from 'react';
import './styles.css';

import MovieImg from 'assets/images/exemple.png';
import { Movie } from 'types/movie';

type Props = {
    movie: Movie;
}

function MovieCard({ movie }: Props) {
    return (
        <div className='card-base movie-card-container'>
            <div className='movie-card-image'>
                <img src={movie.imgUrl} alt={movie.title} />
            </div>
            <div className="movie-card-info">
                <h3>{movie.title}</h3>
                <span>{movie.year}</span>
                <p>{movie.subTitle}</p>
            </div>
        </div>
    );
}

export default MovieCard;
