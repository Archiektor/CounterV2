import {combineReducers, legacy_createStore} from 'redux'
import {settingsReducer} from '../reducers/settingsReducer';

const rootReducer = combineReducers({
    settings: settingsReducer,
})
export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store
