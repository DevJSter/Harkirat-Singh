import * as React from "react";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const Signup = () => {
  return (
    <div className="h-full mt-15 object-center bg-gray-100">
      <TextField
        id="filled-basic"
        label="Enter Your Username"
        variant="filled"
      />
      <br />
      <TextField
        id="filled-basic"
        label="Enter Your Password"
        variant="filled"
      />
      <br />
      <Button variant="contained" className="">
        Submit
      </Button>
    </div>
  );
};

export default Signup;
