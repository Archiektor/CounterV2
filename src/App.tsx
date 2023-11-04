import React from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {SettingsBlock} from './components/SettingsBlock/SettingsBlock';

function App() {
    return (
        <div className="App">
            <div className={'app-wrapper'}>
                <SettingsBlock/>
                <Counter/>
            </div>
        </div>
    );
}

export default App;
