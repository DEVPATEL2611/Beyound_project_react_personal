import React,{useState} from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Link,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { Email, Lock } from "@mui/icons-material";
import { fetcher } from "../helpers";
import { useNavigate } from "react-router";
const LoginPage = () => {
      const [formData,setFormData] = useState({
        email:'',password:''
      })
      const [formErrors,setFormErrors] = useState({
          email:'',password:''
      })
      const storeToken = (token) =>{
        localStorage.setItem("token",token);
    }
    const navigate = useNavigate();
      const handleLogin = ()=>{
        const isValidEmail = formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        const isValidPass = formData.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/)

        setFormErrors({
            email : isValidEmail ? '' : "Invalid Email",
            password : isValidPass ? '' : "Invalid Password"
        })
        if(isValidEmail && isValidPass){
          console.log(formData)
          fetcher("user/login",{
              method:"POST",
              body: JSON.stringify({
                  email:formData.email,
                  password:formData.password,
                  appType: "ecommerce"
              })
          },false).then((res)=>{console.log(res)
          storeToken(res.token)
          navigate("/");
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
        Beyoung Login
      </Typography>

      <FormControl fullWidth style={{ marginBottom: 20 }}>
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          error={formErrors.email}
          helperText={formErrors.email}
          onChange={(e)=>setFormData({...formData,email:e.target.value})}
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
        onClick={handleLogin}
      >
        Login
      </Button>

      <Typography variant="body2" style={{ marginTop: 10, color: "#000000" }}>
        <Link href="#" style={{ color: "#000000" }}>
          Forgot Password?
        </Link>
      </Typography>

      <Typography variant="body2" style={{ marginTop: 20, color: "#000000" }}>
        Don't have an account?{" "}
        <Link href="/signup" style={{ color: "#000000" }}>
          Sign Up
        </Link>
      </Typography>
    </Paper>
  );
};

export default LoginPage;
