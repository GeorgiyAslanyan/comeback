import React from "react";
import { useSelector } from "react-redux";
import {getIsAuth} from "../../redux/auth-selector";
import s from "./Login.module.css"

type PropsType = {}

const Login: React.FC<PropsType> = () => {
    const isAuth = useSelector(getIsAuth)

    if (isAuth === false) {
        return (
            <div className={s.login}>
                login
            </div>
        )
    } else {
        return (
            <div className={s.login}>
                you already loggined
            </div>
        )
    }

}

export default Login