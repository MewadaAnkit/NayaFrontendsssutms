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
import { Box, Stack, FormControl, FormLabel, Select } from "@chakra-ui/react";

import axios from "axios";
import Sidebar from "./HodDashboard";
import DatePicker from "react-datepicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import swal from "sweetalert";

const theme = createTheme();

const Pending = () => {
  const [approvedStudents, setApprovedStudents] = useState([]);
  const [collegeAssignments, setCollegeAssignments] = useState({});
  const userData = JSON.parse(sessionStorage.getItem("AnkitHOD"));

  const hodId = userData?.user;
  const branch1 = userData.Branch;

  const collegeOptions = {
    HOMEOPATHY: ["Bachelor of Homeopathic Medicine and Surgery"],
    AYURVEDIC: ["Bachelor of Ayurvedic Medicine and Surgery"],
  };

  const handleClick = async (studentId) => {
    try {
      const response = await axios.put(`https://sssutms.ac.in/api/approve/`, {
        hodId: hodId,
        studentId,
        collegeId: collegeAssignments[studentId],
      });
      console.log(response.data.message);
      swal({
        title: "Success",
        text: "Approved Successfully!",
        icon: "success",
        buttons: "OK",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchApprovedStudents = async () => {
    try {
      const response = await axios.get(
        `https://sssutms.ac.in/api/NewRegistrationRequests?Branch=${branch1}`
      );

      setApprovedStudents(response.data.students);

      // Initialize college assignments
      const initialAssignments = {};
      response.data.students.forEach((student) => {
        initialAssignments[student._id] = null;
      });
      setCollegeAssignments(initialAssignments);
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
  }, []);

  ////////////////////datepicker/////////////////
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Function to handle college selection for a student
  const handleCollegeChange = (studentId, collegeId) => {
    setCollegeAssignments((prevAssignments) => ({
      ...prevAssignments,
      [studentId]: collegeId,
    }));
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Sidebar />
        <Container
          className="shadow p-3  bg-body rounded"
          style={{
            marginTop: "80px",
            width: "90%",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <h4>Student Pending Detail</h4>
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
                        <b>Assign College</b>
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
                      <TableCell align="left">{index + 1}</TableCell>
                      <TableCell align="left">2023</TableCell>
                      <TableCell align="left">{student.name}</TableCell>
                      <TableCell align="left">{student.email}</TableCell>
                      <TableCell align="left">
                        <DatePicker
                          selected={selectedDate || new Date(student.dob)}
                          onChange={(date) => handleDateChange(date)}
                          dateFormat="dd/MM/yyyy"
                        />
                      </TableCell>
                      <TableCell align="left">{student.fathersname}</TableCell>
                      <TableCell align="left">{student.mothersname}</TableCell>
                      <TableCell align="left">{student.mobile}</TableCell>
                      <TableCell align="left">{student.domicile}</TableCell>
                      <TableCell align="left">
                        {student.qualification}
                      </TableCell>
                      <TableCell align="left">
                        {student.qualificationPercentage}
                      </TableCell>

                      <TableCell align="left">{student.courseType}</TableCell>
                      <TableCell align="left">{student.courseName}</TableCell>
                      <TableCell align="left">{student.courseBranch}</TableCell>
                      <TableCell align="center">
                     
                        <select
                          value={collegeAssignments[student._id] || ""}
                          onChange={(e) =>
                            handleCollegeChange(student._id, e.target.value)
                          }
                        >
                          <option value="">Select College</option>
                          {collegeOptions[branch1]?.map((college, index) => (
                            <option key={index} value={college}>
                              {college}
                            </option>
                          ))}
                        </select>
                      
                        {/* <FormControl style={{ minWidth: "120px" }}>
                          <Select
                            value={collegeAssignments[student._id] || ""}
                            onChange={(e) =>
                              handleCollegeChange(student._id, e.target.value)
                            }
                          >
                            <MenuItem value="">Select College</MenuItem>
                            {collegeOptions[branch1]?.map((college, index) => (
                              <MenuItem key={index} value={college}>
                                {college}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl> */}
                      </TableCell>
                      <TableCell align="left">
                        <Button
                          variant="success"
                          onClick={() => handleClick(student._id)}
                        >
                          Approve
                        </Button>
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

export default Pending;
