// // import React from "react";
// // import img from "../images/homeee.png";
// // import { Link } from "react-router-dom";
// // import { Flex } from "@chakra-ui/react";

// // function MainNavbar() {
// //   return (
// //     <>
// //        <style>
// //         {`
// //           * {
// //             box-sizing: border-box;
// //           }

// //           body {
// //             margin: 0px;
// //             font-family: 'segoe ui';
// //             padding-top: 50px; /* Adjusted top padding to accommodate the fixed navbar */
// //           }

// //           .nav {
// //             height: 50px;
// //             width: 100%;
// //             background-color: #990033;
// //             position: fixed; /* Set position to fixed */
// //             top: 0; /* Stick to the top of the page */
// //             z-index: 1000; /* Set a high z-index to ensure it's above other elements */
// //           }

// //           .nav > .nav-header {
// //             display: inline;
// //           }

// //           .nav > .nav-header > .nav-title {
// //             display: inline-block;
// //             font-size: 22px;
// //             color: #fff;
// //             padding: 10px;
// //           }

// //           .nav > .nav-btn {
// //             display: none;
// //           }

// //           .nav > .nav-links {
// //             display: inline;
// //             float: right;
// //             font-size: 18px;
// //           }

// //           .nav > .nav-links > a {
// //             display: inline-block;
// //             padding: 13px 10px;
// //             text-decoration: none;
// //             color: #efefef;
// //           }

// //           .nav > .nav-links > a:hover {
// //             background-color: rgba(0, 0, 0, 0.3);
// //           }

// //           .nav > #nav-check {
// //             display: none;
// //           }

// //           @media (max-width: 600px) {
// //             .nav > .nav-btn {
// //               display: inline-block;
// //               position: absolute;
// //               right: 0px;
// //               top: 0px;
// //             }
// //             .nav > .nav-btn > label {
// //               display: inline-block;
// //               width: 50px;
// //               height: 50px;
// //               padding: 13px;
// //             }
// //             .nav > .nav-btn > label:hover,
// //             .nav #nav-check:checked ~ .nav-btn > label {
// //               background-color: rgba(0, 0, 0, 0.3);
// //             }
// //             .nav > .nav-btn > label > span {
// //               display: block;
// //               width: 25px;
// //               height: 10px;
// //               border-top: 2px solid #eee;
// //             }
// //             .nav > .nav-links {
// //               position: absolute;
// //               display: block;
// //               width: 100%;
// //               background-color: #333;
// //               height: 0px;
// //               transition: all 0.3s ease-in;
// //               overflow-y: hidden;
// //               top: 50px;
// //               left: 0px;
// //             }
// //             .nav > .nav-links > a {
// //               display: block;
// //               width: 100%;
// //             }
// //             .nav > #nav-check:not(:checked) ~ .nav-links {
// //               height: 0px;
// //             }
// //             .nav > #nav-check:checked ~ .nav-links {
// //               height: calc(100vh - 50px);
// //               overflow-y: auto;
// //             }
// //           }

// //            body {
// //               font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
// //               animation: fadeIn 1s ease-in-out;
// //           }

// //           header {
// //               color: red;
// //               font-size: 1rem;
// //               display: flex;
// //               height: 100%;
// //               font-weight: 600;
// //               background-color: #0c4c91;
// //           }

// //           .main-div {
// //               padding: 0 5%;
// //           }

// //           header>div {
// //               padding: 1em 3%;
// //               display: flex;
// //               width: 100%;
// //               justify-content: space-between;
// //           }

// //           header>div>div>div {
// //               margin: 0 0.5em;
// //           }

// //           .s-p {
// //               margin-left: 5px;
// //               color: #FFFFFF;
// //           }

// //           .nav-li {
// //               display: flex;
// //               justify-content: space-between;
// //               align-items: flex-end;
// //           }

// //           h1>span {
// //               color: rgb(255, 111, 0);
// //           }

// //           * {
// //           box-sizing: border-box;
// //         }

// //         .Top-bar {
// //           display: flex;
// //           flex-direction: column;
// //           padding: 10px;
// //           background-color: #f9f9f1;
// //         }

// //         .Top-bar > div {
// //           padding-left: 1em;
// //         }

