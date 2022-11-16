import React from 'react';
import './styles.scss';

function Listing() {
    return (
        <div className="listing-container">
            <h1>Tela listagem de filmes</h1>
            <p>
                <a href="link">Acessar /movies/1</a>
            </p>
            <p>
                <a href="link">Acessar /movies/2</a>
            </p>
        </div>
    );
}

export default Listing;
