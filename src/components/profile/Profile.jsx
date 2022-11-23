import s from './Profile.module.css';
import Myposts from "./myposts/Myposts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <Myposts posts={props.posts} addPost={props.addPost}/>
        </div>
    )
}
export default Profile;