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

const UserService = {
    getAll,
    Registration
}
export default UserService;