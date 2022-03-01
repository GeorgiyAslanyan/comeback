import React from "react";
import {useSelector} from "react-redux";
import {getDialogs} from "../../redux/dialogs-selector";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import settings from "../../assets/img/settings.png"
import profile from "../../assets/img/profile.png"
import moon from "../../assets/img/moon.png"
import messages from "../../assets/img/dialogs.png"

const Header: React.FC = () => {
    const dialogs = useSelector(getDialogs)

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
        </div>
    )
}

export default Header