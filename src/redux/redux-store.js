import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendListReducer from "./friend-list-reducer";

let reducersBox = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogsReducer,
    friendList: friendListReducer,
});

let store = createStore(reducersBox);

export default store;