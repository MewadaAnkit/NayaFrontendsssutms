import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import checked from "../../images/checked.png";

function Success() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const orderId = queryParams.get("orderId");
  const transactionTime = queryParams.get("TxDate");
  const bankTransactionId = queryParams.get("BankTxnId");
  const Amount = queryParams.get("Transamount");
  const paymentMode = queryParams.get("paymentMode");
  const TxnID = queryParams.get("txnId");

  console.log(Amount, "amount")
 
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
          width: 40%; /* Adjust as needed */
          max-width: 800px; /* Set a maximum width if needed */
          height:80%;
         
        
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

        button:hover {
          opacity: 0.8;
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
          <img src={checked} alt="check" height="20%" width="20%" />
          <h4>Your Payment has been Successful</h4>
          <p>Date: {transactionTime}</p>
          <p style={{ color: "red" }}>Paid Amount</p>
          <p>
            <b> ₹</b>{Amount}
            
          </p>{" "}
          <p>TXN ID: {TxnID}</p>
          <p> ORDER ID: {orderId}</p>
          <p> PAYMENT MODE: {paymentMode}</p>
          <p> BANKTXN ID: {bankTransactionId}</p>
          <span>
            <Link to="/studentalldetail">
              {" "}
              Check your all filled Details click below button
            </Link>
          </span>
          <Button
            style={{
              backgroundImage: "linear-gradient(96deg, #ff5f6d , #ffc371 100%)",
              color: "white",
              width: "w-20 w-md-auto", 
              border: "none",
              padding: "10px 15px !important",
              borderRadius: "5px",
              fontSize: "14px !important",
              transition: "background-color 0.3s", 
              "&:hover": {
                background: "#4CAF50", 
              },
            }}
          >
            Click
          </Button>
        </div>
      </div>
    </>
  );
}

export default Success;
