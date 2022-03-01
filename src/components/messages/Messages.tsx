import React from "react";
import Dialogs from "./dialogs/Dialogs";
import Dialog from "./dialog/Dialog";
import {Route, Routes } from "react-router-dom";
import s from "./Messages.module.css"

type PropsType = {}

const Messages: React.FC<PropsType> = () => {

    return (
        <div className={s.messagesContent}>
            <div className={s.people}>
                <Dialogs/>
            </div>
            <div className={s.content}>
                <Routes>
                    <Route path='/:dialogsId' element={<Dialog/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Messages