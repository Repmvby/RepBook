const ADD_POST = 'ADD-POST';
const UPDATE_ADD_MESSAGE_BODY = 'UPDATE-ADD-MESSAGE-BODY';

let initialState = {
    posts: [
        {id: 1, message: 'Hey,lalaley', likesCount: 2},
        {id: 2, message: 'Matrix has you', likesCount: 45},
        {id: 3, message: 'Holy shit!', likesCount: 4},

    ],
    newPostBody: '',
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            let body = state.newPostBody;
            state.newPostBody = '';
            state.posts.push({id: 6, message: body, likesCount: 0});
            return state;
        }
        case UPDATE_ADD_MESSAGE_BODY : {
            state.newPostBody = action.body;
            return state;

        }
        default:
            return state;
    }
}


    export const addPostActionCreator = () => ({type: ADD_POST})
    export const updatePostMessageBodyActionCreator = (text) => ({type: UPDATE_ADD_MESSAGE_BODY, body: text})

    export default profileReducer;