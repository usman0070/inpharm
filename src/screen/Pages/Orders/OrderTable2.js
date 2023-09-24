import "../Dashboard/style.css";
import "../Dashboard/secondTable.css";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import './style.css'
import URL from "../../../BaseUrl/BaseUrl";
import axios from "axios";
import { Button } from "./Tabs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
const List2 = ({ getData, filterData, isLoading, setFilterData, getData1, pickupOrders, pickupPendingOrders }) => {
  const [btnName, setBtnName] = useState('')
  console.log(isLoading);
  const [secondBtnName, setSecondBtnName] = useState('')
  const truncate = (number, string) => {
    return string.length > number ? string.slice(-5, -1) : string
  }

  const deleteData = (id) => {
    const remainingData = filterData.filter(item => item._id !== id)
    setFilterData(remainingData)
    const header = {
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'

    }
    axios.delete(`${URL}pharmacyOrder/delete/${id}`, { headers: header }).then((res) => {
      toast.success("Deleted")
    }).catch((err) => {
      toast.error("Error")
    })
  }
  function data() {

    if (btnName === 'pickup') {

      if (secondBtnName === "history") {
        pickupOrders()
      } else if (secondBtnName === "pending") {
        pickupPendingOrders()

      } else if (secondBtnName === "new") {
        pickupOrders()
      } else {
        return []
      }
    }
    else if (btnName === 'delivery') {
      if (secondBtnName === "history") {
        getData1()
      } else if (secondBtnName === "pending") {
        getData()

      } else if (secondBtnName === "new") {
        getData1()
      } else {
        return []
      }
    }

  }
  useEffect(() => {

    data()


  }, [secondBtnName, btnName])
  return (
    <>
      <>
        <nav>
          <div className="nav nav-tabs d-flex align-items-center justify-content-center" id="nav-tab" role="tablist">
            <Button name="Pickup Orders" onClick={() => setBtnName('pickup')} color={btnName === "pickup"} />
            <Button name="Delivery Orders" onClick={() => setBtnName('delivery')} color={btnName === "delivery"} />
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >

            <nav>
              <div className="nav nav-tabs mb-5 d-flex align-items center justify-content-center mt-5" id="nav-tab" role="tablist">
                <Button name="Order History" color={secondBtnName === 'history'} onClick={() => setSecondBtnName('history')} />
                <Button name="Pending Orders" color={secondBtnName === 'pending'} onClick={() => setSecondBtnName('pending')} />
                <Button name="Todays Orders" color={secondBtnName === 'new'} onClick={() => setSecondBtnName('new')} />
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-history"
                role="tabpanel"
                aria-labelledby="nav-history-tab"
              >
                {/* history */}
                {isLoading && <div style={{ textAlign: "end" }}><CircularProgress size={30} /></div>}
                {(btnName === 'pickup' && secondBtnName === 'history') &&
                  <section className="section">

                    <TableContainer component={Paper} className="table" style={{ maxHeight: "400px", overflow: "auto" }}>
                      <Table sx={{ minWidth: 700 }} aria-label="simple table">
                        <TableHead>
                          <TableRow >
                            <TableCell className="tableHeadCell">#</TableCell>
                            <TableCell className="tableHeadCell">Images</TableCell>
                            <TableCell className="tableHeadCell">User Name</TableCell>
                            <TableCell className="tableHeadCell">Pharmacy Name</TableCell>
                            <TableCell className="tableHeadCell">Medicine Qty</TableCell>
                            <TableCell className="tableHeadCell">Order Date</TableCell>
                            <TableCell className="tableHeadCell">Order Method</TableCell>
                            <TableCell className="tableHeadCell">Order Status</TableCell>
                            <TableCell className="tableHeadCell">Total (Rs)</TableCell>
                            <TableCell className="tableHeadCell">Action</TableCell>
                          </TableRow>
                        </TableHead>
                        {filterData?.map((pickup, i) => (
                          <TableRow key={i} className="tableRow">


                            <TableCell className="tableCell">{i + 1}</TableCell>
                            <img src={`${URL}images/${pickup?.images[0]}`} style={{ maxWidth: "50px" }} alt="" />
                            <TableCell className="tableCell">{pickup?.userId?.name}</TableCell>
                            <TableCell className="tableCell">{pickup?.pharmacyId?.name || '----'}</TableCell>
                            <TableCell className="tableCell">{pickup?.medicineQuantity}</TableCell>
                            <TableCell className="tableCell">{new Date(pickup?.createdAt).toLocaleDateString()}
                            </TableCell>
                            <TableCell className="tableCell">{pickup?.OrderMethod}</TableCell>
                            <TableCell className="tableCell">{pickup?.OrderStatus}</TableCell>
                            <TableCell className="tableCell">{pickup?.totalPrice}</TableCell>

                            <TableCell className="tableCell">
                              {/* <button type="button" style={{ border: "none", backgroundColor: "transparent" }}> */}
                              <button type="button" onClick={() => deleteData(pickup?._id)} style={{ border: "none", backgroundColor: "transparent" }}>
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </Table>
                    </TableContainer>
                  </section>
                }
                {(btnName === 'delivery' && secondBtnName === 'history') &&
                  <section className="section">

                    <TableContainer component={Paper} className="table" style={{ maxHeight: "400px", overflow: "auto" }}>
                      <Table sx={{ minWidth: 700 }} aria-label="simple table">
                        <TableHead>
                          <TableRow >
                            <TableCell className="tableHeadCell">#</TableCell>
                            <TableCell className="tableHeadCell">Images</TableCell>
                            <TableCell className="tableHeadCell">User Name</TableCell>
                            <TableCell className="tableHeadCell">Pharmacy Name</TableCell>
                            <TableCell className="tableHeadCell">Medicine Qty</TableCell>
                            <TableCell className="tableHeadCell">Order Date</TableCell>
                            <TableCell className="tableHeadCell">Order Method</TableCell>
                            <TableCell className="tableHeadCell">Order Status</TableCell>
                            <TableCell className="tableHeadCell">Total (Rs)</TableCell>
                            <TableCell className="tableHeadCell">Action</TableCell>
                          </TableRow>
                        </TableHead>
                        {filterData?.map((pickup, i) => (
                          <TableRow key={i} className="tableRow">


                            <TableCell className="tableCell">{i + 1}</TableCell>
                            <img src={`${URL}images/${pickup?.images[0]}`} style={{ maxWidth: "50px" }} alt="" />
                            <TableCell className="tableCell">{pickup?.userId?.name}</TableCell>
                            <TableCell className="tableCell">{pickup?.pharmacyId?.name || '----'}</TableCell>
                            <TableCell className="tableCell">{pickup?.medicineQuantity}</TableCell>
                            <TableCell className="tableCell">{new Date(pickup?.createdAt).toLocaleDateString()}
                            </TableCell>
                            <TableCell className="tableCell">{pickup?.OrderMethod}</TableCell>
                            <TableCell className="tableCell">{pickup?.OrderStatus}</TableCell>
                            <TableCell className="tableCell">{pickup?.totalPrice}</TableCell>

                            <TableCell className="tableCell">
                              {/* <button type="button" style={{ border: "none", backgroundColor: "transparent" }}> */}
                              <button type="button" onClick={() => deleteData(pickup?._id)} style={{ border: "none", backgroundColor: "transparent" }}>
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </Table>
                    </TableContainer>
                  </section>
                }
                {/* pending */}

                {(btnName === 'pickup' && secondBtnName === 'pending') &&
                  <section className="section">

                    <TableContainer component={Paper} className="table" style={{ maxHeight: "400px", overflow: "auto" }}>
                      <Table sx={{ minWidth: 700 }} aria-label="simple table">
                        <TableHead>
                          <TableRow >
                            <TableCell className="tableHeadCell">#</TableCell>

                            <TableCell className="tableHeadCell">User Names</TableCell>
                            <TableCell className="tableHeadCell">Pharmacy Name</TableCell>
                            <TableCell className="tableHeadCell">Medicine Qty</TableCell>
                            <TableCell className="tableHeadCell">Order Id</TableCell>
                            <TableCell className="tableHeadCell">Order Date</TableCell>
                            <TableCell className="tableHeadCell">Order Method</TableCell>
                            <TableCell className="tableHeadCell">Payment Method</TableCell>
                            <TableCell className="tableHeadCell">Order Status</TableCell>

                            <TableCell className="tableHeadCell">Total (Rs)</TableCell>
                            <TableCell className="tableHeadCell">Action</TableCell>

                          </TableRow>
                        </TableHead>
                        {filterData?.map((pickup, i) => (
                          <TableRow key={i} className="tableRow">

                            <TableCell className="tableCell">{i + 1}</TableCell>

                            <TableCell className="tableCell">{pickup?.userId?.name}</TableCell>
                            <TableCell className="tableCell">{pickup?.pharmacyId?.name || '----'}</TableCell>
                            <TableCell className="tableCell">{pickup?.medicineQuantity}</TableCell>
                            <TableCell className="tableCell">{pickup?._id}</TableCell>
                            <TableCell className="tableCell">{new Date(pickup?.createdAt).toLocaleDateString()}
                            </TableCell>
                            <TableCell className="tableCell">{pickup?.OrderMethod}</TableCell>
                            <TableCell className="tableCell">{pickup?.paymentMethod}</TableCell>
                            <TableCell className="tableCell">{pickup?.OrderStatus}</TableCell>

                            <TableCell className="tableCell">{pickup?.totalPrice}</TableCell>


                            <TableCell className="tableCell">
                              {/* <button type="button" style={{ border: "none", backgroundColor: "transparent" }}> */}
                              <button type="button" onClick={() => deleteData(pickup?._id)} style={{ border: "none", backgroundColor: "transparent" }}>
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </Table>
                    </TableContainer>
                  </section>
                }
                {(btnName === 'delivery' && secondBtnName === 'pending') &&
                  <section className="section">

                    <TableContainer component={Paper} className="table" style={{ maxHeight: "400px", overflow: "auto" }}>
                      <Table sx={{ minWidth: 700 }} aria-label="simple table">
                        <TableHead>
                          <TableRow >
                            <TableCell className="tableHeadCell">#</TableCell>

                            <TableCell className="tableHeadCell">User Names</TableCell>
                            <TableCell className="tableHeadCell">Pharmacy Name</TableCell>
                            <TableCell className="tableHeadCell">Medicine Qty</TableCell>
                            <TableCell className="tableHeadCell">Order Id</TableCell>
                            <TableCell className="tableHeadCell">Order Date</TableCell>
                            <TableCell className="tableHeadCell">Order Method</TableCell>
                            <TableCell className="tableHeadCell">Payment Method</TableCell>
                            <TableCell className="tableHeadCell">Order Status</TableCell>

                            <TableCell className="tableHeadCell">Total (Rs)</TableCell>
                            <TableCell className="tableHeadCell">Action</TableCell>

                          </TableRow>
                        </TableHead>
                        {filterData?.map((pickup, i) => (
                          <TableRow key={i} className="tableRow">

                            <TableCell className="tableCell">{i + 1}</TableCell>

                            <TableCell className="tableCell">{pickup?.userId?.name}</TableCell>
                            <TableCell className="tableCell">{pickup?.pharmacyId?.name || '----'}</TableCell>
                            <TableCell className="tableCell">{pickup?.medicineQuantity}</TableCell>
                            <TableCell className="tableCell">{pickup?._id}</TableCell>
                            <TableCell className="tableCell">{new Date(pickup?.createdAt).toLocaleDateString()}
                            </TableCell>
                            <TableCell className="tableCell">{pickup?.OrderMethod}</TableCell>
                            <TableCell className="tableCell">{pickup?.paymentMethod}</TableCell>
                            <TableCell className="tableCell">{pickup?.OrderStatus}</TableCell>

                            <TableCell className="tableCell">{pickup?.totalPrice}</TableCell>


                            <TableCell className="tableCell">
                              {/* <button type="button" style={{ border: "none", backgroundColor: "transparent" }}> */}
                              <button type="button" onClick={() => deleteData(pickup?._id)} style={{ border: "none", backgroundColor: "transparent" }}>
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </Table>
                    </TableContainer>
                  </section>
                }
                {/* new */}
                {(btnName === 'pickup' && secondBtnName === 'new') &&
                  <section className="section">

                    <TableContainer component={Paper} className="table" style={{ maxHeight: "400px", overflow: "auto" }}>
                      <Table sx={{ minWidth: 700 }} aria-label="simple table">
                        <TableHead>
                          <TableRow >
                            <TableCell className="tableHeadCell">#</TableCell>
                            <TableCell className="tableHeadCell">Images</TableCell>
                            <TableCell className="tableHeadCell">User Name</TableCell>
                            <TableCell className="tableHeadCell">Pharmacy Name</TableCell>
                            <TableCell className="tableHeadCell">Medicine Qty</TableCell>
                            <TableCell className="tableHeadCell">Order Date</TableCell>
                            <TableCell className="tableHeadCell">Order Method</TableCell>
                            <TableCell className="tableHeadCell">Order Status</TableCell>
                            <TableCell className="tableHeadCell">Total (Rs)</TableCell>
                            <TableCell className="tableHeadCell">Action</TableCell>
                          </TableRow>
                        </TableHead>
                        {filterData?.map((pickup, i) => (
                          <TableRow key={i} className="tableRow">


                            <TableCell className="tableCell">{i + 1}</TableCell>
                            <img src={`${URL}images/${pickup?.images[0]}`} style={{ maxWidth: "50px" }} alt="" />
                            <TableCell className="tableCell">{pickup?.userId?.name}</TableCell>
                            <TableCell className="tableCell">{pickup?.pharmacyId?.name}</TableCell>
                            <TableCell className="tableCell">{pickup?.medicineQuantity}</TableCell>
                            <TableCell className="tableCell">{new Date(pickup?.createdAt).toLocaleDateString()}
                            </TableCell>
                            <TableCell className="tableCell">{pickup?.OrderMethod}</TableCell>
                            <TableCell className="tableCell">{pickup?.OrderStatus}</TableCell>
                            <TableCell className="tableCell">{pickup?.totalPrice}</TableCell>

                            <TableCell className="tableCell">

                              <button type="button" onClick={() => deleteData(pickup?._id)} style={{ border: "none", backgroundColor: "transparent" }}>
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </Table>
                    </TableContainer>
                  </section>
                }
                {(btnName === 'delivery' && secondBtnName === 'new') &&
                  <section className="section">

                    <TableContainer component={Paper} className="table" style={{ maxHeight: "400px", overflow: "auto" }}>
                      <Table sx={{ minWidth: 700 }} aria-label="simple table">
                        <TableHead>
                          <TableRow >
                            <TableCell className="tableHeadCell">#</TableCell>
                            <TableCell className="tableHeadCell">Images</TableCell>
                            <TableCell className="tableHeadCell">User Name</TableCell>
                            <TableCell className="tableHeadCell">Pharmacy Name</TableCell>
                            <TableCell className="tableHeadCell">Medicine Qty</TableCell>
                            <TableCell className="tableHeadCell">Order Date</TableCell>
                            <TableCell className="tableHeadCell">Order Method</TableCell>
                            <TableCell className="tableHeadCell">Order Status</TableCell>
                            <TableCell className="tableHeadCell">Total (Rs)</TableCell>
                            <TableCell className="tableHeadCell">Action</TableCell>
                          </TableRow>
                        </TableHead>
                        {filterData?.map((pickup, i) => (
                          <TableRow key={i} className="tableRow">


                            <TableCell className="tableCell">{i + 1}</TableCell>
                            <img src={`${URL}images/${pickup?.images[0]}`} style={{ maxWidth: "50px" }} alt="" />
                            <TableCell className="tableCell">{pickup?.userId?.name}</TableCell>
                            <TableCell className="tableCell">{pickup?.pharmacyId?.name}</TableCell>
                            <TableCell className="tableCell">{pickup?.medicineQuantity}</TableCell>
                            <TableCell className="tableCell">{new Date(pickup?.createdAt).toLocaleDateString()}
                            </TableCell>
                            <TableCell className="tableCell">{pickup?.OrderMethod}</TableCell>
                            <TableCell className="tableCell">{pickup?.OrderStatus}</TableCell>
                            <TableCell className="tableCell">{pickup?.totalPrice}</TableCell>

                            <TableCell className="tableCell">

                              <button type="button" onClick={() => deleteData(pickup?._id)} style={{ border: "none", backgroundColor: "transparent" }}>
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </Table>
                    </TableContainer>
                  </section>
                }
              </div>
              <div
                className="tab-pane fade"
                id="nav-pending"
                role="tabpanel"
                aria-labelledby="nav-pending-tab"
              >
                {/* pendinggggggggggggg */}
                {(btnName === 'pickuup' && secondBtnName === 'pending') && <section className="section">

                  <TableContainer component={Paper} className="table">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow style={{ background: "#F5F5F7" }}>
                          <TableCell className="tableHeadCell">#</TableCell>
                          <TableCell className="tableHeadCell">User Names</TableCell>
                          <TableCell className="tableHeadCell">Pharmacy Name</TableCell>
                          <TableCell className="tableHeadCell">Order Id</TableCell>
                          <TableCell className="tableHeadCell">Date</TableCell>
                          <TableCell className="tableHeadCell">Total</TableCell>
                          <TableCell className="tableHeadCell">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      {/* {pickupPending?.map((pickupPending, i) => ( */}
                      {filterData?.map((pickupPending, i) => (
                        <TableRow key={i} className="tableRow">

                          <TableCell className="tableCell">{i}</TableCell>
                          <TableCell className="tableCell">{pickupPending?.userId?.name}</TableCell>
                          <TableCell className="tableCell">{pickupPending?.pharmacyId?.name}</TableCell>
                          <TableCell className="tableCell">{truncate(4, `${pickupPending._id}`)}</TableCell>
                          <TableCell className="tableCell">{pickupPending?.createdAt}</TableCell>
                          <TableCell className="tablSeCell">{pickupPending?.totalPrice}</TableCell>
                          <TableCell className="tableCell">

                            <button type="button" onClick={() => deleteData(pickupPending?._id)} style={{ border: "none", backgroundColor: "transparent" }}>
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </Table>
                  </TableContainer>
                </section>}
              </div>
              <div
                className="tab-pane fade"
                id="nav-today"
                role="tabpanel"
                aria-labelledby="nav-today-tab"
              >
                {/* today Orders */}
                {(btnName === 'picikup' && secondBtnName === 'new') && <section className="section">

                  <TableContainer component={Paper} className="table">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell className="tableHeadCell">#</TableCell>
                          <TableCell className="tableHeadCell">User Names</TableCell>
                          <TableCell className="tableHeadCell">Pharmacy Name</TableCell>
                          <TableCell className="tableHeadCell">Order Id</TableCell>
                          <TableCell className="tableHeadCell">Date</TableCell>
                          <TableCell className="tableHeadCell">Total</TableCell>
                          <TableCell className="tableHeadCell">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      {/* {pickupPending?.map((todyaOrder, i) => ( */}
                      {filterData?.map((todyaOrder, i) => (
                        <TableRow key={i} className="tableRow">

                          <TableCell className="tableCell">{i}</TableCell>
                          <TableCell className="tableCell">{todyaOrder?.userId?.name}</TableCell>
                          <TableCell className="tableCell">{todyaOrder?.pharmacyId?.name}</TableCell>
                          <TableCell className="tableCell">{truncate(4, `${todyaOrder._id}`)}</TableCell>
                          <TableCell className="tableCell">{todyaOrder?.createdAt}</TableCell>
                          <TableCell className="tablSeCell">{todyaOrder?.totalPrice}</TableCell>
                          <TableCell className="tableCell">
                            {/* <button type="button" style={{ border: "none", backgroundColor: "transparent" }}> */}
                            <button type="button" onClick={() => deleteData(todyaOrder?._id)} style={{ border: "none", backgroundColor: "transparent" }}>
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </Table>
                  </TableContainer>
                </section>}
              </div>
            </div>
            {/* ----------------------- */}
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            {/* second button display areaa */}
            {/* menu inside another menu */}

            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-history"
                role="tabpanel"
                aria-labelledby="nav-history-tab"
              >
                {/* history */}
                <section className="section">

                  <TableContainer component={Paper} className="table">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow style={{ background: "#F5F5F7" }}>
                          <TableCell className="tableHeadCell">#</TableCell>
                          <TableCell className="tableHeadCell">User Name</TableCell>
                          <TableCell className="tableHeadCell">Order Status</TableCell>
                          <TableCell className="tableHeadCell">Date</TableCell>
                          <TableCell className="tableHeadCell">Images</TableCell>
                          <TableCell className="tableHeadCell">Qty</TableCell>
                          <TableCell className="tableHeadCell">Order Method  </TableCell>
                          <TableCell className="tableHeadCell">Pharmacy Name</TableCell>
                          <TableCell className="tableHeadCell">Total</TableCell>
                          <TableCell className="tableHeadCell">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      {/* {historyOrders?.map((myOrder, i) => ( */}
                      {filterData?.map((myOrder, i) => (
                        <TableRow key={i} className="tableRow">

                          <TableCell className="tableCell">{i}</TableCell>
                          <TableCell className="tableCell">{myOrder?.userId?.name}</TableCell>
                          <TableCell className="tableCell">{myOrder?.OrderStatus}</TableCell>
                          <TableCell className="tableCell">{myOrder?.createdAt}</TableCell>
                          <TableCell className="tablSeCell">
                            <img src={`${URL}images/${myOrder?.images[0]}`} style={{ maxWidth: "50px" }} alt="" />
                          </TableCell>
                          <TableCell className="tableCell">{myOrder?.medicineQuantity}</TableCell>
                          <TableCell className="tableCell">{myOrder?.OrderMethod}</TableCell>
                          <TableCell className="tableCell">{myOrder?.pharmacyId?.name}</TableCell>
                          <TableCell className="tableCell">{myOrder?.totalPrice}</TableCell>

                          <TableCell className="tableCell">
                            {/* <button type="button" style={{ border: "none", backgroundColor: "transparent" }}> */}
                            <button type="button" onClick={() => deleteData(myOrder?._id)} style={{ border: "none", backgroundColor: "transparent" }}>
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </Table>
                  </TableContainer>
                </section>


              </div>
              <div
                className="tab-pane fade"
                id="nav-pending"
                role="tabpanel"
                aria-labelledby="nav-pending-tab"
              >
                {/* pending */}
                <section className="section">

                  <TableContainer component={Paper} className="table">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow style={{ background: "#F5F5F7" }}>
                          <TableCell className="tableHeadCell">#</TableCell>
                          <TableCell className="tableHeadCell">User Names</TableCell>

                          <TableCell className="tableHeadCell">Order Id</TableCell>
                          <TableCell className="tableHeadCell">Order Status</TableCell>
                          <TableCell className="tableHeadCell">Pharmacy Name</TableCell>
                          <TableCell className="tableHeadCell">Date</TableCell>
                          <TableCell className="tableHeadCell">Total</TableCell>
                          <TableCell className="tableHeadCell">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      {/* {order?.map((myOrder, i) => ( */}
                      {filterData?.map((myOrder, i) => (
                        <TableRow key={i} className="tableRow">

                          <TableCell className="tableCell">{i}</TableCell>
                          <TableCell className="tableCell">{myOrder?.userId?.name}</TableCell>

                          <TableCell className="tableCell">{truncate(4, `${myOrder._id}`)}</TableCell>
                          <TableCell className="tableCell">{myOrder.orderStatus}</TableCell>
                          <TableCell className="tableCell">{myOrder?.pharmacyId?.name}</TableCell>
                          <TableCell className="tableCell">{myOrder?.createdAt}</TableCell>
                          <TableCell className="tablSeCell">{myOrder?.totalPrice}</TableCell>
                          <TableCell className="tableCell">
                            {/* <button type="button" style={{ border: "none", backgroundColor: "transparent" }}> */}
                            <button type="button" onClick={() => deleteData(myOrder?._id)} style={{ border: "none", backgroundColor: "transparent" }}>
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </Table>
                  </TableContainer>
                </section>
              </div>
              <div
                className="tab-pane fade"
                id="nav-today"
                role="tabpanel"
                aria-labelledby="nav-today-tab"
              >
                {/* today Orders */}
                <section className="section">

                  <TableContainer component={Paper} className="table">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow style={{ background: "#F5F5F7" }}>
                          <TableCell className="tableHeadCell">#</TableCell>
                          <TableCell className="tableHeadCell">User Names</TableCell>
                          <TableCell className="tableHeadCell">Pharmacy Name</TableCell>
                          <TableCell className="tableHeadCell">Order Id</TableCell>
                          <TableCell className="tableHeadCell">Date</TableCell>
                          <TableCell className="tableHeadCell">Total</TableCell>
                          <TableCell className="tableHeadCell">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      {/* {order?.map((myOrder, i) => ( */}
                      {filterData?.map((myOrder, i) => (
                        <TableRow key={i} className="tableRow">

                          <TableCell className="tableCell">{i}</TableCell>
                          <TableCell className="tableCell">{myOrder?.userId?.name}</TableCell>
                          <TableCell className="tableCell">{myOrder?.pharmacyId?.name}</TableCell>
                          <TableCell className="tableCell">{truncate(4, `${myOrder._id}`)}</TableCell>
                          <TableCell className="tableCell">{myOrder?.createdAt}</TableCell>
                          <TableCell className="tablSeCell">{myOrder?.totalPrice}</TableCell>
                          <TableCell className="tableCell">
                            {/* <button type="button" style={{ border: "none", backgroundColor: "transparent" }}> */}
                            <button type="button" onClick={() => deleteData(myOrder?._id)} style={{ border: "none", backgroundColor: "transparent" }}>
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </Table>
                  </TableContainer>
                </section>
              </div>
            </div>
            {/* ----------------------- */}
          </div>
        </div>
      </>

    </>
  )
};

export default List2;
