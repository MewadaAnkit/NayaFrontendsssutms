import React from "react";
import Navbar from "../HomePage/Navbar";

const Refundpage = () => {
  return (
    
    <>
    <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500;700&display=swap');

        /* ::-webkit-scrollbar {
            width: 8px;
        }
        
        ::-webkit-scrollbar-track {
            background: #242836;
        }
        
        ::-webkit-scrollbar-thumb {
            background: #333541;
        } */
        
        /* * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        } */
        
        body, html {
            width: 100%;
            min-height: 100%;
            /* background-color: #242836; */
        }
        
        .main-header {
            width: 100%;
            height: 75px;
            /* background-color: #181A24; */
            display: block;
        }
        
        /* .main-header ul.header-options {
            width: 100%;
            height: 100%;
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding-right: 100px;
        } */
        
        /* .main-header ul.header-options li {
            display: inline-block;
        } */
        
        /* .main-header ul.header-options li.title {
            font-size: 18px;
            color: #fff;
            font-family: Arial;
            cursor: pointer;
        } */
        
        
        /* .title-mobile {
            font-size: 18px;
            color: #fff;
            font-family: Arial;
            cursor: pointer;
            padding-top: 30px;
        } */
        
        /* a {
            text-decoration: none;
            font-size: 16px;
            color: #6D6F79;
            font-family: Arial;
            cursor: pointer;
        } */
        
        /* a:hover {
            font-size: 16px;
            color: #9598a7;
        } */
        
        .card {
            margin-top: 50px;
            margin-bottom: 20px;
            height: 900%;
            width: 1200px;
            border-radius: 30px;
            /* background-color: #333541; */
            margin-left: auto;
            margin-right: auto;
            
        }
        
        .card .primary-heading {
            text-align: center;
            font-family: 'serif';
            color: gray;
            /* padding-top: 50px; */
            font-size: 4em;
        }
        
        .paragraph {
            font-family: 'serif';
            color:'gray';
            margin-left: 50px;
            margin-right: 25px;
            padding-top: 50px;
            font-size: 1.5em;
            line-height: 1.3em;
            font-weight: 500;
        }
        
        .bold {
            font-weight: 700;
            color: white;
        }
        /* 
        .footer-heading {
            text-align: center;
            font-family: 'serif';
            color: white;
            margin-bottom: 50px;
            font-size: 2em;
            line-height: 35px;
        } */
        
        @media only screen and (max-width: 1218px) {
            .card {
                margin-top: 100px;
                margin-bottom: 100px;
                height: 700px;
                width: 1000px;
                border-radius: 30px;
              
                margin-left: auto;
                margin-right: auto;
            }
        }
        
        @media only screen and (max-width: 1012px) {
            .card {
                margin-top: 100px;
                margin-bottom: 100px;
                height: 700px;
                width: 800px;
                border-radius: 30px;
               
                margin-left: auto;
                margin-right: auto;
            }
        }
        
        @media only screen and (max-width: 832px) {
            .card {
                margin-top: 100px;
                margin-bottom: 100px;
                height: 700px;
                width: 600px;
                border-radius: 30px;
              
                margin-left: auto;
                margin-right: auto;
            }
        
            .card .primary-heading {
                font-size: 3.5em;
            }
        
            .footer-heading {
                font-size: 1.5em;
            }
        }
        
        @media only screen and (max-width: 626px) {
            .card {
                margin-top: 100px;
                margin-bottom: 100px;
                height: 650px;
                width: 450px;
                border-radius: 30px;
                margin-left: auto;
                margin-right: auto;
            }
        
            .header-mobile {
                display: block;
            }
        
            .main-header {
                display: none;
            }
        
            .card .primary-heading {
                font-size: 3em;
            }
        }
        
        @media only screen and (max-width: 480px) {
            .card {
                margin-top: 100px;
                margin-bottom: 100px;
                height: 650px;
                width: 350px;
                border-radius: 30px;
                margin-left: auto;
                margin-right: auto;
            }
        
            .card .primary-heading {
                font-size: 2em;
            }
        }
        
        @media only screen and (max-width: 365px) {
            .card {
                margin-top: 100px;
                margin-bottom: 100px;
                height: 650px;
                width: 290px;
                border-radius: 30px;
                background-color: #333541;
                margin-left: auto;
                margin-right: auto;
            }
        
            .card .primary-heading {
                font-size: 2em;
            }
        }
        
        
        
        `}
    </style>
    <Navbar/>
      <div className="card">
        <h5 className="primary-heading" style={{ color: "black" }}>
          SSSUTMS UNIVERSITY Refund and Cancellation Policy
        </h5>
        <br />

        {/* <h3 style={{padding:'10px',color:'gray'}}>The "SSSUTMS UNIVERSITY " supports the students . However, if there is a clear error in the amount of payment or payee, please contact our office within 30 days in the hours of 10 am and 5pm indian Standard Time to resolve the issue.</h3> */}
        <h3 style={{ color: "white", padding: "10px", color: "green" }}>
          Refund and Cancellation Policy:
        </h3>
        <p className="paragraph">
          The "SSSUTMS UNIVERSITY " supports the students . However, if there is
          a clear error in the amount of payment or payee, please contact our
          office within 30 days in the hours of 10 am and 5pm indian Standard
          Time to resolve the issue. <br /> <br />
          {/* 2) Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
          <br />{" "}
          <br />
3) Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
<br />{" "}
          <br />
4) We have reserves the right to refuse service to anyone at anytime.
 <br />{" "}
          <br />
5) This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
 <br />{" "}
          <br />
6) All trade marks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.
 <br />{" "}
          <br />
7) Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.
 <br />{" "}
          <br />
8) From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
 <br />{" "}
          <br />
9) You may not create a link to this website from another website or document without our prior written consent.
 <br />{" "}
          <br />
10) Your use of this website and any dispute arising out of such use of the website is subject to the laws of India and shall fall under the jurisdiction of the Courts of Madhya Pradesh(Bhopal), India.
 <br />{" "} */}
          <br />
        </p>
      </div>
      {/* </section> */}
      {/* <footer>
      <p className="footer-heading">
        © Copyright 2020-2021 beCoditive. All rights reserved.
      </p>
    </footer> */}
    </>
  );
};

export default Refundpage;
