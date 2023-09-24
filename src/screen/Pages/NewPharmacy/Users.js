import React from "react";
import List from "./UserTable";



function Users() {
    
    return (
        <>
            <h5 style={{ padding: "10px" }}>Users <i class="fa-solid fa-people-group "></i></h5>
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-md-12">

                        <div className="dash6">
                            <div className="dash5">
                                <div className="dash3" >
                                    <i class="fa-solid fa-people-group " style={{ backgroundColor: "#ed7016" }}></i>
                                </div>
                                <div className="dash4">
                                    <p>Users<br></br><span style={{ display: "flex", justifyContent: "center" }}>129</span></p>

                                </div>
                            </div>

                            <div className="dash1" >
                                <div className="dash2">
                                    <img src={require("../../../assets/images/3.jpeg")} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <List />

                </div>
            </div>

        </>
    )
}

export default Users;
