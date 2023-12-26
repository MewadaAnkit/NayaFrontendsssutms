// import React, { useState } from "react";
// import { Container, Form } from "react-bootstrap";
// import { Button } from "@mui/material";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Sidebar from "./HodDashboard";
// import { useNavigate } from "react-router-dom";

// import { createTheme, ThemeProvider } from "@mui/material/styles";

// const theme = createTheme({
//   typography: {
//     fontWeightBold: 700,
//   },
// });

// const HodMainDetails = () => {
//   const [selectedRadioButton, setSelectedRadioButton] = useState("E-Pravesh");
//   const [selectedRadioButton1, setSelectedRadioButton1] = useState(
//     "Pending Student List"
//   );
//   const [admissionSession, setAdmissionSession] = useState("");
//   const [showForm, setShowForm] = useState(true);
//   const [showList, setShowList] = useState(false);
//   const [showSidebar, setShowSidebar] = useState(false);
//   const navigate = useNavigate();

//   const userData = JSON.parse(sessionStorage.getItem("AnkitHOD"));
//   const branch1 = userData.Branch;

//   const handleRadioChange = (event) => {
//     setSelectedRadioButton(event.target.value);
//     setSelectedRadioButton1(event.target.value);
//   };

//   const handleSearchDetails = async () => {
//     setShowList(true);
//     setShowForm(false);
//     setShowSidebar(false);

//     if (selectedRadioButton1 === "Pending Student List") {
//       const response = await fetch(
//         `https://sssutmsapi.onrender.com/api/NewRegistrationRequests?Branch=${branch1}&AdmissionSession=${admissionSession}`
//       );
//       const data = await response.json();

//       console.log("Pending Student List data:", data);
//       navigate("/studentpending");
//     } else if (selectedRadioButton1 === "Verified Student List") {
//       const response = await fetch(
//         `https://sssutmsapi.onrender.com/api/VerifiedStudentList?Branch=${branch1}&AdmissionSession=${admissionSession}`
//       );
//       const data = await response.json();

//       console.log("Verified Student List data:", data);
//       navigate("/studentverify");
//     }
//   };
//   console.log(admissionSession, "session");
//   return (
//     <ThemeProvider theme={theme}>
//       <Sidebar />
//       {showForm && (
//         <Container
//           className="shadow p-3 mb-3 bg-body rounded"
//           style={{
//             backgroundColor: "#e8e5d5",
//             margin: "20px auto",
//             width: "25%",
//             marginLeft: "250px",
//             marginTop: "-35px",
//           }}
//         >
//           <div
//             style={{
//               backgroundColor: "skyblue",
//               borderRadius: "7px",
//             }}
//           >
//             <h5 style={{ padding: "10px" }}>Registration Verification</h5>
//           </div>

//           <Container
//             className="shadow p-3 mb-3 bg-body rounded"
//             style={{ backgroundColor: "#e8e5d5", marginTop: "20px" }}
//           >
//             <div
//               style={{
//                 backgroundColor: "skyblue",
//                 borderRadius: "7px",
//               }}
//             >
//               <h5 style={{ padding: "10px" }}>Search Type</h5>
//             </div>

//             {/* <FormControlLabel
//                 value="E-Pravesh"
//                 control={<Radio />}
//                 label="E-Pravesh"
//               /> */}
//             <FormControlLabel
//               value="Student Registration"
//               control={<Radio />}
//               label="Student Registration"
//             />

//             <h5>
//               <b>Admission Session</b>
//             </h5>
//             <Form.Group className="mb-3" controlId="">
//               <Form.Select
//                 aria-label="Default select example"
//                 name=""
//                 onChange={(e) => setAdmissionSession(e.target.value)}
//               >
//                 <option value="pleaseSelect">--Please Select--</option>
//                 <option value="2021">2021</option>
//                 <option value="2022">2022</option>
//                 <option value="2023">2023</option>
//               </Form.Select>
//             </Form.Group>

//             <RadioGroup
//               aria-labelledby="demo-radio-buttons-group-label"
//               name="radio-buttons-group"
//               value={selectedRadioButton1}
//               onChange={handleRadioChange}
//             >
//               <FormControlLabel
//                 value="Pending Student List"
//                 control={<Radio />}
//                 label="Pending Student List"
//               />
//               <FormControlLabel
//                 value="Verified Student List"
//                 control={<Radio />}
//                 label="Verified Student List"
//               />
//             </RadioGroup>

