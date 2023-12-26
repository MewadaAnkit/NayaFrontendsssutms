
import React from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Personal from './Personal';
import './Button.css'

const Buttonfun = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/studentpersonal')
  }
  return (
    <>
      <div className="button-container">

        <Button onClick={handleClick}>Personal</Button>

        <Link to="/professional">
          <Button>Professional</Button>
        </Link>
        <Link to="/address">
          <Button>Address</Button>
        </Link>
        <Link to="/academic">
          <Button>Academic</Button>
        </Link>
        <Link to="/photo">
          <Button>Photo & Signature</Button>
        </Link>
      </div>
    </>
  );
};

export default Buttonfun;
