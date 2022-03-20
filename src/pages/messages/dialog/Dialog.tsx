import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import s from './dialog.module.css'
import {getDialog} from "../../../redux/dialog-selector";
import {getAuthUserId} from "../../../redux/auth-selector";
import {addMessage} from "../../../redux/dialog-reducer";
import {MessageType} from "../../../types/types";

type PropsType = {}

type MessagePropsType = {
    message: ChatMessageType
}

export type ChatMessageType = {
    message: string | null
    photo?: string
    userId: number | null
    userName?: string | null
    time?: string | null
}

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

const Dialog: React.FC<PropsType> = () => {
    const dispatch = useDispatch()

    return (
        <div className={s.messageBlock}>
            <Messages/>
            <AddMessageForm/>
        </div>
    )
}

const Messages: React.FC = (props) => {
    // const messages = useSelector(getDialog)

    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        ws.addEventListener('message', (e) => {
            setMessages((prevMessages) => [...prevMessages, ...JSON.parse(e.data)])
            console.log(JSON.parse(e.data))
        })
    }, [])

    return <div className={s.messages}>
        {messages?.map((m, index) => <Message key={index} message={m}/>)}
    </div>
}

const Message: React.FC<MessagePropsType> = ({message}) => {
    const authUserId = useSelector(getAuthUserId)

    if (message.userId === authUserId) {
        return (<div key={message.userId} className={s.myMessage}>
            <p>{message.message}</p>
            <div className={s.messageDate}>{message.time}</div>
        </div>)
    } else {
        return (
            <div key={message.userId} className={s.message}>
                <p>{message.message}</p>
                <div className={s.messageDate}>{message.time}</div>
            </div>
        )
    }
}

const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState('')
    const onAddMessage = () => {
        // addMessage(message)
        if(!message) {
            return
        }
        ws.send(message)
        setMessage('')
    }

    return <div className={s.messageInput}>
        <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message} name="" id="" placeholder={'Написать сообщение...'}/>
        <button onClick={() => onAddMessage()}/>
    </div>
}

export default Dialog