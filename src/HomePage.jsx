import React, { useEffect, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { retieveUsers } from './actions/users';
import { Link } from 'react-router-dom';
import './Form.css'

const HomePage = () => {
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        getUsers()
    })
    async function getUsers() {
        let abc = await dispatch(retieveUsers())
        console.log(abc);
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
                </div>
            </div>
        </>
    );
};

export default HomePage;