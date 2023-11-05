import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {SettingsBlock} from './components/SettingsBlock/SettingsBlock';

export type SettingsObjType = {
    [key: string]: number
}

export const start = 'start';
export const current = 'current';
export const end = 'end';
const LOCAL_STORAGE_START = 'ls_start';
//const LOCAL_STORAGE_CURRENT = 'ls_current';
const LOCAL_STORAGE_END = 'ls_end';

const initialObj: SettingsObjType = {
    [start]: 0,
    [current]: 0,
    [end]: 5,
}

function App() {
    const [settingsObj, setSettingsObj] = useState<SettingsObjType>(() => {
        //console.log('default useEffect')
        let strStartValue = Number(localStorage.getItem(LOCAL_STORAGE_START)) || initialObj[start]// !!! string => number
        //let strCurrentValue = Number(localStorage.getItem(LOCAL_STORAGE_CURRENT)) || initialObj[current] // !!! string => number
        let strEndValue = Number(localStorage.getItem(LOCAL_STORAGE_END)) || initialObj[end]  // !!! string => number

        return {
            [start]: strStartValue,
            [current]: strStartValue,
            [end]: strEndValue,
        }
    });

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_START, JSON.stringify(settingsObj[start]));
        //localStorage.setItem(LOCAL_STORAGE_CURRENT, JSON.stringify(settingsObj[current]));
        localStorage.setItem(LOCAL_STORAGE_END, JSON.stringify(settingsObj[end]));
    }, [settingsObj]);

    const setNewValue = (newSettingsObj: SettingsObjType) => {
        setSettingsObj(newSettingsObj);
    }

    const setCurrentValue = (newValue: number) => {
        setSettingsObj({...settingsObj, [current]: newValue})
    }

    return (
        <div className="App">
            <div className={'app-wrapper'}>
                <SettingsBlock state={settingsObj} setNewValue={setNewValue}/>
                <Counter startValue={settingsObj[start]} endValue={settingsObj[end]} currentValue={settingsObj[current]} setStartValue={setCurrentValue}/>
            </div>
        </div>
    );
}

export default App;
