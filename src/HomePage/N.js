import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"


function N() {
    return (
        <>
            <style>
                {`
    .menu ul {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
    }

    .menu {
      align-self: flex-end;
    }

    @media (max-width: 768px) {
      .menu ul {
        flex-direction: column;
      }
    }

    .menu ul li {
      list-style: none;
      padding: 0.5em 1em;
      margin: 0.25em 0;
    }

    .menu ul li hr {
      border: none;
      height: 0.25em;
      background-color: rgb(255, 111, 0);
      width: 0;
      transition: width 0.3s;
    }

    .menu ul li:hover hr {
      width: 100%;
    }
  `}
            </style>
            <Navbar expand="lg" className="bg-body-tertiary"
                style={{ backgroundColor: '#F3EAE1' }}>
                <Container style={{marginTop:"7px"}}>
                    <Navbar.Brand href="#home"><div>
                        <h1>
                            <img
                                style={{ width: "100%", width: "60%" }}
                                src="https://www.sssutms.co.in/cms/Areas/Website/Content/images/logo21.png"
                                alt="logo"
                            />
                            <p style={{
                                color: "#787e9e", fontSize: "13px",
                                marginLeft: '55px', paddingTop: "5px"
                            }}>- Run by Ayushmati Education
                                & Social society</p>
                        </h1>
                    </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="menu">

                            <ul>
                                <Link to="/commingsoon">
                                    {" "}
                                    <li
                                        style={{
                                            fontWeight: "bolder",
                                            fontSize: "20px",
                                            color: "#134074",
                                        }}
                                    >
                                        Academic
                                        <hr />
                                    </li>
                                </Link>

                                <Link to="/commingsoon">
                                    {" "}
                                    <li
                                        className="dropbtn"
                                        style={{
                                            fontWeight: "bolder",
                                            fontSize: "20px",
                                            color: "#134074",
                                        }}
                                    >
                                        Research
                                        <hr />
                                    </li>
                                </Link>
                                <Link to="/commingsoon">
                                    {" "}
                                    <li
                                        style={{
                                            fontWeight: "bolder",
                                            fontSize: "20px",
                                            color: "#134074",
                                        }}
                                    >
                                        Admission
                                        <hr />
                                    </li>
                                </Link>
                                <Link to="/commingsoon">
                                    {" "}
                                    <li
                                        style={{
                                            fontWeight: "bolder",
                                            fontSize: "20px",
                                            color: "#134074",
                                        }}
                                    >
                                        Contact
                                        <hr />
                                    </li>
                                </Link>
                                <img
                                    src='https://seeklogo.com/images/A/aatmanirbhar-bharat-logo-224D708C71-seeklogo.com.png'
                                    alt='g20 logo' height='30px' width='70px' style={{
                                        marginLeft: '7px'
                                    }} />

                            </ul>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar></>
    );
}

export default N;
