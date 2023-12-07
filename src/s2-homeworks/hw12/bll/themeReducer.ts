type ThemeStateType = {
    themeId: number;
}

const initState: ThemeStateType = {
    themeId: 1,
}

export const themeReducer = (state: ThemeStateType = initState, action: ChangeThemeIdType): ThemeStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.themeId}

        default:
            return state
    }
}

export const changeThemeId = (themeId: number): any => ({type: 'SET_THEME_ID', themeId} as const) // fix any
export type ChangeThemeIdType = ReturnType<typeof changeThemeId>