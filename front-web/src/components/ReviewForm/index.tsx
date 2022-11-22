import React from 'react';
import { AxiosRequestConfig } from 'axios';
import Button from 'components/Button';
import { useForm } from 'react-hook-form';
import { makeRequest } from 'util/requests';
import { Review } from 'types/review';
import './styles.css';

type Props = {
    movieId: string;
    onInsertReview: (review: Review) => void;
}

type FormData = {
    movieId: number,
    text: string
}

function ReviewForm({ movieId, onInsertReview }: Props) {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>();

    const onSubmit = (formData: FormData) => {

        const params: AxiosRequestConfig = {
            method: 'POST',
            url: `/reviews`,
            data: formData,
            withCredentials: true,
        };
    
        formData.movieId = parseInt(movieId);

        makeRequest(params).then((response) => {
            setValue('text', '');
            onInsertReview(response.data);
        }).catch((error) => {
            console.log('Erro ao persistir: ', error);
        });
    }

    return (
        <div className='card-base card-review'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=''>
                    <input
                        {...register("text", {
                            required: { value: true, message: "Campo obrigatório" }
                        })}
                        type="text"
                        className='form-control input-base'
                        name='text'
                        placeholder='Deixe sua avaliação aqui'
                    />
                    {errors.text && (
                        <div className="invalid-feedback d-block">
                            {errors.text.message}
                        </div>
                    )}
                </div>
                <div className='btn-submit'>
                    <Button text='Salvar avaliação' />
                </div>
            </form>
        </div>
    );
}

export default ReviewForm;
