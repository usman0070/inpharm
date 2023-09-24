import React, { useState, useEffect } from "react";
import List from "./NotificatinsTable";

function Notifications() {
return(
    <>
    <div className="container-fluid">
<div className="row mt-4">
<h6>Notifications</h6>
    <div className="col-md-12">


<div className="dash6">
<div className="dash5">
<div className="dash3" >
    <i class="fa-solid fa-house"
    ></i>
</div>
<div className="dash4">
    <p>Notifications<br></br><span style={{display:"flex",justifyContent:"center"}}>80</span></p>
 
</div>
</div>

<div className="dash1" >
    <div className="dash2">
        <img src={require("../../../assets/images/1.jpeg")} />
    </div>
</div>
</div>
</div>
    </div>

    <div className="row mt-4">
            <List/>

            </div>

</div>

    </>
)

}

export default Notifications;
