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
const List2 = ({ order, getData, historyOrders, pickupOrder, pickupPending, getData1, pickupOrders, pickupPendingOrders, setToggle }) => {
  // console.log(pickupOrder);
  const truncate = (number, string) => {
    return string.length > number ? string.slice(-5, -1) : string
  }
  // console.log(order);

  const deleteData = (id) => {
    const header = {
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'

    }
    axios.delete(`${URL}pharmacyOrder/delete/${id}`, { headers: header }).then((res) => {
      getData()
      getData1()
      pickupOrders()
      pickupPendingOrders()
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <>
      <>
        <nav>
          <div className="nav nav-tabs d-flex align-items-center justify-content-center" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
              onClick={() => setToggle((prev) => !prev)}
            >
              Pickup Orders
            </button>
            <button
              className="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
              onClick={() => setToggle((prev) => !prev)}
            >
              Delivery Orders
            </button>

          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            {/* first button display area */}

            {/* menu inside another menu */}
            <nav>
              <div className="nav nav-tabs mb-5 d-flex align-items center justify-content-center mt-5" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="nav-history-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-history"
                  type="button"
                  role="tab"
                  aria-controls="nav-history"
                  aria-selected="true"
                  onClick={() => setToggle((prev) => !prev)}
                >
                  Order History
                </button>
                <button
                  className="nav-link"
                  id="nav-pending-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-pending"
                  type="button"
                  role="tab"
                  aria-controls="nav-pending"
                  aria-selected="false"
                  onClick={() => setToggle((prev) => !prev)}
                >
                  Pending Orders
                </button>
                <button
                  className="nav-link"
                  id="nav-today-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-today"
                  type="button"
                  role="tab"
                  aria-controls="nav-today"
                  aria-selected="false"
                  onClick={() => setToggle((prev) => !prev)}
                >
                  Todays Orders
                </button>
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
                <section className="section">

                  <TableContainer component={Paper} className="table">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow >
                          <TableCell className="tableHeadCell">#</TableCell>
                          <TableCell className="tableHeadCell">User Name</TableCell>
                          <TableCell className="tableHeadCell">Order Status</TableCell>
                          <TableCell className="tableHeadCell">Date</TableCell>
                          <TableCell className="tableHeadCell">Images</TableCell>
                          <TableCell className="tableHeadCell">Qty</TableCell>
                          <TableCell className="tableHeadCell">Payment Method</TableCell>
                          <TableCell className="tableHeadCell">Pharmacy Name</TableCell>
                          <TableCell className="tableHeadCell">Total</TableCell>
                          <TableCell className="tableHeadCell">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      {pickupOrder?.map((pickup, i) => (
                        <TableRow key={i} className="tableRow">


                          <TableCell className="tableCell">{i}</TableCell>
                          <TableCell className="tableCell">{pickup?.userId?.name}</TableCell>
                          <TableCell className="tableCell">{pickup?.OrderStatus}</TableCell>
                          <TableCell className="tableCell">{pickup?.createdAt}</TableCell>
                          <TableCell className="tablSeCell">
                            <img src={`${URL}images/${pickup?.images[0]}`} style={{ maxWidth: "50px" }} alt="" />
                          </TableCell>
                          <TableCell className="tableCell">{pickup?.medicineQuantity}</TableCell>
                          <TableCell className="tableCell">{pickup?.paymentMethod}</TableCell>
                          <TableCell className="tableCell">{pickup?.pharmacyId?.name}</TableCell>
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


              </div>
              <div
                className="tab-pane fade"
                id="nav-pending"
                role="tabpanel"
                aria-labelledby="nav-pending-tab"
              >
                {/* pending */}
                <section className="section" style={{ background: "red", display: "none" }}>

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
                      {pickupPending?.map((pickupPending, i) => (
                        <TableRow key={i} className="tableRow">

                          <TableCell className="tableCell">{i}</TableCell>
                          <TableCell className="tableCell">{pickupPending?.userId?.name}</TableCell>
                          <TableCell className="tableCell">{pickupPending?.pharmacyId?.name}</TableCell>
                          <TableCell className="tableCell">{truncate(4, `${pickupPending._id}`)}</TableCell>
                          <TableCell className="tableCell">{pickupPending?.createdAt}</TableCell>
                          <TableCell className="tablSeCell">{pickupPending?.totalPrice}</TableCell>
                          <TableCell className="tableCell">
                            {/* <button type="button" style={{ border: "none", backgroundColor: "transparent" }}> */}
                            <button type="button" onClick={() => deleteData(pickupPending?._id)} style={{ border: "none", backgroundColor: "transparent" }}>
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
                        <TableRow style={{ background: "purple" }}>
                          <TableCell className="tableHeadCell">#</TableCell>
                          <TableCell className="tableHeadCell">User Names</TableCell>
                          <TableCell className="tableHeadCell">Pharmacy Name</TableCell>
                          <TableCell className="tableHeadCell">Order Id</TableCell>
                          <TableCell className="tableHeadCell">Date</TableCell>
                          <TableCell className="tableHeadCell">Total</TableCell>
                          <TableCell className="tableHeadCell">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      {pickupPending?.map((todyaOrder, i) => (
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
                </section>
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
            <nav>
              <div className="nav nav-tabs mb-5 d-flex align-items center justify-content-center mt-5" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="nav-history-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-history"
                  type="button"
                  role="tab"
                  aria-controls="nav-history"
                  aria-selected="true"
                  onClick={() => setToggle((prev) => !prev)}
                >
                  Order History
                </button>
                <button
                  className="nav-link"
                  id="nav-pending-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-pending"
                  type="button"
                  role="tab"
                  aria-controls="nav-pending"
                  aria-selected="false"
                  onClick={() => setToggle((prev) => !prev)}
                >
                  Pending Orders
                </button>
                <button
                  className="nav-link"
                  id="nav-today-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-today"
                  type="button"
                  role="tab"
                  aria-controls="nav-today"
                  aria-selected="false"
                  onClick={() => setToggle((prev) => !prev)}
                >
                  Todays Orders
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-history"
                role="tabpanel"
                aria-labelledby="nav-history-tab"
              >
                {/* history */}    <section className="section">

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
                          <TableCell className="tableHeadCell">Payment Methood  </TableCell>
                          <TableCell className="tableHeadCell">Pharmacy Name</TableCell>
                          <TableCell className="tableHeadCell">Total</TableCell>
                          <TableCell className="tableHeadCell">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      {historyOrders?.map((myOrder, i) => (
                        <TableRow key={i} className="tableRow">

                          <TableCell className="tableCell">{i}</TableCell>
                          <TableCell className="tableCell">{myOrder?.userId?.name}</TableCell>
                          <TableCell className="tableCell">{myOrder?.OrderStatus}</TableCell>
                          <TableCell className="tableCell">{myOrder?.createdAt}</TableCell>
                          <TableCell className="tablSeCell">
                            <img src={`${URL}images/${myOrder?.images[0]}`} style={{ maxWidth: "50px" }} alt="" />
                          </TableCell>
                          <TableCell className="tableCell">{myOrder?.medicineQuantity}</TableCell>
                          <TableCell className="tableCell">{myOrder?.paymentMethod}</TableCell>
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
                      {order?.map((myOrder, i) => (
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
                      {order?.map((myOrder, i) => (
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
