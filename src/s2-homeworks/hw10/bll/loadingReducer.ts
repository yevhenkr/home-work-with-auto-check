type ActionType = LoadingActionType


const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ActionType): any => { // fix any
    switch (action.type) {
        case "CHANGE_LOADING": {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
} as const)
