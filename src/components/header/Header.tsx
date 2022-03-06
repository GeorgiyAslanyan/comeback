import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDialogs} from "../../redux/dialogs-selector";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {getIsAuth} from "../../redux/auth-selector";
import offAuth from "../../assets/img/onAuth.png"
import onAuth from "../../assets/img/offAuth.png"
import {setIsAuth} from "../../redux/auth-reducer"
import click from "../../assets/audio/click.mp3"
import authorize from "../../assets/audio/Authorize.mp3"
import disconnect from "../../assets/audio/disconnect.mp3"

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
        let audio = new Audio(disconnect)
        audio.autoplay = true
        dispatch(setIsAuth(false))
    }
    const onButton = () => {
        let audio = new Audio(authorize)
        audio.autoplay = true
        dispatch(setIsAuth(true))
    }

    const audioPlay = () => {
        let audio = new Audio(click)
        audio.autoplay = true
    }

    return (
        <div className={s.headerElements}>
            <NavLink onClick={() => audioPlay()} to={'/settings'} className={(navData) => navData.isActive ? s.activeSettings : s.offSettings}>
                <div className={s.settings}/>
            </NavLink>
            <NavLink onClick={() => audioPlay()} to={'/profile'} className={(navData) => navData.isActive ? s.activeProfile : s.offProfile}>
                <div className={s.profile}/>
            </NavLink>
            <NavLink onClick={() => audioPlay()} to={'/dialogs'} className={(navData) => navData.isActive ? s.activeDialogs : s.offDialogs}>
                <div className={s.dialogs}/>
            </NavLink>
            <NavLink onClick={() => audioPlay()} to={'/moon'} className={(navData) => navData.isActive ? s.activeMoon : s.offMoon}>
                <div className={s.moon}/>
            </NavLink>
            <div className={s.authButton}>
                {
                    isAuth
                        ? <button onClick={() => offButton()}>
                            <img src={onAuth} alt=""/>
                        </button>
                        : <button onClick={() => onButton()}>
                            <img src={offAuth} alt=""/>
                        </button>
                }
            </div>

        </div>
    )
}

export default Header