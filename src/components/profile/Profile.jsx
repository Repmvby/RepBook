import s from './Profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MypostsContainer from "./myposts/MypostsContainer";

const Profile = () => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MypostsContainer/>
        </div>
    )
}
export default Profile;