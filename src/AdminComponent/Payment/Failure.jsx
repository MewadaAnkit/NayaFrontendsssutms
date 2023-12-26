import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import cancel from "../../images/cancel.png";

function Failure() {
  return (
    <>
      <style>
        {`
        .card {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 20px;
          width: 35%; /* Adjust as needed */
          max-width: 800px; /* Set a maximum width if needed */
          height:90%;
          margin: 20px auto; /* Center the card horizontally */
          text-align: center; /* Center text within the card */
        }

        img {
          display: block; /* Ensure the image is a block element */
          margin: 0 auto; /* Center the image within its container */
        }

        h4 {
          margin-top: 20px; /* Add margin to the top of the heading */
        }
      `}
      </style>
      <div
        style={{
          background: "linear-gradient(to right, #A9F1DF , #FFBBBB)",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="card">
          <img src={cancel} alt="check" height="20%" width="20%" />
          <h4>Oops, Your Payment has been failed!!</h4>
          <p> Please ! try again later...</p>
        
          <Button
            style={{
              backgroundImage: "linear-gradient(96deg, #ff5f6d , #ffc371 100%)",
              color: "white",
              width: "w-20 w-md-auto", // Adjusted width classes
              border: "none",
              padding: "10px 15px !important",
              borderRadius: "5px",
              fontSize: "14px !important",
              transition: "background-color 0.3s", // Add transition for smooth color change
              "&:hover": {
                background: "#4CAF50", // Change the color on hover
              },
            }}
          >
           <Link to="/studentlogin">
              {" "}
              Go to Home Page
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Failure;
