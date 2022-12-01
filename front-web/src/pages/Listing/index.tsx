import React, { useCallback, useEffect, useState } from 'react';
import Search from 'components/Search';
import MovieCard from 'components/MovieCard';
import { SpringPage } from 'types/vendor/spring';
import { Movie } from 'types/movie';
import { AxiosRequestConfig } from 'axios';
import { makeRequest } from 'util/requests';
import { Link } from 'react-router-dom';
import Pagination from 'components/Pagination';
import './styles.css';

type ControlComponentsData = {
    activePage: number;
}

function Listing() {

    const [page, setPage] = useState<SpringPage<Movie>>();
    const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>({
        activePage: 0
    });

    const getMovies = useCallback(() => {
        const params: AxiosRequestConfig = {
            method: 'GET',
            url: `/movies`,
            withCredentials: true,
            params: {
                page: controlComponentsData.activePage,
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
    }, [controlComponentsData]);

    useEffect(() => {
        getMovies();
    }, [getMovies]);

    const handlePageChange = (pageNumber: number) => {
        setControlComponentsData({
            activePage: pageNumber
        })
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
                <Pagination
                    forcePage={page?.number}
                    pageCount={(page) ? page?.totalPages : 0}
                    range={3}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    );
}

export default Listing;
