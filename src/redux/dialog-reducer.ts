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
        {id: 4, userId: 1, name: 'George Aslanyan', message: 'filter: null as string | null', time: '21:03'},
        {id: 5, userId: 1, name: 'George Aslanyan', message: 'George Aslan', time: '21:03'},
        {id: 6, userId: 2, name: 'George Aslanyan', message: 'dialogs', time: '21:03'},
        {id: 7, userId: 1, name: 'George Aslanyan', message: 'ThunkType = BaseThunkTypeActionsTypes>', time: '21:03'},
        {id: 8, userId: 1, name: 'George Aslanyan', message: 'messages', time: '21:03'},
        {id: 9, userId: 1, name: 'George Aslanyan', message: 'with 1 warning in 4114 ms', time: '21:03'},
        {id: 10, userId: 1, name: 'George Aslanyan', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac lectus at erat ultrices ultricies consectetur ac dolor. Aenean ac lectus a augue lobortis posuere. Vestibulum eleifend rhoncus leo, sed sagittis quam tincidunt ultrices. Vivamus non efficitur ante, ut rhoncus metus. Suspendisse blandit mauris in semper imperdiet. Sed ornare ac ex eget egestas. Aliquam sed placerat quam, efficitur auctor augue. Mauris venenatis augue sit amet venenatis varius. Fusce eleifend neque leo, molestie aliquam nisl feugiat vel. Mauris egestas auctor cursus. Maecenas sed volutpat lectus, a accumsan est. Nullam sit amet orci quis sem tempus luctus id sit amet mauris. Maecenas id justo pellentesque, posuere velit sit amet, blandit eros. Etiam id nisi a neque sagittis pharetra ullamcorper id nibh. In tempor tortor nec nunc varius, in faucibus massa blandit. Ut nisl erat, interdum a mauris eu, cursus posuere justo.', time: '21:03'},
        {id: 11, userId: 2, name: 'George Aslanyan', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac lectus at erat ultrices ultricies consectetur ac dolor. Aenean ac lectus a augue lobortis posuere. Vestibulum eleifend rhoncus leo, sed sagittis quam tincidunt ultrices. Vivamus non efficitur ante, ut rhoncus metus. Suspendisse blandit mauris in semper imperdiet.', time: '21:03'},
        {id: 12, userId: 1, name: 'George Aslanyan', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '21:03'},
        {id: 13, userId: 2, name: 'George Aslanyan', message: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet', time: '21:03'},
        {id: 14, userId: 2, name: 'George Aslanyan', message: 'Lorem ipsum dolor sit amet', time: '21:03'},
        {id: 15, userId: 1, name: 'George Aslanyan', message: 'const dialogReducer = (state = initialState, action: ActionsTypes): InitialStateType', time: '21:03'},
    ] as Array<MessageType>
}

const dialogReducer = (state = initialState, action: ActionsTypes): InitialStateType=> {
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
