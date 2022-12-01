import React from 'react';
import Search from 'components/Search';
import MovieCard from 'components/MovieCard';
import './styles.css';

function Listing() {
    return (
        <div className="listing-diplay-area">
            <div className='listing-container'>
                <Search />
                <div className='row listing-content'>
                    <div className="col-sm-6 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Listing;
