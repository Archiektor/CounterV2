import React, {ChangeEvent, useRef, useState} from 'react';
import './SettingsBlock.css';
import {Button} from '../Button/Button';
import {SettingsObjType} from '../../App';

type SettingsBlockType = {
    state: SettingsObjType
    setNewValue: (obj: SettingsObjType) => void
}

export const SettingsBlock: React.FC<SettingsBlockType> = ({state, setNewValue}) => {
    const {start: startValue, end: endValue} = state;

    const minInputRef = useRef<HTMLInputElement>(null);
    const maxInputRef = useRef<HTMLInputElement>(null);

    const [error, setError] = useState<boolean>(false);

    let errorClass = error ? 'error' : '';

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.className === `minValue ${errorClass}`) {
            if (Number(e.currentTarget.value) < endValue) {
                setError(false);
                setNewValue({...state, start: Number(e.currentTarget.value), current: Number(e.currentTarget.value)})
            } else {
                setError(true);
            }
        }
        if (e.currentTarget.className === `maxValue ${errorClass}`) {
            if (Number(e.currentTarget.value) > startValue) {
                setError(false);
                setNewValue({...state, end: Number(e.currentTarget.value)})
            } else {
                setError(true);
            }
        }
    }

    const onClickHandler = () => {
        //setNewValue(innerState);
    }

    return (
        <div className={'settings-wrapper'}>
            <div>
                <div className={'input'}>
                    <p>{`max value:`}</p>
                    <input className={`maxValue ${errorClass}`} ref={maxInputRef} type="number" onChange={onChangeHandler} defaultValue={endValue}/>
                </div>
                <div className={'input'}>
                    <p>{`min value:`}</p>
                    <input className={`minValue ${errorClass}`} ref={minInputRef} type="number" onChange={onChangeHandler} defaultValue={startValue} max={endValue}
                           min={startValue}/>
                </div>
            </div>
            <div>
                <Button name={'set'} callback={onClickHandler} isDisabled={error}/>
            </div>

        </div>
    );
}