import "../Dashboard/style.css";
import "../Dashboard/secondTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      product: "Samsung s22",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      revenue: "$12.5k",
      conversion: "+24%",
      status: "Out of Stock",
      class: "short",
    },
    {
      product: "Samsung s22",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      revenue: "$12.5k",
      conversion: "+24%",
      status: "In Stock",
      class: "inStock",
    },
    {
      product: "Samsung s22",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      revenue: "$12.5k",
      conversion: "+24%",
      status: "Coming Soon",
      class: "coming",
    },
  ];
  return (
    <section className="section">

      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ background: "#F5F5F7" }}>
              <TableCell className="tableHeadCell">#</TableCell>
              <TableCell className="tableHeadCell">Customer Names</TableCell>
              <TableCell className="tableHeadCell">Order Date</TableCell>
              <TableCell className="tableHeadCell">Report</TableCell>
              <TableCell className="tableHeadCell">Injury</TableCell>
              <TableCell className="tableHeadCell">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default List;
