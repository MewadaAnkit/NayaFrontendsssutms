import React from 'react'

const Event = () => {
  return (
    <>
    <style>
      {`

      .card {
        margin-bottom: 25px;
      }


      * === BASE HEADING === */
      // *,
      // *:before,
      *:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }
      // body {
      //   background: #eee;
      // }
      // div1 {
      //   position: relative;
      //   background: #f8f8f8;
      //   width: 90%;
      //   max-width: 500px;
      //   padding: 2em;
      //   margin: 1.5em auto;
      //   border: 3px solid rgba(0, 0, 0, 0.08);
      // }

      // h1:before,
      // h1:after {
      //   background-color: #c50000;
      // }
      h1 {
        position: relative;
        padding: 0;
        margin: 0;
        font-family: "Raleway", sans-serif;
        font-weight: 300;
        font-size: 40px;
        color: #080808;
        -webkit-transition: all 0.4s ease 0s;
        -o-transition: all 0.4s ease 0s;
        transition: all 0.4s ease 0s;
      }

      h1 span {
        display: block;
        font-size: 0.5em;
        line-height: 1.3;
      }
      h1 em {
        font-style: normal;
        font-weight: 600;
      }

      .twelve h1 {
        font-size:26px; font-weight:700;  letter-spacing:1px;
text-transform:uppercase; width:160px; text-align:center; margin:auto;
white-space:nowrap; padding-bottom:13px;
      }
      .twelve h1:before {
          background-color: #c50000;
          content: '';
          display: block;
          height: 3px;
          width: 75px;
          margin-bottom: 5px;
      }
      .twelve h1:after {
          background-color: #c50000;
          content: '';
          display: block;
        position:absolute; right:0; bottom:0;
          height: 3px;
          width: 75px;
          margin-bottom: 0.25em;
      }




      section {
        margin: 20px 0;
      }
      @media (min-width: 768px) {
        section {
          margin: 35px 0;
        }
      }
      @media (min-width: 1200px) {
        section {
          margin: 50px 0;
        }
      }
      .btn-primary {
        background: #77bf43;
        border: #77bf43;
      }
      .btn-primary:hover {
        background: #93cc69;
        border: #93cc69;
        box-shadow: 0 5px 15px rgba(0,0,0,0.05), 0 4px 10px
rgba(127,167,40,0.35);
      }
      .p-absolute {
        display: none;
        position: absolute;
        top: 50%;
        width: 100%;
        transform: translateY(-50%);
      }
      @media (min-width: 768px) {
        .p-absolute {
          display: block;
        }
      }
      nav {
        // background: linear-gradient(135deg,#1b3054 0%,#3eafa9 100%);
      }
      .carousel-inner .carousel-item:before {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;

        opacity: 0.7;
      }
      .carousel-inner .carousel-item h1,
      .carousel-inner .carousel-item p {
        color: white;
      }
      .carousel-inner .card {
        background: rgba(27,48,84,0.35) !important;
        border-radius: 0;
        color: white;
      }
      @media (max-width: 767px) {
        .carousel-inner .card .item-event {
          grid-template-columns: 1fr;
          grid-template-rows: auto auto;
          grid-template-areas:
            "date"
            "content";
        }
      }
      .carousel-inner .card .card-title {
        color: white;
      }
      .carousel-inner .card .item-event {
        display: grid;
        grid-template-columns: 1fr 4fr;
        grid-template-rows: 1fr;
        grid-template-areas: "date content";
        margin-bottom: 25px;
      }
      .carousel-inner .card .item-event .box {
        grid-area: date;

        color: #3eafa9;
        height: 50px;
        width: 50px;
        text-align: center;
        padding: 8px;
      }
      .carousel-inner .card .item-event .box .month {
        display: block;
        line-height: 0;
      }
      .carousel-inner .card .item-event .title {
        grid-area: content;
        font-size: 1.2rem;
      }
      .carousel-inner .card .item-event .title .time {
        color: #3eafa9;
        font-size: 0.75rem;
        display: block;
      }
      `}
    </style>

   <div1 className='twelve'>
    <h1><b>Event</b></h1>
   </div1>
   <br></br>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Join <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Learn
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Attend
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Volunteer
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">
            Sponsor
          </a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="https://pictr.com/images/2018/09/04/0EqTsv.jpg"
            alt="First slide"
          />
          <div className="p-absolute">
            <div className="container">
              <div className="row">
                <div className="col-md-5 col-lg-7 d-flex flex-column
justify-content-center">
                  <h1>
                    Join <br />
                    SITE
                  </h1>
                  <p>Value proposition for why you should joing SITE</p>
                  <a className="btn btn-primary auto-btn" href="#">
                    Joing SITE
                  </a>
                </div>
                <div className="col-md-7 col-lg-5">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Usercons</h4>
                      <p className="card-text">
                        He seems sinking under the evidence could not
only grieve
                        and a visit. The father is to bless and placed in his
                        length hid...
                      </p>
                      <div className="item-event">
                        <div className="box">
                          <span className="day">7</span>
                          <span className="month">sep</span>
                        </div>
                        <div className="title">
                          Tallahassee SITE meeting{" "}
                          <span className="time">4:00pm - 7:00pm</span>
                        </div>
                      </div>
                      <div className="item-event">
                        <div className="box">
                          <span className="day">7</span>
                          <span className="month">sep</span>
                        </div>
                        <div className="title">
                          Mid -Missouri SITE meeting{" "}
                          <span className="time">4:00pm - 7:00pm</span>
                        </div>
                      </div>
                      <div className="item-event">
                        <div className="box">
                          <span className="day">7</span>
                          <span className="month">sep</span>
                        </div>
                        <div className="title">
                          Northern Utha SITE meeting{" "}
                          <span className="time">4:00pm - 7:00pm</span>
                        </div>
                      </div>
                      <a href="#" className="btn btn-primary btn-block btn-sm">
                        See all upcomming events
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://pictr.com/images/2018/09/04/0EqelV.jpg"
            alt="Second slide"
          />
          <div className="p-absolute">
            <div className="container">
              <div className="row">
                <div className="col-md-7 col-lg-5">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Usercons</h4>
                      <p className="card-text">
                        He seems sinking under the evidence could not
only grieve
                        and a visit. The father is to bless and placed in his
                        length hid...
                      </p>
                      <div className="item-event">
                        <div className="box">
                          <span className="day">7</span>
                          <span className="month">sep</span>
                        </div>
                        <div className="title">
                          Tallahassee SITE meeting{" "}
                          <span className="time">4:00pm - 7:00pm</span>
                        </div>
                      </div>
                      <div className="item-event">
                        <div className="box">
                          <span className="day">7</span>
                          <span className="month">sep</span>
                        </div>
                        <div className="title">
                          Mid -Missouri SITE meeting{" "}
                          <span className="time">4:00pm - 7:00pm</span>
                        </div>
                      </div>
                      <div className="item-event">
                        <div className="box">
                          <span className="day">7</span>
                          <span className="month">sep</span>
                        </div>
                        <div className="title">
                          Northern Utha SITE meeting{" "}
                          <span className="time">4:00pm - 7:00pm</span>
                        </div>
                      </div>
                      <a href="#" className="btn btn-primary btn-block btn-sm">
                        See all upcomming events
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-lg-7 d-flex flex-column
justify-content-center">
                  <h1>
                    Join <br />
                    SITE
                  </h1>
                  <p>Value proposition for why you should joing SITE</p>
                  <a className="btn btn-primary auto-btn" href="#">
                    Joing SITE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >

        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >

        <span className="sr-only">Next</span>
      </a>
    </div>
  </>

  )
}

export default Event
