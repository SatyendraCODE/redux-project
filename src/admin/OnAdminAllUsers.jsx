import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminAllUsers = () => {
  const [allPosts, setAllPosts] = useState({});
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    console.log("called");
    fetchAllPostApi();
  }, [loader]);

  const editdata = (event) => {
    console.log(event.currentTarget);
    console.log(event.currentTarget.dataset);
    console.log(event.currentTarget.dataset.id);
    console.log(event);
    navigate(`/admin/edituser/${event.currentTarget.dataset.id}`);
    // let userId = event.currentTarget.dataset.value;

    console.log("called edit Data");
  };
  const deletedata = async (event) => {
    const fetchData = await axios
      .get(
        `http://justjayapi.000webhostapp.com/deleteusergetmethod?id=${event.currentTarget.dataset.id}`
      )
      .then(function (response) {
        console.log(response.data.Code);
        if (response.data.Code == 1) {
          setLoader(false);
          console.log("inside if");
          navigate("/admin/allusers");
        } else {
          console.log("inside else");
          alert("Error while updating");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // const HTMLList =""
  async function fetchAllPostApi(params) {
    const fetchData = await axios
      .get("http://justjayapi.000webhostapp.com/allusers")
      .then(function (response) {
        console.log(response.data.Data);

        const HTMLList = response.data.Data.map((key, val) => {
          return (
            <tr key={val}>
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
          )})

          setLoader(true);
          setAllPosts(HTMLList)
          // console.log("allposts : ",allPosts);
      })
      .catch(function (error) {
        // handle error
        console.log("called catch");
        console.log(error);
      })
      .finally(function () {
        // always executed
        console.log("called finally");
      });
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
                {allPosts}
                {/* {JSON.stringify(allPosts)} */}
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
