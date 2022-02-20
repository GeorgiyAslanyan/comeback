import {Action, applyMiddleware, combineReducers, createStore} from 'redux'
import thunk, {ThunkAction} from "redux-thunk";
import authReducer from "./auth-reducer";
import dialogReducer from "./dialog-reducer";
import dialogsReducer from "./dialogs-reducer";

let rootReducer = combineReducers({
    dialogs: dialogsReducer,
    dialog: dialogReducer,
    auth: authReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends {[keys: string]: (...args: any[]) => infer U} ? U : never
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>


let store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store

export default store