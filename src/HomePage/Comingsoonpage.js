import React from "react";

const Commingsoon = () => {
  const radialGradient = "radial-gradient(dimgray, black)";

  return (
    <>
      <style>
        {`
        h3 {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: Times New Roman, serif;
  
    font-size: 6.5vw;
    
  }
  
  h3:before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: bottom;
    transform: rotateX(180deg);
    line-height: 1.14em;
    background: linear-gradient(0deg, #000000 0, transparent 70%);
  
    opacity: 0.3;
  }
  

        `}
      </style>
      <div style={{ background: radialGradient, height: " 100vh" }}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <h3 data-text="Coming soon...">Coming soon...</h3>
      </div>
    </>
  );
};

export default Commingsoon;