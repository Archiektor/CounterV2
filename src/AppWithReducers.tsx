import React, {useReducer} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {SettingsBlock} from './components/SettingsBlock/SettingsBlock';
import {incrementPreviousStateAC, resetStateAC, setNewStateAC, settingObjStateType, settingsReducer} from './reducers/settingsReducer';

const AppWithReducers = () => {

    const [settingsObj, dispatchToSettingsObj] = useReducer(settingsReducer, {
        start: 0,
        current: 0,
        end: 5
    })

    const setNewValue = (newState: settingObjStateType) => {
        dispatchToSettingsObj(setNewStateAC(newState));
    }

    const incrementCounter = (prevState: settingObjStateType) => {
        dispatchToSettingsObj(incrementPreviousStateAC(prevState))
    }

    const resetCounter = (prevState: settingObjStateType) => {
        dispatchToSettingsObj(resetStateAC(prevState));
    }

    return (
        <div className="App">
            <div className={'app-wrapper'}>
                <SettingsBlock state={settingsObj} setNewValue={setNewValue}/>
                <Counter state={settingsObj} increment={incrementCounter} reset={resetCounter}/>
            </div>
        </div>
    );
}

export default AppWithReducers;
