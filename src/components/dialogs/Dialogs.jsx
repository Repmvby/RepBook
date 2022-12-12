import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";


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
        props.updateNewMessageText(body)
    }
    let onSendMessageClick = () => {
        props.AddNewMessage();

    }

    return (
        <div className={s.dialogWrapper}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.messageContainer}>
                    <div className={s.inputWrapper}>
                        <div className={s.inputData}>
                            <input type="text" required value={newMessageBody} onChange={onNewMessageChange}></input>
                            <div className={s.underline}></div>
                            <label>Write Some...</label>
                        </div>
                    </div>
                    <div className={s.buttonContainer}>
                        <div>
                            <button className={s.button} onClick={onSendMessageClick}><span>Send</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Dialogs;