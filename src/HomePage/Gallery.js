import React from 'react'


import Event1 from '../images/Event1.png'
import Event2 from '../images/Event2.png'
import Event3 from '../images/Event3.png'
import Event4 from '../images/Event4.png'
import Event5 from '../images/Event5.png'
import Event6 from '../images/Event6.png'
import Event7 from '../images/Event7.png'
import Event8 from '../images/Event8.png'




import Event9 from '../images/Event9.png'
import Event10 from '../images/Event10.png'
import Event11 from '../images/Event11.png'
import Event12 from '../images/Event12.png'

import Event13 from '../images/Event13.png'
import Event14 from '../images/Event14.png'

const Gallery = () => {
  return (
  <>
  <style>
    {`
    #hexGrid {
        display: flex;
        flex-wrap: wrap;
        width: 80%;
        margin-right:150px;
      margin-bottom: 100px;
        overflow: hidden;
        font-family: sans-serif;
        list-style-type: none;
        transition: transform 0.5s ease-out;
        transform: translate(-5px, -5px); /* Initial movement */
        animation: initialMovement 0.5s ease-out forwards;
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
      div1 {
        position: relative;
        background: #f8f8f8;
        width: 90%;
        max-width: 500px;
        padding: 2em;
        margin: 1.5em auto;
        border: 3px solid rgba(0, 0, 0, 0.08);
      }

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


      .hex {
        position: relative;
        visibility:hidden;
        outline:1px solid transparent;
        transition: all 0.5s;
        backface-visibility: hidden;
        will-change: transform;
        transition: all 0.5s;
        animation: fadeUp 5s ease-out forwards;
      }



      .hex::after{
        content:'';
        display:block;
        padding-bottom: 86.602%;
      }
      .hexIn{
        position: absolute;
        width:96%;
        padding-bottom: 110.851%;
        margin: 2%;
        overflow: hidden;
        visibility: hidden;
        outline:1px solid transparent;
        /* -webkit-transform: rotate3d(0,0,1,-60deg) skewY(30deg);
            -ms-transform: rotate3d(0,0,1,-60deg) skewY(30deg);
                transform: rotate3d(0,0,1,-60deg) skewY(30deg);
          transition: all 0.5s; */

          /* transform: translate(50%, -15%) skewY(30deg); */


      }
      .hexIn * {
        position: absolute;
        visibility: visible;
        outline:1px solid transparent;
        /* transform: translate(50%, -15%) skewY(30deg); */
      }


      /* .hexLink {
          display:block;
          width: 100%;
          height: 100%;
          text-align: center;
          color: #fff;
          overflow: hidden;
          -webkit-transform: skewY(-30deg) rotate3d(0,0,1,60deg);
              -ms-transform: skewY(-30deg) rotate3d(0,0,1,60deg);
                  transform: skewY(-30deg) rotate3d(0,0,1,60deg);
      } */





      /*** HEX CONTENT
**********************************************************************/
      .hex img {
        left: -100%;
        right: -100%;
        width: auto;
        height: 100%;
        margin: 0 auto;
      }

      /* .hex h1, .hex p {
        width: 100%;
        padding: 5%;
        box-sizing:border-box;
        font-weight: 300;
        opacity: 0;
      } */
      /*
      #demo1 {
        color: #F5CE95;
        text-transform: capitalize;
          text-align: center;
        bottom: 50%;
        padding-top:50%;
        font-size: 1.5em;
        z-index: 1;
      } */
      /* .hex h1:before, .hex h1:after {
        display: inline-block;
        margin: 0 0.5em;
        width: 0.25em;
        height: 0.03em;
        // background: #ffffff;
        content: '';
        vertical-align: middle;
        transition: all 0.3s;
        text-align:center;
      } */

      /* #demo2 {
      top: 50%;
      text-align: center;
      text-transform: uppercase;

      } */

      .img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-position: center center;
        background-size: cover;
        overflow: hidden;


       /* -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50%
100%, 0% 75%, 0% 25%);  */
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      }

      .img:before, .img:after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: '';
        opacity: 0;
        transition: opacity 0.5s;
      }
      .img:before {
        background: rgba(22, 103, 137, 0.3)
      }
      .img:after {
        background: linear-gradient(to top, transparent, rgba(0, 0, 0,
0.5), transparent);
      }

      /*** HOVER EFFECT
**********************************************************************/



      .hexLink:hover h1, .hexLink:focus h1,
      .hexLink:hover p, .hexLink:focus p{
      opacity:1;
      transition: 0.8s;
      }


      .hexIn:hover .img:before,
      .hexIn:hover .img:after,
      .hexIn:hover .hexLink {
        opacity: 1;
      }


      /*** HEXAGON SIZING AND EVEN ROW INDENTATION
*****************************************************************/
      @media (min-width:1201px) { /* <- 5-4  hexagons per row */
        #hexGrid{
          padding-bottom: 4.4%
        }
        .hex {
          width: 20%; /* = 100 / 5 */
        }
        .hex:nth-child(9n+6){ /* first hexagon of even rows */
          margin-left:10%;  /* = width of .hex / 2  to indent even rows */
        }
      }

      @media (max-width: 1200px) and (min-width:901px) { /* <- 4-3
hexagons per row */
        #hexGrid{
          padding-bottom: 5.5%;
          font-size: 13px;
        }
        .hex {
          width: 25%; /* = 100 / 4 */
        }
        .hex:nth-child(7n+5){ /* first hexagon of even rows */
          margin-left:12.5%;  /* = width of .hex / 2  to indent even rows */
        }
      }

      @media (max-width: 900px) and (min-width:601px) { /* <- 3-2
hexagons per row */
        #hexGrid{
          padding-bottom: 7.4%;
          font-size: 14px;
        }
        .hex {
          width: 33.333%; /* = 100 / 3 */
        }
        .hex:nth-child(5n+4){ /* first hexagon of even rows */
          margin-left:16.666%;  /* = width of .hex / 2  to indent even rows */
        }
      }

      @media (max-width: 600px) { /* <- 2-1  hexagons per row */
        #hexGrid{
          padding-bottom: 11.2%;
          font-size: 12px;
        }
        .hex {
          width: 50%; /* = 100 / 3 */
        }
        .hex:nth-child(3n+3){ /* first hexagon of even rows */
          margin-left:25%;  /* = width of .hex / 2  to indent even rows */
        }
      }

      @media (max-width: 400px) {
          #hexGrid {
          font-size: 8px;


          }





      }
    `}
  </style>

    <div1 className='twelve'>
    <h1><b>Gallery</b></h1>
   </div1><br/><br/><br/><br/>


    <br></br>
   <div className="grid" style={{marginLeft:'200px'}}>
  <ul id="hexGrid">
    <li className="hex">
      <div className="hexIn">

          <div
            className="img"
            style={{
              backgroundImage:
              `url(${Event1})`
            }}
          />

        {/* </a> */}
      </div>
    </li>
    <li className="hex">
      <div className="hexIn">

          <div
            className="img"
            style={{
              backgroundImage:
              `url(${Event2})`
            }}
          />

      </div>
    </li>
    <li className="hex">
      <div className="hexIn">

          <div
            className="img"
            style={{
              backgroundImage:
              `url(${Event3})`
            }}
          />

      </div>
    </li>
    <li className="hex">
      <div className="hexIn">

          <div
            className="img"
            style={{
              backgroundImage:
              `url(${Event4})`
            }}
          />

      </div>
    </li>
    <li className="hex">
      <div className="hexIn">

          <div
            className="img"
            style={{
              backgroundImage:
              `url(${Event5})`
            }}
          />

      </div>
    </li>
    <li className="hex">
      <div className="hexIn">

          <div
            className="img"
            style={{
              backgroundImage:
              `url(${Event6})`
            }}
          />

      </div>
    </li>
    <li className="hex">
      <div className="hexIn">

          <div
            className="img"
            style={{
              backgroundImage:
              `url(${Event7})`
            }}
          />

      </div>
    </li>
    <li className="hex">
      <div className="hexIn">

          <div
            className="img"
            style={{
              backgroundImage:
              `url(${Event8})`
            }}
          />


      </div>
    </li>
    <li className="hex">
      <div className="hexIn">

          <div
            className="img"
            style={{
              backgroundImage:
              `url(${Event9})`
            }}
          />

      </div>
    </li>
    <li className="hex">
      <div className="hexIn">

          <div
            className="img"
            style={{
              backgroundImage:
              `url(${Event10})`
            }}
          />

      </div>
    </li>
    <li className="hex">
      <div className="hexIn">

          <div
            className="img"
            style={{
              backgroundImage:
              `url(${Event11})`
            }}
          />

      </div>
    </li>
    <li className="hex">
      <div className="hexIn">

          <div
            className="img"
            style={{
              backgroundImage:
              `url(${Event12})`
            }}
          />

      </div>
    </li>
    <li className="hex">
      <div className="hexIn">

          <div
            className="img"
            style={{
              backgroundImage:
              `url(${Event13})`
            }}
          />

      </div>
    </li>
    <li className="hex">
      <div className="hexIn">

          <div
            className="img"
            style={{
              backgroundImage:
              `url(${Event14})`
            }}
          />

      </div>
    </li>
  </ul>
</div>
</>

  )
}

export default Gallery