import httpanything from "./../http-common.jsx";
const getAll = async ()=>{
    return httpanything.get("http://justjayapi.000webhostapp.com/allusers")
    // const response = await fetch('http://jigar93776.pythonanywhere.com/item/', {mode:'cors'});
    // return response;
}
// const getLogin = async ()=>{
//     return httpanything.get("http://justjayapi.000webhostapp.com/allusers")
//     // const response = await fetch('http://jigar93776.pythonanywhere.com/item/', {mode:'cors'});
//     // return response;
// }
const Registration = async ()=>{
    return httpanything.get("http://justjayapi.000webhostapp.com/registration")
    // const response = await fetch('http://jigar93776.pythonanywhere.com/item/', {mode:'cors'});
    // return response;
}
const getDatabyId = async (id)=>{
    return httpanything.get(`http://justjayapi.000webhostapp.com/userdatabyidgetmethod?id=${id}`)
}
const updateUserData = async ({id,username,password,gender,email})=>{
    return httpanything.get(`https://justjayapi.000webhostapp.com/updateusergetmethod?id=${id}&username=${username}&password=${password}&gender=${gender}&email=${email}`)
}
const deleteUserData = async (id)=>{
    return httpanything.get(`http://justjayapi.000webhostapp.com/deleteusergetmethod?id=${id}`)
}
const UserService = {
    getAll,
    Registration,
    getDatabyId,
    updateUserData,
    deleteUserData
}
export default UserService;