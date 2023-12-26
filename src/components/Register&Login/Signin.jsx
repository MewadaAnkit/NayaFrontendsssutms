import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import swal from "sweetalert";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const validationSchema = yup.object({
  randomId: yup.string().required("Enter Id"),
  randomPassword: yup.string().required("Enter Password"),
});
const defaultTheme = createTheme();
export default function Signin() {
  const navigate = useNavigate();

  //////////////password/////////////////////////////
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  ///////////////////////////////////////////////////////////

  const formik = useFormik({
    initialValues: {
      randomId: "",
      randomPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch("https://sssutms.ac.in/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          const data = await response.json();
          const user = data.UserResponse;
          sessionStorage.setItem("currentUser", JSON.stringify(user));

          

          if (user.isApproved === true && user.isEnrolled === false) {
            navigate("/studentDashboard");
          } else if (user.isEnrolled === true) {
            
            if (user.isPaid === true) {
              navigate("/studentalldetail");
            } else {
              navigate("/PaymentPage"); 
            }
          } else {
            if (user.isRegistered === true) {
              navigate("/studentWaiting");
            } else {
              navigate("/selectCourse");
            }
          }
        } else {
          swal({
            icon: "error",
            title: "Error",
            text: `Invalid Credentials`,
          });
        }
      } catch (error) {
        swal({
          icon: "error",
          title: "Error",
          text: `Something Went wrong!`,
        });
      }
    },
  });

  return (
    <>
      <style>
        {`

  body {
    background-image: url('https://cdn.givingcompass.org/wp-content/uploads/2018/04/20112042/na-schools.jpg');
    background-size: cover;
    background-repeat: no-repeat;

  }

  @media only screen and (max-width: 600px) {
    body {
      background-size: cover;
    }
  }`}
      </style>
      <div
        style={{
          width: "90%",
          marginLeft: "5%",
          height: "100vh",
          marginTop: "30px",
        }}
      >
        <ThemeProvider theme={defaultTheme}>
          <Grid
            container
            component="main"
            sx={{ height: "80vh", marginTop: "2%" }}
          >
            <CssBaseline />

            <Grid
              borderRadius={10}
              boxShadow={20}
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
              sx={{
                mx: "auto",
                marginTop: "5px",
                width: { xs: "90%", sm: "70%" },
              }}
            >
              <Box
                sx={{
                  my: 6,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ height: "80px" }}
                  src="https://tagvs.com/wp-content/uploads/2021/06/noun_User_1973987.png"
                  alt=""
                />
                <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
                  <img
                    style={{ width: "100%", marginLeft: "80px" }}
                    src="https://www.sssutms.co.in/cms/Areas/Website/Content/images/logo21.png"
                    alt="logo"
                  />
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={formik.handleSubmit}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="randomId"
                    label="Enter Id"
                    name="randomId"
                    autoComplete="off"
                    autoFocus
                    value={formik.values.randomId}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.randomId && Boolean(formik.errors.randomId)
                    }
                    helperText={
                      formik.touched.randomId && formik.errors.randomId
                    }
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="randomPassword"
                    label="Enter Password"
                    autoComplete="off"
                    value={formik.values.randomPassword}
                    onChange={formik.handleChange}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    error={
                      formik.touched.randomPassword &&
                      Boolean(formik.errors.randomPassword)
                    }
                    helperText={
                      formik.touched.randomPassword &&
                      formik.errors.randomPassword
                    }
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    style={{ borderRadius: "40px", marginTop: "40px" }}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item>
                      <Typography variant="body2">
                        Don't have an account?{" "}
                        <Link to="/studentregister">Sign Up</Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    </>
  );
}

///////////flex////////////////////
// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import { Link } from "react-router-dom";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import swal from "sweetalert";
// import posImage22 from '../../images/SOD-BUILDING.png';

// const validationSchema = yup.object({
//   randomId: yup.string().required("Enter Id"),
//   randomPassword: yup.string().required("Enter Password"),
// });

// const defaultTheme = createTheme();

// export default function Signin() {
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       randomId: "",
//       randomPassword: "",
//     },
//     validationSchema: validationSchema,
//     onSubmit: async (values) => {
//       try {
//         const response = await fetch("https://sssutmsapi.onrender.com/login", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(values),
//         });

