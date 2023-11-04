import React from 'react';
import './SettingsBlock.css';
import {Button} from '../Button/Button';

export const SettingsBlock = () => {
    const callback = () => {

    }

    return (
        <div className={'settings-wrapper'}>
            <div>
                <div className={'input'}>
                    <p>{`min value:`}</p>
                    <input type="text"/>
                </div>
                <div className={'input'}>
                    <p>{`max value:`}</p>
                    <input type="text"/>
                </div>
            </div>
            <div>
                <Button name={'set'} callback={callback} isDisabled={false}/>
            </div>

        </div>
    );
}