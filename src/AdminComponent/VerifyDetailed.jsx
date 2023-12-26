import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Grid, Paper } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HodDashboard from "./HodDashboard";
import { useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";

const theme = createTheme();

function VerifyDetailed() {
  const id = useParams();
  const [studentData, setStudentData] = useState(null);
  console.log("ye dekho id ", id.id);
  useEffect(() => {
    axios
      .get(`https://sssutms.ac.in/api/getstudentdetail/${id.id}`)
      .then((response) => {
        console.log(response.data);
        setStudentData(response.data.student);
      })
      .catch((error) => {
        console.error("Error fetching student details:", error);
      });
  }, [id]);
  console.log(studentData, "dfdnhdfdwfguygefygufgjyuygjghg");
  /////////////////////datepicker/////////////////
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <ThemeProvider theme={theme}>
      <HodDashboard />

      <Container
        className="shadow p-3 mb-5 bg-body rounded "
        style={{ width: "80%", backgroundColor: "#e8e5d1", marginLeft: "20%" }}
      >
        <Paper style={{ width: "250px", marginLeft: "400px", height: "200px" }}>
          <>
            {studentData && studentData.Documents?.applicantPhoto && (
              <img
                src={studentData.Documents.applicantPhoto}
                alt="Applicant Photo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10%",
                }}
              />
            )}
          </>
        </Paper>

        {/* <div style={{ display: "flex" }}> */}

        <Container
          className="shadow p-3 mb-3 bg-body rounded"
          style={{
            width: "80%",
            backgroundColor: "#e8e5d1",
            marginTop: "20px",
            marginLeft: "80px",
          }}
        >
          <div
            style={{
              backgroundColor: "skyblue",
              width: "100%",
              borderRadius: "10px",
            }}
          >
            <h5 style={{ padding: "10px", margin: 0, marginTop: "-3px" }}>
              Student Details
            </h5>
          </div>

          <br></br>
          {studentData && (
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Student Name: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.name}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Father's Name: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.fathersname}</b>
                </span>{" "}
              </Grid>

              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Mother's Name: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b> {studentData.mothersname}</b>
                </span>{" "}
              </Grid>

              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Gender: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b> {studentData.gender}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Date of Birth: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "inherit", color: "black" }}
              >
                <b>
                  <DatePicker
                    selected={selectedDate || new Date(studentData.dob)}
                    onChange={(date) => handleDateChange(date)}
                    dateFormat="dd/MM/yyyy"
                  />
                </b>
              </Grid>

              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Category: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b> {studentData.category}</b>
                </span>{" "}
              </Grid>

              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Domicile: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.domicile}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Contact No: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.mobile}</b>
                </span>{" "}
              </Grid>

              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Email: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.email}</b>
                </span>{" "}
              </Grid>

              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Last Exam Type: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.lastExamType}</b>
                </span>{" "}
              </Grid>

              {/* <Grid
                item
                xs={6}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Address: </b>
              </Grid>
              <Grid
                item
                xs={6}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  {studentData.currentAddress &&
                    studentData.currentAddress.address1}
                </span>{" "}
              </Grid> */}
              <Grid
                item
                xs={12}
                style={{ fontFamily: "italic", fontSize: "20px", color: "red" }}
              >
                <b>Course Details:- </b>
              </Grid>
              <Grid
                item
                xs={2}
                style={{
                  fontFamily: "italic",
                  color: "#3d405b",
                }}
              >
                <b>Course Type: </b>
              </Grid>
              <Grid
                item
                xs={4}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.courseType}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={2}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Course Name : </b>
              </Grid>
              <Grid
                item
                xs={4}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.courseName}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={2}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Course Branch: </b>
              </Grid>
              <Grid
                item
                xs={9}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.courseBranch}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={12}
                style={{ fontFamily: "italic", fontSize: "20px", color: "red" }}
              >
                <b>Professional Details:- </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Aadhar Number: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData?.professional?.AadharNumber}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Fathers Income: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.professional.FathersIncome}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>FathersOccupation: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.professional.FathersOccupation}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Handicapped: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.professional.Handicapped}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Medium: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.professional.Medium}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Mothers Income: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.professional.MothersIncome}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Mothers Occupation: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.professional.MothersOccupation}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Parent Mobile: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.professional.ParentMobile}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Samagra ID: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.professional.SamagraId}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Scholarship Required: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.professional.ScholarshipRequired}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Qualification: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.qualification}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Qualification Percentage: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.qualificationPercentage}%</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={12}
                style={{ fontFamily: "italic", fontSize: "20px", color: "red" }}
              >
                <b>Academic Details:- </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Graduation Marks Obtain: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.graduationMarksObtain}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Graduation Max Marks: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.graduationMaxMarks}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Graduation Passing Year: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.graduationPassingYear}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Graduation Percentage: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.graduationPercentage}%</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Graduation Roll No.: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.graduationRollNo}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Other Board: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.otherBoard}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Other Marks Obtain: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.otherMarksObtain}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Other Max Marks: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.otherMaxMarks}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Other Passing Year: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.otherPassingYear}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Other Percentage: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.otherPercentage}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Other Roll No: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.otherRollNo}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Other School: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.otherSchool}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Post Graduation Marks Obtain: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.postGraduationMarksObtain}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Post Graduation Max Marks: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.postGraduationMaxMarks}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Post Graduation Passing Year: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.postGraduationPassingYear}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Post Graduation Percentage: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.postGraduationPercentage}%</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Post Graduation Roll No: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.postGraduationRollNo}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Tenth Board: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.tenthBoard}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Tenth Marks Obtain: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.tenthMarksObtain}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Tenth Max Marks: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.tenthMaxMarks}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Tenth Passing Year: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.tenthPassingYear}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Tenth Percentage: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.tenthPercentage}%</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Tenth Roll No: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.tenthRollNo}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Tenth School: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.tenthSchool}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Twelfth Board : </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.twelfthBoard}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Twelfth Marks Obtain : </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.twelfthMarksObtain}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Twelfth Max Marks: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.twelfthMaxMarks}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Twelfth Passing Year: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.twelfthPassingYear}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Twelfth Percentages: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.twelfthPercentage}%</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Twelfth Roll No: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.twelfthRollNo}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Twelfth School: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.academicDetails.twelfthSchool}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={12}
                style={{ fontFamily: "italic", fontSize: "20px", color: "red" }}
              >
                <b>Address Details:- </b>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Current Address: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Address 1: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.address?.address1}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Address 2: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.address.address2}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Country: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.address?.country}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>District: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.address.district}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Pin Code: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.address.pinCode}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>State: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <span style={{ color: "black", marginLeft: "20px" }}>
                  <b>{studentData.address.state}</b>
                </span>{" "}
              </Grid>
              <Grid
                item
                xs={12}
                style={{ fontFamily: "italic", fontSize: "20px", color: "red" }}
              >
                <b>Documents:- </b>
              </Grid>

              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Aadhar Card: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                {studentData && studentData.Documents?.aadharCard && (
                  <a
                    href={studentData.Documents.aadharCard}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Aadhar
                  </a>
                )}
              </Grid>

              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Applicant Signature: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                {studentData && studentData.Documents?.applicantSignature && (
                  <a
                    href={studentData.Documents.applicantSignature}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Signature
                  </a>
                )}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Domicile Certificate: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                {studentData && studentData.Documents?.domicileCertificate && (
                  <a
                    href={studentData.Documents.domicileCertificate}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Ceretificate
                  </a>
                )}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Income Certificate: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                {studentData && studentData.Documents?.incomeCertificate && (
                  <a
                    href={studentData.Documents.incomeCertificate}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                )}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>10th Marksheet: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                {studentData && studentData.Documents?.marksheet10th && (
                  <a
                    href={studentData.Documents.marksheet10th}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Marksheet
                  </a>
                )}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>12th Marksheet: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                {studentData && studentData.Documents?.marksheet12th && (
                  <a
                    href={studentData.Documents.marksheet12th}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Marksheet
                  </a>
                )}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Migration Certificate: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                {studentData && studentData.Documents?.migrationCertificate && (
                  <a
                    href={studentData.Documents.migrationCertificate}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                )}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Other Certificate: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                {studentData && studentData.Documents?.otherCertificate && (
                  <a
                    href={studentData.Documents.otherCertificate}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                )}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Post Graduate Certificate: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                {studentData &&
                  studentData.Documents?.postgraduateCertificate && (
                    <a
                      href={studentData.Documents.postgraduateCertificate}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  )}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>Transfer Certificate: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                {studentData && studentData.Documents?.transferCertificate && (
                  <a
                    href={studentData.Documents.transferCertificate}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                )}
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                <b>UnderGraduate Certificate: </b>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ fontFamily: "italic", color: "#3d405b" }}
              >
                {studentData &&
                  studentData.Documents?.undergraduateCertificate && (
                    <a
                      href={studentData.Documents.undergraduateCertificate}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Ceretificate
                    </a>
                  )}
              </Grid>
            </Grid>
          )}
          <br></br>
        </Container>
        {/* </div> */}
      </Container>
    </ThemeProvider>
  );
}

export default VerifyDetailed;
