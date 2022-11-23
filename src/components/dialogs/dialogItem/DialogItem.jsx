import {NavLink} from "react-router-dom";
import React from "react";
import s from './DialogItem.module.css'

const DialogItem = (props) => {
    let path = 'dialogs/' + props.id
    return (
        <div>
            <NavLink to={path} className={dialogData => dialogData.isActive ? s.activeLink : s.dialog}>
                {props.name}
            </NavLink>
        </div>
    )
}
export default DialogItem;