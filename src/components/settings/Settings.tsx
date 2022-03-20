import React, {Dispatch, SetStateAction} from "react";
import { useSelector } from "react-redux";
import {getIsAuth} from "../../redux/auth-selector";
import s from "./Settings.module.css"
import {getUserImg, getUserName, getUserPhone, getUserStatus} from "../../redux/profile-selector";
import Login from "../../pages/login/Login";

type PropsType = {
    setShow?: Dispatch<SetStateAction<boolean>>
}

const Settings: React.FC<PropsType> = (props) => {
    const isAuth = useSelector(getIsAuth)
    const userName = useSelector(getUserName)
    const userImg = useSelector(getUserImg)
    const userStatus = useSelector(getUserStatus)
    const userPhone = useSelector(getUserPhone)

    if (isAuth === false) {
        return <Login/>
    } else {
        return (
            <div>
                <div className={s.settingsBackground} onClick={()=>props.setShow && props.setShow(false)}/>
                <div className={s.settings}>
                    <div className={s.closeBtn} onClick={()=>props.setShow && props.setShow(false)}>

                    </div>
                    <div className={s.profileSection}>
                        {
                            userImg
                                ?  <img src={userImg} alt=""/>
                                :  <img src={'https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png'} alt=""/>
                        }
                        <div className={s.profileInfo}>
                            <div className={s.leftColumn}>
                                <div className={s.profileName}>
                                    {userName}
                                </div>
                                <div className={s.profileStatus}>
                                    {userStatus}
                                </div>
                            </div>
                            <div className={s.rightColumn}>
                                {userPhone}
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Settings