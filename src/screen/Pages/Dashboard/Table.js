import "../Dashboard/style.css";
import "../Dashboard/secondTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import URL from "../../../BaseUrl/BaseUrl";
import { useEffect, useState } from "react";
import axios from "axios";

const List = ({ data }) => {
  const [completedOrders, setCompletedOrders] = useState([])
  const d = [{ cName: "Maria", pName: "Litso", pId: "123", orderDate: "2023", orderId: "2222", report: "Bad", injury: "Bad", total: 2000, }]
  console.log(completedOrders);
  const getData = () => {
    const uploadData = {
      whichOrder: 'completed',
      orderMethod: 'Delivery'
    }

    axios.post(`${URL}pharmacyOrder/adminPanel`, uploadData).then((res) => {

      setCompletedOrders(res.data.order1)
    }).catch((err) => {
      console.log(err);
    })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <section className="section">

      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ background: "#F5F5F7" }}>

              <TableCell className="tableHeadCell">Customer Names</TableCell>
              <TableCell className="tableHeadCell">Pharmacy Name</TableCell>
              <TableCell className="tableHeadCell">Pharmacy Id</TableCell>
              <TableCell className="tableHeadCell">Order Id</TableCell>
              <TableCell className="tableHeadCell">Date</TableCell>
              <TableCell className="tableHeadCell">Type</TableCell>
              <TableCell className="tableHeadCell">Payment Methods</TableCell>
              <TableCell className="tableHeadCell">Total</TableCell>

            </TableRow>
            {completedOrders?.map((order, i) => (

              <TableRow key={i}>
                <TableCell>{order?.userId?.name}</TableCell>
                <TableCell>{order?.pharmacyId?.name}</TableCell>
                <TableCell>{order?.pharmacyId?._id}</TableCell>
                <TableCell>{order?._id}</TableCell>
                <TableCell>{new Date(order?.createdAt).toLocaleDateString()}</TableCell>
                <TableCell>{order.prescriptionType}</TableCell>
                <TableCell>{order.paymentMethod}</TableCell>
                <TableCell>{order.totalPrice}</TableCell>
              </TableRow>
            ))}
          </TableHead>
          <TableBody>

          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default List;
