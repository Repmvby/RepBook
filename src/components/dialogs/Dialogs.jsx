import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {newMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {


    let dialogsElements = props.dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id}/>
    })

    let messagesElements = props.messages.map(m => {
        return <Message message={m.message} id={m.id}/>
    })

    let newMessageBody = props.newMessageBody;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageActionCreator(body))

    }
    let onSendMessageClick = () => {
        props.dispatch(newMessageActionCreator())

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
                        <textarea value={newMessageBody} onChange={onNewMessageChange}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Sent message</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Dialogs;