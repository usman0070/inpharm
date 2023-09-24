import "../Dashboard/style.css";
import "../Dashboard/secondTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import axios from "axios";
import URL from "../../../BaseUrl/BaseUrl";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const List = () => {
  const [city, setCity] = useState([])
  const navigate = useNavigate()
  const editNavigate = useNavigate()
  const header = {
    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'

  }
  useEffect(() => {
    axios.get(`${URL}city/adminPanel`, { headers: header }).then((res) => {
      console.log(res.data.cityList);
      setCity(res.data.cityList)
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  return (
    <section className="section">
      <div className="w-50">
        <button type="button" onClick={() => {
          navigate('/add_city')
        }} className="btn ms-auto px-3 py-2  btn-success rounded-1" style={{ maxWidth: '130px' }}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <TableContainer component={Paper} className="table w-50">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow style={{ background: "#F5F5F7" }}>
              <TableCell className="tableHeadCell">City Name</TableCell>
              <TableCell className="tableHeadCell">Action</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {city.map((city, i) => (
              <TableRow key={i} className="tableRow">
                <TableCell className="tableCell">
                  {city.name}
                </TableCell>
                <TableCell className="tableCell">
                  <button type="button" onClick={() => {
                    editNavigate(`/edit_city/${city._id}`)

                  }} className="px-2 py-1 btn btn-warning text-white">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
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
