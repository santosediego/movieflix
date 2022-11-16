import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function Listing() {
    return (
        <div className="listing-container">
            <h1>Tela listagem de filmes</h1>
            <div className='movie-link'>
                <Link to='/movies/1'>
                    Acessar /movies/1
                </Link>
            </div>
            <div>
                <Link to='/movies/2'>
                    Acessar /movies/2
                </Link>
            </div>
        </div>
    );
}

export default Listing;
