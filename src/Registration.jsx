import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from './actions/users';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import UserService from './services/userService';

const Registration = () => {
    const dispatch =useDispatch()
    const [form,setForm] = useState({})
    const [cookies, setCookie] = useCookies([]);
    const navigate = useNavigate();
    // useLayoutEffect(()=>{
    // })
    async function handleRegister() {
        await dispatch(createUser(form.username, form.password, form.email));
    }
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <div className="main">
      <p className="sign" align="center">
        Sign in
      </p>
      <form className="form1">
      {/* setForm( {...form,event.target.name:event.target.value}) */}      
        <input className="username" onChange={(e)=>{ setForm({...form,[e.target.name]:e.target.value}) }} type="text" name="username" placeholder="Username" />
        <input className="password" type="password" onChange={(e)=>{ setForm({...form,[e.target.name]:e.target.value}) }} name="password" placeholder="Password" />
        <input className="password" type="password" onChange={(e)=>{ setForm({...form,[e.target.name]:e.target.value}) }} name="email" placeholder="email" />
        <a href="#" onClick={handleRegister} className="submit anchor" align="center">
          Register
        </a>
        { JSON.stringify(form)}
        <p className="forgot" align="center">
          <a href="/#">Forgot Password? </a>
        </p>
        <p className="text-center"><Link to="/register">Click here to create new account</Link></p>
      </form>
    </div>
        </>
    );
};

export default Registration;