import React, { useEffect, useState } from "react";
import List from "./PharmacyTable";
import ReactApexChart from 'react-apexcharts';
import axios from "axios";
import './style.css'
import URL from './../../../BaseUrl/BaseUrl';
import { toast } from "react-toastify";

function Pharmacy() {
    const [pharmacy, setPharmacy] = useState([])
    const [blocked, setBlocked] = useState([])
    console.log(pharmacy);
    useEffect(() => {
        const header = {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'

        }
        axios.get(`${URL}pharmacy/adminPanel`, { headers: header }).then((res) => {

            setPharmacy(res.data.pharmacyList
            )
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    function fn_handleBlock(id, blockedStatus) {
        const header = {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'

        }
        axios.put(`${URL}pharmacy/adminPanel/setBlock/${id}`, { block: blockedStatus }, { headers: header }).then((res) => {
            const allPharmacy = [...pharmacy]
            const index = allPharmacy.findIndex(item => item?._id === id)
            allPharmacy[index].blocked = !blockedStatus
            setPharmacy(allPharmacy)
            toast.success("Success")
        }).catch((err) => {
            console.log(err);
            toast.error("Error")
        })
        // axios.get(`${URL}pharmacy/adminPanel`, { headers: header }).then((res) => {

        //     setPharmacy(res.data.pharmacyList
        //     )
        // }).catch((err) => {
        //     console.log(err);
        // })
    }




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
            <div className="container-fluid">
                <div className="row mt-4">
                    <h6>Pharmacy</h6>
                    <div className="col-md-12 ">

                        <div className="dash6">
                            <div className="dash5">
                                <div className="dash3" >
                                    <i class="fa-solid fa-house"
                                    ></i>
                                </div>
                                <div className="dash4">
                                    <p>Pharmacies<br></br><span style={{ display: "flex", justifyContent: "center" }}>{pharmacy?.length}</span></p>

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
                    <div className="col-md-6 p-3" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                        <div className="d-flex">
                            <h6>Pharmacy List:</h6>
                            {/* <div className="small-input ">
                                <input type="text" className="px-3 " placeholder="Search..." />
                                <i className="fa-solid fa-search"></i>
                            </div> */}
                        </div>
                        <table className="w-100 my-table" >
                            <tr style={{ border: '1px solid black' }}>
                                <th>#</th>
                                <th>Pharmacy Name</th>
                                <th>Phone Number</th>
                                <th>Location</th>
                                <th>Action</th>
                            </tr>
                            {pharmacy?.slice(0, 7).map((item, i) => (

                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>{item.City}</td>
                                    <td className="blockBtn_wrapper">
                                        <div>


                                            <button style={{ background: (item?.blocked) && "red", color: (item?.blocked) && "#fff" }} onClick={() => fn_handleBlock(item?._id, item?.blocked)}>Block</button>
                                            <button style={{ background: (!item?.blocked) && "green", color: (!item?.blocked) && "#fff" }} onClick={() => fn_handleBlock(item?._id, item?.blocked)}>Unblock</button>

                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
                <div className="row mt-4">
                    <List pharmacy={pharmacy} />

                </div>
            </div >

        </>
    )
}

export default Pharmacy;
