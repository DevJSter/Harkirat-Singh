import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card variant="outlined">
        <CardContent>
          <Typography
            className="flex justify-center items-center"
            sx={{ fontSize: 23 }}
            color="text.secondary"
            gutterBottom
          >
            Welcome To Coursera ! Sign In below
          </Typography>
          <TextField
            id="username"
            label="Enter Your Username"
            variant="filled"
            fullWidth
            className="mb-4"
          />
          <TextField
            id="password"
            label="Enter Your Password"
            variant="filled"
            type="password"
            fullWidth
            className="mb-6"
          />
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary">
            SignIn
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default SignIn;
