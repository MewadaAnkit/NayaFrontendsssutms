import React from "react";

const Message = () => {
  return (
    <main>
      <>
        <style>
          {`
    #cards .card {
      border-radius: 20px;
      min-height: 100%;
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
      //   background-image:url('https://i.pinimg.com/originals/46/1d/25/461d254f8563f8945ce3a385f289df17.jpg')
      // }
      .slider-container {
        background-image:
url('https://i.pinimg.com/originals/46/1d/25/461d254f8563f8945ce3a385f289df17.jpg');
        /* Add other container styles if needed */
      }
      div1 {
        position: relative;
        background: #f8f8f8;
        width: 90%;
        max-width: 500px;
        padding: 2em;
        margin: 1.5em auto;
        border: 3px solid rgba(0, 0, 0, 0.08);
      }


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
    #cards .heading-border {
      position: absolute;
      width: 100%;
      top: 60%;
    }
    #cards .card .user-picture img {
      position: absolute;
      top: -20%;
      right: 10%;
      background: #f8f9fa !important;
      padding: 10px;
    }
    #cards .card .user-content .user-name {
      margin-right: 150px;
    }
    `}
        </style>
        <section id="cards" className="slider-container">
          <div className="container py-2">
            {/* <div className="row pb-4"> */}
            {/* <div className="col-12 text-center"> */}
            {/* <div className="display-3">Our Team</div> */}
            <div1 className="twelve">
              <h1>
                <b>Our Team</b>
              </h1>
            </div1>
            {/* </div> */}
            {/* </div> */}
            {/* cards */}
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4 pt-5">
                <div className="card shadow-sm border-0">
                  <div className="card-body">
                    <div className="user-picture">
                      <img
                        src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130"
                        className="shadow-sm rounded-circle"
                        height={130}
                        width={130}
                      />
                    </div>
                    <div className="user-content">
                      <h5 className="text-capitalize user-name">
                        Suresh Mahajan
                      </h5>
                      {/* <p className=" text-capitalize text-muted small
blockquote-footer">
                  Web developer
                </p> */}
                      <div className="small">
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star-half-alt text-warning" />
                        <i className="fas fa-star text-light" />
                      </div>
                      <p className="small text-muted mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet nemo harum repellendus aut itaque. Temporibus
                        quaerat dolores ut, cupiditate molestiae commodi!
                        Distinctio praesentium, debitis aut minima doloribus
                        earum quia commodi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 pt-5">
                <div className="card shadow-sm border-0">
                  <div className="card-body">
                    <div className="user-picture">
                      <img
                        src="https://images.unsplash.com/photo-1582003457856-20898dd7e1ea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130"
                        alt=""
                        className="shadow-sm rounded-circle"
                        height={130}
                        width={130}
                      />
                    </div>
                    <div className="user-content">
                      <h5 className="text-capitalize user-name">
                        Pradeep Gour
                      </h5>
                      {/* <p className=" text-capitalize text-muted small
blockquote-footer">
                  Web developer
                </p> */}
                      <div className="small">
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star-half-alt text-warning" />
                        <i className="fas fa-star text-light" />
                        <i className="fas fa-star text-light" />
                      </div>
                      <p className="small text-muted mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet nemo harum repellendus aut itaque. Temporibus
                        quaerat dolores ut, cupiditate molestiae commodi!
                        Distinctio praesentium, debitis aut minima doloribus
                        earum quia commodi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 pt-5">
                <div className="card shadow-sm border-0">
                  <div className="card-body">
                    <div className="user-picture">
                      <img
                        src="https://images.unsplash.com/photo-1492447166138-50c3889fccb1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130"
                        alt=""
                        className="shadow-sm rounded-circle"
                        height={130}
                        width={130}
                      />
                    </div>
                    <div className="user-content">
                      <h5 className="text-capitalize user-name">
                        Ankit Pandey
                      </h5>
                      {/* <p className=" text-capitalize text-muted small
blockquote-footer">
                  Web developer
                </p> */}
                      <div className="small">
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star-half-alt text-warning" />
                      </div>
                      <p className="small text-muted mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet nemo harum repellendus aut itaque. Temporibus
                        quaerat dolores ut, cupiditate molestiae commodi!
                        Distinctio praesentium, debitis aut minima doloribus
                        earum quia commodi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 pt-5">
                <div className="card shadow-sm border-0">
                  <div className="card-body">
                    <div className="user-picture">
                      <img
                        src="https://images.unsplash.com/photo-1492447166138-50c3889fccb1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130"
                        alt=""
                        className="shadow-sm rounded-circle"
                        height={130}
                        width={130}
                      />
                    </div>
                    <div className="user-content">
                      <h5 className="text-capitalize user-name">
                        Sakshi Lodhi{" "}
                      </h5>
                      {/* <p className=" text-capitalize text-muted small
blockquote-footer">
                  Web developer
                </p> */}
                      <div className="small">
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star-half-alt text-warning" />
                        <i className="fas fa-star text-light" />
                        <i className="fas fa-star text-light" />
                        <i className="fas fa-star text-light" />
                      </div>
                      <p className="small text-muted mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet nemo harum repellendus aut itaque. Temporibus
                        quaerat dolores ut, cupiditate molestiae commodi!
                        Distinctio praesentium, debitis aut minima doloribus
                        earum quia commodi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 pt-5">
                <div className="card shadow-sm border-0">
                  <div className="card-body">
                    <div className="user-picture">
                      <img
                        src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130"
                        alt=""
                        className="shadow-sm rounded-circle"
                        height={130}
                        width={130}
                      />
                    </div>
                    <div className="user-content">
                      <h5 className="text-capitalize user-name">
                        Kanchan Soni
                      </h5>
                      {/* <p className=" text-capitalize text-muted small
blockquote-footer">
                  Web developer
                </p> */}
                      <div className="small">
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star-half-alt text-warning" />
                        <i className="fas fa-star text-light" />
                      </div>
                      <p className="small text-muted mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet nemo harum repellendus aut itaque. Temporibus
                        quaerat dolores ut, cupiditate molestiae commodi!
                        Distinctio praesentium, debitis aut minima doloribus
                        earum quia commodi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 pt-5">
                <div className="card shadow-sm border-0">
                  <div className="card-body">
                    <div className="user-picture">
                      <img
                        src="https://images.unsplash.com/photo-1582003457856-20898dd7e1ea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130"
                        alt=""
                        className="shadow-sm rounded-circle"
                        height={130}
                        width={130}
                      />
                    </div>
                    <div className="user-content">
                      <h5 className="text-capitalize user-name">
                        Aarti Kamble
                      </h5>
                      {/* <p className=" text-capitalize text-muted small
blockquote-footer">
                  Web developer
                </p> */}
                      <div className="small">
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star text-warning" />
                        <i className="fas fa-star-half-alt text-warning" />
                        <i className="fas fa-star text-light" />
                        <i className="fas fa-star text-light" />
                      </div>
                      <p className="small text-muted mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet nemo harum repellendus aut itaque. Temporibus
                        quaerat dolores ut, cupiditate molestiae commodi!
                        Distinctio praesentium, debitis aut minima doloribus
                        earum quia commodi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /cards */}
        </section>
      </>
    </main>
  );
};

export default Message;
