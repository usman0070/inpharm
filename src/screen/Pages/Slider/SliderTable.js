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


const List = () => {
  const navigate = useNavigate()
  const myNavigate = useNavigate()

  const [dData, setdData] = useState([]);
  console.log(dData);

  async function test() {
    const header = {
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'

    }
    // const res = await axios.get(`${URL}dashboard/adminPanel`, { headers: header })
    const res = await axios.get(`${URL}sliders/adminPanel`, { headers: header })
    const data = res.data.sliderList;
    setdData(data)

  }
  useEffect(() => {

    test()
  }, [])

  const deleteData = (id) => {
    const header = {
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'

    }
    console.log(id);
    axios.delete(`${URL}sliders/adminPanel/delete/${id}`, { headers: header }).then((res) => {
      console.log(res);
      test()


    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <section className="section">
      <h5 style={{ padding: "20px" }}>Slider <i class="fa-solid fa-sliders"></i></h5>
      <div className="d-flex align-items-end w-100 justify-centet-end p-3">
        <button onClick={() => {
          navigate('/create_slider')
        }} className="btn btn-sm px-2 me-4 py-1 btn-info ms-2 text-white rounded-1">
          <i className="fa-solid fa-plus"></i> Add
        </button>
      </div>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ background: "#F5F5F7" }}>
              <TableCell className="tableHeadCell">Pictures</TableCell>
              <TableCell className="tableHeadCell">My Profile</TableCell>
              <TableCell className="tableHeadCell">Refferral Earning</TableCell>
              <TableCell className="tableHeadCell">Settings</TableCell>
              <TableCell className="tableHeadCell">Dilivery Adress</TableCell>
              <TableCell className="tableHeadCell">My Order</TableCell>
              <TableCell className="tableHeadCell">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dData.map((row, i) => (
              <TableRow key={i} className="tableRow">
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={`${URL}/images/${row.picture}`} alt="" className="image" />
                    {console.log(row.picture)}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.myProfile}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.referralEarning}</span>
                </TableCell>
                <TableCell className="tableCell">{row.settings}</TableCell>
                <TableCell className="tableCell">{row.deliveryAddress}</TableCell>
                <TableCell className="tableCell">{row.myOrders}</TableCell>
                <TableCell className="tableCell">
                  <button onClick={() => {
                    myNavigate(`/edit_slider/${row._id}`)
                  }} className="btn btn-sm px-2 py-1 btn-warning text-white rounded-1" >
                    <i class="fa-solid fa-pen-to-square"></i>                    </button>
                  <button className="btn btn-sm px-2 py-1 btn-danger ms-2 text-white rounded-1" onClick={() => { deleteData(row._id) }}>
                    <i className="fa-solid fa-trash"></i>
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
