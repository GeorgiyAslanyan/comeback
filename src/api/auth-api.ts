import {instance} from "./api";
import {APIResponseType} from './api'

export type MeResponseDataType = {id: number, email: string, login: string}
export type LoginResponseDataType = {userId: number}

export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}