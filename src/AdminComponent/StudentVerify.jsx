import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import axios from "axios";
import Sidebar from "./HodDashboard";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

const StudentVerify = () => {
  const [branch, setBranch] = useState("");
  const [approvedStudents, setApprovedStudents] = useState([]); 
  const userData = JSON.parse(sessionStorage.getItem("AnkitHOD"));

  const branch1 = userData?.Branch;

  const fetchApprovedStudents = async () => {
    try {
      const response = await axios.get(
        `https://sssutms.ac.in/api/enrollement?Branch=${branch1}`
      );
      
      setApprovedStudents(response.data.students); 
    } catch (error) {
      console.error(error);
    }
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    fetchApprovedStudents();
  }, [branch]);
  /////////////////////datepicker/////////////////
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Sidebar />

        <Container
          className="shadow p-3 mb-3 bg-body rounded"
          style={{ marginTop: "70px",  width: "90%",textAlign:"center",justifyContent:"center" }}
        >
          <h4>Student Verified Detail</h4>
          <Paper sx={{ width: "100%" }}>
            <TableContainer sx={{ maxHeight: "440px" }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h5>
                        <b>S.No.</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h5>
                        <b>Session</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h5>
                        <b>student Name</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h5>
                        <b>Student Email</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h5>
                        <b>Date of Birth</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h5>
                        <b>father's Name</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h5>
                        <b>Mother's Name</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h5>
                        <b>Mobile</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h5>
                        <b>Nationality</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h5>
                        <b>Qualification</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h5>
                        <b>Qualification %</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h5>
                        <b>Course Type</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h5>
                        <b>Course Name</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h5>
                        <b>Course Branch</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h5>
                        <b>Edit</b>
                      </h5>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {approvedStudents.map((student, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{index + 1}</TableCell>
                      <TableCell align="center">2023</TableCell>
                      <TableCell align="center">{student.name}</TableCell>
                      <TableCell align="center">{student.email}</TableCell>
                      {/* Replace the line below with the DatePicker component */}
                      <TableCell align="center">
                        <DatePicker
                          selected={selectedDate || new Date(student.dob)}
                          onChange={(date) => handleDateChange(date)}
                          dateFormat="dd/MM/yyyy"
                        />
                      </TableCell>
                      <TableCell align="center">
                        {student.fathersname}
                      </TableCell>
                      <TableCell align="center">
                        {student.mothersname}
                      </TableCell>
                      <TableCell align="center">{student.mobile}</TableCell>
                      <TableCell align="center">{student.domicile}</TableCell>
                      <TableCell align="center">
                        {student.qualification}
                      </TableCell>
                      <TableCell align="center">
                        {student.qualificationPercentage}
                      </TableCell>
                      <TableCell align="center">{student.courseType}</TableCell>
                      <TableCell align="center">{student.courseName}</TableCell>
                      <TableCell align="center">
                        {student.courseBranch}
                      </TableCell>
                      <TableCell align="center">
                        <Link to={`/studentverifieddetailed/${student._id}`}>
                          <Button variant="success">More....</Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <TablePagination
              rowsPerPageOptions={[25, 50, 100]}
              component="div"
              count={approvedStudents.length} 
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default StudentVerify;
