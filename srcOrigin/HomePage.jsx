import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { retieveUsers } from './actions/users';
import { Link } from 'react-router-dom';
import './Form.css'

const HomePage = () => {
    const [state, setState] = useState({});
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        getUsers()
        console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
    },[])
    async function getUsers() {
        let abc = await dispatch(retieveUsers())
        console.log(abc);
        setState(abc);
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">

                        <Link to="/getStoreData">Store Data</Link>
                        <Link to="/login">Login</Link>
                        HomePage
                    </div>
                    {/* <div className="col">{state.payload.data.Data[0].username}</div> */}
                </div>
            </div>
        </>
    );
};

export default HomePage;