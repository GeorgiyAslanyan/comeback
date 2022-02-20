import React from "react";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

let initialState = {
    filter: null as string | null,
    userId: 1 as number | null,
}

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-ID':
            return {
                ...state,
                userId: action.userId
            }
        default:
            return state
    }
}


export const actions = {
    setUserId: (userId: number) => ({type: 'SET-USER-ID', userId} as const),
}
//
// export const requestCategories = (): ThunkType => async (dispatch, getState) => {
//     let data = await CategoriesAPI.getCategories()
//     dispatch(actions.setCategories(data.items))
// }


export default authReducer

export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
