import * as React from "react";
import PropTypes from "prop-types";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import posImage from "./12.png";
import AppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Hidden from "@mui/material/Hidden";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import OnlyHeader from "./OnlyHeader";

// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">Notice</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <p>
//           Dear Student, Your registration can be cancelled without registration
//           and tuition fee Payment. It is mandatory to pay your registration and
//           tuition fees.
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

const drawerWidth = 240;

const theme = createTheme({
  // Define a theme with 'fontWeightBold'
  typography: {
    fontWeightBold: 700, // Adjust the value as needed
  },
});
function StudentDashboard(props) {
  const [modalShow, setModalShow] = useState(false);

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/studentDetail");
  };
  const HomeClick = () => {
    navigate("/student/dashboard/home");
  };

  return (
    <>
      <OnlyHeader />
      <div>
        <style>
          {`
        aside {
          color: #fff;
          width: 190px;
          padding-left: 20px;
          height: 100vh;
           background-image: linear-gradient(30deg ,#247BA0
          ,
            #FFFFB5);
          margin-top:65px
          position:fixed



        }

        aside a {
          font-size: 12px;
          color: #fff;
          display: block;
          padding: 12px;
          padding-left: 30px;
          text-decoration: none;
          -webkit-tap-highlight-color:transparent;
        }

        aside a:hover {
          // color: #3f5efb;
          background: #fff;
          outline: none;
          position: relative;
          background-color: #fff;
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
        }

        aside a i {
          margin-right: 5px;
        }

        aside a:hover::after {
          content: "";
          position: absolute;
          background-color: transparent;
          bottom: 100%;
          right: 0;
          height: 35px;
          width: 35px;
          border-bottom-right-radius: 18px;
          box-shadow: 0 20px 0 0 #fff;
        }

        aside a:hover::before {
          content: "";
          position: absolute;
          background-color: transparent;
          top: 38px;
          right: 0;
          height: 35px;
          width: 35px;
          border-top-right-radius: 18px;
          box-shadow: 0 -20px 0 0 #fff;
        }

        aside p {
          margin: 0;
          padding: 40px 0;
        }

        .social {
          height: 0;
        }

        .social i:before {
          width: 14px;
          height: 14px;
          font-size: 14px;
          position: fixed;
          color: #fff;
          background: #0077B5;
          padding: 10px;
          border-radius: 50%;
          top:5px;
          right:5px;
        }
          @media (max-width:400px)and (min-width:900px){
            .heading{
              width:50px
            }
             }
        `}
        </style>
        <>
          <aside>
            <br />
            <br />
            <br />
            <a href="javascript:void(0)" onMouseEnter={HomeClick}>
              <i
                className="fa fa-home"
                aria-hidden="true"
                style={{ fontSize: "35px", textShadow: "2px 2px 3px black" }}
              />
              <b style={{ fontSize: "16px", color: "black" }}>Home</b>
            </a>
            <br />

            <a href="javascript:void(0)" onMouseEnter={handleClick}>
              <i
                className="fa fa-folder"
                aria-hidden="true"
                style={{ fontSize: "35px", textShadow: "2px 2px 3px black" }}
              />

              <b style={{ fontSize: "16px", color: "black" }}>Enrollment</b>
            </a>
          </aside>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/florin-cornea-b5118057/"
              target="_blank"
            >
              <i className="fa fa-linkedin" />
            </a>
          </div>
        </>
      </div>
    </>
  );
}

StudentDashboard.propTypes = {
  window: PropTypes.func,
};
export default StudentDashboard;
