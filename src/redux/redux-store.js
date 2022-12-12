import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendListReducer from "./friend-list-reducer";
import usersReducer from "./users-reducer";

let reducersBox = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogsReducer,
    friendList: friendListReducer,
    usersPage: usersReducer,
});

let store = createStore(reducersBox);
window.store = store;

export default store;