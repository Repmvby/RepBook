import React from "react";
import {addPostActionCreator, updatePostMessageBodyActionCreator} from "../../../redux/profile-reducer";
import Myposts from "./Myposts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profileData.posts,
        MessageBody: state.profileData.newPostBody,
    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (body) => {
            dispatch(updatePostMessageBodyActionCreator(body))
        },
        AddPost: ()=> {
            dispatch(addPostActionCreator())
        }

    }

}
let MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);
export default MypostsContainer;