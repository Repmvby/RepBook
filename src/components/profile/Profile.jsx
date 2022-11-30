import s from './Profile.module.css';
import Myposts from "./myposts/Myposts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <Myposts posts={props.posts}
                     dispatch={props.dispatch}
                     newPostBody ={props.newPostBody}
            />
        </div>
    )
}
export default Profile;