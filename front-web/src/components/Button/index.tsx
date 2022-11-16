import React from 'react';
import './styles.scss';

type Props = {
    text: string
}

function Button({ text }: Props) {
    return (
        <button className='btn btn-primary'>
            {text}
        </button>
    );
}

export default Button;
