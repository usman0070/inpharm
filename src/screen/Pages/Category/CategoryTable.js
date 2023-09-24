import "../Dashboard/style.css";
import "../Dashboard/secondTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Images from "./Images";

const List = ({ name, type }) => {






  return (
    <section className="section">
      <h5 className="m-3">{name}</h5>

      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ background: "#F5F5F7" }}>
              <TableCell className="tableHeadCell">Title</TableCell>
              <TableCell className="tableHeadCell">Picture</TableCell>
              <TableCell className="tableHeadCell">Description</TableCell>
              <TableCell className="tableHeadCell">
                Plateform Charge
              </TableCell>

            </TableRow>
          </TableHead>
          <TableBody>

            {type.map((item, i) => (

              <TableRow key={i} className="tableRow" >
                <TableCell className="tableCell">
                  {item.title}
                </TableCell>
                <TableCell className="tableCell">
                  <Images image={item?.images} />

                </TableCell>
                <TableCell className="tableCell">
                  ${item.description}
                </TableCell>
                <TableCell className="tableCell">{item.platformCharges
                }</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section >
  );
};

export default List;
