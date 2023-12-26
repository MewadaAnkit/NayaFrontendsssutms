import React from 'react';
import Signup from '././components/Register&Login/Signup';
import Signin from '././components/Register&Login/Signin';
import { Routes, Route, Navigate } from 'react-router-dom';
import Course from '././components/Register&Login/Course';
import Erp from './components/Register&Login/Erp';
import Registration from './AdminComponent/HodMainDetails';
import Registrationn from "./AdminComponent/StudentMainDetails"
import Personal from './AdminComponent/Personal';
import Cards from './components/Register&Login/Erp';
import Pending from './AdminComponent/SudentPending';
import StudentMainDetails from './AdminComponent/StudentMainDetails';
import StudentHome from './components/Register&Login/StdentHome';
import StudentDashboard from './AdminComponent/StudentDashboard';
import HodDashboard from './AdminComponent/HodDashboard';
import HodMainDetails from './AdminComponent/HodMainDetails';
import StudentWaiting from './components/Register&Login/StudentWaiting';
import VerifyDetailed from './AdminComponent/VerifyDetailed';
import StudentVerify from './AdminComponent/StudentVerify';
import OnlyHeader from './AdminComponent/OnlyHeader';
import Payment from './components/Register&Login/PaymentGateway';
import PaymentPage from './AdminComponent/Payment/PaymentPage';
import StudentAllDetail from './components/Register&Login/StudentAllDetail';
import MainPage from './HomePage/MainPage';
import Terms from './HomePage/Terms';
import Policypage from "./HomePage/Policypage"
import Refundpage from "./HomePage/Refundpage"
import ForgetPassword from './components/Register&Login/ForgetPassword';
import Commingsoon from './HomePage/Comingsoonpage';
import PaymentSuccess from './components/Register&Login/PaymentSuccess';
import HodSignUp from './AdminComponent/HodSignup';
import HodSignin from './AdminComponent/HodSignin';
import Dashboard from './AdminComponent/HodMainDas';
import Success from './AdminComponent/Payment/Success';
import Failure from './AdminComponent/Payment/Failure';
import StudentDashboardHome from './components/Register&Login/StudentDashboardHome';


function App() {
  function isAuthenticated() {
    const userData = JSON.parse(sessionStorage.getItem("currentUser"));
    if (userData) {
      return true
    }
    return false;
    // const accessToken = document.cookie.split(";").find((cookie) => cookie.trim().startsWith("access-token="));
    // return accessToken ? true : false;
  }

  function PrivateRoute({ element, ...rest }) {
    if (isAuthenticated()) {
      return element;
    } else {
      return <Navigate to={`/studentlogin`} />;
    }
  }


  return (
    <>
      <Routes>
        <Route path="/studentregister" element={<Signup />} />
        <Route path="/studentlogin" element={<Signin />} />

        <Route path="/studentalldetail" element={<StudentAllDetail />} />
        <Route path='/onlyheader' element={<PrivateRoute element={<OnlyHeader />} />} />
        <Route path='/studentDashboard' element={<StudentDashboard />} />
        <Route path='/studentWaiting' element={<StudentWaiting />} />
        <Route path='/studentpersonal' element={<Personal />} />
        <Route path='/studentDetail' element={<StudentMainDetails />} />
        <Route path='/studentHome' element={<StudentHome />} />
        <Route path='/studentpending' element={<Pending />} />
        <Route path='/studentverify' element={<StudentVerify />} />

        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/student/dashboard/home' element={<StudentDashboardHome />} />

        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentSuccess" element={<PaymentSuccess />} />
        <Route path='/PaymentPage' element={<PaymentPage />} />
        <Route path='/success' element={<Success />} />
        <Route path='/failure' element={<Failure />} />

        <Route path="/selectCourse" element={<PrivateRoute element={<Course />} />} />
        <Route path='/verifyDetailed' element={<VerifyDetailed />} />

        <Route path='/dashboard' element={<Dashboard />} />

        <Route path='/studentUpdateDetail' element={<Registrationn />} />
        <Route path='/erp' element={<Erp />} />

        <Route path='/' element={<MainPage />} />
        <Route path="/commingsoon" element={<Commingsoon />} />
        <Route path="/termspage" element={<Terms />} />
        <Route path="/policypage" element={<Policypage />} />
        <Route path="/refundpage" element={<Refundpage />} />



        <Route path='/cards' element={<Cards />} />

        <Route path="/Registration" element={<Registration />} />
        <Route path="/studentverifieddetailed/:id" element={<VerifyDetailed />} />

        <Route path='/hodDashboard' element={<HodDashboard />} />
        <Route path='/adminlogin' element={< HodSignin />} />
        <Route path='/hodDetail' element={<HodMainDetails />} />
        <Route path='/adminregister' element={<HodSignUp />} />

      </Routes >
    </>

  )
}

export default App