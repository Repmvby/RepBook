import React from 'react';
import {newMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsData.dialogs,
        messages: state.dialogsData.messages,
        newMessageBody: state.dialogsData.newMessageBody,

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (body) => {
            dispatch(updateNewMessageActionCreator(body))
        },
        AddNewMessage: () => {
            dispatch(newMessageActionCreator())
        },
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;