import React from "react";
import {connect} from "react-redux";
import Users from "./users";
import {followAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        follow:(userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
        dispatch(setUsersAC(users))
        }
    }

}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default  UsersContainer;