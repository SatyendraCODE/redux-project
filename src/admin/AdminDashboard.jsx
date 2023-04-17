import React, { useLayoutEffect, useState } from 'react';
import NestedList from './sidebar';
import AdminHeader from './AdminHeader';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { retieveUsers } from '../actions/users';

const AdminDashboard = () => {
  const dispatch = useDispatch();

//   useLayoutEffect( () => {
//     console.log("called dash");
//     fetchAllPostApi()
//     // await fetchAllPostApi()
// }, [])

//   async function fetchAllPostApi(params) {
//     console.log("called fetchAllPostApi dash");
//     // console.log("callde fetchAllPostApi");
//     // const fetchData = await axios.get('http://localhost:5000/posts')
//     // dispatch(retieveUsers());
//   }
  return (
    <>
      <div className="container-fuild">
        <div className="row" style={{paddingLeft:"0px",paddingRight:"0px"}}>
          <div className="col-2" style={{paddingRight:"0px"}}>
            <NestedList />
          </div>
          <div className="col-10" style={{paddingLeft:"0px",paddingRight:"0px"}}>

            <AdminHeader />
            <div className="container">
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;