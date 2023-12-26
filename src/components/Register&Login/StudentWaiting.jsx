import React from "react";
import { Link } from "react-router-dom";


const StudentWaiting = () => {
  return (
    <div className="main">
      <div className="loading-screen">
        <div className="loading-animation">
          <img
            src="https://imgur.com/FsvEuM2.png"
            alt="logo"
            className="logo"
          />
          <div className="loading-bar" />
          <p className="loading-text">
            Dear Student, Please wait until your Hod approved your
            registration!!
            <h4 style={{ color: "yellow" }}> <Link to="/studentlogin"> Back to Login</Link></h4>
          </p>
        </div>
      </div>

      <style jsx>
        {`
          .loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            background-image: linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);
          }
          .logo {
            width: 300px;
            margin-left: 150px;
          }

          .loading-bar {
            width: 700px;
            height: 6px;
            background: #e9edc9;
            margin-top: 22px;
            position: relative;
            overflow: hidden;
          }

          .loading-bar::before {
            content: "";
            width: 150px;
            height: 8px;
            background: #ef233c;
            position: absolute;
            left: 0px;

            animation: pinkbar 1.5s infinite ease;
          }

          @keyframes pinkbar {
            50% {
              left: 196px;
            }
          }

          .loading-text {
            margin-top: 10px;
            font-family: "italic";
            font-size: 25px;
            color: white;
            white-space: normal;
          }
          @media only screen and (max-width: 400px) {
            .logo {
              margin-left: 23px;
            }
            .loading-bar{
              width: 80%;
            }
          }
        
          @media only screen and (max-width: 600px) {
            .loading-bar {
              width: 80%;
            }

            .loading-text {
              font-size: 16px;
             
            }
          }
        `}
      </style>
    </div>
  );
};

export default StudentWaiting;
