// import {combinedReducers} from "redux";
import users from "./users.jsx"
// import {createStore, combinedReducers, applyMiddleware, compose} from 'redux';
import { combineReducers } from 'redux'
// console.log("reducer called");
export default combineReducers({
    users
})