import React from 'react';
import './Counter.css';
import {Screen} from '../Screen/Screen';
import {Button} from '../Button/Button';

type CounterType = {
    startValue: number
    currentValue: number
    endValue: number
    setStartValue: (newValue: number) => void
}

export const Counter: React.FC<CounterType> = ({startValue, currentValue, endValue, setStartValue}) => {
    const incrementCounter = () => {
        setStartValue(currentValue + 1);
    }

    const resetCounter = () => {
        setStartValue(startValue);
        //localStorage.removeItem(LOCAL_STORAGE_KEY);
        //localStorage.clear();
    }

    return (
        <div className={'counter-wrapper'}>
            <Screen currentValue={currentValue} endValue={endValue}/>
            <div className={'btn-wrapper'}>
                <Button name={'inc'} callback={incrementCounter} isDisabled={currentValue === endValue}/>
                <Button name={'reset'} callback={resetCounter}/>
            </div>


        </div>
    );
}