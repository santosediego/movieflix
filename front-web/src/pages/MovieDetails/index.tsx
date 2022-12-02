import React, { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import { useParams } from 'react-router-dom';
import { makeRequest } from 'util/requests';
import { hasAnyRole } from 'util/auth';
import { Movie } from 'types/movie';
import { Review } from 'types/review';
import { toast } from 'react-toastify';
import './styles.css';

type UrlParams = {
    movieId: string;
}

function MovieDetails() {

    const { movieId } = useParams<UrlParams>();

    const [movie, setMovie] = useState<Movie>();
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {

        const params: AxiosRequestConfig = {
            url: `/movies/${movieId}`,
            withCredentials: true,
        };

        makeRequest(params).then((response) => {
            setMovie(response.data)
            setReviews(response.data.reviews);
        }).catch((error) => {
            toast.error('Erro ao carregar dados do filme.');
        });
    }, [movieId]);

    const handleInsertReview = (review: Review) => {
        const clone = [...reviews];
        clone.push(review);
        setReviews(clone);
    }

    return (
        <div className="container movie-details-container">

            <div className="card-base movie-details-card">
                <div className="movie-details-img">
                    <img src={movie?.imgUrl} alt={`${movie?.title}`} />
                </div>
                <div className="movie-details-info">
                    <h3>{movie?.title}</h3>
                    <span>{movie?.year}</span>
                    <p>{movie?.subTitle}</p>
                    <div className="movie-details-description">
                        <p>{movie?.synopsis}</p>
                    </div>
                </div>
            </div>

            {hasAnyRole(['ROLE_MEMBER']) &&
                <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
            }

            <ReviewListing reviews={reviews} />
        </div>
    );
}

export default MovieDetails;
