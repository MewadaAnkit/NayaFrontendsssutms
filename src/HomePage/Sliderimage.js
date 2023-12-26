
import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';


import SwiperCore from 'swiper/core';

import { Mousewheel, Scrollbar } from 'swiper/modules'
import Hai from "../images/Hai.png"
import Kuch from "../images/Kuch.png"
import Labo from "../images/LABO.png"
import Audi from "../images/Audi.png"

SwiperCore.use([Mousewheel, Scrollbar]);


const Sliderimage = () => {
  const testimonialData = [
    { img: Audi, title: 'Audi Facility' },
    { img: Hai, title: 'Hai Facility' },
    { img: Kuch, title: 'Kuch Facility' },
    { img: Labo, title: 'Labo Facility' },
 
  ];

  const slideHolderRef = useRef(null);
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperContainerRef.current, {
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 2.3,
      loop: true,
      spaceBetween: 30,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 0,
        depth: 800,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: { delay: 2000 },
    });

    const queryResizer = () => {
      if (window.innerWidth < 724) swiper.params.slidesPerView = 2;
      if (window.innerWidth > 501) swiper.params.slidesPerView = 2;
      if (window.innerWidth > 724) swiper.params.slidesPerView = 2.3;
      if (window.innerWidth < 501) swiper.params.slidesPerView = 1;
      swiper.update();
    };

    window.addEventListener('resize', queryResizer);

    return () => {
      window.removeEventListener('resize', queryResizer);
      swiper.destroy(true, true);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <style>
        {`
     @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap');

     div2 {
       position: relative;

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

     .twelve1 h1 {
       font-size:26px;
       font-weight:700;
       letter-spacing:1px;
       text-transform:uppercase;
       width:160px;
       text-align:center;
       margin:auto;
       white-space:nowrap;
       padding-bottom:13px;
     }

     .twelve1 h1:before {
       background-color: #c50000;
       content: '';
       display: block;
       height: 3px;
       width: 75px;
       margin-bottom: 5px;
     }

     .twelve1 h1:after {
       background-color: #c50000;
       content: '';
       display: block;
       position:absolute;
       right:0;
       bottom:0;
       height: 3px;
       width: 75px;
       margin-bottom: 0.25em;
     }

     .dam {
       display: grid;
       place-items: center;
       position: relative;
       height: 50vh;

     }

     .swiper-container {
       border-radius: 5px;
       width: 80vw;
       overflow: hidden;
       height: fit-content;
      //  height: 500px;
       font-size: 50px;
       position: relative;
       padding-bottom: 50px;
       font-family: sans-serif;
     }

     .swiper-slide {
       width: auto;
       height: fit-content;
       display: flex;
       height: auto;
       border-radius: 5px;
       overflow: hidden;
       align-items: flex-start;
       flex-direction: column;
       padding: 0px;
       font-family: Nunito;
       background-color: white;
     }

     .swiper-slide .ImgHolder {
       background-size: cover;
       background-position: center;
       background-repeat: no-repeat;

       display: flex;
       width: 100%;
       height: auto;
       padding: 30px;
       border-radius: 5px; /* Pura card ke andar image ke corners ka shape */
     }

     .swiper-pagination-bullet {
       background-color: white;
       opacity: 1;
       border: 1px solid #4361ee;
     }

     .swiper-pagination-bullet-active {
       background-color: #4361ee;
     }

     .swiper-button {
       border: 1px solid white;
     }

     .swiper-slide img {
       width: 100%;
       height: auto;
       border-radius: 5px; /* Pura card ke andar image ke corners ka shape */
       object-fit: cover;
       border: 3px solid #990033;
       outline: 2px solid ;
     }

     .swiper-slide h3 {
       font-size: 1.1rem;
       text-align: center;
       font-weight: bold;
     }

     .swiper-slide p {
       font-size: 0.9rem;
       padding: 5px;
     }

     @media (max-width:638px) {
       .swiper-container {
         width: 100%;
       }
     }

     @media (max-width:500px) {
       .swiper-container {
         width: 70vw;
       }
     }

     @media (max-width:300px) {
       .swiper-container {
         width: 100%;
       }

       .swiper-slide {
         border-radius: 0px;
       }

       .swiper-container .ImgHolder {
         border-radius: 0px;
       }

       .ContentHolder {
         border-radius: 0px;
       }
     }
     `}
      </style>
      <div2 className='twelve1'>
        <h1><b>Facilities</b></h1>
      </div2><br /><br /><br />

      <div className='dam'>
        <div ref={swiperContainerRef} className="swiper-container">
          <div ref={slideHolderRef} className="swiper-wrapper">
            {testimonialData.map((item, index) => (
              <div key={index} className="swiper-slide">
                <div style={{ backgroundImage: `url(${item.img})` }}>
                  <img src={item.img} alt={item.title} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>



    </>
  );
};

export default Sliderimage;


