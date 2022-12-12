let initialState = {
    friends: [
        {name: 'Dima', id: 1},
        {name: 'Oleg', id: 2},
        {name: 'Petya', id: 3},
        {name: 'Vasya', id: 4},

    ]
}
const friendListReducer = (state = initialState, action) => {
    let stateCopy = {...state}
    return stateCopy
}
export default friendListReducer;