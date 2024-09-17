

// import React, { useEffect, useRef } from 'react';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import { Avatar, TextField, Button, Typography, Link } from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { authService } from '../../services/auth';
// function Login() {
//   const navigate = useNavigate();

//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);

//   const checkRedirect = async () => {
//     if (authService.getToken() !== null && authService.isLoggedIn()) {
//       const userRole = authService.getUserRole();
//       if (userRole !== null) {
//         if (userRole === 'INSTRUCTOR') {
//           navigate('/tutor/dashboard');
//         } else if (userRole === 'USER') { 
//           navigate('/dashboard');
//         } else {
//           toast.error('Something went wrong');
//         }
//       }
//     }
//   };

//   useEffect(() => {
//     checkRedirect();
//   }, []);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const res = await authService.SignIn(emailRef.current.value, passwordRef.current.value);
//     console.log(res.data);
//     if (res.status === 200) {
//       authService.setToken(res.data.accessToken);
//       toast.success('Welcome');
//       setTimeout(() => {
//         checkRedirect();
//       }, 3000);
//     } else {
//       toast.error('Login failed');
//     }
//   };

//   const paperStyle = {
//     padding: 25,
//     height: '70vh',
//     width: 400,
//     margin: '100px auto',
//   };

//   const avatarStyle = {
//     backgroundColor: '#93C5FD',
//   };

//   const buttonStyle = {
//     marginTop: 20,
//     backgroundColor: '#93C5FD',
//     color: '#fff',
//     margin: '30px 0',
//   };

//   const typo = {
//     margin: '10px 0',
//   };

//   return (
//     <Grid>
//       <Paper elevation={10} style={paperStyle}>
//         <Grid align='center'>
//           <Avatar style={avatarStyle}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <h2 style={{ marginBottom: 35 }}>SIGN IN</h2>
//         </Grid>
//         <form onSubmit={handleLogin}>
//           <TextField
//             id="email"
//             label="Email"
//             type="email"
//             variant="standard"
//             fullWidth
//             required
//             style={{ marginBottom: 20 }}
//             inputRef={emailRef}
//           />
//           <TextField
//             id="password"
//             label="Password"
//             type="password"
//             variant="standard"
//             fullWidth
//             required
//             style={{ marginBottom: 20 }}
//             inputRef={passwordRef}
//           />
//           <Button type="submit" fullWidth style={buttonStyle}>
//             SIGN IN
//           </Button>
//         </form>
//         <Typography>
//           <Link href="#" style={{ textDecoration: 'none' }}>Forgot Password</Link>
//         </Typography>
//         <Typography style={typo}>
//           Do you have an account?
//           <Link to="/signup" style={{ textDecoration: 'none' }}> Sign Up</Link>
//         </Typography>
//       </Paper>
//     </Grid>
//   );
// }

// export default Login;


// import React, { useEffect, useRef } from 'react';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import { Avatar, TextField, Button, Typography, Link } from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import { authService } from '../../services/auth';

// function Login() {
//   const navigate = useNavigate();
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);
  

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await authService.SignIn(emailRef.current.value, passwordRef.current.value);
//       console.log(res.data);

//       if (res.status === 200) {
//         authService.setToken(res.data.accessToken);
//         const userRole = res.data.role; 
//         console.log(`User role: ${userRole}`);
//         toast.success('Welcome');

//         // const userRole = res.data.role;
//         if (userRole === 'INSTRUCTOR') {
//           navigate('/tutor/dashboard');
//         } else if (userRole === 'STUDENT') {
//           navigate('/dashboard');
//         }
//           else if(userRole ==='ADMIN')
//           {
//               navigate('/admin/dashboard');
//           } 
//         else {
//           toast.error('Invalid user role');
//         }
//       } else {
//         toast.error('Login failed');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       toast.error('Login failed. Please check your credentials and try again.');
//     }
//   };

