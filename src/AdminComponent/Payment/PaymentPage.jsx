import React, { useState } from "react";
import OnlyHeader from "../OnlyHeader";
import { Button } from "react-bootstrap";

function PaymentPage() {
  const [loading, setLoading] = useState(false);

  function isDate(val) {
    // Cross realm comptatible
    return Object.prototype.toString.call(val) === "[object Date]";
  }

  function isObj(val) {
    return typeof val === "object";
  }

  function stringifyValue(val) {
    if (isObj(val) && !isDate(val)) {
      return JSON.stringify(val);
    } else {
      return val;
    }
  }
  function buildForm({ action, params }) {
    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", action);

    Object.keys(params)?.forEach((key) => {
      const input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", key);
      input.setAttribute("value", stringifyValue(params[key]));
      form.appendChild(input);
    });
    return form;
  }
  function post(details) {
    const form = buildForm(details);
    document.body.appendChild(form);
    setLoading(false);
    form.submit();
    form.remove();
  }

  const getData = (data) => {
    setLoading(false);
    return fetch(`https://sssutms.ac.in/api/payment`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };
  const userData = JSON.parse(sessionStorage.getItem("currentUser"));
  const email = userData.email;
  const mobile = userData.mobile;
  const firstname = userData.name;
  const userid = userData._id;
  const handlePayment = (e) => {
    <OnlyHeader />;
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      getData({ amount: 1, email, mobile, userid }).then((response) => {
        var information = {
          // for production only
          action: "https://securegw.paytm.in/order/process",
          params: response,
        };
        console.log(response);
        post(information);
      });
    }, 1000);
  };
  return (
    <>
      <style>
        {`
        .main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 20px;
        }

        .card {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 20px;
          width: 90%; /* Adjust as needed */
          height:90%;
          max-width: 800px; /* Set a maximum width if needed */
          margin: 20px auto; /* Center the card horizontally */
        }

        // button {
        //   margin-top: 20px;
        //   font-size: 20px;
        //   color: white;
        //   background-color: #11acf3;
        //   border: none;
        //   padding: 8px 20px;
        //   border-radius: 4px;
        //   cursor: pointer;
        //   transition: opacity 0.3s;
        // }

        button:hover {
          opacity: 0.8;
        }

        .center {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-top: 4px solid #11acf3;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
      </style>
      <OnlyHeader />
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
          <h3>Dear Student,</h3>
          <p>
            Your details have been updated successfully. Please wait until the
            HOD verifies your information. However, before proceeding, you need
            to pay the portal charges and enrollment charges.
          </p>
          <table
            style={{
              width: "100%",
              marginTop: "20px",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Registration Fee
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  ₹ 480
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Enrollment Fee
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  ₹ 5000
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "10px",
                    fontFamily: "bold",
                    border: "1px solid #ddd",
                  }}
                >
                  Total Amount
                </td>
                <td
                  style={{
                    padding: "5px",
                    border: "1px solid #ddd",
                    color: "#023047",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bolder",
                      fontSize: "20px",
                    }}
                  >
                    ₹
                  </span>{" "}
                  5480
                </td>
              </tr>
            </tbody>
          </table>
          <form onSubmit={handlePayment}>
            {!loading ? (
              <div className="col-12 center">
                <Button
                  style={{
                    margin: "30px auto",
                    display: "block",
                    width: "20%",
                    backgroundImage:
                      "linear-gradient(96deg, #ff5f6d 0%, #ffc371 100%)",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "14px !important",
                  }}
                  type="submit"
                >
                  Pay Now
                </Button>
              </div>
            ) : (
              <div className="loading-container">
                <div className="spinner"></div>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default PaymentPage;
