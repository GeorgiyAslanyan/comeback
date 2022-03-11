import React from "react";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {UsersType} from "../types/types";

let initialState = {
    filter: null as string | null,
    users: [
        {id: 0, name: 'George Aslanyan', isFollowed: true},
        {id: 1, name: 'Alexandr Erohin', isFollowed: false},
        {id: 2, name: 'Ivan Kostenko', isFollowed: false},
        {id: 3, name: 'Roman Agutin', isFollowed: true},
    ] as Array<UsersType>
}

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "SET-USERS":
            return {
                ...state,
                users: action.users
            }
        default:
            return state
    }
}


export const actions = {
    setUsers: (users: Array<UsersType>) => ({type: 'SET-USERS', users} as const),
    addMessage: (message: string) => ({type: 'ADD-MESSAGES', message} as const),
}

export const addMessage = (message: string): ThunkType => async (dispatch, getState) => {
    dispatch(actions.addMessage(message))
}


export default usersReducer

export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
