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
import Swiper from '../../../components/Swiper'
import { useState } from "react";
import axios from "axios";
const List = ({ pharmacy }) => {
  const [images, setImages] = useState([])
  async function fn_handleChangeStatus(e, id) {
    const value = e.target.value
    const header = {
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'

    }

    if (value?.toString().length > 0) {

      await axios.post(`${URL}pharmacy/adminPanel/update/${id}`, {
        status: value === 'true' ? "Approved" : "Pending",
        id,
      }, { headers: header })
    }
  }
  return (
    <section className="section">

      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ background: "#F5F5F7" }}>
              <TableCell className="tableHeadCell">#</TableCell>
              <TableCell className="tableHeadCell">Pharmacy Name</TableCell>
              <TableCell className="tableHeadCell">City</TableCell>
              <TableCell className="tableHeadCell">Location</TableCell>
              <TableCell className="tableHeadCell">Opreating Hours</TableCell>
              <TableCell className="tableHeadCell">Payment Methood</TableCell>
              <TableCell className="tableHeadCell">Legal Documents</TableCell>
              <TableCell className="tableHeadCell">Commision</TableCell>
              <TableCell className="tableHeadCell">Status</TableCell>
              <TableCell className="tableHeadCell">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pharmacy.map((pharmacy, i) => (
              <TableRow key={i} className="tableRow">
                <TableCell className="tableCell">{i + 1}</TableCell>
                <TableCell className="tableCell">{pharmacy.name}</TableCell>
                <TableCell className="tableCell">{pharmacy.City}</TableCell>
                <TableCell className="tableCell">loaction </TableCell>
                <TableCell className="tableCell">{pharmacy.OperatingHours}</TableCell>
                <TableCell className="tableCell">{pharmacy.preferredPaymentMethod}</TableCell>
                <TableCell className="tableCell">
                  {pharmacy?.pharmacyLegalDocumentImages?.length > 0 ? <span style={{ cursor: "pointer" }} onClick={() => setImages(pharmacy?.pharmacyLegalDocumentImages)}>
                    <i className="fa-solid fa-file" style={{ fontSize: '25px', color: "blue", textDecoration: 'none', margin: '0px 5px' }}>

                    </i>
                  </span> : '---'}
                  {/* {
                  pharmacy?.pharmacyLegalDocumentImages?.map((img) => {
                    return (
                      <>
                        <a href={`${URL}images/${img}`} className="text-decoration-none"> <i className="fa-solid fa-file" style={{ fontSize: '25px', textDecoration: 'none', margin: '0px 5px' }}></i></a>
                      </>
                    )
                  })
                } */}
                </TableCell>

                <TableCell className="tableCell">{pharmacy.commissionPercentage}</TableCell>
                <TableCell className="tableCell">{pharmacy.status}</TableCell>
                <TableCell className="tableCell">
                  <select style={{
                    border: "1px solid rgba(0,0,0,0.2)", padding: "0.3rem"
                  }} onChange={(e) => fn_handleChangeStatus(e, pharmacy._id)}>
                    <option selected disabled>--Status--</option>
                    <option value={true} >Approved</option>
                    <option value={false}>Pending</option>
                  </select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer >
      {
        images.length > 0 ? <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", background: "rgba(0,0,0,0.1)", zIndex: 20 }}>
          <span style={{ cursor: "pointer", zIndex: 21 }} onClick={() => setImages([])}><i className="fa-solid fa-close" style={{ fontSize: '30px', color: "red", position: "absolute", top: 20, right: 20 }}>
          </i></span>
          <Swiper imagesArr={images} />
        </div> : null
      }

    </section >
  );
};

export default List;
