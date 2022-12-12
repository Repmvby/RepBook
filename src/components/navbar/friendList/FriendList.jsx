import s from './friendList.module.css'
import Friend from "./friend/friend";

const Friendlist = (props) => {
    let friendsElement = props.friends.map((f)=>{
        return <Friend name={f.name} id={f.id}/>
    })

    return (
        <div className={s.friendListContainer}>
            {friendsElement}
        </div>

    )
}
export default Friendlist;