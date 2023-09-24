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
import { useEffect, useState } from "react";
import URL from "../../../BaseUrl/BaseUrl";
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from "react-toastify";
import { FiTrash } from "react-icons/fi";


const List = ({ setPaymentMethods, paymentMethods }) => {
  const form = useForm()
  const { control, register, handleSubmit, formState } = form
  const { errors } = formState

  // for fetching all the data
  const getData = async () => {
    const header = {
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      'Accept': 'application/json',
      'Content-Type': "multipart/form-data"

    }

    const res = await axios.get(`${URL}paymentMethod/getAll`, { headers: header })
    const data = res.data?.data


    setPaymentMethods(data)
  }
  const deleteData = async (id) => {
    const header = {
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      'Accept': 'application/json',
      'Content-Type': "multipart/form-data"

    }

    await axios.delete(`${URL}paymentMethod/delete/${id}`, { headers: header })
    const res = await axios.get(`${URL}paymentMethod/getAll`, { headers: header })
    const data = res.data?.data


    setPaymentMethods(data)

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
    axios.post(`${URL}paymentMethod/create`, data, { headers: header }).then((res) => {
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






  return (
    <section className="section">
      <ToastContainer />
      <TableContainer component={Paper} className="table">
        <div className="d-flex py-2 align-items-center justify-content-between">
          <h3>Payment Methods</h3>

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
                        <p className="ms-3 mb-0">Add Payment Methods</p>
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
                          <div className="col-md-12 mb-4">
                            <input
                              type="text"
                              className="form-control"
                              id="title"
                              aria-describedby="emailHelp"
                              placeholder="Title"
                              {...register('title', {
                                required: {
                                  value: true,
                                  message: 'this field is required'
                                }
                              })}

                            />
                            <small>{errors.title?.message}</small>

                          </div>
                          <div className="col-md-12">
                            <input
                              type="text"
                              className="form-control"
                              id="description"
                              aria-describedby="emailHelp"
                              placeholder="Description"
                              {...register('description', {
                                required: {
                                  value: true,
                                  message: 'this field is required'
                                }
                              })}

                            />
                            <small>{errors.description?.message}</small>

                          </div>

                        </div>

                      </div>

                      <div className="mt-5 ms-2">
                        <button type="submit" id="userAdd" data-bs-dismiss={test} className="btn btn-danger text-white">Create</button>
                      </div>
                    </form>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
        <Table sx={{ width: 'auto' }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ background: "#F5F5F7" }}>
              <TableCell className="tableHeadCell">#</TableCell>
              <TableCell className="tableHeadCell">Title</TableCell>
              <TableCell className="tableHeadCell">Description</TableCell>
              <TableCell className="tableHeadCell">Actions</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {paymentMethods?.map((item, i) => (
              <TableRow key={i} className="tableRow">
                <TableCell className="tableCell">
                  {i + 1}
                </TableCell>
                <TableCell className="tableCell">{item?.title}</TableCell>
                <TableCell className="tableCell">{item?.description}</TableCell>

                <TableCell className="tableCell" >
                  <FiTrash style={{ cursor: "pointer", color: "red" }} fontSize={20} onClick={() => deleteData(item?._id)} />
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
