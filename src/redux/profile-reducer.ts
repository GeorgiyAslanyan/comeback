import React from "react";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

let initialState = {
    filter: null as string | null,
    userId: 0 as number | null,
    userImg: null as string | null,
    userName: "Georgiy" as string | null,
    status: "nothing else" as string | null,
    phone: "+7 912 044 18 73" as string | null
}

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-ID':
            return {
                ...state,
                userId: action.userId
            }
        case "SET-USER-NAME":
            return {
                ...state,
                userName: action.userName
            }
        case "SET-USER-IMG":
            return {
                ...state,
                userImg: action.userImg
            }
        case "SET-STATUS":
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}


export const actions = {
    setUserId: (userId: number) => ({type: 'SET-USER-ID', userId} as const),
    setUserName: (userName: string) => ({type: 'SET-USER-NAME',userName} as const),
    setUserImg: (userImg: string) => ({type: 'SET-USER-IMG',userImg} as const),
    setStatus: (status: string) => ({type: 'SET-STATUS',status} as const),
}
//
// export const requestCategories = (): ThunkType => async (dispatch, getState) => {
//     let data = await CategoriesAPI.getCategories()
//     dispatch(actions.setCategories(data.items))
// }


export default profileReducer

export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
