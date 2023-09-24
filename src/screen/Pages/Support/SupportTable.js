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
const List = () => {

  const getData = () => {

    const header = {
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      'Accept': 'application/json',
      'Content-Type': "application/json"

    }
    axios.get(`${URL}support/adminPanel`, { headers: header }).then((res) => {
      console.log(res.data);
      // setStaff(res.data.StaffList)
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
              <TableCell className="tableHeadCell">Ticket</TableCell>
              <TableCell className="tableHeadCell">Title</TableCell>
              <TableCell className="tableHeadCell">Subject</TableCell>
              <TableCell className="tableHeadCell">Priority</TableCell>
              <TableCell className="tableHeadCell">Status</TableCell>
            </TableRow>
          </TableHead>
          {/* <TableBody>
            {rows.map((row, i) => (
              <TableRow key={i} className="tableRow">
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.product}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
                <TableCell className="tableCell">{row.revenue}</TableCell>
                <TableCell className="tableCell">{row.conversion}</TableCell>
                <TableCell className="tableCell">{row.conversion}</TableCell>
              </TableRow>
            ))}
          </TableBody> */}
        </Table>
      </TableContainer>
    </section>
  );
};

export default List;
