import React, { useState, useEffect } from "react";
import List2 from "./OrderTable2";
import axios from "axios";
import URL from "../../../BaseUrl/BaseUrl";

function Orders() {

    const [orders, setOrders] = useState([])
    const [filterData, setFilterData] = useState([])
    const [historyOrders, setHistoryOrders] = useState([])
    const [pickupOrderss, setPickupOrder] = useState([])
    const [pickupPending, setPickupPendingOrders] = useState([])
    const [toggle, setToggle] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    // console.log(orders);
    const getData = () => {
        const uploadData = {
            whichOrder: 'pending',
            orderMethod: 'Delivery'
        }
        setIsLoading(true)
        axios.post(`${URL}pharmacyOrder/adminPanel`, uploadData).then((res) => {

            setOrders(res.data)
            setFilterData(res.data.order1)
        }).catch((err) => {
            setIsLoading(false)
        }).finally(err => {
            setIsLoading(false)
        })
    }

    const getData1 = () => {
        const uploadData = {
            orderMethod: 'Delivery'
        }

        setIsLoading(true)
        axios.post(`${URL}pharmacyOrder/adminPanel`, uploadData).then((res) => {
            setHistoryOrders(res.data.order1)
            setFilterData(res.data.order1)
        }).catch((err) => {
            console.log(err);
        }).finally(err => {
            setIsLoading(false)
        })
    }

    const pickupOrders = () => {
        const uploadData = {
            orderMethod: 'Pickup'
        }
        setIsLoading(true)
        axios.post(`${URL}pharmacyOrder/adminPanel`, uploadData).then((res) => {
            // console.log(res);
            setPickupOrder(res.data.order1)
            setFilterData(res.data.order1)
        }).catch((err) => {
            console.log(err);
        }).finally(err => {
            setIsLoading(false)
        })
    }

    const pickupPendingOrders = () => {
        const uploadData = {
            whichOrder: 'pending',
            orderMethod: 'Pickup'
        }
        setIsLoading(true)
        axios.post(`${URL}pharmacyOrder/adminPanel`, uploadData).then((res) => {

            setPickupPendingOrders(res.data.order1)
            setFilterData(res.data.order1)
        }).catch((err) => {
            console.log(err);
        }).finally(err => {
            setIsLoading(false)
        })
    }
    useEffect(() => {
        // getData();
        // getData1();
        // pickupOrders()
        // pickupPendingOrders()
    }, [])


    // console.log(toggle);

    return (
        <>
            <div className="container-fluid">
                <div className="row mt-4">
                    <h6>Orders</h6>
                    <div className="col-md-6 ">

                        <div className="dash6">
                            <div className="dash5">
                                <div className="dash3" >
                                    <i class="fa-solid fa-scissors" style={{ backgroundColor: "#259351" }}></i>
                                </div>
                                <div className="dash4">
                                    <p>Pickup Orders<br></br><span style={{ display: "flex", justifyContent: "center" }}>
                                        {/* {orders.pickUpOrdersCount} */}
                                        {filterData.length}
                                    </span></p>

                                </div>
                            </div>

                            <div className="dash1" >
                                <div className="dash2">
                                    <img src={require("../../../assets/images/5.jpeg")} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6 ">

                        <div className="dash6">
                            <div className="dash5">
                                <div className="dash3" >

                                    <i class="fa-solid fa-calendar-day" style={{ backgroundColor: "#259351" }}></i>
                                </div>
                                < div className="dash4">
                                    <p>Pending Orders<br></br>
                                        {/* orders.deliveryOrdersCount  */}
                                        <span style={{ display: "flex", justifyContent: "center" }}>
                                            {
                                                filterData.filter((item) => item.OrderStatus === 'pending').length
                                            }</span></p>

                                </div>
                            </div>

                            <div className="dash1" >
                                <div className="dash2">
                                    <img src={require("../../../assets/images/5.jpeg")} alt="" />
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                <div className="row mt-4">
                    <List2
                        order={orders.order1}
                        historyOrders={historyOrders}
                        pickupOrder={pickupOrderss}
                        getData={getData}
                        pickupPending={pickupPending}
                        getData1={getData1}
                        pickupOrders={pickupOrders}
                        pickupPendingOrders={pickupPendingOrders}
                        isLoading={isLoading}
                        setToggle={setToggle}
                        filterData={filterData}
                        setFilterData={setFilterData}

                    />

                </div>
            </div>

        </>
    )


}

export default Orders;