// //         .menu ul {
// //           display: flex;
// //           flex-direction: column;
// //           align-items: flex-end;
// //         }

// //         .menu ul li {
// //           list-style: none;
// //           padding: 0.5em 1em;
// //           margin: 0.25em 0;
// //         }

// //         .menu ul li hr {
// //           border: none;
// //           height: 0.25em;
// //           background-color: rgb(255, 111, 0);
// //           width: 0;
// //           transition: width 0.3s;
// //         }

// //         .menu ul li:hover hr {
// //           width: 100%;
// //         }

// //         .dropdown-content,
// //         .submenu {
// //           display: none;
// //           position: static;
// //           background-color: #f9f9f9;
// //           border: 1px solid black;
// //         }

// //         .dropbtn:hover .dropdown-content,
// //         .submenu-trigger:hover + .submenu {
// //           display: block;
// //         }

// //         .dropdown-content a,
// //         .submenu a {
// //           display: block;
// //           padding: 12px 16px;
// //           text-decoration: none;
// //           color: #333;
// //         }

// //         .dropdown-content a:hover,
// //         .submenu a:hover {
// //           background-color: #ddd;
// //         }

// //         @media screen and (min-width: 600px) {
// //           .Top-bar {
// //             flex-direction: row;
// //             justify-content: space-between;
// //           }

// //           .menu {
// //             align-self: flex-end;
// //           }

// //           .menu ul {
// //             flex-direction: row;
// //           }

// //           .submenu {
// //             position: absolute;
// //             top: initial;
// //             left: initial;
// //           }
// //         }


// //           body {
// //             margin: 0;
// //             font-family: 'segoe ui';
// //           }

// //           header {
// //             padding: 20px 0;
// //             background: repeating-linear-gradient(45deg, #f0f2ed, #f0f2ed 20px, #f8f4eb 20px, #f8f4eb 40px);
// //             box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);  
// //           }

// //           .container {
// //             padding: 0 20px;
// //             max-width: 960px;
// //             margin: 0 auto;
// //           }

// //           .logo-box {
// //             float: left;
// //             margin-right: 20px;
// //           }

// //           .logo-box a {
// //             outline: none;
// //             display: block;
// //           }

// //           .logo-box img {
// //             display: block;
// //           }

// //           nav {
// //             overflow: hidden;
// //           }

// //           ul {
// //             list-style: none;
// //             margin: 0;
// //             padding: 0;
// //             float: right;
// //           }

// //           nav li {
// //             display: inline-block;
// //             margin-left: 25px;
// //             height: 70px;
// //             line-height: 70px;
// //             transition: .5s linear;
// //           }

// //           nav a {
// //             text-decoration: none;
// //             display: block;
// //             position: relative;
// //             color: #868686;
// //             text-transform: uppercase;
// //           }

// //           nav a:after {
// //             content: "";
// //             width: 0;
// //             height: 2px;
// //             position: absolute;
// //             left: 0;
// //             bottom: 15px;
// //             background: #868686;
// //             transition: width .5s linear;  
// //           }

// //           nav a:hover:after {
// //             width: 100%;
// //           }

// //           @media screen and (max-width: 660px) {
// //             header {
// //               text-align: center;
// //             }
// //             .logo-box {
// //               float: none;
// //               display: inline-block;
// //               margin: 0 0 16px 0;
// //             }
// //             ul {
// //               float: none;
// //             }
// //             nav li:first-of-type {
// //               margin-left: 0;
// //             }
// //           }

// //           @media screen and (max-width: 550px) {
// //             nav {
// //               overflow: visible;
// //             }
// //             nav li {
// //               display: block;
// //               margin: 0;
// //               height: 40px;
// //               line-height: 40px;
// //             }
// //             nav li:hover {
// //               background: rgba(0,0,0,.1);
// //             }
// //             nav a:after {
// //               content: none;
// //             }
// //           }


// //         `}
// //       </style>

