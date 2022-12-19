import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/pngtree-outline-user-icon-png-image_5045523.jpg";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 10/*pagesCount*/; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p);
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id} className={s.usersContainer}>

                    <div className={s.userButtonPhoto}>
                        <div>
                            <NavLink to={'/profile'}>
                                <img
                                    src={u.photos.small != null ? u.photos.small : userPhoto}
                                    className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            <div className={s.buttonContainer}>
                                {u.followed
                                    ? <button className={s.button} onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button className={s.button} onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>}
                            </div>
                        </div>

                    </div>
                    <div className={s.userInfo}>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>

    )

}

export default Users;