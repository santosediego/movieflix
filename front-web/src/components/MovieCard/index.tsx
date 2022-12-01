import React from 'react';
import './styles.css';

import MovieImg from 'assets/images/exemple.png';

function MovieCard() {
    return (
        <div className='card-base movie-card-container'>
            <div className='movie-card-image'>
                <img src={MovieImg} alt={`Nome do filme`} />
            </div>
            <div className="movie-card-info">
                <h3>O Retorno do Rei</h3>
                <span>2013</span>
                <p>O olho do inimigo está se movendo.</p>
            </div>
        </div>
    );
}

export default MovieCard;
