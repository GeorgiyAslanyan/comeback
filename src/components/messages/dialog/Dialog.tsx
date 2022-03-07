import React from "react";
import {useDispatch, useSelector} from "react-redux";
import s from './dialog.module.css'
import {getDialog} from "../../../redux/dialog-selector";
import {getAuthUserId} from "../../../redux/auth-selector";
import {addMessage} from "../../../redux/dialog-reducer";

type PropsType = {}

const Dialog: React.FC<PropsType> = () => {
    const messages = useSelector(getDialog)
    const authUserId = useSelector(getAuthUserId)
    const dispatch = useDispatch()

    const onAddMessage = (message: string) => {
        addMessage(message)
    }

    return (
        <div className={s.messageBlock}>
            <div className={s.messages}>
                {messages?.map(m => {
                    if (m.userId === authUserId) {
                        return (<div key={m.id} className={s.myMessage}>
                            <p>{m.message}</p>
                            <div className={s.messageDate}>{m.time}</div>
                        </div>)
                    } else {
                        return (
                            <div key={m.id} className={s.message}>
                                <p>{m.message}</p>
                                <div className={s.messageDate}>{m.time}</div>
                            </div>
                        )
                    }
                })}
            </div>
            <div className={s.messageInput}>
                <textarea name="" id="" placeholder={'Написать сообщение...'}/>
                <button onClick={()=>onAddMessage}/>
            </div>
        </div>
    )
}

export default Dialog