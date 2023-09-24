import "../Dashboard/style.css";
import "../Dashboard/secondTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import URL from "../../../BaseUrl/BaseUrl";


const List = ({ faqData }) => {
  const navigate = useNavigate()
  const myNavigate = useNavigate()


  return (
    <section className="section">
      <h5 style={{ padding: "20px" }}>FAQs <i class="fa-solid fa-sliders"></i></h5>
      <div className="d-flex align-items-end w-100 justify-centet-end p-3">
        <button onClick={() => {
          navigate('/sms/1')
        }} className="btn btn-sm px-2 me-4 py-1 btn-info ms-2 text-white rounded-1">
          <i className="fa-solid fa-plus"></i> Add
        </button>
      </div>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ background: "#F5F5F7" }}>
              <TableCell className="tableHeadCell">#</TableCell>
              <TableCell className="tableHeadCell">Title</TableCell>
              <TableCell className="tableHeadCell">Description</TableCell>
              <TableCell className="tableHeadCell">Actions</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {faqData.map((row, i) => (
              <TableRow key={i} className="tableRow">

                <TableCell className="tableCell">{i + 1}</TableCell>
                <TableCell className="tableCell">{row.title}</TableCell>
                <TableCell className="tableCell">{row.description}</TableCell>


                <TableCell className="tableCell">
                  <button onClick={() => {
                    myNavigate(`/sms/${row._id}`)
                  }} className="btn btn-sm px-2 py-1 btn-warning text-white rounded-1" >
                    <i class="fa-solid fa-pen-to-square"></i>                    </button>
                  {/* <button className="btn btn-sm px-2 py-1 btn-danger ms-2 text-white rounded-1" 
                  onClick={() => { deleteData(row._id) }}>
                    <i className="fa-solid fa-trash"></i>
                  </button> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default List;
