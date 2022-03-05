import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDialogs} from "../../redux/dialogs-selector";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
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
            <NavLink to={'/settings'} className={(navData) => navData.isActive ? s.activeSettings : s.offSettings}>
                <div className={s.settings}/>
            </NavLink>
            <NavLink to={'/profile'} className={(navData) => navData.isActive ? s.activeProfile : s.offProfile}>
                <div className={s.profile}/>
            </NavLink>
            <NavLink to={'/dialogs'} className={(navData) => navData.isActive ? s.activeDialogs : s.offDialogs}>
                <div className={s.dialogs}/>
            </NavLink>
            <NavLink to={'/moon'} className={(navData) => navData.isActive ? s.activeMoon : s.offMoon}>
                <div className={s.moon}/>
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