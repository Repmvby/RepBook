const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Neo'},
        {id: 3, name: 'Trinity'},
        {id: 4, name: 'Natstya'},
        {id: 5, name: 'Morpheus'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Fuck You!'},
        {id: 3, message: 'Lets go'},
        {id: 4, message: 'Holy Loly'},
    ],
    newMessageBody: '',
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages]
            let body = state.newMessageBody;
            stateCopy.messages.push({id: 6, message: body});
            stateCopy.newMessageBody = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_BODY : {
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        default:
            return state;
    }

}


export const newMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text})


export default dialogsReducer;