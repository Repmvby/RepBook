import s from './Myposts.module.css';
import Post from "./post/Post";
import React from "react";
import {addPostActionCreator, updatePostMessageBodyActionCreator} from "../../../redux/profile-reducer";


const Myposts = (props) => {


    let postsElements = props.posts.map((p) => {
        return <Post message={p.message}
                     likesCount={p.likesCount}
                     id={p.id}
        />
    })

    let newPostMessageBody = props.newPostBody;

    let onNewPostMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updatePostMessageBodyActionCreator(body))
    }
    let onSendPOstClick = () => {
        props.dispatch(addPostActionCreator());
    };

    return (
        <div className={s.mypostsBlock}>
            <div>
                <h2>My posts</h2>
            </div>
            <div>
                <h3>New Post</h3>
            </div>
            <div>
                <textarea value={newPostMessageBody} onChange={onNewPostMessageChange}></textarea>
            </div>
            <div>
                <button onClick={onSendPOstClick}>Post</button>
            </div>
            <div>
                {postsElements}
            </div>

        </div>

    )
}
export default Myposts;