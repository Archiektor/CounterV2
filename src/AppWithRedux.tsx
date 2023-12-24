import React from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {SettingsBlock} from './components/SettingsBlock/SettingsBlock';
import {incrementPreviousStateAC, resetStateAC, setNewStateAC, settingObjStateType} from './reducers/settingsReducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './store/store';

const AppWithRedux = () => {

    const settingsObj = useSelector<AppRootStateType, settingObjStateType>(state => state.settings);
    const dispatch = useDispatch();

    const setNewValue = (newState: settingObjStateType) => {
        dispatch(setNewStateAC(newState));
    }

    const incrementCounter = (prevState: settingObjStateType) => {
        dispatch(incrementPreviousStateAC(prevState))
    }

    const resetCounter = (prevState: settingObjStateType) => {
        dispatch(resetStateAC(prevState));
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

export default AppWithRedux;
