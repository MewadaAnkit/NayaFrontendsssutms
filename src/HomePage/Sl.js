// import React from 'react';
// import Slider from 'react-slick';
// import './Slimage.css'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Sl = () => {
//     const settings = {
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 1500,
//         arrows: false,
//         dots: false,
//         pauseOnHover: false,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 4,
//                 },
//             },
//             {
//                 breakpoint: 520,
//                 settings: {
//                     slidesToShow: 3,
//                 },
//             },
//         ],
//     };

//     const partnerImages = [
//         "https://sssutms.co.in/cms/Areas/Website/Content/images/recruiters/Accenture.jpg",
//         "https://sssutms.co.in/cms/Areas/Website/Content/images/recruiters/BajajLogo.jpg",
//         "https://sssutms.co.in/cms/Areas/Website/Content/images/recruiters/TCSLogo.jpg",
//         "https://sssutms.co.in/cms/Areas/Website/Content/images/recruiters/IBM.jpg",
//         "https://sssutms.co.in/cms/Areas/Website/Content/images/recruiters/WpiroLogo.jpg",
//         "https://sssutms.co.in/cms/Areas/Website/Content/images/recruiters/BajajLogo.jpg",
//         "https://sssutms.co.in/cms/Areas/Website/Content/images/recruiters/TCSLogo.jpg",
//         "https://sssutms.co.in/cms/Areas/Website/Content/images/recruiters/Accenture.jpg",
//         "https://sssutms.co.in/cms/Areas/Website/Content/images/recruiters/WpiroLogo.jpg",

//     ];

//     return (
        
//         <div className="container" style={{height:'300px' }}>
//             <h2 style={{fontWeight:'bolder',fontFamily:'revert'}}> Our Top Recruiters</h2>
//             <Slider className="customer-logos" {...settings}>
//                 {partnerImages.map((image, index) => (
//                     <div className="slide" key={index}>
//                         <img src={image} alt={`Partner ${index}`} />
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// export default Sl;
import React from "react";


function Sl() {
  return (
    <>
      <>
      <style>
        {`
      
  
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-1750px);
    }
  }
  .slider {
    height: 100px;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: auto;
  }
  .slider .slide-track {
    animation: scroll 40s linear infinite;
    display: flex;
    width: 3500px;
  }
  .slider .slide {
    height: 100px;
    width: 250px;
  }

        ` }
      </style>
     
        <style dangerouslySetInnerHTML={{ __html: "\n  \n  \n\n" }} />
        <h2 style={{marginBottom:"40px",marginLeft:"30px"}}><b> | Our Top Recruiters</b></h2>
      
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img
                src="https://1000logos.net/wp-content/uploads/2017/03/LG-Logo-1995.jpg"
                height={50}
                width={150}
                style={{marginTop:"20px",marginLeft:"30px"}}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://www.wordstream.com/wp-content/uploads/2021/07/facebook-logo-stats-2018-1.png"
                height={40}
                width={160}
                style={{ marginTop:"27px" }}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://www.financialexpress.com/wp-content/uploads/2017/05/wipro.jpg?w=660"
                height={90}
                width={150}
               
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://1000logos.net/wp-content/uploads/2020/04/Tata-Logo.png"
                height={100}
                width={200}
                style={{marginRight:"30px" }}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://brandongaille.com/wp-content/uploads/2013/07/Amazon-Company-Logo.jpg"
                height={70}
                width={150}
                style={{ marginTop: "40px",marginLeft:"30px" }}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://brandongaille.com/wp-content/uploads/2013/07/Microsoft-Company-Logo2.jpg"
                height={100}
                width={200}
                style={{ marginTop: "15px",  marginLeft:"25px"}}
                alt=""
              />
            </div>

            <div className="slide">
              <img
                src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png"
                height={100}
                width={170}
                style={{ marginLeft:"35px"}}
                alt=""
              />
            </div>

            <div className="slide">
              <img
                src="https://sssutms.co.in/cms/Areas/Website/Content/images/recruiters/IBM.jpg"
                height={100}
                width={100}
                style={{ marginTop: "8px",marginLeft:"40px"}}
                alt=""
              />
            </div>

            









            <div className="slide">
              <img
                src="https://1000logos.net/wp-content/uploads/2017/03/LG-Logo-1995.jpg"
                height={50}
                width={120}
                style={{marginTop:"20px"}}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://www.wordstream.com/wp-content/uploads/2021/07/facebook-logo-stats-2018-1.png"
                height={40}
                width={160}
                style={{ marginTop:"27px" }}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://www.financialexpress.com/wp-content/uploads/2017/05/wipro.jpg?w=660"
                height={90}
                width={150}
               
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://1000logos.net/wp-content/uploads/2020/04/Tata-Logo.png"
                height={100}
                width={200}
                style={{marginRight:"30px" }}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://brandongaille.com/wp-content/uploads/2013/07/Amazon-Company-Logo.jpg"
                height={70}
                width={150}
                style={{ marginTop: "40px",marginLeft:"25px" }}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://brandongaille.com/wp-content/uploads/2013/07/Microsoft-Company-Logo2.jpg"
                height={100}
                width={200}
                style={{ marginTop: "15px"}}
                alt=""
              />
            </div>

            <div className="slide">
              <img
                src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png"
                height={100}
                width={170}
              
                alt=""
              />
            </div>

            <div className="slide">
              <img
                src="https://sssutms.co.in/cms/Areas/Website/Content/images/recruiters/IBM.jpg"
                height={100}
                width={100}
                style={{ marginTop: "8px"}}
                alt=""
              />
            </div>

           

          
           


           
          </div>
        </div>
      </>

    </>
  );
}

export default Sl;