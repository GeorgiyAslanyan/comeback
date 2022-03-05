import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDialogs} from "../../redux/dialogs-selector";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import settings from "../../assets/img/settings.png"
import profile from "../../assets/img/profile.png"
import moon from "../../assets/img/moon.png"
import messages from "../../assets/img/dialogs.png"
import {getIsAuth} from "../../redux/auth-selector";
import offAuth from "../../assets/img/offAuth.png"
import onAuth from "../../assets/img/onAuth.png"
import {setIsAuth} from "../../redux/auth-reducer"

const Header: React.FC = () => {
    const dialogs = useSelector(getDialogs)
    let isAuth = useSelector(getIsAuth)
    const dispatch = useDispatch()
    let image

    const switchAuth = () => {
        if (isAuth === true) {
            isAuth = false
        } else {
            isAuth = true
        }
        console.log(isAuth)
    }

    useEffect(() => {

    }, [isAuth])

    const offButton = () => {
        dispatch(setIsAuth(false))
    }
    const onButton = () => {
        dispatch(setIsAuth(true))
    }

    return (
        <div className={s.headerElements}>
            <NavLink to={'/settings'}>
                <img src={settings} alt=""/>
            </NavLink>
            <NavLink to={'/profile'}>
                <img src={profile} alt=""/>
            </NavLink>
            <NavLink to={'/dialogs'}>
                <img src={messages} alt=""/>
            </NavLink>
            <NavLink to={'/settings'}>
                <img src={moon} alt=""/>
            </NavLink>
            <div className={s.authButton}>
                {
                    isAuth
                        ? <button onClick={() => offButton()}>
                            <img src={offAuth} alt=""/>
                        </button>
                        : <button onClick={() => onButton()}>
                            <img src={onAuth} alt=""/>
                        </button>
                }
            </div>

        </div>
    )
}

export default Header