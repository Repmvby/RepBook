const ADD_POST = 'ADD-POST';
const UPDATE_ADD_MESSAGE_BODY = 'UPDATE-ADD-MESSAGE-BODY';
const SET_USER_PROFILE ='SET-USER-PROFILE'
const LOOKING_FOR_A_JOB = 'LOOKING_FOR_A_JOB';
const HIRED_TO_DO_JOB = 'HIRED-TO-DO-JOB';

let initialState = {
    posts: [
        {id: 1, message: 'Hey,lalaley', likesCount: 2},
        {id: 2, message: 'Matrix has you', likesCount: 45},
        {id: 3, message: 'Holy shit!', likesCount: 4},

    ],
    newPostBody: '',
    profile: null,
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
        case SET_USER_PROFILE: {
            return {...state,profile: action.profile}
        }
        case LOOKING_FOR_A_JOB: {
            return {...state,profile: {...state.profile,lookingForAJob: true}}
        }
        case HIRED_TO_DO_JOB: {
            return {...state,profile: {...state.profile,lookingForAJob: false}}
        }

        default:
            return state;
    }
}


    export const addPostActionCreator = () => ({type: ADD_POST})
    export const updatePostMessageBodyActionCreator = (text) => ({type: UPDATE_ADD_MESSAGE_BODY, body: text})
    export const setUserProfile = (profile) => ({type: SET_USER_PROFILE , profile})
    export const setLookingForAJob = () => ({type: LOOKING_FOR_A_JOB})
    export const setHiredToDoJob = () => ({type: HIRED_TO_DO_JOB})

    export default profileReducer;