import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import phone from '../images/phone.png';
import mail from '../images/gmail.png';
import globe from '../images/worldwide.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';
import newspaper from '../images/newspaper.png'





const Footer = () => {
  return (
    <>
      <div className="pg-footer">
        <footer className="footer">
          <svg
            className="footer-wave-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <path
              className="footer-wave-path"
              d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
            />
          </svg>

          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="widget1">
                  <div className="logo">
                    <a href='#'>
                      <img
                        src="https://sssutms.co.in/cms/Areas/Website/Content/images/Logo.png"
                        className="img-fluid"
                        alt=""
                        style={{
                          height: "80px",
                          width: "800px",
                          marginRight: "70px",
                        }}
                      />
                    </a>

                  </div>
                  <p>
                    Opp.Oilfed Plant, Bhopal-Indore Road,<br />
                    Sehore (M.P), Pin - 466001<br /><br />
                    <div style={{ display: 'flex' }}> <img src={phone} alt="Phone" height="20" width="20" /> (+91) 07562-292740 | 7562292720<br /></div>
                    <div style={{ display: 'flex' }}>  <img src={phone} alt="Phone" height="20" width="20" /> (+91) 7748900027 | 7748900028<br /></div>
                    (From 10:00 AM to 5:00 PM only)

                    <br></br><br></br>
                    <div style={{ display: 'flex' }}>  <img src={mail} alt="Mail" height="8" width="25" /> <h6 style={{ marginLeft: '5px' }}>info@sssutms.ac.in</h6></div>

                    <div style={{ display: 'flex' }}>  <img src={globe} alt="Mail" height="8" width="25" /> <h6 style={{ marginLeft: '5px' }}> info@sssutms.ac.in</h6></div><br></br>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="widget2">
                  <h5 style={{fontFamily:'inherit'}}>Latest News</h5>
                  <div className="media">
                    <img
                      className="img-fluid"
                      src="https://i.ibb.co/CKNmhMX/blog1.jpg"
                      alt=""
                    />
                    <div className="media-body d-flex align-self-center">
                      <div className="content">
                        <a href="#">
                          <p>Did son unreserved themselves indulgence its</p>
                        </a>
                        <span>Aug 17, 2019</span>
                      </div>
                    </div>
                  </div>
                  <div className="media">
                    <img
                      className="img-fluid"
                      src="https://i.ibb.co/m5yGbdR/blog2.jpg"
                      alt=""
                    />
                    <div className="media-body d-flex align-self-center">
                      <div className="content">
                        <a href="#">
                          <p>Rapturous am eagerness it as resolving household</p>
                        </a>
                        <span>Aug 17, 2019</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-2">
                <div className="widget3">
                  <h5 style={{fontFamily:'inherit'}}> Useful Links</h5>
                  <ul>
                    <li style={{ marginTop: '5px' }}>
                      <a href="#" style={{ color: 'white' }}>Approval</a>
                    </li>

                    <li style={{ marginTop: '5px' }}>
                      <a style={{ color: 'white' }} href="https://www.sssutms.co.in/cms/Website/Admission/UniversityAccountDetail">
                        Pay Fees
                      </a>
                    </li>
                    <li style={{ marginTop: '5px' }}>
                      <a href="#" style={{ color: 'white' }}>Career
                      </a></li>

                    <li style={{ marginTop: '5px' }}> <a style={{ color: 'white' }} href="#">Results
                    </a></li>
                    <li style={{ marginTop: '5px' }}>
                      <a style={{ color: 'white' }} href="#">AICTE Feedback
                      </a></li>
                    <li style={{ marginTop: '5px' }}>
                      <a style={{ color: 'white' }} href="https://www.sssutms.co.in/cms/Website/Academic/MandatoryDisclosures">
                        Mandatory Disclosures
                      </a>
                    </li>
                    <li style={{ marginTop: '5px' }}>
                      <a href="#" style={{ color: 'white' }}> Examination Notification
                      </a></li>


                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-lg-2">
                <div className="widget4">
                  <h5 style={{fontFamily:'inherit'}}>Logins</h5>
                  <ul>
                    <li style={{ marginTop: '5px' }}>Student Login</li>
                    <li style={{ marginTop: '5px' }}>Admin Login</li>
                    <li style={{ marginTop: '5px' }}>Verify Marksheet</li>
                    <li style={{ marginTop: '5px' }}>E-Pravesh 2023</li>
                    <li style={{ marginTop: '5px' }}>Entrance Exam Form</li>
                    <li style={{ marginTop: '5px' }}>Alumni Registration Form</li>
                    <li style={{ marginTop: '5px' }}>Online Grievance for Student</li>
                  </ul>
                </div>
              </div>
              {/* <div><h2>Help Desk</h2>
                  <ul className="info-list">
                    <li>Fax No: +91-07562-292201</li>
                    <li>Last Updated On: Fri Mar, 11 2022</li>
                  </ul>
                 </div> */}
            </div>
          </div>

          <div className="copyRightArea" >
            <div className="container">
              <div className="row">
                <div className="col-12 text-center" style={{display:'flex',gap:'40px'}}>


                  <Link to="/policypage" style={{ color: 'white' }}>
                    <li style={{ marginTop: '5px' }}> Privacy Policy</li>
                  </Link>
                  <Link to="/termspage" style={{ color: 'white' }}>
                    <li style={{ marginTop: '5px' }}>Terms & Condition</li>
                  </Link>
                  <Link to="/refundpage" style={{ color: 'white' }}>
                    <li style={{ marginTop: '5px' }}>Refund & Cancellation</li>
                  </Link>

                  {/* <p>Privacy  Policy, Terms & Conditions, Refund Cancellation</p> */}
                  <p style={{marginLeft:'400px'}}>© Copyright All rights reserved 2019.</p>

                </div>
              </div>
            </div>
          </div>
          <div />
        </footer>
      </div>
    </>
  )
}

export default Footer