//   const paperStyle = {
//     padding: 25,
//     height: '70vh',
//     width: 400,
//     margin: '100px auto',
//   };

//   const avatarStyle = {
//     backgroundColor: '#93C5FD',
//   };

//   const buttonStyle = {
//     marginTop: 20,
//     backgroundColor: '#93C5FD',
//     color: '#fff',
//     margin: '30px 0',
//   };

//   const typo = {
//     margin: '10px 0',
//   };

//   return (
//     <>
//     <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
//       <Paper elevation={10} style={paperStyle}>
//         <Grid align='center'>
//           <Avatar style={avatarStyle}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <h2 style={{ marginBottom: 35 }}>SIGN IN</h2>
//         </Grid>
//         <form onSubmit={handleLogin}>
//           <TextField
//             id="email"
//             label="Email"
//             type="email"
//             variant="standard"
//             fullWidth
//             required
//             style={{ marginBottom: 20 }}
//             inputRef={emailRef}
//           />
//           <TextField
//             id="password"
//             label="Password"
//             type="password"
//             variant="standard"
//             fullWidth
//             required
//             style={{ marginBottom: 20 }}
//             inputRef={passwordRef}
//           />
//           <Button type="submit" fullWidth style={buttonStyle}>
//             SIGN IN
//           </Button>
//         </form>
//         <Typography>
//           <Link to="#" style={{ textDecoration: 'none' }}>
//             Forgot Password
//           </Link>
//         </Typography>
//         <Typography style={typo}>
//           Do you have an account?
//           <Link to="/signup" style={{ textDecoration: 'none' }}>
//             Sign Up
//           </Link>
//         </Typography>
//       </Paper>
//     </Grid>
//       <ToastContainer/>
//     </>
//   );
// }

// export default Login;



import React, { useRef } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar, TextField, Button, Typography, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { authService } from '../../services/auth';

function Login() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await authService.SignIn(emailRef.current.value, passwordRef.current.value);
      console.log(res.data);

      if (res.status === 200) {
        authService.setToken(res.data.accessToken);
        const userRole = res.data.role; 
        const userId = res.data.id; 
        localStorage.setItem('userId',userId);
        console.log(`User role: ${userRole}`);
        console.log(`User ID: ${userId}`);
        
        // Store userId and role in local storage
        localStorage.setItem('userId', userId);
        localStorage.setItem('userRole', userRole);

        toast.success('Welcome');

        if (userRole === 'INSTRUCTOR') {
          navigate('/tutor/dashboard');
        } else if (userRole === 'STUDENT') {
          navigate('/dashboard');
        } else if (userRole === 'ADMIN') {
          navigate('/admin/dashboard');
        } else {
          toast.error('Invalid user role');
        }
      } else {
        toast.error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      toast.error('Login failed. Please check your credentials and try again.');
    }
  };

  const paperStyle = {
    padding: 25,
    height: '70vh',
    width: 400,
    margin: '100px auto',
  };

  const avatarStyle = {
    backgroundColor: '#93C5FD',
  };

  const buttonStyle = {
    marginTop: 20,
    backgroundColor: '#93C5FD',
    color: '#fff',
    margin: '30px 0',
  };

  const typo = {
    margin: '10px 0',
  };

  return (
    <>
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2 style={{ marginBottom: 35 }}>SIGN IN</h2>
        </Grid>
        <form onSubmit={handleLogin}>
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="standard"
            fullWidth
            required
            style={{ marginBottom: 20 }}
            inputRef={emailRef}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="standard"
            fullWidth
            required
            style={{ marginBottom: 20 }}
            inputRef={passwordRef}
          />
          <Button type="submit" fullWidth style={buttonStyle}>
            SIGN IN
          </Button>
        </form>
        <Typography>
          <Link to="#" style={{ textDecoration: 'none' }}>
            Forgot Password
          </Link>
        </Typography>
        <Typography style={typo}>
          Do you have an account?
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
      <ToastContainer/>
    </>
  );
}

export default Login;