//             <div
//               style={{
//                 backgroundColor: "skyblue",
//                 borderRadius: "7px",
//               }}
//             >
//               <Button
//                 size="small"
//                 style={{ padding: "10px", marginLeft: "30%" }}
//                 onClick={handleSearchDetails}
//               >
//                 Search Details
//               </Button>
//             </div>
//           </Container>
//         </Container>
//       )}
//     </ThemeProvider>
//   );
// };

// export default HodMainDetails;

// import React, { useState, useEffect } from "react";
// import { Container, Form } from "react-bootstrap";
// import { Button } from "@mui/material";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Sidebar from "./HodDashboard";
// import { useNavigate } from "react-router-dom";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// const theme = createTheme({
//   typography: {
//     fontWeightBold: 700,
//   },
// });

// const HodMainDetails = () => {
//   const [selectedRadioButton, setSelectedRadioButton] = useState("E-Pravesh");
//   const [selectedRadioButton1, setSelectedRadioButton1] = useState(
//     "Pending Student List"
//   );
//   const [admissionSession, setAdmissionSession] = useState("");
//   const [showForm, setShowForm] = useState(true);
//   const [showList, setShowList] = useState(false);
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [admissionSessions, setAdmissionSessions] = useState([]);
//   const navigate = useNavigate();

//   const userData = JSON.parse(sessionStorage.getItem("AnkitHOD"));
//   const branch1 = userData.Branch;

//   useEffect(() => {
//     // Fetch admission sessions from your API
//     const fetchAdmissionSessions = async () => {
//       try {
//         const response = await fetch(
//           "https://sssutmsapi.onrender.com/api/AdmissionSessions"
//         );
//         const data = await response.json();
//         setAdmissionSessions(data);
//       } catch (error) {
//         console.error("Error fetching admission sessions:", error);
//       }
//     };

//     fetchAdmissionSessions();
//   }, []);

//   const handleRadioChange = (event) => {
//     setSelectedRadioButton(event.target.value);
//     setSelectedRadioButton1(event.target.value);
//   };

//   const handleSearchDetails = async () => {
//     setShowList(true);
//     setShowForm(false);
//     setShowSidebar(false);

//     if (selectedRadioButton1 === "Pending Student List") {
//       const response = await fetch(
//         `https://sssutmsapi.onrender.com/api/NewRegistrationRequests?Branch=${branch1}
//         &AdmissionSession=${admissionSession}`
//       );
//       const data = await response.json();

//       console.log("Pending Student List data:", data);
//       navigate("/studentpending");
//     } else if (selectedRadioButton1 === "Verified Student List") {
//       const response = await fetch(
//         `https://sssutmsapi.onrender.com/api/VerifiedStudentList?Branch=${branch1}
//         &AdmissionSession=${admissionSession}`
//       );
//       const data = await response.json();

//       console.log("Verified Student List data:", data);
//       navigate("/studentverify");
//     }
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Sidebar />
//       {showForm && (
//         <Container
//           className="shadow p-3 mb-3 bg-body rounded"
//           style={{
//             backgroundColor: "#e8e5d5",
//             margin: "20px auto",
//             width: "25%",
//             marginLeft: "250px",
//             marginTop: "-35px",
//           }}
//         >
//           <div
//             style={{
//               backgroundColor: "skyblue",
//               borderRadius: "7px",
//             }}
//           >
//             <h5 style={{ padding: "10px" }}>Registration Verification</h5>
//           </div>

//           <Container
//             className="shadow p-3 mb-3 bg-body rounded"
//             style={{ backgroundColor: "#e8e5d5", marginTop: "20px" }}
//           >
//             <div
//               style={{
//                 backgroundColor: "skyblue",
//                 borderRadius: "7px",
//               }}
//             >
//               <h5 style={{ padding: "10px" }}>Search Type</h5>
//             </div>

//             <FormControlLabel
//               value="Student Registration"
//               control={<Radio />}
//               label="Student Registration"
//             />

//             <h5>
//               <b>Admission Session</b>
//             </h5>
//             <Form.Group className="mb-3" controlId="">
//               <Form.Select
//                 aria-label="Default select example"
//                 name=""
//                 onChange={(e) => setAdmissionSession(e.target.value)}
//               >
//                 <option value="pleaseSelect">--Please Select--</option>
//                 {admissionSessions.map((session) => (
//                   <option key={session} value={session}>
//                     {session}
//                   </option>
//                 ))}
//               </Form.Select>
//             </Form.Group>

