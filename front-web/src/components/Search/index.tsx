import React, { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { Genre } from 'types/genre';
import { makeRequest } from 'util/requests';
import './styles.css';

export type MovieFilterData = {
    genre: Genre | null,
}

type Props = {
    onSubmitFilter: (data: MovieFilterData) => void;
}

function Search({ onSubmitFilter }: Props) {

    const { setValue, getValues, control } = useForm<MovieFilterData>();
    const [selectGenre, setSelectGenre] = useState<Genre[]>([]);

    const handleChangeGenre = (value: Genre) => {
        setValue("genre", value);

        const obj: MovieFilterData = {
            genre: getValues('genre'),
        }

        onSubmitFilter(obj);
    };

    useEffect(() => {
        const config: AxiosRequestConfig = {
            method: 'GET',
            url: `/genres`,
            withCredentials: true,
        }

        makeRequest(config)
            .then(response => {
                setSelectGenre(response.data);
            })
    }, [])

    return (
        <div className='search-container'>
            <div className='search-form'>
                <Controller
                    name='genre'
                    control={control}
                    render={({ field }) => (
                        <Select {...field}
                            options={selectGenre}
                            isClearable
                            onChange={value => handleChangeGenre(value as Genre)}
                            getOptionLabel={(genre: Genre) => genre.name}
                            getOptionValue={(genre: Genre) => String(genre.id)}
                            placeholder={'Filtre por gênero'}
                            classNamePrefix='search-genre-selector'
                        />
                    )}
                />
            </div>
        </div>
    );
}

export default Search;
