import React, { useEffect, useState } from 'react';
import Search from 'components/Search';
import MovieCard from 'components/MovieCard';
import { SpringPage } from 'types/vendor/spring';
import { Movie } from 'types/movie';
import { AxiosRequestConfig } from 'axios';
import { makeRequest } from 'util/requests';
import './styles.css';
import { Link } from 'react-router-dom';

function Listing() {

    const [page, setPage] = useState<SpringPage<Movie>>();

    useEffect(() => {
        getMovies(0);
    }, []);

    const getMovies = (pageNumber: number) => {
        const params: AxiosRequestConfig = {
            method: 'GET',
            url: `/movies`,
            withCredentials: true,
            params: {
                page: pageNumber,
                linesPerPage: 4,
                direction: 'ASC',
                orderBy: 'title',
            },
        }

        makeRequest(params)
            .then(response => {
                setPage(response.data);
            }).catch(error => (
                console.log(error)
            ));
    };

    return (
        <div className="listing-diplay-area">
            <div className='listing-container'>
                <Search />
                <div className='row listing-content'>
                    {page?.content.map((movie) => (
                        <div key={movie.id} className="col-sm-6 col-xl-3 mb-3">
                            <Link to={`/movies/${movie.id}`}>
                                <MovieCard movie={movie} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Listing;
