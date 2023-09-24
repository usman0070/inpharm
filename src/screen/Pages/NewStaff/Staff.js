import React, { useState, useEffect } from "react";
import List from "./staffTable";
import axios from "axios";
import URL from '../../../BaseUrl/BaseUrl'
function NewStaff() {
    const [admin, setAdmin] = useState([])
    useEffect(() => {
        async function test() {
            const header = {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            }
            axios.get(`${URL}admin/getAll`, { headers: header }).then((res) => {
                setAdmin(res.data.message)

            }).catch((err) => {
                console.log(err);
            })

        }

        test()
    }, [])
    return (
        <>
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-md-12">


                        <div className="dash6">
                            <div className="dash5">
                                <div className="dash3" >
                                    <i class="fa-solid fa-house"
                                    ></i>
                                </div>
                                <div className="dash4">
                                    <p>Staff<br></br><span style={{ display: "flex", justifyContent: "center" }}>{admin?.length}</span></p>

                                </div>
                            </div>

                            <div className="dash1" >
                                <div className="dash2">
                                    <img src={require("../../../assets/images/1.jpeg")} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <List admin={admin} />

                </div>

            </div>

        </>
    )

}

export default NewStaff;
