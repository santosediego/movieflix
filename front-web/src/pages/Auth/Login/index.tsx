
import React, { useContext, useState } from 'react';
import Button from '../../../components/Button';
import { useForm } from 'react-hook-form';
import { makePrivateRequest } from 'util/requests';
import { saveAuthData } from 'util/storage';
import { AuthContext } from 'AuthContext';
import { getTokenData } from 'util/auth';
import { useHistory, useLocation } from 'react-router-dom';
import './styles.scss';

type FormData = {
    username: string,
    password: string
}

type LocationState = {
    from: string;
}

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [hasError, setHasError] = useState(false);

    const { setAuthContextData } = useContext(AuthContext);

    const location = useLocation<LocationState>();
    const { from } = location.state || { from: { pathname: '/movies' } };
    const history = useHistory();

    const onSubmit = (formData: FormData) => {
        setHasError(false);

        makePrivateRequest(formData)
            .then(response => {
                saveAuthData(response.data);
                setAuthContextData({
                    authenticated: true,
                    tokenData: getTokenData()
                })
                history.replace(from);
            })
            .catch(error => {
                setHasError(true);
            })
    }

    return (
        <div>
            {hasError && (
                <div className="alert alert-danger">
                    E-mail ou senha invalidos!
                </div>
            )}

            <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                <div className="login-input-email">
                    <input
                        type="email"
                        className={`form-control input-base ${errors.username ? 'is-invalid' : ''}`}
                        placeholder="Email"
                        {...register("username", {
                            required: { value: true, message: "Campo obrigatório!" },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email inválido"
                            }
                        })}
                    />
                    {errors.username && (
                        <div className="invalid-feedback d-block">
                            {errors.username.message}
                        </div>
                    )}
                </div>
                <div>
                    <input
                        type="password"
                        className={`form-control input-base ${errors.password ? 'is-invalid' : ''}`}
                        placeholder="Senha"
                        {...register("password", {
                            required: { value: true, message: "Campo obrigatório!" }
                        })}
                    />
                    {errors.password && (
                        <div className="invalid-feedback d-block">
                            {errors.password.message}
                        </div>
                    )}
                </div>
                <div className="login-submit">
                    <Button text='Fazer login' />
                </div>

            </form>
        </div>
    )
};

export default Login;
