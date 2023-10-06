import React, { useState } from 'react';
import { Container, Paper, Typography, Radio, RadioGroup, FormControlLabel, FormControl, Button, TextField, Avatar, Grid } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { fetcher } from '../helpers/index';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '', fullName: '' });
  const [formErrors, setFormErrors] = useState({ email: '', password: '', confirmPassword: '', fullName: '' });


  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('')
  // const [fullName, setFullName] = useState('')

  const handleToggle = () => {
    setIsSignup(!isSignup);
  };

  // function to merge array of objects into one object
  // const mergeObjects = (array) => {
  //   return array.reduce((acc, cur) => {
  //     return { ...acc, ...cur };
  //   }, {});
  // }

  const storeToken = (token) => {
    localStorage.setItem('token', token);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    
    // validate form data
    const isEmailValid = formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    const isPasswordValid = formData.password.length >= 8;
    const isFullNameValid = formData.fullName.length >= 3;
    const isConfirmPasswordValid = formData.password === formData.confirmPassword;

    // set form errors
    setFormErrors({
      email: isEmailValid ? '' : 'Invalid email address',
      password: isPasswordValid ? '' : 'Password must be at least 8 characters',
      fullName: isFullNameValid ? '' : 'Full name must be at least 3 characters',
      confirmPassword: isConfirmPasswordValid ? '' : 'Passwords must match'
    })

    if(isSignup) {
      if(isEmailValid && isPasswordValid && isFullNameValid && isConfirmPasswordValid) {
        // send data to backend
        console.log(formData)
        fetcher("user/signup", {
          method: "POST",
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            name: formData.fullName,
            appType: "ecommerce"
          }, false)
        }).then(res => storeToken(res.token))
        .catch(err => console.log(err))
      }

    } else {
      if(isEmailValid && isPasswordValid) {
        // send data to backend
        fetcher("user/login", {
          method: "POST",
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            appType: "ecommerce"
          }, false)
        }).then(res => storeToken(res.token))
        .catch(err => console.log(err))
      }
    }


  }

//   appType
// : 
// "ecommerce"
// email
// : 
// "tajammul@ns.com"
// name
// : 
// "Tajammul Pasha"
// password
// : 
// "1234567890

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar style={{ backgroundColor: '#f50057' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? 'Sign Up' : 'Log In'}</Typography>
        <FormControl component="fieldset" style={{ margin: '20px' }}>
          <RadioGroup row aria-label="login-signup" name="login-signup" value={isSignup} onChange={handleToggle}>
            <FormControlLabel value={false} control={<Radio />} label="Log In" />
            <FormControlLabel value={true} control={<Radio />} label="Sign Up" />
          </RadioGroup>
        </FormControl>
        <form style={{ width: '100%' }} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <Grid item xs={12}>
                <TextField variant="outlined" fullWidth label="Full Name" name="fullName" onChange={e => setFormData({
                  ...formData,
                  fullName: e.target.value
                
                })} 
                error={formErrors.fullName}
                helperText={formErrors.fullName}
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <TextField variant="outlined" value={formData.email} fullWidth label="Email Address" name="email" onChange={e => setFormData({...formData, email: e.target.value})} error={formErrors.email} helperText={formErrors.email} />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" fullWidth label="Password" type="password" name="password" value={formData.password}
              onChange={e => setFormData({...formData, password: e.target.value})}
              error={formErrors.password}
              helperText={formErrors.password}
              />
            </Grid>
            {isSignup && (
              <Grid item xs={12}>
                <TextField variant="outlined" fullWidth label="Confirm Password" type="password" name="confirmPassword" 
                onChange={e => setFormData({...formData, confirmPassword: e.target.value})}
                error={formErrors.confirmPassword}
                helperText={formErrors.confirmPassword}
                />
              </Grid>
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ margin: '20px 0', backgroundColor: '#f50057', color: 'white' }}
          >
            {isSignup ? 'Sign Up' : 'Log In'}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
