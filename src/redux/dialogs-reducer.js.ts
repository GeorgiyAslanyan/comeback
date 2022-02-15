import React from "react";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {DialogsType} from "../types/types";

let initialState = {
    filter: null as string | null,
    dialogs: [
        {id: 0, name: 'George Aslanyan', message: 'Test message'},
        {id: 1, name: 'George Aslanyan', message: '2 Test message'},
        {id: 2, name: 'George Aslanyan', message: '3 Test message'},
        {id: 3, name: 'George Aslanyan', message: '4 Test message'},
        {id: 4, name: 'George Aslanyan', message: '5 Test message'},
        {id: 5, name: 'George Aslanyan', message: '6 Test message'},
        {id: 6, name: 'George Aslanyan', message: '7 Test message'},
        {id: 7, name: 'George Aslanyan', message: '8 Test message'},
    ] as Array<DialogsType> | null
}

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET-DIALOGS':
            return {
                ...state,
                dialogs: [...action.dialogs]
            }
        default:
            return state
    }
}


export const actions = {
    setDialogs: (dialogs: Array<DialogsType>) => ({type: 'SET-DIALOGS', dialogs} as const),
}
//
// export const requestCategories = (): ThunkType => async (dispatch, getState) => {
//     let data = await CategoriesAPI.getCategories()
//     dispatch(actions.setCategories(data.items))
// }


export default dialogsReducer

export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
