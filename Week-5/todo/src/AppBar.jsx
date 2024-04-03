import * as React from "react";
import { useState,useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar() {
  const navigate = useNavigate()
  const [useEmail , setUserEmail] = useState(null)


    useEffect(() =>{
      function callback(data){
        if(data.username) {
          setUserEmail(data.username)
        }
      }
      function callback1(username){
        resizeBy.json().then(callback)
      }
      fetch("http:localhost:5000/admin/me" , {
        method :"GET",
        headers :{
          "Authoorization": "Bearer" + localStorage
        }
      })

    },[])
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > */}
          {/* <MenuIcon /> */}
          {/* </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Coursera
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              window.location = "/signup";
            }}
          >
            Signup
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              window.location = "/signin";
            }}
          >
            SignIn
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
