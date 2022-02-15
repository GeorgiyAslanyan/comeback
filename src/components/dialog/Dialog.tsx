import React from "react";
import {useSelector} from "react-redux";
import {getDialog} from "../../redux/dialog-selector.js";
import s from './dialog.module.css'

type PropsType = {

}

const Dialog: React.FC<PropsType> = () => {
    const messages = useSelector(getDialog)
    return (
        <div>
            {messages?.map(m => <div className={s.message}>
                <p>{m.message}</p>
            </div>)}
        </div>
    )
}

export default Dialog