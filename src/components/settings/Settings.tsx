import React from "react";
import { useSelector } from "react-redux";
import {getIsAuth} from "../../redux/auth-selector";
import Login from "../login/Login";
import s from "./Settings.module.css"

type PropsType = {}

const Settings: React.FC<PropsType> = () => {
    const isAuth = useSelector(getIsAuth)

    if (isAuth === false) {
        return <Login/>
    } else {
        return (
            <div className={s.settings}>
                settings
            </div>
        )
    }
}

export default Settings