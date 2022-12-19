import s from './Profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MypostsContainer from "./myposts/MypostsContainer";

const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo  {...props}/>
            <MypostsContainer/>
        </div>
    )
}
export default Profile;