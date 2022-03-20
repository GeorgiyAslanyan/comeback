import React from "react";
import { authAPI } from "../api/auth-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {ResultCodesEnum} from "../types/types";

let initialState = {
    filter: null as string | null,
    userId: 17049 as number | null,
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
        case 'samurai-network/auth/SET-USER-DATA':
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}


export const actions = {
    setUserDataSuccess: (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
        type: 'samurai-network/auth/SET-USER-DATA',
        data: {userId, login, email, isAuth}
    }as const),
    setUserId: (userId: number) => ({type: 'SET-USER-ID', userId} as const),
    setIsAuth: (isAuth: boolean) => ({type: 'SET-IS_AUTH', isAuth} as const),
}
//

export const setUserData = (): ThunkType => async (dispatch) => {
    let response = await authAPI.me()
    if (response.resultCode === ResultCodesEnum.Success) {
        let {id, login, email} = response.data
        dispatch(actions.setUserDataSuccess(id, login, email, true))
    }
}

export const setIsAuth = (meaning: boolean): ThunkType => async (dispatch, getState) => {
    dispatch(actions.setIsAuth(meaning))
}


export default authReducer

export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
