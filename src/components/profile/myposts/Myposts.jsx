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

    let textAreaValue = React.createRef();

    let addPost = () => {
        let postText = textAreaValue.current.value
        props.addPost(postText)
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
                <textarea ref={textAreaValue}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Post</button>
            </div>
            <div>
                {postsElements}
            </div>

        </div>

    )
}
export default Myposts;