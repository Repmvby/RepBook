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
        case UPDATE_ADD_MESSAGE_BODY : {
             let stateCopy = {...state}
              stateCopy.newPostBody = action.body;
              return stateCopy;

        }
        case ADD_POST : {
           let stateCopy = {...state};
            stateCopy.posts = [...state.posts]
            let body = state.newPostBody;
            stateCopy.posts.push({id: 6, message: body, likesCount: 0});
            stateCopy.newPostBody = '';
            return stateCopy;
        }

        default:
            return state;
    }
}


    export const addPostActionCreator = () => ({type: ADD_POST})
    export const updatePostMessageBodyActionCreator = (text) => ({type: UPDATE_ADD_MESSAGE_BODY, body: text})

    export default profileReducer;