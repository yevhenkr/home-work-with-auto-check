import {UserType} from '../HW8'

export type check18ActionType = {
    type: 'check',
    payload: number
}
export type sortActionType = {
    type: 'sort',
    payload: string
}

type ActionType =
    | sortActionType
    | check18ActionType


export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                if (a.name < b.name) return -1
                else return 0
            })

            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            return [...state.filter(user => user.age >= action.payload)]
        }
        default:
            return state
    }
}

export const check18AC = (checkNumber: number): check18ActionType => {
    return {type: 'check', payload: checkNumber}
}

export const sortAC = (sortType: 'up' | 'down'): sortActionType => {
    return {type: 'sort', payload: sortType}
}