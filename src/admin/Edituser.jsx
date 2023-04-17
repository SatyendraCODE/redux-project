import axios from 'axios';
import {userDataUpdate, userDataGetByID} from '../actions/users'
import React, { useLayoutEffect, useState } from 'react';
import { json, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../reducer/users';


const Edituser = () => {
    const [loader, setLoader] = useState(false);
    const [userData, setUserData] = useState();
    let { userId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const users = useSelector(selectUser);

    useLayoutEffect(() => {
        getUsers()
    },[loader])
    async function getUsers() {
        let data = await dispatch(userDataGetByID(userId));
        setUserData(data.payload.data.Data[0])
        setLoader(true);

        console.log(data);
    }
    async function updateUserData(event) {
        event.preventDefault();
        console.log("called update");
        console.log("userData ", userData);
        await dispatch(userDataUpdate(userData));
        navigate("/admin/allusers");
    }
    return (
        <>
            {/* <img src="https://media.tenor.com/8ZhQShCQe9UAAAAC/loader.gif" alt="" />        */}
            {loader ? <div className='row'>
                {JSON.stringify(userData)}
                <form className="form1" onSubmit={updateUserData} method='post'>
                    <div className='row mt-5'>
                        <div className="col-6">
                            <input type="text" placeholder='Enter User Name' value={userData.username} className='form-control' name="username" id="username" onChange={(e) => { setUserData({ ...userData, [e.target.name]: e.target.value }) }} />
                        </div>
                        <div className="col-6">
                            <input type="text" placeholder='password' value={userData.password} className='form-control' name="password" id="password" onChange={(e) => { setUserData({ ...userData, [e.target.name]: e.target.value }) }} />
                        </div>
                        <div className="col-6">
                            <input type="text" placeholder='email' value={userData.email} className='form-control' name="email" id="email" onChange={(e) => { setUserData({ ...userData, [e.target.name]: e.target.value }) }} />
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className="col-6">
                            <input type="submit" value="Update" className='btn btn-primary' name="btn-update" id="btn-update" />
                        </div>
                    </div>
                </form>
            </div> : <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'white' }}> <img src="https://media.tenor.com/8ZhQShCQe9UAAAAC/loader.gif" alt="" /> </div>}
        </>
    );
};

export default Edituser;