//         if (response.ok) {
//           const data = await response.json();
//           const user = data.UserResponse;
//           sessionStorage.setItem("currentUser", JSON.stringify(user));

//           if (user.isApproved === true) {
//             navigate("/enroll");
//           } else {
//             if (user.isRegistered === true) {
//               navigate("/waiting");
//             } else {
//               navigate("/selectCourse");
//             }
//           }
//         } else {
//           swal({
//             icon: "error",
//             title: "Error",
//             text: `Invalid Credentials`,
//           });
//         }
//       } catch (error) {
//         swal({
//           icon: "error",
//           title: "Error",
//           text: `Something Went wrong!`,
//         });
//       }
//     },
//   });

//   return (
//     <>
//       <style>
//         {`
//           body {
//             background-image: url('https://cdn.givingcompass.org/wp-content/uploads/2018/04/20112042/na-schools.jpg');
//             background-size: cover;
//             background-repeat: no-repeat;
//           }
//           @media only screen and (max-width: 600px) {
//             body {
//               background-size: cover;
//             }
//           }
//         `}
//       </style>
//       <div style={{ width: "90%", marginLeft: "5%", height: '100vh', marginTop: '30px' }}>
//         <ThemeProvider theme={defaultTheme}>
//           <Grid container component="main" sx={{ height: "80vh", marginTop: "2%" }}>
//             <CssBaseline />
//             <Grid
//               borderRadius={2}
//               boxShadow={50}
//               item
//               xs={false}
//               sm={4}
//               md={7}
//               sx={{
//                 backgroundImage: `url(${posImage22})`,
//                 borderRadius: '50px',
//                 height: '80vh',
//                 backgroundSize: 'cover',
//                 backgroundRepeat: "no-repeat",
//                 backgroundColor: (t) =>
//                   t.palette.mode === "light"
//                     ? t.palette.grey[50]
//                     : t.palette.grey[900],
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             />
//             <Grid
//               borderRadius={10}
//               boxShadow={20}
//               item
//               xs={12}
//               sm={8}
//               md={5}
//               component={Paper}
//               elevation={6}
//               square
//               sx={{ mx: "auto", marginTop: "5px", width: { xs: "90%", sm: "70%" } }}
//             >
//               <Box
//                 sx={{
//                   my: 6,
//                   mx: 4,
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                 }}
//               >
//                 <img style={{ height: '80px' }} src="https://tagvs.com/wp-content/uploads/2021/06/noun_User_1973987.png" alt="" />
//                 <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
//                   <img style={{ width: "100%", width: "60%", marginLeft: '80px' }} src="https://www.sssutms.co.in/cms/Areas/Website/Content/images/logo21.png" alt="logo" />
//                 </Typography>
//                 <Box
//                   component="form"
//                   noValidate
//                   onSubmit={formik.handleSubmit}
//                   sx={{ mt: 1 }}
//                 >
//                   <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     id="randomId"
//                     label="Enter Id"
//                     name="randomId"
//                     autoComplete="off"
//                     autoFocus
//                     value={formik.values.randomId}
//                     onChange={formik.handleChange}
//                     error={formik.touched.randomId && Boolean(formik.errors.randomId)}
//                     helperText={formik.touched.randomId && formik.errors.randomId}
//                   />
//                   <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     name="randomPassword"
//                     label="Enter Password"
//                     type="password"
//                     id="randomPassword"
//                     autoComplete="off"
//                     value={formik.values.randomPassword}
//                     onChange={formik.handleChange}
//                     error={formik.touched.randomPassword && Boolean(formik.errors.randomPassword)}
//                     helperText={formik.touched.randomPassword && formik.errors.randomPassword}
//                   />
//                   <Button
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     sx={{ mt: 3, mb: 2 }}
//                     style={{ borderRadius: '40px', marginTop: '40px' }}
//                   >
//                     Sign In
//                   </Button>
//                   <Grid container>
//                     <Grid item>
//                       <Typography variant="body2">
//                         Don't have an account? <Link to="/studentregister">Sign Up</Link>
//                       </Typography>
//                     </Grid>
//                   </Grid>
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>
//         </ThemeProvider>
//       </div>
//     </>
//   );
// }
