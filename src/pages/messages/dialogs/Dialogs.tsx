import React from "react";
import {useSelector} from "react-redux";
import { NavLink } from "react-router-dom";
import s from './dialogs.module.css'
import {getDialogs} from "../../../redux/dialogs-selector";

const Dialogs: React.FC = () => {
    const dialogs = useSelector(getDialogs)

    return (
        <div className={s.dialogs}>
            {dialogs?.map(d => <NavLink to={`/dialogs/${d.id}`} key={d.id}  className={(navData) => navData.isActive ? s.active : "" }>
                <div className={s.dialog}>
                    {d.img
                        ? <img src={d.img} alt=""/>
                        : <img src={'https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png'} alt=""/>}
                        <div>
                            <h2>{d.name}</h2>
                            <p>{d.message}</p>
                        </div>
                </div>
            </NavLink>)}
        </div>
    )
}

export default Dialogs