import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendListReducer from "./friend-list-reducer";


let store = {
    _state: {
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
            newMessageBody:'',
        },
        profileData: {
            posts: [
                {id: 1, message: 'Hey,lalaley', likesCount: 2},
                {id: 2, message: 'Matrix has you', likesCount: 45},
                {id: 3, message: 'Holy shit!', likesCount: 4},

            ],
            newPostBody: '',
        },
        friendList: {
            friends: [
                {name: 'Dima', id: 1},
                {name: 'Oleg', id: 2},
                {name: 'Petya', id: 3},
                {name: 'Vasya', id: 4},
            ]
        },
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch (action) {
        this._state.profileData = profileReducer(this._state.profileData,action)
        this._state.dialogsData = dialogsReducer(this._state.dialogsData,action)
        this._state.friendList = friendListReducer(this._state.friendList,action)
        this._callSubscriber(this._state)

    }
};

export default store;
window.store = store;
