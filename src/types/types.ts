export type DialogsType = {
    id: number | null
    name: string | null
    message: string | null
    img: string | null
}

export type MessageType = {
    id: number | null
    userId: number | null
    name?: string | null
    message: string | null
    img?: string | null
    time: string | null

}

export type UsersType = {
    id: number | null
    name: string |null
    isFollowed: boolean
    img: string | null
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}