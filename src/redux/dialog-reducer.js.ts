import React from "react";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {MessageType} from "../types/types";

let initialState = {
    filter: null as string | null,
    messages: [
        {id: 0, userId: 1, name: 'George Aslanyan', message: 'привет'},
        {id: 1, userId: 2, name: 'George Aslanyan', message: 'привет'},
        {id: 2, userId: 2, name: 'George Aslanyan', message: 'что делаешь?'},
        {id: 3, userId: 1, name: 'George Aslanyan', message: 'пишу код'},
    ] as Array<MessageType> | null
}

const dialogReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET-MESSAGES':
            return {
                ...state,
                messages: [...action.messages]
            }
        default:
            return state
    }
}


export const actions = {
    setMessages: (messages: Array<MessageType>) => ({type: 'SET-MESSAGES', messages} as const),
}
//
// export const requestCategories = (): ThunkType => async (dispatch, getState) => {
//     let data = await CategoriesAPI.getCategories()
//     dispatch(actions.setCategories(data.items))
// }


export default dialogReducer

export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
