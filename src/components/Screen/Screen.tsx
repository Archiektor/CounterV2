import React from 'react';
import './Screen.css';

type ScreenType = {
    value: number
}

export const Screen: React.FC<ScreenType> = ({value}) => {
    let additionalScreenClass = value === 5 ? 'screen-red' : ''

    return (
        <div className={`screen`}>
            <p className={additionalScreenClass}>{value}</p>
        </div>
    );
}