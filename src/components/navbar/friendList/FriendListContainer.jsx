
import Friendlist from "./FriendList";
import {connect} from "react-redux";

let mapStateProps = (state)=>{
    return {

        friends : state.friendList.friends
    }

}

let FriendListContainer = connect(mapStateProps)(Friendlist);
export default FriendListContainer;