//             <RadioGroup
//               aria-labelledby="demo-radio-buttons-group-label"
//               name="radio-buttons-group"
//               value={selectedRadioButton1}
//               onChange={handleRadioChange}
//             >
//               <FormControlLabel
//                 value="Pending Student List"
//                 control={<Radio />}
//                 label="Pending Student List"
//               />
//               <FormControlLabel
//                 value="Verified Student List"
//                 control={<Radio />}
//                 label="Verified Student List"
//               />
//             </RadioGroup>

//             <div
//               style={{
//                 backgroundColor: "skyblue",
//                 borderRadius: "7px",
//               }}
//             >
//               <Button
//                 size="small"
//                 style={{ padding: "10px", marginLeft: "30%" }}
//                 onClick={handleSearchDetails}
//               >
//                 Search Details
//               </Button>
//             </div>
//           </Container>
//         </Container>
//       )}
//     </ThemeProvider>
//   );
// };

// export default HodMainDetails;

import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Sidebar from "./HodDashboard";
import { useNavigate } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontWeightBold: 700,
  },
});

const HodMainDetails = () => {
  const [selectedRadioButton, setSelectedRadioButton] = useState("E-Pravesh");
  const [selectedRadioButton1, setSelectedRadioButton1] = useState(
    "Pending Student List"
  );
  const [showForm, setShowForm] = useState(true);
  const [showList, setShowList] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [admissionSession, setAdmissionSession] = useState("");
  const navigate = useNavigate();



  const handleRadioChange = (event) => {
    setSelectedRadioButton(event.target.value);
    setSelectedRadioButton1(event.target.value);
  };

  const handleSearchDetails = async () => {
    setShowList(true);
    setShowForm(false);
    setShowSidebar(false);
    if (selectedRadioButton1 === "Pending Student List") {
      navigate("/studentpending", {
        state: { admissionSession: admissionSession },
      });
    } else if (selectedRadioButton1 === "Verified Student List") {
      navigate("/studentverify", {
        state: { admissionSession: admissionSession },
      });
    }
  };
  console.log(admissionSession, "session");

  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
      {showForm && (
        <Container
          className="shadow p-3  bg-body rounded"
          style={{
            backgroundColor: "#e8e5d5",
            width: "25%",
            marginLeft: "10%",
            marginTop: "80px",
          }}
        >
          <div
            style={{
              backgroundColor: "skyblue",
              borderRadius: "7px",
            }}
          >
            <h5 style={{ padding: "10px" }}>Registration Verification</h5>
          </div>

          <Container
            className="shadow p-3 mb-3 bg-body rounded"
            style={{ backgroundColor: "#e8e5d5", marginTop: "20px" }}
          >
            <div
              style={{
                backgroundColor: "skyblue",
                borderRadius: "7px",
              }}
            >
              <h5 style={{ padding: "10px" }}>Search Type</h5>
            </div>

            {/* <FormControlLabel
                value="E-Pravesh"
                control={<Radio />}
                label="E-Pravesh"
              /> */}
            <FormControlLabel
              value="Student Registration"
              control={<Radio />}
              label="Student Registration"
            />

            <h5>
              <b>Admission Session</b>
            </h5>
            <Form.Group className="mb-3" controlId="">
              {/* <Form.Control
                // aria-label="Default select example"
                // name=""
                // onChange={(e) => setAdmissionSession(e.target.value)}
              >

              </Form.Control> */}
              <b>2023</b>
            </Form.Group>

            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={selectedRadioButton1}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value="Pending Student List"
                control={<Radio />}
                label="Pending Student List"
              />
              <FormControlLabel
                value="Verified Student List"
                control={<Radio />}
                label="Verified Student List"
              />
            </RadioGroup>

            <div
              style={{
                backgroundColor: "skyblue",
                borderRadius: "7px",
              }}
            >
              <Button
                size="small"
                style={{ padding: "10px", marginLeft: "30%" }}
                onClick={handleSearchDetails}
              >
                Search Details
              </Button>
            </div>
          </Container>
        </Container>
      )}
    </ThemeProvider>
  );
};

export default HodMainDetails;
