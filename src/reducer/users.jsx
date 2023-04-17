import { RETRIVE_ALL_USERS, USERS_LOGIN_DATA, CREATE_USER, USERS_ID, DELETE_USERS } from "../actions/type.js";
const initialState = {};
console.log("user reducer called");
const usersReducer = (users = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case RETRIVE_ALL_USERS:
      console.log("RETRIVE_ALL_USERS");
      return { ...payload, isLoaded: false };
    case USERS_LOGIN_DATA:
      console.log("USERS_LOGIN_DATA");
      return { ...payload };
    case CREATE_USER:
      console.log("CREATE_USER");
      return { ...payload };
    case USERS_ID:
      console.log("USERS_ID");
      return { ...payload };
      case DELETE_USERS:
      console.log("DELETE_USERS");
      return { ...payload };
    default:
      return users;
  }
};
export const selectUser = (state) => state.users;

export default usersReducer;
