import React from 'react';
import './Button.css';

type ButtonType = {
    name: string
    isDisabled?: boolean
    callback: () => void
}

export const Button: React.FC<ButtonType> = ({name, isDisabled, callback}) => {
    let additionalBtnClass = isDisabled? 'btn-red' : ''

    return (
        <button className={`btn ${additionalBtnClass}`} disabled={isDisabled} onClick={callback}>
            {name}
        </button>
    );
}