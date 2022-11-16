
import React from 'react';
import Button from '../../../components/Button';
import './styles.scss';

const Login = () => {

    return (
        <form className='login-form'>
            <div className="login-input-email">
                <input
                    type="email"
                    className={`form-control input-base`}
                    placeholder="Email"
                    name="username"
                />
            </div>
            <div>
                <input
                    type="password"
                    className={`form-control input-base`}
                    placeholder="Senha"
                    name="password"
                />
            </div>
            <div className="login-submit">
                <Button text='Fazer login' />
            </div>

        </form>
    )
};

export default Login;