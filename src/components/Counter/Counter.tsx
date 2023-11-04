import React, {useState} from 'react';
import './Counter.css';
import {Screen} from '../Screen/Screen';
import {Button} from '../Button/Button';

export const Counter = () => {
    const INIT_VALUE = 0;
    const MAX_VALUE = 5;

    const [counter, setCounter] = useState<number>(INIT_VALUE);
    const incrementCounter = () => {
        setCounter(counter => counter + 1);
    }

    const resetCounter = () => {
        setCounter(INIT_VALUE);
    }

    return (
        <div className={'counter-wrapper'}>
            <Screen value={counter}/>
            <div className={'btn-wrapper'}>
                <Button name={'inc'} callback={incrementCounter} isDisabled={counter === MAX_VALUE}/>
                <Button name={'reset'} callback={resetCounter}/>
            </div>


        </div>
    );
}