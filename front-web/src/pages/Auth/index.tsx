import React from 'react';
import Login from './Login';
import './styles.scss';

import { ReactComponent as AuthImage } from 'assets/images/auth.svg';

const Auth = () => (
    <div className="auth-container">
        <div className="auth-info">
            <h1 className="auth-info-title">
                Avalie Filmes
            </h1>
            <p className="auth-into-subtitle">
                Diga o que você achou do seu<br />filme favorito
            </p>
            <AuthImage />
        </div>
        <div className="auth-content">
            <div className="card-base auth-card">
                <h1 className="auth-card-title">Login</h1>
                <Login />
            </div>
        </div>
    </div>
);

export default Auth;