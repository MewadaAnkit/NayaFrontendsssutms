import React, { useEffect, useState } from 'react';

const Card = ({ children }) => (

  <div
    style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '5px',
      margin: '10px',
      // backgroundColor: '#fff',
      boxShadow: '0 10px 50px rgba(0, 0, 0, 0.1)',
      width:'250px',
    }}
  >
    {children}
  </div>
);

const CounterItem = ({ initialValue, label, imageSrc, imageStyles }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < initialValue) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 0);

    return () => {
      clearInterval(interval);
    };
  }, [count, initialValue]);

  return (
    <Card>
      <div style={{ display: 'flex', flexDirection: 'column',
alignItems: 'center' }}>
        <img style={{ width: '120px', ...imageStyles }} src={imageSrc} alt='' />
        <h3 style={{ fontWeight: 'bolder', marginTop:
'10px',color:'whitesmoke' }}>{count}+</h3>
        <p style={{color:"whitesmoke"}}>{label}</p>
      </div>
    </Card>
  );
};

const Spread = () => {
  return (

    <>
      <div1 className='twelve'>
    <h1><b>SSSUTMS Spreads</b></h1>
    </div1>
    <br></br>
     <div style={{backgroundImage:`url(https://th.bing.com/th/id/OIP.7nOCGyR1QJJ-oHhYiPhy_wHaE7?rs=1&pid=ImgDetMain)`}}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <CounterItem
          initialValue={10000}
          label="students"
          imageSrc='https://goteachersintouch.com/wp-content/uploads/2021/06/graduation-cap.png'
          imageStyles={{ marginTop: '-18px' }}
        />
        <CounterItem
          initialValue={950}
          label="Faculty"
          imageSrc='https://assets-global.website-files.com/62164f49d41615f2747ae420/62827f197eb1776532379171_chalkboard-user-light.svg'
          imageStyles={{ marginTop: '8px' }}
        />
        <CounterItem
          initialValue={850}
          label="Staff"
          imageSrc='https://www.figured.com/hubfs/users-cog.png'
          imageStyles={{ marginTop: '5px' }}
        />
        <CounterItem
          initialValue={1100}
          label="Projects"
          imageSrc='https://www.farmizen.com/wp-content/uploads/2020/05/list-1-300x300.png'
          imageStyles={{ marginTop: '-5px' }}
        />
      </div>
      </div>
   </>
  );
};

export default Spread;
