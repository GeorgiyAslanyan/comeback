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