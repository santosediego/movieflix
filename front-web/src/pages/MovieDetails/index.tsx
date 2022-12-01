import React, { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import { useParams } from 'react-router-dom';
import { makeRequest } from 'util/requests';
import { hasAnyRole } from 'util/auth';
import { Review } from 'types/review';
import './styles.css';

import MovieImg from 'assets/images/exemple.png';

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

            <div className="card-base movie-details-card">
                <div className="movie-details-img">
                    <img src={MovieImg} alt="Nome do filme" />
                </div>
                <div className="movie-details-info">
                    <h3>O Retorno do Rei</h3>
                    <span>2013</span>
                    <p>O olho do inimigo está se movendo.</p>
                    <div className="movie-details-description">
                        <p>
                            O confronto final entre as forças do bem e do mal que lutam pelo
                            controle do futuro da Terra Média se aproxima. Sauron planeja um
                            grande ataque a Minas Tirith, capital de Gondor, o que faz com que
                            Gandalf e Pippin partam para o local na intenção de ajudar a
                            resistência. Um exército é reunido por Theoden em Rohan, em mais
                            uma tentativa de deter as forças de Sauron. Enquanto isso, Frodo,
                            Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para
                            destruir o anel.
                        </p>
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
