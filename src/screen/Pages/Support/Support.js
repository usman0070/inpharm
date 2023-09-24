import React from "react"
import List from "./SupportTable";

function Support(){
    return(
        <>
     <h5 style={{padding:"10px"}}>Support   <i class="fa-solid fa-fire "></i></h5>
        <div className="container-fluid">
            <div className="row mt-4">
<List/>
            </div>
        </div>
        
        </>
    )
}

export default Support;