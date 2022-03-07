import React, {Dispatch, SetStateAction} from "react";
import { useSelector } from "react-redux";
import {getIsAuth} from "../../redux/auth-selector";
import Login from "../login/Login";
import s from "./Settings.module.css"

type PropsType = {
    setShow?: Dispatch<SetStateAction<boolean | undefined>>
}

const Settings: React.FC<PropsType> = () => {
    const isAuth = useSelector(getIsAuth)

    if (isAuth === false) {
        return <Login/>
    } else {
        return (
            <div className={s.settingsBackground}>
                <div className={s.settings}>
                    Настройки
                </div>
            </div>
        )
    }
}

export default Settings