import React, { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import { useParams } from 'react-router-dom';
import { makeRequest } from 'util/requests';
import { hasAnyRole } from 'util/auth';
import { Review } from 'types/review';
import './styles.css';

type UrlParams = {
    movieId: string;
}

function MovieDetails() {

    const { movieId } = useParams<UrlParams>();

    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {

        const params: AxiosRequestConfig = {
            url: `/movies/${movieId}`,
            withCredentials: true,
        };

        makeRequest(params).then((response) => {
            setReviews(response.data.reviews);
        }).catch((error) => {
            console.log(error);
        });
    }, [movieId]);

    const handleInsertReview = (review: Review) => {
        const clone = [...reviews];
        clone.push(review);
        setReviews(clone);
    }

    return (
        <div className="container movie-details-container">
            <div className='moview-details-title'>
                <h1>Tela detalhes do filme id: {`${movieId}`}</h1>
            </div>

            {hasAnyRole(['ROLE_MEMBER']) &&
                <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
            }

            <ReviewListing reviews={reviews} />
        </div>
    );
}

export default MovieDetails;
