import React from "react";
import List from "./Table";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactApexChart from 'react-apexcharts';
import URL from "../../../BaseUrl/BaseUrl";
function DashMain() {


    const [dData, setdData] = useState([]);
    const [pharmacy, setPharmacy] = useState([])

    useEffect(() => {
        async function test() {
            const header = {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            }
            axios.get(`${URL}dashboard/adminPanel`, { headers: header }).then((res) => {
                setdData(res.data)
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })

        }
        test()
    }, [])
    useEffect(() => {
        const header = {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'

        }
        axios.get(`${URL}pharmacy/adminPanel`, { headers: header }).then((res) => {
            console.log(res);
            setPharmacy(res.data.pharmacyList
            )
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const [chartData, setChartData] = useState({
        series: [
            {
                name: 'user',
                data: [31, 40, 28, 51, 42, 109, 100],
            },
            {
                name: 'series2',
                data: [11, 32, 45, 32, 34, 52, 41],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'area',
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '2018-09-19T00:00:00.000Z',
                    '2018-09-19T01:30:00.000Z',
                    '2018-09-19T02:30:00.000Z',
                    '2018-09-19T03:30:00.000Z',
                    '2018-09-19T04:30:00.000Z',
                    '2018-09-19T05:30:00.000Z',
                    '2018-09-19T06:30:00.000Z',
                ],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm',
                },
            },
        },
    });

    return (
        <>
            <div className="container-fluid p-3">
                <h6>Dashboard-- <i class="fa-solid fa-house" style={{ fontSize: "15px" }}></i></h6>

                <div className="row mt-4">
                    <div className="col-md-3 ">

                        <div className="dash6">
                            <div className="dash5">
                                <div className="dash3" >
                                    <i class="fa-solid fa-house"
                                    ></i>
                                </div>
                                <div className="dash4">
                                    <p>Pharmacies<br></br><span style={{ display: "flex", justifyContent: "center" }}>{dData.pharmaciesCount
                                    }</span></p>

                                </div>
                            </div>

                            <div className="dash1" >
                                <div className="dash2">
                                    <img src={require("../../../assets/images/1.jpeg")} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 ">

                        <div className="dash6">
                            <div className="dash5">
                                <div className="dash3" >
                                    <i class="fa-solid fa-people-group " style={{ backgroundColor: "#ed7016" }}></i>
                                </div>
                                <div className="dash4">
                                    <p>Users<br></br><span style={{ display: "flex", justifyContent: "center" }}>{dData.newUserCount}</span></p>

                                </div>
                            </div>

                            <div className="dash1" >
                                <div className="dash2">
                                    <img src={require("../../../assets/images/3.jpeg")} />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-3 ">

                        <div className="dash6">
                            <div className="dash5">
                                <div className="dash3" >
                                    <i class="fa-solid fa-scissors" style={{ backgroundColor: "#259351" }}></i>
                                </div>
                                <div className="dash4">
                                    <p>Orders<br></br><span style={{ display: "flex", justifyContent: "center" }}>{dData.ordersCount}</span></p>

                                </div>
                            </div>

                            <div className="dash1" >
                                <div className="dash2">
                                    <img src={require("../../../assets/images/5.jpeg")} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 ">

                        <div className="dash6">
                            <div className="dash5">
                                <div className="dash3" >
                                    <i class="fa-solid fa-arrow-trend-up" style={{ backgroundColor: "#21b7f1" }}></i>
                                </div>
                                <div className="dash4">
                                    <p>Earnings<br></br><span style={{ display: "flex", justifyContent: "center" }}>{dData.earnings}</span></p>

                                </div>
                            </div>

                            <div className="dash1" >
                                <div className="dash2">
                                    <img src={require("../../../assets/images/11.png")} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="row mt-4">
                    <div className="col-md-3 ">

                        <div className="dash6">
                            <div className="dash5">
                                <div className="dash3" >

                                    <i class="fa-solid fa-calendar-day" style={{ backgroundColor: "#259351" }}></i>
                                </div>
                                <div className="dash4">
                                    <p>Pending Orders<br></br><span style={{ display: "flex", justifyContent: "center" }}>{dData.pendingOrdersCount
                                    }</span></p>

                                </div>
                            </div>

                            <div className="dash1" >
                                <div className="dash2">
                                    <img src={require("../../../assets/images/5.jpeg")} />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6 ">

                        <div className="dash6">
                            <div className="dash5">
                                <div className="dash3" >
                                    <i class="fa-solid fa-house " style={{ backgroundColor: "rgb(151 37 37)" }}></i>
                                </div>
                                <div className="dash4">
                                    <p>Pending Sellers<br></br><span style={{ display: "flex", justifyContent: "center" }}>{dData.pendingSellers}</span></p>

                                </div>
                            </div>

                            <div className="dash1" >
                                <div className="dash2">
                                    <img src={require("../../../assets/images/7.jpeg")} />
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="col-md-3 ">

                        <div className="dash6">
                            <div className="dash5">
                                <div className="dash3" >
                                    <i class="fa-solid fa-house"
                                    ></i>
                                </div>
                                <div className="dash4">
                                    <p>Staff<br></br><span style={{ display: "flex", justifyContent: "center" }}>{dData.staffCount
                                    }</span></p>

                                </div>
                            </div>

                            <div className="dash1" >
                                <div className="dash2">
                                    <img src={require("../../../assets/images/2.jpeg")} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chart */}
                <div className="row justify-content-around p-3">
                    <div className="col-md-5" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                        <div id="chart">
                            <ReactApexChart
                                options={chartData.options}
                                series={chartData.series}
                                type="area"
                                height={350}
                            />
                        </div>
                    </div>
                    <div className="col-md-6 p-3" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', maxHeight: "370px", overflowY: "scroll" }}>
                        <div className="d-flex">
                            <p>Pharmacy List</p>
                            {/* <div className="small-input">
                                <input type="text" className="px-3" placeholder="Search..." />
                                <i className="fa-solid fa-search"></i>
                            </div> */}
                        </div>
                        <table className="w-100 my-table" id="my-table">
                            <tr style={{ border: '1px solid black' }}>
                                <th>#</th>
                                <th>Pharmacy Name</th>
                                <th>Phone Number</th>
                                <th>Location</th>
                            </tr>

                            {pharmacy?.map((item, i) => (
                                <>

                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.phoneNumber}</td>
                                        <td>{item.City}</td>
                                    </tr>

                                </>
                            ))}

                        </table>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-12">

                        <List

                        />
                    </div>
                </div>


            </div>


        </>
    )
}

export default DashMain