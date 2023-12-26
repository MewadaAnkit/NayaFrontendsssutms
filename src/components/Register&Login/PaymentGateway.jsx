// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import swal from "sweetalert";



// function loadScript(src) {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//       resolve(true);
//     };
//     script.onerror = () => {
//       reject(false);
//     };
//     document.body.appendChild(script);
//   });
// }

// function Payment() {
//   const navigate = useNavigate();
//   async function displayRazorpay() {
//     const res = await loadScript(
//       "https://checkout.razorpay.com/v1/checkout.js"
//     );
//     if (!res) {
//       alert("Razorpay SDK failed to load. Are you online?");
//       return;
//     }

//     const response = await fetch("https://sssutmsapi.onrender.com/payment", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ amount: 500 }),
//     });

//     const data = await response.json();
//     const { order, amount } = data;

//     var options = {
//       key: "rzp_test_2G5Su3ZxT2Ol3Q",
//       amount: amount,
//       currency: "INR",
//       name: " Sri Satya Sai University of Technology and Medical Science ",
//       description: "Ankitaaaaaaaa",
//       image: "https://example.com/your_logo",
//       order_id: order.id,
//       handler: function (response) {
//         swal({
//           title: "Success",
//           text: "Payment Successful Now You can login and see your Enrollment status!",
//           icon: "success",
//           buttons: "OK",
//         });
//         navigate("/");

//         // alert(response.razorpay_payment_id);
//         // alert(response.razorpay_order_id);
//         // alert(response.razorpay_signature);
//       },
//       prefill: {
//         name: "Ankita Sharma",
//         email: "ankitasharma162002@gmail.com",
//         contact: "9165366240",
//       },
//       notes: {
//         address: "Sehore",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//       method: {
//         upi: true,
//       },
//     };

//     var rzp1 = new window.Razorpay(options);
//     rzp1.open();
//   }

//   useEffect(() => {
//     displayRazorpay();
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <button className="App-link" onClick={displayRazorpay}>
//           Learn React
//         </button>
//       </header>
//     </div>
//   );
// }

// export default Payment;


// import React, { useState } from 'react';

// function Payment() {

//   const [paymentStatus, setPaymentStatus] = useState(null);

//   const handlePayment = async () => {
//     try {
//       // Make an API request to your backend to initiate the payment
//       const response = await fetch('https://sssutmsapi.onrender.com/api/payment/initiate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           amount:500
//         }),
//       });

//       const data = await response.json();

//       // If your backend successfully initiates the payment, redirect to the payment gateway
//       window.location.href = data.paymentUrl;
//     } catch (error) {
//       console.error('Error initiating payment:', error);
//     }
//   };

//   return (
//     <div>
//     <button onClick={handlePayment}>Proceed to Payment</button>
//     {paymentStatus && <p>Payment Status: {paymentStatus}</p>}
//   </div>
//   )
// }

// export default Payment;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentGateway() {
  const navigate = useNavigate();

  useEffect(() => {
    const delay = 5000;

    const timeout = setTimeout(() => {
      navigate('/paymentSuccess');
    }, delay);


    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            height: 100vh;
            background: #0D0E0F;
            display: grid;
            place-items: center;
          }

          .loading span {
            display: inline-block;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #09d;

            margin-top: 20px;
            margin-left: 65px;
          }
          .image {
            margin-left: 25px;
          }
          .loading span {
            animation: bounce 0.6s cubic-bezier(0.6, 0.1, 1, 0.4);
            animation-iteration-count: infinite;
            animation-direction: alternate;
          }

          .loading span:nth-child(1) {
            animation-delay: 0.1s;
          }

          .loading span:nth-child(2) {
            animation-delay: 0.2s;
          }

          .loading span:nth-child(3) {
            animation-delay: 0.3s;
          }

          @keyframes bounce {
            to {
              transform: translateY(50px);
            }
          }
        `}
      </style>

      <div className='image'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH52_HSboGrv7hC8SyafOsVyjuXKgG4kC3AglyN262CnuusB4aOYeljfXI5qzLPJlhsBo&usqp=CAU'
          style={{ marginBottom: '10px' }}
          height='300px'
          width='300px'
        />
      </div>

      <p style={{ color: 'white', fontSize: '30px', marginTop: '20px' }}> Your payment is processing...</p>
      <div className="loading">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}

export default PaymentGateway;
