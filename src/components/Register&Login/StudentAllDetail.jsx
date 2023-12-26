import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import OnlyHeader from "../../AdminComponent/OnlyHeader";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));

const theme = createTheme();
function StudentAllDetail() {
  const userData = JSON.parse(sessionStorage.getItem("currentUser"));

  
 
  const shouldDisplaySection = (data) => {
    return data !== undefined && data !== null;
  };

  return (
    <>
      <style>
        {`
          .student-profile .card {
            border-radius: 10px;
            height:80px;
            width:80px;
          }

        

          .student-profile .card h3 {
            font-size: 20px;
            font-weight: 700;
          }

          .student-profile .card p {
            font-size: 26px;
            color: #000;
          }

          .student-profile .table th,
          .student-profile .table td {
            font-size: 40px;
            padding: 0px 10px;
            color: #000;
          }

          @media (max-width: 800px) {
            .card {
              width: 100%;
              margin-Top:75px;
            }
          }

          @media (min-width: 600px) {
            .card {
              width: 80%; 
              margin-Top:40px;
            }
          }
        `}
      </style>

      <ThemeProvider theme={theme}>
        <OnlyHeader />
        <Box
          sx={{
            marginTop: "5%",
            backgroundColor: "#097974",
            boxShadow: "2px solid black",
          }}
        >
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={4}>
              <Item>
                <div class="card shadow-lg" style={{ height: "80%" }}>
                  <div
                    class="card-header bg-transparent text-center"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      class="profile_img"
                      src={userData.Documents.applicantPhoto}
                      alt="img"
                      style={{
                        width: "171px",
                        height: "180px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    ></img>
                    <h3>{userData.name}</h3>
                  </div>
                  <div class="card-body">
                    <p class="mb-0">
                      <strong class="pr-1">Course Type: </strong>
                      {userData.courseType}
                    </p>
                    <p class="mb-0">
                      <strong class="pr-1">Course Name: </strong>
                      {userData.courseName}
                    </p>
                    <p class="mb-0">
                      <strong class="pr-1">Branch: </strong>
                      {userData.courseBranch}
                    </p>
                    <p class="mb-0">
                      <strong class="pr-1">Exam Fee: ₹ 5480</strong>
                       
                    </p>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Item>
                {/* <div class="card -sm"> */}
                <div class="card-header bg-transparent border-0 ">
                  <h3
                    class="mb-0"
                    style={{
                      textAlign: "left",
                      marginTop: "10px",
                      marginLeft: "20px",
                    }}
                  >
                    <i class="far fa-clone pr-1"></i>
                    <b style={{ fontFamily: "italic" }}>Personal Information</b>
                  </h3>
                </div>
                <hr></hr>
                <div class="card-body pt-0">
                  <table
                    class="table "
                    style={{ marginTop: "20px", marginLeft: "20px" }}
                  >
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Gender
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.gender}</td>
                    </tr>

                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Category
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.category}</td>
                    </tr>
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Father's Name
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.fathersname}</td>
                    </tr>

                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Mother's Name
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.mothersname}</td>
                    </tr>

                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Contact
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.mobile}</td>
                    </tr>
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        DOB
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.dob}</td>
                    </tr>
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Email
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.email}</td>
                    </tr>
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Domicile
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.domicile}</td>
                    </tr>

                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        LastExamType
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.lastExamType}</td>
                    </tr>

                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Scholarship Required
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.professional.ScholarshipRequired}</td>
                    </tr>

                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Current Address{" "}
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.address?.address1}</td>
                    </tr>
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Permanent Address{" "}
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.address.address2}</td>
                    </tr>
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Country
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.address.country}</td>
                    </tr>
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        State
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.address.state}</td>
                    </tr>

                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        City
                      </th>
                      <td width="2%">:</td>
                      <td>Male</td>
                    </tr>
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        District
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.address.district}</td>
                    </tr>
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Pin Code
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.address.pinCode}</td>
                    </tr>
                  </table>
                </div>
                {/* </div> */}
              </Item>
            </Grid>
          </Grid>

          <br></br>

          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={6}>
              <Item>
                <div class="card-header bg-transparent border-0 ">
                  <h3
                    class="mb-0"
                    style={{
                      textAlign: "left",
                      marginTop: "10px",
                      marginLeft: "20px",
                    }}
                  >
                    <i class="far fa-clone pr-1"></i>
                    <b style={{ fontFamily: "italic" }}>
                      Professional Information
                    </b>
                  </h3>
                </div>
                <hr></hr>
                <div class="card-body pt-0">
                  <table
                    class="table "
                    style={{ marginTop: "20px", marginLeft: "20px" }}
                  >
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Handicapped
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.professional.Handicapped}</td>
                    </tr>
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Medium
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.professional.Medium}</td>
                    </tr>
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Aadhar Number
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.professional.AadharNumber}</td>
                    </tr>
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Samagra ID
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.professional.SamagraId}</td>
                    </tr>

                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Father's Occupation
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.professional.FathersOccupation}</td>
                    </tr>
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Mother's Occupation
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.professional.MothersOccupation}</td>
                    </tr>
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Father's Income
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.professional.FathersIncome}</td>
                    </tr>

                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Mother's Income
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.professional.MothersIncome}</td>
                    </tr>

                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Parent Mobile
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.professional.ParentMobile}</td>
                    </tr>

                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Qualification
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.qualification}</td>
                    </tr>
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Qualification Percentage
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.qualificationPercentage}%</td>
                    </tr>
                  </table>
                </div>
              </Item>
            </Grid>

            <Grid item xs={12} sm={5}>
              <Item>
                <div class="card-header bg-transparent border-0 ">
                  <h3
                    class="mb-0"
                    style={{
                      textAlign: "left",
                      marginTop: "10px",
                      marginLeft: "20px",
                    }}
                  >
                    <i class="far fa-clone pr-1"></i>
                    <b style={{ fontFamily: "italic" }}>
                      {" "}
                      Document Information
                    </b>
                  </h3>
                </div>
                <hr></hr>
                <div class="card-body pt-0">
                  <table
                    class="table "
                    style={{ marginTop: "20px", marginLeft: "20px" }}
                  >
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Aadhar card
                      </th>
                      <td width="2%">:</td>
                      <td>
                        {userData && userData.Documents?.aadharCard && (
                          <a
                            href={userData.Documents.aadharCard}
                            // target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Aadhar
                          </a>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Applicant Signature
                      </th>
                      <td width="2%">:</td>
                      <td>
                        {userData && userData.Documents?.applicantSignature && (
                          <a
                            href={userData.Documents.applicantSignature}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Signature
                          </a>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Domicile Certificate
                      </th>
                      <td width="2%">:</td>
                      <td>
                        {userData &&
                          userData.Documents?.domicileCertificate && (
                            <a
                              href={userData.Documents.domicileCertificate}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Ceretificate
                            </a>
                          )}
                      </td>
                    </tr>
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Income Certificate
                      </th>
                      <td width="2%">:</td>
                      <td>
                        {userData && userData.Documents?.incomeCertificate && (
                          <a
                            href={userData.Documents.incomeCertificate}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Certificate
                          </a>
                        )}
                      </td>
                    </tr>

                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        10th Marksheet
                      </th>
                      <td width="2%">:</td>
                      <td>
                        {userData && userData.Documents?.marksheet10th && (
                          <a
                            href={userData.Documents.marksheet10th}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Marksheet
                          </a>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        12th Marksheet
                      </th>
                      <td width="2%">:</td>
                      <td>
                        {userData && userData.Documents?.marksheet12th && (
                          <a
                            href={userData.Documents.marksheet12th}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Marksheet
                          </a>
                        )}
                      </td>
                    </tr>
                   
                    

                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Transfer Certificate
                      </th>
                      <td width="2%">:</td>
                      <td>
                        {userData &&
                          userData.Documents?.transferCertificate && (
                            <a
                              href={userData.Documents.transferCertificate}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Certificate
                            </a>
                          )}
                      </td>
                    </tr>

                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Migration Certificate
                      </th>
                      <td width="2%">:</td>
                      <td>
                        {userData &&
                          userData.Documents?.migrationCertificate && (
                            <a
                              href={userData.Documents.migrationCertificate}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Certificate
                            </a>
                          )}
                      </td>
                    </tr>
                  </table>
                </div>
              </Item>
            </Grid>
          </Grid>
          <br></br>
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={11}>
              <Item>
                <div class="card-header border-0">
                  <h3
                    class="mb-0"
                    style={{
                      textAlign: "left",
                      marginTop: "10px",
                      marginLeft: "20px",
                    }}
                  >
                    <i class="far fa-clone pr-1"></i>
                    <b style={{ fontFamily: "italic" }}>
                      {" "}
                      Academic Information
                    </b>
                  </h3>
                </div>
                <hr></hr>
                <div class="card-body pt-0">
                  <table
                    class="table "
                    style={{ marginTop: "20px", marginLeft: "20px" }}
                  >
                    {shouldDisplaySection(userData.academicDetails) && (
                      <>
                    <th style={{ fontSize: "20px" }}>
                      <b>10th</b>
                    </th>
                   
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Passing Year
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.academicDetails.tenthPassingYear}</td>
                    </tr>

                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Max. Marks
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.academicDetails.tenthMaxMarks}</td>
                    </tr>

                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Marks Obtained
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.academicDetails.tenthMarksObtain}</td>
                    </tr>

                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Percentage
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.academicDetails.tenthPercentage}</td>
                    </tr>
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Roll No
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.academicDetails.tenthRollNo}</td>
                    </tr>
                    <br></br>
                    <tr style={{ fontSize: "20px" }}>
                      <b>12th</b>
                    </tr>
                   
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Passing Year
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.academicDetails.twelfthPassingYear}</td>
                    </tr>
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Max. Marks
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.academicDetails.twelfthMaxMarks}</td>
                    </tr>
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Marks Obtained
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.academicDetails.twelfthMarksObtain}</td>
                    </tr>

                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Percentage
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.academicDetails.twelfthPercentage}</td>
                    </tr>
                    <tr>
                      <th
                        width="30%"
                        style={{
                          color: "#233d4d",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Roll No
                      </th>
                      <td width="2%">:</td>
                      <td>{userData.academicDetails.twelfthRollNo}</td>
                    </tr>
                    </>
                    )}
                  </table>
                  
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default StudentAllDetail;