// //       <div className="nav">
// //         <input type="checkbox" id="nav-check" />
// //         <div className="nav-header">
// //           {/* <div className="nav-title">Home</div> */}
// //           {/* <img
// //             style={{ width: "35px", marginTop: "10px", marginLeft: "30px" }}
// //             src={img}
// //             alt="home icon"
// //           /> */}
// //         </div>
// //         <div className="nav-btn">
// //           <label htmlFor="nav-check">
// //             <span />
// //             <span />
// //             <span />
// //           </label>
// //         </div>
// //         <div className="nav-links">
// //         <a style={{ marginLeft: "100px" }}>Home</a>
// //           <a>About</a>
// //           {/* <span className="s-p" style={{ marginLeft: '35px',color:"white" }}>About</span> */}
// //           <a>Examination</a>
// //           {/* <span className="s-p" style={{ marginLeft: '35px',color:"white" }}>Examination</span> */}
// //           <a>Download</a>
// //           {/* <span className="s-p" style={{ marginLeft: '35px',color:"white" }}>Download</span> */}
// //           <a>Carrer</a>
// //           {/* <span className="s-p" style={{ marginLeft: '35px',color:"white" }}>Carrer</span> */}
// //           {/* <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">
// //             ERP
// //           </a> */}
// //           <a>
// //             <Link to="/erp">
// //               <span className="s-p" style={{ marginLeft: "10px" }}>
// //                 ERP
// //               </span>
// //             </Link>
// //           </a>
// //         </div>
// //       </div>
// //       <div className="Top-bar" >
// //         <div>
// //           <h1>
// //             <img style={{ width: '100%', width: '60%' }} src="https://www.sssutms.co.in/cms/Areas/Website/Content/images/logo21.png" alt="logo" />
// //           </h1>
// //         </div>
// //         <div className="menu" >
// //           <ul>
// //             <li style={{ fontWeight: 'bolder', fontSize: '20px', color: 'orange' }}>
// //               Academic
// //               <hr />
// //             </li>
// //             <li className="dropbtn" style={{ fontWeight: 'bolder', fontSize: '20px', color: 'orange' }}>
// //               Research
// //               <hr />
// //             </li>
// //             <li style={{ fontWeight: 'bolder', fontSize: '20px', color: 'orange' }}>
// //               Admission
// //               <hr />
// //             </li>
// //             <li style={{ fontWeight: 'bolder', fontSize: '20px', color: 'orange' }}>
// //               Contact
// //               <hr />
// //             </li>
// //             <img src='https://www.g20.org/content/dam/gtwenty/header-footer/header/g20-logo.png' alt='g20 logo' height='60px' width='120px' style={{ marginLeft: '7px' }} />
// //           </ul>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default MainNavbar;
// import React from "react";
// import img from "../images/homeee.png";
// import { Link } from "react-router-dom";
// import { Flex } from "@chakra-ui/react";
// function MainNavbar() {
//   return (
//     <>
//       <style>
//         {`
//           * {
//             box-sizing: border-box;
//           }

//           body {
//             margin: 0px;
//             font-family: 'segoe ui';
//             padding-top: 50px; /* Adjusted top padding to accommodate
// the fixed navbar */
//           }

//           .nav {
//             height: 50px;
//             width: 100%;
//             background-color: #990033;
//             position: fixed; /* Set position to fixed */
//             top: 0; /* Stick to the top of the page */
//             z-index: 1000; /* Set a high z-index to ensure it's above
// other elements */
//           }

//           .nav > .nav-header {
//             display: inline;
//           }

//           .nav > .nav-header > .nav-title {
//             display: inline-block;
//             font-size: 22px;
//             color: #fff;
//             padding: 10px;
//           }

//           .nav > .nav-btn {
//             display: none;
//           }

//           .nav > .nav-links {
//             display: inline;
//             float: right;
//             font-size: 18px;
//           }

//           .nav > .nav-links > a {
//             display: inline-block;
//             padding: 13px 10px;
//             text-decoration: none;
//             color: #efefef;
//           }

//           .nav > .nav-links > a:hover {
//             background-color: rgba(0, 0, 0, 0.3);
//           }

//           .nav > #nav-check {
//             display: none;
//           }

