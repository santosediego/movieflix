import React from 'react';
import Button from 'components/Button';
import { useForm } from 'react-hook-form';
import './styles.css';

type FormData = {
    text: string
}

function ReviewForm() {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (formData: FormData) => {
        console.log(formData);
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
