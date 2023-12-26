import React from "react";
import { Chart } from "react-google-charts";
import { Table } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Box } from "@mui/material";
import Sidebar from "./HodDashboard";
import OnlyHeader from "./OnlyHeader";
import { Style } from "@mui/icons-material";

const dataOld = [
  ["Name", "Popularity"],
  ["Cesar", 250],
  ["Rachel", 4200],
  ["Patrick", 2900],
  ["Eric", 8200],
];

const dataNew = [
  ["Name", "Popularity"],
  ["Cesar", 370],
  ["Rachel", 600],
  ["Patrick", 700],
  ["Eric", 1500],
];

export const diffdata = {
  old: dataOld,
  new: dataNew,
};

export const data2 = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

export const options2 = {
  title: "My Daily Activities",
  pieHole: 0.4,
  is3D: false,
};
export const data3 = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];
export const options3 = {
  chart: {
    title: "Student Admission In",
  },
};
function Dashboard() {
  return (
    <>
      <Sidebar />
      <style>
        {`
       .card-purple-blue {
  background: linear-gradient(45deg, #6d80fe 0%, #23d2fd 100%);
  box-shadow: 0 5px 20px rgba(35, 210, 253, 0.3); }
  
  .card-salmon-pink {
  background: linear-gradient(45deg, #ff998b 0%, #ff6d88 100%);
  box-shadow: 0 5px 20px rgba(255, 153, 139, 0.3); }
  
  .card-blue-green {
  background: linear-gradient(45deg, #09afe8 0%, #29f499 100%);
  box-shadow: 0 5px 20px rgba(41, 244, 153, 0.3); }
  
  .card-purple-pink {
  background: linear-gradient(45deg, #707cff 0%, #fa81e8 100%);
  box-shadow: 0 5px 20px rgba(250, 129, 232, 0.3); }
  
  .card {
  height: 90px;
  border: 0;
  border-radius: 10px; }
  .card-body {
    padding: 15px 20px; }
  
       `}
      </style>

      <div
        className="container-fluid"
        style={{ display: "flex", marginLeft: "140px", marginTop: "90px" }}
      >
        <div className="row"></div>
        <div className="row mb-5">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card card-purple-blue text-white mb-3 mb-md-0">
              <div className="card-body d-flex justify-content-between align-items-end">
                <div className="card-number">
                  <div className="h3 m-0">288K</div>
                  <small>
                    <strong>REVENUE</strong>
                  </small>
                </div>
                <div className="card-description text-right">
                  <small>235K</small>
                  <br />
                  <small>22.48%</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card card-salmon-pink text-white">
              <div className="card-body d-flex justify-content-between align-items-end">
                <div className="card-number">
                  <div className="h3 m-0">1036</div>
                  <small>
                    <strong>clicks</strong>
                  </small>
                </div>
                <div className="card-description text-right">
                  <small>890</small>
                  <br />
                  <small>16.40%</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card card-blue-green text-white">
              <div className="card-body d-flex justify-content-between align-items-end">
                <div className="card-number">
                  <div className="h3 m-0">0.36</div>
                  <small>
                    <strong>CTR (in %)</strong>
                  </small>
                </div>
                <div className="card-description text-right">
                  <small>0.38</small>
                  <br />
                  <small>-0.02%</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card card-purple-pink text-white">
              <div className="card-body d-flex justify-content-between align-items-end">
                <div className="card-number">
                  <div className="h3 m-0">99</div>
                  <small>
                    <strong>CONVERTED CLICKS</strong>
                  </small>
                </div>
                <div className="card-description text-right">
                  <small>92</small>
                  <br />
                  <small>7.61%</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "50px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <div
          className="row2 shadow p-3 bg-body rounded"
          style={{
            margin: "20px",
            width: "100%",
            maxWidth: "700px",
            height: "415px",
            backgroundColor: "#fff",
            marginLeft: "5px",
          }}
        >
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            diffdata={diffdata}
            style={{ marginRight: "40px" }}
          />
        </div>

        <div
          className="row2 shadow p-3 bg-body rounded"
          style={{
            margin: "20px",
            width: "100%",
            maxWidth: "500px",
            height: "415px",
            backgroundColor: "#fff",
          }}
        >
          <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data2}
            options={options2}
          />
        </div>
      </div>

      {/* /////////////////////////////////////////////////////////////////////////////////////// */}
      <div
        className="row2 shadow p-3 bg-body rounded"
        style={{
          margin: "20px auto",
          height: "400px",
          width: "80%",
          maxWidth: "900px",
          marginLeft: "20%",
          marginTop: "60px",
        }}
      >
        <Chart
          chartType="Bar"
          width="100%"
          height="100%"
          data={data3}
          options={options3}
        />
      </div>
    </>
  );
}
export default Dashboard;
