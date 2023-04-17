import userService from "./../services/userService.js";
import { RETRIVE_ALL_USERS } from "../actions/type.js"

export const retieveUsers = ()=> async(dispatch)=> {
    console.log("Called actions ret users");
    try {
        const ResData = await userService.getAll()
        return dispatch({type:"RETRIVE_ALL_USERS",payload:ResData})
        // return dispatch({type:RETRIVE_ALL_USERS,payload:ResData})
        // console.log(ResData);
    } catch (error) {
            console.log(error);
    }
}
export const loginUsers = (UserLoginData)=> async(dispatch)=> {
    try {
        // const ResData = await userService.getLogin()
        return dispatch({type:"USERS_LOGIN_DATA",payload:UserLoginData})
        // return dispatch({type:RETRIVE_ALL_USERS,payload:ResData})
        // console.log(ResData);
    } catch (error) {
            console.log(error);
    }   
}
export const userDataGetByID = (UserId)=> async(dispatch)=> {
    try {
        const ResData = await userService.getDatabyId(UserId)
        return dispatch({type:"USERS_ID",payload:ResData})
        // return dispatch({type:RETRIVE_ALL_USERS,payload:ResData})
        // console.log(ResData);
    } catch (error) {
            console.log(error);
    }
}
export const userDataUpdate = (obj)=> async(dispatch)=> {
    try {
        const ResData = await userService.updateUserData(obj)
        return dispatch({type:"USERS_ID",payload:ResData})
        // return dispatch({type:RETRIVE_ALL_USERS,payload:ResData})
        // console.log(ResData);
    } catch (error) {
            console.log(error);
    }
}
export const deleteUser = (UserId)=> async(dispatch)=> {
    try {
        const ResData = await userService.deleteUserData(UserId)
        return dispatch({type:"DELETE_USERS",payload:ResData})
        // return dispatch({type:RETRIVE_ALL_USERS,payload:ResData})
        // console.log(ResData);
    } catch (error) {
            console.log(error);
    }
}