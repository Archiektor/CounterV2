import React from 'react';
import './Screen.css';

type ScreenType = {
    currentValue: number
    endValue: number
}

export const Screen: React.FC<ScreenType> = ({currentValue, endValue}) => {
    let additionalScreenClass = currentValue === endValue ? 'screen-red' : ''

    return (
        <div className={`screen`}>
            <p className={additionalScreenClass}>{currentValue}</p>
        </div>
    );
}