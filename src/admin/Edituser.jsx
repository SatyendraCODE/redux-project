import axios from 'axios';
import React, { useLayoutEffect, useState } from 'react';
import { json, useNavigate, useParams } from 'react-router-dom';

const Edituser = () => {
    const [loader, setLoader] = useState(false);
    const [userData, setUserData] = useState({});
    let { userId } = useParams();
    const navigate = useNavigate();

    useLayoutEffect(() => {
        fetchUserDataByIdApi()
    }, [loader])
    async function fetchUserDataByIdApi(params) {
        const fetchData = await axios.get(`http://justjayapi.000webhostapp.com/userdatabyidgetmethod?id=${userId}`)
            .then(function (response) {
                setLoader(true)
                setUserData(response.data.Data[0])
                //   console.log(response);
                //   console.log(response.data);
                //   console.log(response.data.Data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    async function updateUserData(event) {
        event.preventDefault();
        console.log("called update");
        console.log("userData ", userData);
        // await fetch(`https://justjayapi.000webhostapp.com/updateuser`,{
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //       },
        //       method: "POST",
        //       body: JSON.stringify(userData)
        // }).then((res) => res.json()).then((response) => {
        //     console.log(response);
        // })
        await fetch(`https://justjayapi.000webhostapp.com/updateusergetmethod?id=${userData.id}&username=${userData.username}&password=${userData.password}&gender=${userData.gender}&email=${userData.email}`).then((res) => res.json()).then((response) => {
            if (response.Code == 1) {
                navigate("/admin/allusers")
            } else {
                alert("Error while updating")
            }
        })
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