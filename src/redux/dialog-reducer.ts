import React from "react";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {MessageType} from "../types/types";

let initialState = {
    filter: null as string | null,
    messages: [
        {id: 0, userId: 1, name: 'George Aslanyan', message: 'привет', time: '21:00'},
        {id: 1, userId: 2, name: 'George Aslanyan', message: 'привет', time: '21:01'},
        {id: 2, userId: 2, name: 'George Aslanyan', message: 'что делаешь?', time: '21:02'},
        {id: 3, userId: 1, name: 'George Aslanyan', message: 'пишу код', time: '21:03'},
    ] as Array<MessageType>
}

const dialogReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET-MESSAGES':
            return {
                ...state,
                messages: [...action.messages]
            }
        case "ADD-MESSAGES":
            let dateWithouthSecond = new Date();
            let newMessage = {
                id: state.messages?.length + 1,
                userId: 1,
                message: action.message,
                time: dateWithouthSecond.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}).toString()
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state
    }
}


export const actions = {
    setMessages: (messages: Array<MessageType>) => ({type: 'SET-MESSAGES', messages} as const),
    addMessage: (message: string) => ({type: 'ADD-MESSAGES', message} as const),
}

export const addMessage = (message: string): ThunkType => async (dispatch, getState) => {
    dispatch(actions.addMessage(message))
}


export default dialogReducer

export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
