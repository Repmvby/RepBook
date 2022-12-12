import s from './Myposts.module.css';
import Post from "./post/Post";
import React from "react";


const Myposts = (props) => {


    let postsElements = props.posts.map((p) => {
        return <Post message={p.message}
                     likesCount={p.likesCount}
                     id={p.id}
        />
    })

    let newPostMessageBody = props.MessageBody;

    let onNewPostMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewPostText(body)
    }
    let onSendPOstClick = () => {
        props.AddPost()
    };

    return (
        <div className={s.mypostsBlock}>
            <div>
                <h2>My posts</h2>
            </div>
            <div>
                <h3>New Post</h3>
            </div>
            <div className={s.inputWrapper}>
                <div className={s.inputData}>
                    <input type="text" required value={newPostMessageBody} onChange={onNewPostMessageChange}></input>
                    <div className={s.underline}></div>
                    <label>Write Some...</label>
                </div>
            </div>
            <div className={s.buttonContainer}>
                <div>
                    <button className={s.button} onClick={onSendPOstClick}><span>Post</span></button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>

        </div>

    )
}
export default Myposts;