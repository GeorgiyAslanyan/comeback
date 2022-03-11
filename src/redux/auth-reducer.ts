import React from "react";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

let initialState = {
    filter: null as string | null,
    userId: 1 as number | null,
    isAuth: true as boolean
}

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-ID':
            return {
                ...state,
                userId: action.userId
            }
        case "SET-IS_AUTH":
            return {
                ...state,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}


export const actions = {
    setUserId: (userId: number) => ({type: 'SET-USER-ID', userId} as const),
    setIsAuth: (isAuth: boolean) => ({type: 'SET-IS_AUTH', isAuth} as const),
}
//
export const setIsAuth = (meaning: boolean): ThunkType => async (dispatch, getState) => {
    dispatch(actions.setIsAuth(meaning))
}


export default authReducer

export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
