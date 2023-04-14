import { RETRIVE_ALL_USERS,USERS_LOGIN_DATA } from "../actions/type.js"
const initialState = {}
console.log("user reducer called");
const usersReducer = (users = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case RETRIVE_ALL_USERS:
            console.log("RETRIVE_ALL_USERS");
            return { ...payload, isLoaded: false }
        case USERS_LOGIN_DATA:
            console.log("USERS_LOGIN_DATA");
            return { ...payload }
        default:
            return users
    }
}
export const selectUser = (state) => state.users

export default usersReducer