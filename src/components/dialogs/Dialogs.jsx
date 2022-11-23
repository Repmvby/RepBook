import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {


    let dialogsElements = props.dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id}/>
    })

    let messagesElements = props.messages.map(m => {
        return <Message message={m.message} id={m.id}/>
    })

    let messageAreaRef = React.createRef();

    let createNewMessage = () => {
        let messageText = messageAreaRef.current.value
        props.addMessage(messageText)
    }

    return (
        <div className={s.dialogWrapper}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.buttonContainer}>
                    <div>
                        <textarea ref={messageAreaRef}></textarea>
                    </div>
                    <div>
                        <button onClick={createNewMessage}>Sent message</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Dialogs;