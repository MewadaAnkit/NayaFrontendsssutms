import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Sidebar from "./HodDashboard";
import { useNavigate } from "react-router-dom";

import Sidebarr from "./StudentDashboard";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Personal from "./Personal";

const theme = createTheme({
  // Define a theme with 'fontWeightBold'
  typography: {
    fontWeightBold: 700, // Adjust the value as needed
  },
});

const StudentMainDetails = () => {
  const [showForm, setShowForm] = useState(true);
  const [showList, setShowList] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const handleSearchDetails = () => {
    // setShowList(true);
    navigate("/studentpersonal");
    setShowForm(false);
    setShowSidebar(false);
  };

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Sidebarr />
        {showForm && (
          <Container
            className="shadow p-3 bg-body rounded"
            style={{
              backgroundColor: "#e8e5d5",
              width: "25%",
              marginLeft: "250px",
              marginTop:"-600px"
            }}
          >
            <div
              style={{
                backgroundColor: "#00cdac",
                borderRadius: "7px",
              }}
            >
              <h5 style={{ padding: "10px",color:"#fff" }}>Student Details</h5>
            </div>

            <Container
              className="shadow p-3 mb-3 bg-body rounded"
              style={{ backgroundColor: "#e8e5d5", marginTop: "20px" }}
            >
              {/* <div
          style={{
            backgroundColor: "skyblue",
            borderRadius: "7px",
          }}
        >
          <h5 style={{ padding: '10px' }}>Search Type</h5>
        </div>

        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel value="E-Pravesh" control={<Radio />} label="E-Pravesh" />
          <FormControlLabel value="Student Registration" control={<Radio />} label="Student Registration" />
        </RadioGroup>

        <h5>Admission Session</h5>
        <Form.Group className="mb-3" controlId="">
          <Form.Select
            aria-label="Default select example"
            name=""
          >
            <option value="1">--Please Select--</option>
            <option value="2"></option>
            <option value="3"></option>
            <option value="4"></option>
          </Form.Select>
        </Form.Group>

        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel value="Pending Student List" control={<Radio />} label="Pending Student List" />
          <FormControlLabel value="Verified Student List" control={<Radio />} label="Verified Student List" />
        </RadioGroup>

        <div
          style={{
            backgroundColor: "skyblue",
            borderRadius: "7px",
          }}
        >
            
          <Button size='small' style={{ padding: '10px', marginLeft: '30%' }} onClick={handleSearchDetails} >Search Details</Button>
        </div> */}
              <h5 onClick={handleSearchDetails}>Update Details</h5>
            </Container>
          </Container>
        )}
        {/* {showList && <Personal />} */}
      </ThemeProvider>
    </>
  );
};

export default StudentMainDetails;
