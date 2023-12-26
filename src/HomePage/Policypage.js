import React from "react";
import Navbar from "../HomePage/Navbar";


const Policypage = () => {
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
            margin-bottom: 30px;
            height: 900%;
            width: 1200px;
            border-radius: 30px;
         
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
            /* padding-top: 10px; */
           
            font-size: 1.3em;
            line-height: 1.6em;
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
                height: 2050px;
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
                height: 2350px;
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
                height: 2950px;
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
                height: 3500px;
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
                height: 3300px;
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
                height: 3300px;
                width: 290px;
                border-radius: 30px;
                margin-left: auto;
                margin-right: auto;
            }
        
            .card .primary-heading {
                font-size: 2em;
            }
        }
        
        
        
        `}
            </style>
            <Navbar />
            <div className="card">

                <h2 className="primary-heading" style={{ color: "black" }}>
                    SSSUTMS UNIVERSITY POLICY
                </h2>
                <h3
                    style={{
                        color: "white",
                        paddingTop: "50px",
                        paddingBottom: "10px",
                        paddingLeft: "50px",
                        color: "black",
                        fontWeight: "bolder",
                    }}
                >
                    Privacy Policy
                </h3>
                <p className="paragraph">
                    The "UNIVERSITY" protects the personal information collected from and
                    about students, graduates, staff and other business partners. This
                    includes the training of employees and the establishment of control
                    systems for the responsible use of personal information that is
                    accessible to "UNIVERSITY" employees while performing work-related
                    duties. The "UNIVERSITY" directs its employees to exercise caution
                    when making personal information available to others and not to give
                    others access to "UNIVERSITY" information or passwords. All full-time
                    and part-time employees of the "UNIVERSITY", as well as student
                    interns, are required to sign the "Employee Non-Disclosure and
                    Confidentiality Agreement.
                </p>

                <h3
                    style={{
                        color: "white",
                        paddingTop: "50px",
                        paddingBottom: "10px",
                        paddingLeft: "50px",
                        color: "black",
                        fontWeight: "bolder",
                    }}
                >
                    In general, access to personal information is limited to the
                    following:
                </h3>
                <p className="paragraph">
                    An individual accessing his or her own personal information An
                    employee or agent of The "UNIVERSITY" with authorized access based on
                    a legitimate academic or business need to know Any organization or
                    person authorized by the individual to receive the information Any
                    authorized legal or governing body or representative or circumstance
                    where The "UNIVERSITY" is compelled to comply with the release of
                    personal information Any other individual or entity as permitted by
                    law where deemed to be necessary for the reasonable conduct of
                    "UNIVERSITY" business
                </p>

                <h3
                    style={{
                        color: "white",
                        paddingTop: "50px",
                        paddingBottom: "10px",
                        paddingLeft: "50px",
                        color: "black",
                        fontWeight: "bolder",
                    }}
                >
                    Privacy
                </h3>
                <p className="paragraph">
                    The "UNIVERSITY" does not sell, rent or otherwise make available a
                    student's personal information to any third parties for marketing
                    purposes except where noted above. Notwithstanding the previously
                    described exceptions, The "UNIVERSITY" will only release personal
                    information regarding any student or alumnus under the following
                    guidelines:
                    <br /> <br />
                    The "UNIVERSITY" may confirm inquiries as to whether an individual
                    holds a designation or degree in good standing from The "UNIVERSITY",
                    and this information can be made available to the public through The
                    "UNIVERSITY"'s website. The "UNIVERSITY" releases name and address
                    information to a limited number of professional industry organizations
                    or associations regarding students expressly for the purpose of
                    informing them of their eligibility for membership or other benefits
                    or promoting local classes.
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


export default Policypage;
