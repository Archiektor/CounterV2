import React from 'react';
import './Counter.css';
import {Screen} from '../Screen/Screen';
import {Button} from '../Button/Button';
import {settingObjStateType} from '../../reducers/settingsReducer';

type CounterType = {
    state: settingObjStateType,
    reset: (prevState: settingObjStateType) => void,
    increment: (prevState: settingObjStateType) => void
}

export const Counter: React.FC<CounterType> = ({state, increment, reset}) => {
    const incrementCounter = () => {
        increment(state);
    }

    const resetCounter = () => {
        //setStartValue(startValue);
        reset(state);
    }

    return (
        <div className={'counter-wrapper'}>
            <Screen currentValue={state.current} endValue={state.end}/>
            <div className={'btn-wrapper'}>
                <Button name={'inc'} callback={incrementCounter} isDisabled={state.current === state.end}/>
                <Button name={'reset'} callback={resetCounter}/>
            </div>
        </div>
    );
}