//           @media (max-width: 600px) {
//             .nav > .nav-btn {
//               display: inline-block;
//               position: absolute;
//               right: 0px;
//               top: 0px;
//             }
//             .nav > .nav-btn > label {
//               display: inline-block;
//               width: 50px;
//               height: 50px;
//               padding: 13px;
//             }
//             .nav > .nav-btn > label:hover,
//             .nav #nav-check:checked ~ .nav-btn > label {
//               background-color: rgba(0, 0, 0, 0.5);
//             }
//             .nav > .nav-btn > label > span {
//               display: block;
//               width: 25px;
//               height: 10px;
//               border-top: 2px solid #eee;
//             }
//             .nav > .nav-links {
//               position: absolute;
//               display: block;
//               width: 100%;
//               background-color: #333;
//               height: 0px;
//               transition: all 0.3s ease-in;
//               overflow-y: hidden;
//               top: 50px;
//               left: 0px;
//             }
//             .nav > .nav-links > a {
//               display: block;
//               width: 100%;
//             }
//             .nav > #nav-check:not(:checked) ~ .nav-links {
//               height: 0px;
//             }
//             .nav > #nav-check:checked ~ .nav-links {
//               height: calc(100vh - 50px);
//               overflow-y: auto;
//             }
//           }

//            body {
//               font-family: 'Lucida Sans', 'Lucida Sans Regular',
//              'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
//               animation: fadeIn 1s ease-in-out;
//           }

//           header {
//               color: red;
//               font-size: 1rem;
//               display: flex;
//               height: 100%;
//               font-weight: 600;
//               background-color: #0c4c91;
//           }

//           .main-div {
//               padding: 0 5%;
//           }

//           header>div {
//               padding: 1em 3%;
//               display: flex;
//               width: 100%;
//               justify-content: space-between;
//           }

//           header>div>div>div {
//               margin: 0 0.5em;
//           }

//           .s-p {
//               margin-left: 5px;
//               color: #FFFFFF;
//           }

//           .nav-li {
//               display: flex;
//               justify-content: space-between;
//               align-items: flex-end;
//           }

//           h1>span {
//               color: rgb(255, 111, 0);
//           }

//           * {
//           box-sizing: border-box;
//         }

//         .Top-bar {
//           display: flex;
//           flex-direction: column;
//           padding: 10px;
//           background-color: #f9f9f1;
//         }

//         .Top-bar > div {
//           padding-left: 1em;
//         }

//         .menu ul {
//           display: flex;
//           flex-direction: column;
//           align-items: flex-end;

//         }

//         .menu ul li {
//           list-style: none;
//           padding: 0.5em 1em;
//           margin: 0.25em 0;
//         }

//         .menu ul li hr {
//           border: none;
//           height: 0.25em;
//           background-color: #134074;
//           width: 0;
//           transition: width 0.3s;
//         }

//         .menu ul li:hover hr {
//           width: 100%;
//         }

//         .dropdown-content,
//         .submenu {
//           display: none;
//           position: static;
//           background-color: #f9f9f9;
//           border: 1px solid black;
//         }

//         .dropbtn:hover .dropdown-content,
//         .submenu-trigger:hover + .submenu {
//           display: block;
//         }

//         .dropdown-content a,
//         .submenu a {
//           display: block;
//           padding: 12px 16px;
//           text-decoration: none;
//           color: #333;
//         }

//         .dropdown-content a:hover,
//         .submenu a:hover {
//           background-color: #ddd;
//         }

//         @media screen and (min-width: 600px) {
//           .Top-bar {
//             flex-direction: row;
//             justify-content: space-between;


//           }

//           .menu {
//             align-self: flex-end;
//           }

//           .menu ul {
//             flex-direction: row;


//           }

//           .submenu {
//             position: absolute;
//             top: initial;
//             left: initial;
//           }
//         }


//           body {
//             margin: 0;
//             font-family: 'segoe ui';
//           }

//           header {
//             padding: 20px 0;
//             background: repeating-linear-gradient(45deg, #f0f2ed,
//             #f0f2ed 20px, #f8f4eb 20px, #f8f4eb 40px);
//             box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
//           }

//           .container {
//             padding: 0 20px;
//             max-width: 960px;
//             margin: 0 auto;
//           }

//           .logo-box {
//             float: left;
//             margin-right: 20px;
//           }

//           .logo-box a {
//             outline: none;
//             display: block;
//           }

//           .logo-box img {
//             display: block;
//           }

//           nav {
//             overflow: hidden;
//           }

//           ul {
//             list-style: none;
//             margin: 0;
//             padding: 0;
//             float: right;
//           }

