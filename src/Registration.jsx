import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUsers } from './actions/users';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import UserService from './services/userService';

const HomePage = () => {
    const dispatch =useDispatch()
    const [form,setForm] = useState({})
    const [cookies, setCookie] = useCookies([]);
    const navigate = useNavigate();
    // useLayoutEffect(()=>{
    // })
    async function checkLogin() {
        // UserService.Registration
    }
    return (
        <>
            <Link to="/registration">Registration</Link>
            <div className="main">
      <p className="sign" align="center">
        Sign in
      </p>
      <form className="form1">
      {/* setForm( {...form,event.target.name:event.target.value}) */}
        <input className="username" onChange={(e)=>{ setForm({...form,[e.target.name]:e.target.value}) }} type="text" name="username" placeholder="Username" />
        <input className="password" type="password" onChange={(e)=>{ setForm({...form,[e.target.name]:e.target.value}) }} name="password" placeholder="Password" />
        <a href="#" onClick={checkLogin} className="submit anchor" align="center">
          Sign in
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

export default HomePage;