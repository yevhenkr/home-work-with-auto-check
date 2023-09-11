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
        case 'sort': { // by name
            if (action.payload === 'up') { // сортировка по возрастанию
                return [...state.sort((a, b) => a.name.localeCompare(b.name))];
            } else if (action.payload === 'down') { // сортировка по убыванию
                return [...state.sort((a, b) => b.name.localeCompare(a.name))];
            }
            return state;
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