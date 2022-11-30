import React from 'react';
import './styles.css';

function Search() {
    return (
        <div className='search-container'>
            <form action="" className='search-form'>
                <select name="" id="" className='search-genre-selector'>
                    <option>Ação</option>
                    <option>Aventura</option>
                    <option>Fição/Fantasia</option>
                    <option>Terror</option>
                </select>
            </form>
        </div>
    );
}

export default Search;
