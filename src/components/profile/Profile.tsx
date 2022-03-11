import React from "react";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {getIsAuth} from "../../redux/auth-selector";
import Login from "../login/Login";
import s from "./Profile.module.css"
import {getUsers} from "../../redux/users-selector";

type PropsType = {}

const Profile: React.FC<PropsType> = () => {
    const isAuth = useSelector(getIsAuth)
    const users = useSelector(getUsers)

    if (isAuth === false) {
        return <Login/>
    } else {
        return (
            <div className={s.profile}>
                <div className={s.profileMenu}>
                    <NavLink to={'friends'}
                             className={(navData) => navData.isActive ? s.activeFriends : s.offFriends}>
                        <div className={s.friendsButton}/>
                        <h2>Друзья</h2>
                    </NavLink>
                    <NavLink to={'search'}
                             className={(navData) => navData.isActive ? s.activeSearch : s.offSearch}>
                        <div className={s.searchButton}/>
                        <h2>Пользователи</h2>
                    </NavLink>
                </div>
                <div className={s.users}>
                    {users.map(u => <div key={u.id} className={s.user}>
                        <div className={s.userPrev}>
                            {u.img
                                ? <img src={u.img} alt=""/>
                                : <img src={"https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"} alt=""/>
                            }
                            <div className={s.userInfo}>
                                <h2>{u.name}</h2>
                            </div>
                        </div>
                        {u.isFollowed
                            ? <button className={s.unfollow}>Отписаться</button>
                            : <button className={s.follow}>Подписаться</button>
                        }
                    </div>)}
                </div>
            </div>
        )
    }
}

export default Profile