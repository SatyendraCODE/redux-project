import React, { useEffect, useLayoutEffect, useState } from "react";
import axios, { all } from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { retieveUsers, deleteUser } from "../actions/users";

const AdminAllUsers = () => {
  const [allPosts, setAllPosts] = useState();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    console.log("called all user");
    fetchAllPostApi();
  }, [loader]);

  const editdata = (event) => {
    navigate(`/admin/edituser/${event.currentTarget.dataset.id}`);
    console.log("called edit Data");
    // console.log("tr key",event.target.parentNode.parentNode.dataset.id);
  };
  const deletedata = async (event) => {
    let delteElementKeyVal = event.target.parentNode.parentNode.dataset.id;
    let fetchData = await dispatch(deleteUser(event.currentTarget.dataset.id));
    // console.log(fetchData.payload.data.Code);
    if (fetchData.payload.data.Code) {
      setAllPosts(allPosts.filter((key) => key.id !== delteElementKeyVal));
      // console.log(allPosts);
      // setLoader(false);
      // navigate("/admin/allusers");
    } else {
      console.log("not deleted");
    }
  };

  // const HTMLList =""
  async function fetchAllPostApi(params) {
    console.log("called printAllPostApi admin");
    setLoader(true);
    let usersData = await dispatch(retieveUsers());
    setAllPosts(usersData);
    console.log(allPosts);
  }
  const apiLoader = () => {
    // console.log("jlkfdj");
    setLoader(true);
  };
  // const getTarget = (e) => {
  //   console.log(e.currentTarget);
  // }
  return (
    <>
      <div className="row">
        <div className="col my-3">
          <h2 className="text-center">All Users</h2>
        </div>
      </div>
      {loader ? (
        <div className="row">
          <div className="col-8 offset-2">
            <table className="table table-borderd table-striped">
              <thead className="bg-dark text-light">
                <tr>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* {allPosts.payload.data.Data.map((key, val) => {
                  return (
                    <tr key={val} data-id={val}>
                      <td>{key.username}</td>
                      <td>{key.email}</td>
                      <td>
                        <i
                          className="fas fa-edit"
                          data-id={key.id}
                          onClick={editdata}
                        ></i>
                        &nbsp;
                        <i
                          className="fa-sharp fa-solid fa-trash"
                          data-id={key.id}
                          onClick={deletedata}
                        ></i>
                      </td>
                    </tr>
                  );
                })} */}
                {/* <input type="text" name="" id="" onClick={getTarget} /> */}
                {JSON.stringify(allPosts)}
                <button onClick={()=>console.log(allPosts)}>check</button>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default AdminAllUsers;
