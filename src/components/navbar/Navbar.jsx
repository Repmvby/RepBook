import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friendlist from "./friendList/FriendList";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile' className={navData => navData.isActive ? s.activeLink : s.item}>
                    Profile
                </NavLink>
            </div>
            <div>
                <NavLink to='/messages' className={navData => navData.isActive ? s.activeLink : s.item}>
                    Messages
                </NavLink>
            </div>
            <div>
                <NavLink to='/music' className={navData => navData.isActive ? s.activeLink : s.item}>
                    Music
                </NavLink>
            </div>
            <div>
                <NavLink to='/news' className={navDataRu => navDataRu.isActive ? s.activeLink : s.item}>
                    News
                </NavLink>
            </div>
            <div>
                <NavLink to='/settings' className={navData => navData.isActive ? s.activeLink : s.item}>
                    Settings
                </NavLink>
            </div>
            <div >
                <div className={s.friendsLogoContainer}>
                    <h1>Friends</h1>
                </div>
                <Friendlist friends={props.friends}/>
            </div>
        </nav>
    )
}

export default Navbar;