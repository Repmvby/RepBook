import {rerenderEntireTree} from "../render";

let state = {
    dialogsData: {
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
    },
    profileData: {
        posts: [
            {id: 1, message: 'Hey,lalaley', likesCount: 2},
            {id: 2, message: 'Matrix has you', likesCount: 45},
            {id: 3, message: 'Holy shit!', likesCount: 4},

        ],
    },
    friendList: {
        friends: [
            {name: 'Dima', id: 1},
            {name: 'Oleg', id: 2},
            {name: 'Petya', id: 3},
            {name: 'Vasya', id: 4},
        ]
    }

};
export let addPost = (message) => {

    let newPost = {
        id: 1,
        message: message,
        likesCount: 0,
    }
    state.profileData.posts.push(newPost);
    rerenderEntireTree(state);
};

export let addMessage = (text) => {
    let newMessage = {
        id: 5,
        message: text,
    }
    state.dialogsData.messages.push(newMessage);
    rerenderEntireTree(state);
};
export default state;