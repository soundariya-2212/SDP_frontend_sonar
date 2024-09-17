
import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Typography, TextField } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SignUp } from '../../services/api';

function Register() {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });
  const navigate = useNavigate();

  const paperStyle = {
    padding: 20,
    height: '80vh',
    width: 400,
    margin: '72px auto',
  };

  const avatarStyle = {
    backgroundColor: '#93C5FD',
  };

  const buttonStyle = {
    marginTop: 20,
    backgroundColor: '#93C5FD',
    color: '#fff',
    margin: '15px 0',
  };

  const typo = {
    margin: '10px 0',
  };

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await SignUp(registerData.name, registerData.email, registerData.password, registerData.role);

    if (res.message === 'An error occurred during registration.') {
      toast.error("Signup failed");
    } else {
      toast.success(res.message || "Registration Success");
      setTimeout(() => {
        navigate('/signin');
      }, 1000);
    }
  };

  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2 style={{ marginBottom: 35 }}>SIGN UP</h2>
            <p>Fill this form to create an Account</p>
          </Grid>
          <form onSubmit={handleSubmit}>
            <TextField
              id="name"
              label="Name"
              type="text"
              variant="standard"
              fullWidth
              required
              style={{ marginBottom: 20 }}
              onChange={handleChange}
            />
            <TextField
              id="email"
              label="Email"
              type="email"
              variant="standard"
              fullWidth
              required
              style={{ marginBottom: 20 }}
              onChange={handleChange}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="standard"
              fullWidth
              required
              style={{ marginBottom: 20 }}
              onChange={handleChange}
            />
            <TextField
              id="role"
              label="Role"
              type="text"
              variant="standard"
              fullWidth
              required
              style={{ marginBottom: 20 }}
              onChange={handleChange}
            />
            <Button type="submit" fullWidth style={buttonStyle}>
              Create an Account
            </Button>
            <Typography style={typo}>
              Have an Account..
              <Link to="/signin" style={{ textDecoration: 'none' }}>
                Sign In
              </Link>
            </Typography>
          </form>
        </Paper>
      </Grid>
      <ToastContainer />
    </>
  );
}

export default Register;
