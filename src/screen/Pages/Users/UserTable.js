import "../Dashboard/style.css";
import "../Dashboard/secondTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import React, { useEffect, useState } from "react";
import URL from "../../../BaseUrl/BaseUrl";
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const List = ({ usersData, setUsersData }) => {
  const [address, setAddress] = useState([])
  const form = useForm()
  const { control, register, handleSubmit, formState } = form
  const { errors } = formState
  const navigate = useNavigate()


  // all data is stroed in this state


  const [id, setId] = useState([])


  // for fetching all the data
  const getData = async () => {
    const header = {
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      'Accept': 'application/json',
      'Content-Type': "multipart/form-data"

    }

    const res = await axios.get(`${URL}user/adminPanel`, { headers: header })
    const data = res.data.userList

    setUsersData(data)
  }
  useEffect(() => {
    getData()
  }, [])
  const [test, setTest] = useState("")
  const onSubmit = (data) => {

    const header = {
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      'Accept': 'application/json',
      'Content-Type': "application/json"

    }
    axios.post(`${URL}user/adminPanel/create`, data, { headers: header }).then((res) => {
      if (res?.status === 200) {
        toast.success("Create Successfully")
        const userAdd = document.getElementById("userAdd");
        userAdd?.addEventListener("click", function () {
          setTest("modal")
        })
      };
    }).catch((err) => {
      // console.log(err);
    })
  }
  const getId = (data) => {
    setId(() => [...id, data])


  }

  const deleteData = () => {
    const header = {
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      'Accept': 'application/json',
      'Content-Type': "application/json"

    }
    id.map((i, index) => {
      (
        <>
          {
            axios.delete(`${URL}user/adminPanel/delete/${i}`, { headers: header }).then((res) => {

              getData()
              toast.success(res.data.message)
            }).catch((err) => { console.log(err) })}
        </>
      )
    })

  }

  const refreshData = () => {
    getData()

  }
  const fn_handleBlockUser = (e) => {
    console.log(e.target.checked);
  }

  return (
    <section className="section">
      <ToastContainer />
      <TableContainer component={Paper} className="table">
        <div className="d-flex py-2 align-items-center justify-content-between">
          <h3>Customers</h3>
          <div className="input-box">
            <input type="text" className="px-3" placeholder="Search..." />
            <i className="fa-solid fa-search"></i>
          </div>
          <div className="buttons d-flex align-items-center">
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" className="info-button my-btn" >
              <i className="fa-solid fa-plus"></i>
            </button>

            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              style={{ marginTop: '-90px' }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      <div className="d-flex align-items-center">
                        <img src={require('../../../assets/images/avtar.png')} alt="" width='50px' height='50px' style={{ borderRadius: '50%' }} />
                        <p className="ms-3 mb-0">Yumna Zaidi</p>
                      </div>
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="container">
                        <div className="row justify-content-between">
                          <div className="col-md-6">
                            <input
                              type="text"
                              className="form-control"
                              id="referralId"
                              aria-describedby="emailHelp"
                              placeholder="Referral Id"
                              {...register('referralId', {
                                required: {
                                  value: true,
                                  message: 'this field is required'
                                }
                              })}

                            // onChange={(e) => setReferralId(e.target.value)}
                            />
                            <small>{errors.referralId?.message}</small>

                          </div>
                          <div className="col-md-6">
                            <input
                              type="text"
                              className="form-control "
                              id="name"
                              aria-describedby="emailHelp"
                              placeholder="Name"
                              {...register('name', {
                                required: {
                                  value: true,
                                  message: 'this field is required'
                                }
                              })}

                            // onChange={(e) => setName(e.target.value)}
                            />
                            <small>{errors.name?.message}</small>
                          </div>
                        </div>

                        <div className="row mt-3 justify-content-between">
                          <div className="col-md-6">
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              aria-describedby="emailHelp"
                              placeholder="Email"
                              {...register('email', {

                                required: {
                                  value: true,
                                  message: 'this field is required'
                                }
                              })}
                            // onChange={(e) => setEmail(e.target.value)}
                            />
                            <small>{errors.lng?.message}</small>


                          </div>
                          <div className="col-md-6">
                            <input
                              type="text"
                              className="form-control"
                              id="city"
                              aria-describedby="emailHelp"
                              placeholder="City"
                              {...register('city', {
                                required: {
                                  value: true,
                                  message: 'this field is required'
                                }
                              })}
                            // onChange={(e) => setCity(e.target.value)}
                            />
                            <small>{errors.city?.message}</small>

                          </div>

                        </div>

                        <div className="row mt-3 justify-content-between">

                          <div className="col-md-6">
                            <input
                              type="text"
                              className="form-control "
                              id="phoneNo"
                              aria-describedby="emailHelp"
                              placeholder="Phone"
                              {...register('phoneNo', {
                                required: {
                                  value: true,
                                  message: 'this field is required'
                                }
                              })}
                            // onChange={(e) => setPhone(e.target.value)}
                            />
                            <small>{errors.phone?.message}</small>

                          </div>
                          <div className="col-md-6">
                            <input
                              type="text"
                              className="form-control"
                              id="location"
                              aria-describedby="emailHelp"
                              placeholder="Location"
                              {...register('location', {
                                required: {
                                  value: true,
                                  message: 'this field is required'
                                }
                              })}
                            // onChange={(e) => setLoaction(e.target.value)}
                            />
                            <small>{errors.location?.message}</small>


                          </div>
                        </div>



                        <div className="row mt-3 justify-content-between">
                          <div className="col-md-6">
                            <input
                              type="text"
                              className="form-control"
                              id="lat"
                              aria-describedby="emailHelp"
                              placeholder="Lat"
                              {...register('lat', {
                                required: {
                                  value: true,
                                  message: 'this field is required'
                                }
                              })}
                            // onChange={(e) => setLat(e.target.value)}
                            />
                            <small>{errors.lat?.message}</small>


                          </div>
                          <div className="col-md-6">
                            <input
                              type="text"
                              className="form-control "
                              id="lng"
                              aria-describedby="emailHelp"
                              placeholder="Lng"
                              {...register('lng', {
                                required: {
                                  value: true,
                                  message: 'this field is required'
                                }
                              })}
                            // onChange={(e) => setLng(e.target.value)}
                            />
                            <small>{errors.lng?.message}</small>
                          </div>



                        </div>
                      </div>

                      <div className="mt-5 ms-2">
                        <button type="submit" id="userAdd" data-bs-dismiss={test} className="btn btn-danger text-white">Add</button>
                      </div>
                    </form>
                  </div>

                </div>
              </div>
            </div>
            {/**Modal 2 */}
            <div
              className="modal fade"
              id="addressModal"
              tabIndex={-1}
              aria-labelledby="addressModalLabel"
              aria-hidden="true"
              style={{ marginTop: '-90px' }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="addressModalLabel">
                      <div className="d-flex align-items-center">

                        <p className="ms-3 mb-0">Delivery Address</p>
                      </div>
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="container">
                        <div className="row">
                          {address?.map((item, i) => (
                            <React.Fragment key={i}>
                              <h6 style={{ textAlign: "start", color: "blue" }}>Delivery Address {i + 1}</h6>
                              <hr style={{ opacity: 0.4 }} />
                              <div className="col-md-6">
                                Address:<span style={{ color: "#111", fontWeight: "500", marginLeft: "1rem" }}>{item?.address}</span>
                              </div>
                              <div className="col-md-6">
                                Region:<span style={{ color: "#111", fontWeight: "500", marginLeft: "1rem" }}>{item?.regionArea}</span>
                              </div>
                              <div className="col-md-6">
                                Area:<span style={{ color: "#111", fontWeight: "500", marginLeft: "1rem" }}>{item?.area}</span>
                              </div>
                              <div className="col-md-6">
                                City:<span style={{ color: "#111", fontWeight: "500", marginLeft: "1rem" }}>{item?.city}</span>
                              </div>
                            </React.Fragment>
                          ))}

                        </div>

                      </div>

                    </form>
                  </div>

                </div>
              </div>
            </div>

            <button type="button" onClick={() => deleteData(usersData._id)} className="danger-button my-btn" >
              <i className="fa-solid fa-trash"></i>

            </button>
          </div>
        </div>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ background: "#F5F5F7" }}>
              <TableCell className="tableHeadCell">#</TableCell>
              <TableCell className="tableHeadCell">Refferral Id</TableCell>
              <TableCell className="tableHeadCell">Name</TableCell>
              <TableCell className="tableHeadCell">Email</TableCell>
              <TableCell className="tableHeadCell">Delivery Address</TableCell>
              <TableCell className="tableHeadCell">City</TableCell>
              <TableCell className="tableHeadCell">Phone No</TableCell>
              <TableCell className="tableHeadCell">Blocked</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersData.map((usersData, i) => (
              <TableRow key={i} className="tableRow">
                <TableCell className="tableCell">
                  {i + 1}
                </TableCell>
                <TableCell className="tableCell">{usersData.referralId}</TableCell>
                <TableCell className="tableCell">
                  {usersData.name}
                </TableCell>
                <TableCell className="tableCell">{usersData?.email}</TableCell>
                <TableCell className="tableCell">
                  <button className="viewBtn" data-bs-toggle="modal" data-bs-target="#addressModal" style={{ border: "1px solid rgba(0,0,0,0.2)" }}
                    onClick={() => setAddress(usersData?.deliveryAddress)}
                  >View</button>
                  {/* {usersData?.deliveryAddress?.lat} {usersData.deliveryAddress?.lng}
                  {usersData.deliveryAddress?.location} {
                    usersData.deliveryAddress?._id
                  } */}
                </TableCell>
                <TableCell className="tableCell">{usersData.city}</TableCell>
                <TableCell className="tableCell">{usersData.phoneNo}</TableCell>
                <TableCell className="tableCell">
                  <label class="switch">
                    <input type="checkbox" onChange={fn_handleBlockUser} />
                    <span class="slider round"></span>
                  </label>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>



    </section >
  )
}

export default List
