import React from "react";
import { Link } from "react-router-dom";
import "./Erp.css";
import student from "../../images/student.png";
import employee from "../../images/employee.png";
import certificate from "../../images/ErpCertificate.png";
import shop from "../../images/ErpShop.png";
import library from "../../images/ErpLibrary.png";
import payment from "../../images/ErpOnline.png";
import OnlyHeader from "../../AdminComponent/OnlyHeader";

function Cards() {
  return (
    <>
      <OnlyHeader />
      <div className="erpBG">
        <div className="cardCont">
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <div className="container" style={{ marginTop: 60 }}>
            <div className="row">
              <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4 col-xs-12">
                <Link to="/studentlogin" style={{ textDecoration: "none" }}>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-image" style={{ color: "#213661" }}>
                        <img
                          src={student}
                          style={{
                            width: "100px",
                            height: "100px",
                            textAlign: "center",
                          }}
                          alt="Girl in a jacket"
                        />
                      </div>

                      <p className="card-text"> STUDENT LOGIN </p>
                      <p
                        style={{
                          color: "black",
                          fontSize: "14px",
                          textAlign: "center",
                        }}
                      >
                        Click here for Student Login
                      </p>
                    </div>
                  </div>
                </Link>{" "}
              </div>

              <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4 col-xs-12">
                <Link to="/adminlogin" style={{ textDecoration: "none" }}>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-image" style={{ color: "#213661" }}>
                        <img
                          src={employee}
                          style={{
                            width: "100px",
                            height: "100px",
                            textAlign: "center",
                          }}
                          alt="Girl in a jacket"
                          width="500"
                          height="600"
                        />
                      </div>

                      <p className="card-text"> HOD LOGIN</p>
                      <p
                        style={{
                          color: "black",

                          fontSize: "14px",
                          textAlign: "center",
                        }}
                      >
                        Click here for Hod Login
                      </p>
                    </div>
                  </div>
                </Link>{" "}
              </div>
              <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4 col-xs-12">
                <Link to="" style={{ textDecoration: "none" }}>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-image" style={{ color: "#213661" }}>
                        <img
                          src={payment}
                          style={{ width: "100px", height: "100px" }}
                          alt="Girl in a jacket"
                          width="500"
                          height="600"
                        />
                      </div>

                      <p className="card-text"> Online Fee Payment</p>
                      <p
                        style={{
                          color: "black",
                          textDecoration: "none",
                          fontSize: "14px",
                          textAlign: "center",
                        }}
                      >
                        Click here to Pay Online Fee
                      </p>
                    </div>
                  </div>
                </Link>{" "}
              </div>
            </div>
          </div>

          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossOrigin="anonymous"
          />
          <div className="container " style={{ marginTop: -35 }}>
            <div className="row">
              <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4 col-xs-12">
                <Link to="" style={{ textDecoration: "none" }}>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-image" style={{ color: "#213661" }}>
                        <img
                          src={library}
                          style={{ width: "100px", height: "100px" }}
                          alt="Girl in a jacket"
                          width="500"
                          height="600"
                        />
                      </div>

                      <p className="card-text"> LIBRARY</p>
                      <p
                        style={{
                          color: "black",
                          textDecoration: "none",
                          fontSize: "14px",
                          textAlign: "center",
                        }}
                      >
                        Click here for Library Login
                      </p>
                    </div>
                  </div>
                </Link>{" "}
              </div>
              <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4 col-xs-12">
                <Link to="" style={{ textDecoration: "none" }}>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-image" style={{ color: "#213661" }}>
                        <img
                          src={shop}
                          style={{ width: "100px", height: "100px" }}
                          alt="Girl in a jacket"
                          width="500"
                          height="600"
                        />
                      </div>

                      <p className="card-text"> STORE DEPARTMENT LOGIN</p>
                      <p
                        style={{
                          color: "black",
                          textDecoration: "none",
                          fontSize: "14px",
                          textAlign: "center",
                        }}
                      >
                        Click here for Store Department Login
                      </p>
                    </div>
                  </div>
                </Link>{" "}
              </div>

              <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4 col-xs-12">
                <Link to="" style={{ textDecoration: "none" }}>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-image" style={{ color: "#213661" }}>
                        <img
                          src={certificate}
                          style={{ width: "100px", height: "100px" }}
                          alt="Girl in a jacket"
                          width="500"
                          height="600"
                        />
                      </div>

                      <p className="card-text"> CERTIFICATE LOGIN</p>
                      <p
                        style={{
                          color: "black",
                          textDecoration: "none",
                          fontSize: "14px",
                          textAlign: "center",
                        }}
                      >
                        Click here for Certificate Login
                      </p>
                    </div>
                  </div>
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
