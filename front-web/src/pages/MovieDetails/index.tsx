import React from 'react';
import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import './styles.css';

function MovieDetails() {
    return (
        <div className="container movie-details-container">
            <div className='moview-details-title'>
                <h1>Tela detalhes do filme id: {`1`}</h1>
            </div>
            <ReviewForm />
            <ReviewListing />
        </div>
    );
}

export default MovieDetails;
