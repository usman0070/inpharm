import { useState, useEffect } from "react";
import List from "./cityTable";


function City() {
    return (
        <>
            <div className="container-fluid">
                <div className="row mt-4">
                    <h6>City <i class="fa-solid fa-city" style={{ fontSize: "15px" }}></i></h6>
                    <List />

                </div>
            </div>

        </>

    )


}
export default City;
