import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Link,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { AccountCircle, Email, Lock } from "@mui/icons-material";
import { fetcher } from "../helpers";

const SignupPage = () => {
    const [formData,setFormData] = useState({
        name:'',email:'',password:'',confirmPassword:''
    })
    const [formErrors,setFormErrors] = useState({
        name:'',email:'',password:'',confirmPassword:''
    })
    
    const navigate = useNavigate();
    const handleSignUp = ()=>{
        const isValidEmail = formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        const isValidName = formData.name.length>=3;
        const isValidPass = formData.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/)
        const isValidConfirmPass = formData.password === formData.confirmPassword;

        setFormErrors({
            name : isValidName ? '' : "Name must be greater than 3 characters",
            email : isValidEmail ? '' : "Invalid Email",
            password : isValidPass ? '' : "should have minimum 8 characters, Contains at least one digit, one lowercase letter, one uppercase letter, one special character (!@#$%^&*)",
            confirmPassword : isValidConfirmPass ? '' : 'Passwords must match'
        })

        if(isValidName && isValidEmail && isValidPass && isValidConfirmPass){
            console.log(formData)
            fetcher("user/signup",{
                method:"POST",
                body: JSON.stringify({
                    name:formData.name,
                    email:formData.email,
                    password:formData.password,
                    appType: "ecommerce"
                })
            },false).then((res)=>{console.log(res)
              setTimeout(()=>{
                navigate("/login");
              },2000)
              
          })
            .catch(err => console.log(err))
        }
    }
  return (
    <Paper
      elevation={3}
      style={{
        maxWidth: 400,
        padding: 40,
        margin: "auto",
        marginTop: 50,
        textAlign: "center",
        background: "#ffffff",
        borderRadius: 10,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h4" style={{ marginBottom: 20, color: "#000000" }}>
        Beyoung Sign Up
      </Typography>

      <FormControl fullWidth style={{ marginBottom: 20 }}>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          onChange={(e)=>setFormData({...formData,name:e.target.value})}
          error={formErrors.name}
          helperText={formErrors.name}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle style={{ color: "#000000" }} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          onChange={(e)=>setFormData({...formData,email:e.target.value})}
          error={formErrors.email}
          helperText={formErrors.email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email style={{ color: "#000000" }} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          error={formErrors.password}
          helperText={formErrors.password}
          onChange={(e)=>setFormData({...formData,password:e.target.value})}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock style={{ color: "#000000" }} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Confirm Password"
          variant="outlined"
          margin="normal"
          type="password"
          error={formErrors.confirmPassword}
          helperText={formErrors.confirmPassword}
          onChange={(e)=>setFormData({...formData,confirmPassword:e.target.value})}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock style={{ color: "#000000" }} />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        style={{
          marginTop: 20,
          background: "#000000",
          color: "#ffffff",
          width: "80%",
        }}
        type="submit"
        onClick={handleSignUp}
      >
        Sign Up
      </Button>

      <Typography variant="body2" style={{ marginTop: 20, color: "#000000" }}>
        Already have an account?{" "}
        <Link href="/login" style={{ color: "#000000" }}>
          Log In
        </Link>
      </Typography>
    </Paper>
  );
};

export default SignupPage;
