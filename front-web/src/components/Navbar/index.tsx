import { AuthContext } from 'AuthContext';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTokenData, isAuthenticated } from 'util/auth';
import history from 'util/history';
import { removeAuthData } from 'util/storage';
import './styles.css';

function Navbar() {

    const { authContextData, setAuthContextData } = useContext(AuthContext);

    useEffect(() => {
        if (isAuthenticated()) {
            setAuthContextData({
                authenticated: isAuthenticated(),
                tokenData: getTokenData()
            })
        } else {
            setAuthContextData({
                authenticated: false
            });
        }
    }, [setAuthContextData])

    const handleLogoutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        removeAuthData();
        setAuthContextData({
            authenticated: false
        });
        history.replace('/');
    }

    return (
        <nav className='navbar navbar-expand-md navbar-dark bg-primary main-nav'>
            <div className='container'>
                <Link to='/movies'>
                    <h4>MovieFlix</h4>
                </Link>
                <div>
                    {authContextData.authenticated && (
                        <div className="nav-logout-button">
                            <button
                                className='btn btn-outline-dark'
                                onClick={handleLogoutClick}
                            >
                                sair
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
