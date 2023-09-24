import "../Dashboard/style.css";
import "../Dashboard/secondTable.css";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import axios from "axios";
import URL from "../../../BaseUrl/BaseUrl";
import { useEffect } from "react";
import { TableBody } from "@mui/material";
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const List = ({ admin }) => {
  const form = useForm()
  const { control, register, handleSubmit, formState } = form
  const { errors } = formState
  const [id, setId] = useState([])

  const [staff, setStaff] = useState([])
  const onSubmit = (data) => {

    const header = {
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      'Accept': 'application/json',
      'Content-Type': "application/json"

    }
    axios.post(`${URL}staff/adminPanel/create`, data, { headers: header }).then((res) => {
      if (res?.data?.message === "Staff created") {
        toast.success(res?.data?.message)
      }
      getData()
    }
    ).catch((err) => {
      console.log(err);
    })
  }

  // to get the data

  const getData = () => {

    const header = {
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      'Accept': 'application/json',
      'Content-Type': "application/json"

    }
    axios.get(`${URL}staff/adminPanel`, { headers: header }).then((res) => {
      setStaff(res.data.StaffList)
    }).catch((err) => {
      console.log(err);
    })

  }
  useEffect(() => {
    getData()
  }, [])


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
            axios.delete(`${URL}staff/adminPanel/delete/${i}`, { headers: header }).then((res) => {
              getData()
              toast.success(res.data.message)
            }).catch((err) => { console.log(err) })}
        </>
      )
    })

  }

  const refreshData = () => {
    getData()
    console.log('kdsfj');
  }
  return (
    <section className="section">
      <ToastContainer />
      <div className="py-2" style={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
        <p>Staff</p>

        <div className=" d-flex align-items-center">


          {/* Modal */}


        </div>
      </div>

      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ background: "#F5F5F7" }}>

              <TableCell className="tableHeadCell">#</TableCell>
              <TableCell className="tableHeadCell">ID</TableCell>
              <TableCell className="tableHeadCell">Staff Name</TableCell>
              <TableCell className="tableHeadCell">Email</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {admin?.map((item, i) => (
              <TableRow key={i} className="tableRow">
                {/* <TableCell className="tableCell">
                  <input onClick={() => { getId(row._id) }} type="checkbox" />
                </TableCell> */}

                <TableCell className="tableCell">{i + 1}</TableCell>
                <TableCell className="tableCell">{item?._id}</TableCell>
                <TableCell className="tableCell">{item?.name || "--------"}</TableCell>
                <TableCell className="tableCell">{item?.email}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section >
  );
};

export default List;