//           nav li {
//             display: inline-block;
//             margin-left: 25px;
//             height: 70px;
//             line-height: 70px;
//             transition: .5s linear;
//           }

//           nav a {
//             text-decoration: none;
//             display: block;
//             position: relative;
//             color: #868686;
//             text-transform: uppercase;
//           }

//           nav a:after {
//             content: "";
//             width: 0;
//             height: 2px;
//             position: absolute;
//             left: 0;
//             bottom: 15px;
//             background: #868686;
//             transition: width .5s linear;
//           }

//           nav a:hover:after {
//             width: 100%;
//           }

//           @media screen and (max-width: 660px) {
//             header {
//               text-align: center;
//             }
//             .logo-box {
//               float: none;
//               display: inline-block;
//               margin: 0 0 16px 0;
//             }
//             ul {
//               float: none;
//             }
//             nav li:first-of-type {
//               margin-left: 0;
//             }
//           }

//           @media screen and (max-width: 550px) {
//             nav {
//               overflow: visible;
//             }
//             nav li {
//               display: block;
//               margin: 0;
//               height: 40px;
//               line-height: 40px;
//             }
//             nav li:hover {
//               background: rgba(0,0,0,.1);
//             }
//             nav a:after {
//               content: none;
//             }
//           }


//         `}
//       </style>

//       <div className="nav">
//         <input type="checkbox" id="nav-check" />
//         <div className="nav-header">
//           {/* <div className="nav-title">Home</div> */}
//           {/* <img
//             style={{ width: "35px", marginTop: "10px", marginLeft: "30px" }}
//             src={img}
//             alt="home icon"
//           /> */}
//         </div>
//         <div className="nav-btn">
//           <label htmlFor="nav-check">
//             <span />
//             <span />
//             <span />
//           </label>
//         </div>
//         <div className="nav-links">
//           <Link to="/">
//             {" "}
//             <a style={{ marginLeft: "100px" }}>Home</a>
//           </Link>

//           <Link to="/commingsoon">
//             {" "}
//             <a>About</a>
//           </Link>

//           <Link to="/commingsoon">
//             {" "}
//             <a>Examination</a>
//           </Link>

//           <Link to="/commingsoon">
//             {" "}
//             <a>Download</a>
//           </Link>

//           <Link to="/commingsoon">
//             {" "}
//             <a>Carrer</a>
//           </Link>


//           <a>
//             <Link to="/erp">
//               <span className="s-p" style={{ marginLeft: "10px" }}>
//                 ERP
//               </span>
//             </Link>
//           </a>

//         </div>

//       </div>
//       <div className="Top-bar">
//         <div>
//           <h1>
//             <img
//               style={{ width: "100%", width: "60%" }}
//               src="https://www.sssutms.co.in/cms/Areas/Website/Content/images/logo21.png"
//               alt="logo"
//             />
//             <p style={{ color: "#787e9e", fontSize: "13px", marginLeft: '55px', paddingTop: "5px" }}>- Run by Ayushmati Education & Social society</p>
//           </h1>
//         </div>
//         <div className="menu">

//           <ul>
//             <Link to="/commingsoon">
//               {" "}
//               <li
//                 style={{
//                   fontWeight: "bolder",
//                   fontSize: "20px",
//                   color: "#134074",
//                 }}
//               >
//                 Academic
//                 <hr />
//               </li>
//             </Link>

//             <Link to="/commingsoon">
//               {" "}
//               <li
//                 className="dropbtn"
//                 style={{
//                   fontWeight: "bolder",
//                   fontSize: "20px",
//                   color: "#134074",
//                 }}
//               >
//                 Research
//                 <hr />
//               </li>
//             </Link>
//             <Link to="/commingsoon">
//               {" "}
//               <li
//                 style={{
//                   fontWeight: "bolder",
//                   fontSize: "20px",
//                   color: "#134074",
//                 }}
//               >
//                 Admission
//                 <hr />
//               </li>
//             </Link>
//             <Link to="/commingsoon">
//               {" "}
//               <li
//                 style={{
//                   fontWeight: "bolder",
//                   fontSize: "20px",
//                   color: "#134074",
//                 }}
//               >
//                 Contact
//                 <hr />
//               </li>
//             </Link>
//             <img src='https://seeklogo.com/images/A/aatmanirbhar-bharat-logo-224D708C71-seeklogo.com.png' alt='g20 logo' height='30px' width='70px' style={{ marginLeft: '7px' }} />

