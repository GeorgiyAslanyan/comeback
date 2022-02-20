import React from "react";
import {useSelector} from "react-redux";
import s from './dialog.module.css'
import {getDialog} from "../../redux/dialog-selector";
import {getAuthUserId} from "../../redux/auth-selector";

type PropsType = {}

const Dialog: React.FC<PropsType> = () => {
    const messages = useSelector(getDialog)
    const authUserId = useSelector(getAuthUserId)

    return (
        <div className={s.messages}>
            {messages?.map(m => {
                if (m.userId === authUserId) {
                    return (<div key={m.id} className={s.myMessage}>
                        <p>{m.message}</p>
                    </div>)
                } else {
                    return (
                        <div key={m.id} className={s.message}>
                            <p>{m.message}</p>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Dialog