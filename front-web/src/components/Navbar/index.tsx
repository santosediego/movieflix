import React from 'react';
import './styles.css';

function Navbar() {
    return (
        <nav className='navbar navbar-expand-md navbar-dark bg-primary main-nav'>
            <div className='container'>
                <h4>MovieFlix</h4>
                <div>
                <div className="nav-logout-button">
                    <button className='btn btn-outline-dark'>sair</button>
                </div>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;
