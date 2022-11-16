
import React from 'react';
import Button from '../../../components/Button';
import { useForm } from 'react-hook-form';
import './styles.scss';

type FormState = {
    username: string;
    password: string;
}

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormState>();

    const onSubmit = (data: FormState) => {
        console.log(data);
    }

    return (
        <div>
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
