export type settingObjStateType = {
    start: number,
    current: number,
    end: number
}

export const settingsReducer = (state: settingObjStateType, action: todolistsActionsType): settingObjStateType => {
    switch (action.type) {
        case "SET-NEW-STATE":
            return action.payload.newState;
        case "INCREMENT-STATE":
            return {...action.payload.previousState, current: action.payload.previousState.current + 1  }
        case "RESET-STATE":
            return {...action.payload.previousState, current: action.payload.previousState.start};
        default:
            return state;
    }
}

export type todolistsActionsType = setNewStateACType | incrementPreviousStateACType | resetStateACType;

type setNewStateACType = ReturnType<typeof setNewStateAC>
type incrementPreviousStateACType = ReturnType<typeof incrementPreviousStateAC>
type resetStateACType = ReturnType<typeof resetStateAC>

export const setNewStateAC = (newState: settingObjStateType) => {
    return {
        type: 'SET-NEW-STATE',
        payload: {
            newState,
        }
    } as const
}

export const incrementPreviousStateAC = (previousState: settingObjStateType) => {
    return {
        type: 'INCREMENT-STATE',
        payload: {
            previousState,
        }
    } as const
}

export const resetStateAC = (previousState: settingObjStateType) => {
    return {
        type: 'RESET-STATE',
        payload: {
            previousState,
        }
    } as const
}
