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
    console.log("called layouteffext");
    fetchAllPostApi();
  }, []);

  const editdata = (event) => {
    navigate(`/admin/edituser/${event.currentTarget.dataset.id}`);
    console.log("called edit Data");
    // console.log("tr key",event.target.parentNode.parentNode.dataset.id);
  };
  const deletedata = async (id) => {
    let fetchData = await dispatch(deleteUser(id));
    if (fetchData.payload.data.Code) {
      // console.log(allPosts);
      setAllPosts(
        allPosts.filter((key) => key.id !== id),
        console.log(allPosts)
      );
    } else {
      console.log("not deleted");
    }
  };

  // const HTMLList =""
  async function fetchAllPostApi(params) {
    console.log("called fetchAllPostApi admin");
    let usersData = await dispatch(retieveUsers());
    setAllPosts(() => usersData.payload.data.Data);
    setLoader(true);
  }

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
                {allPosts.map((key, val) => {
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
                          onClick={() => deletedata(key.id)}
                        ></i>
                      </td>
                    </tr>
                  );
                }) ?? "allpost loading"}
                {/* <input type="text" name="" id="" onClick={getTarget} /> */}
                {/* {JSON.stringify(allPosts)} */}
                <tr>
                  <td>
                    <button onClick={() => console.log(allPosts)}>check</button>
                  </td>
                </tr>
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