//           </ul>
//         </div>
//       </div>


//     </>
//   );
// }

// export default MainNavbar;


import React from "react";
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <>
      <style>
        {`
          * {
            box-sizing: border-box;
          }

          body {
            margin: 0px;
            font-family: 'segoe ui';
            padding-top: 50px; /* Adjusted top padding to accommodate
            the fixed navbar */
          }

          .nav {
            height: 50px;
            width: 100%;
            background-color: #990033;
            position: fixed; /* Set position to fixed */
            top: 0; /* Stick to the top of the page */
            z-index: 1000; /* Set a high z-index to ensure it's above
            other elements */
          }

          .nav > .nav-header {
            display: inline;
          }

          .nav > .nav-header > .nav-title {
            display: inline-block;
            font-size: 22px;
            color: #fff;
            padding: 10px;
          }

          .nav > .nav-btn {
            display: none;
          }

          .nav > .nav-links {
            display: inline;
            float: right;
            font-size: 18px;
          }

          .nav > .nav-links > a {
            display: inline-block;
            padding: 13px 10px;
            text-decoration: none;
            color:whitesmoke;
          }

          .nav > .nav-links > a:hover {
            background-color: rgba(0, 0, 0, 0.3);


          }

          .nav > #nav-check {
            display: none;
          }

          @media (max-width: 600px) {
            .nav > .nav-btn {
              display: inline-block;
              position: absolute;
              right: 0px;
              top: 0px;
            }
            .nav > .nav-btn > label {
              display: inline-block;
              width: 50px;
              height: 50px;
              padding: 13px;
            }
            .nav > .nav-btn > label:hover,
            .nav #nav-check:checked ~ .nav-btn > label {
              background-color: rgba(0, 0, 0, 0.5);
            }
            .nav > .nav-btn > label > span {
              display: block;
              width: 25px;
              height: 10px;
              border-top: 2px solid #eee;
            }
            .nav > .nav-links {
              position: fixed;
              display: block;
              width: 70%; /* Set the width of the drawer */
              background-color: #393738;
              overflow-y: auto;
              top: 50px;
              left: -70%; /* Initially hide the drawer off-screen */
              color: black;
            }
            .nav > .nav-links > a {
              display: center;
              width: 100%;
            }
            .nav > #nav-check:not(:checked) ~ .nav-links {
              height: 0px;
            }
            .nav > #nav-check:checked ~ .nav-links {
              left: 0;
            }
          }

           body {
              font-family: 'Lucida Sans', 'Lucida Sans Regular',
             'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
sans-serif;
              animation: fadeIn 1s ease-in-out;
          }

          header {
              color: red;
              font-size: 1rem;
              display: flex;
              height: 100%;
              font-weight: 600;
              background-color: #0c4c91;
          }

          .main-div {
              padding: 0 5%;
          }

          header>div {
              padding: 1em 3%;
              display: flex;
              width: 100%;
              justify-content: space-between;
          }

          header>div>div>div {
              margin: 0 0.5em;
          }

          .s-p {
              margin-left: 5px;
              color: #FFFFFF;
          }

          .nav-li {
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
          }

          h1>span {
              color: rgb(255, 111, 0);
          }

          * {
          box-sizing: border-box;
        }




        `}
      </style>

      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">

        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span />
            <span />
            <span />
          </label>
        </div>
        <div className="nav-links">
          <Link to="/">
            {" "}
            <a>Home</a>
          </Link>

          <Link to="/commingsoon">
            {" "}
            <a>About</a>
          </Link>

          <Link to="/commingsoon">
            {" "}
            <a>Examination</a>
          </Link>

          <Link to="/commingsoon">
            {" "}
            <a>Download</a>
          </Link>

          <Link to="/commingsoon">
            {" "}
            <a>Carrer</a>
          </Link>


          <a>
            <Link to="/erp">
              <span className="s-p">
                ERP
              </span>
            </Link>
          </a>

        </div>

      </div>



    </>
  );
}

export default MainNavbar;
