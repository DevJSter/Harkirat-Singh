import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = async () => {
    try {
      const response = await fetch("http://localhost:5000/admin/login", {
        method: "POST", // Assuming login uses POST method
        body: JSON.stringify({
          username,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Sign in failed");
      }
      // Sign in successful, reset form and show success message
      setUsername("");
      setPassword("");
      alert("Sign in successful");
    } catch (error) {
      setError(error.message);
    }
  };

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
            Welcome To Coursera! Sign In below
          </Typography>
          <TextField
            id="username"
            label="Enter Your Username"
            variant="filled"
            fullWidth
            className="mb-4"
            value={username}
            onChange={handleChangeUsername}
          />
          <TextField
            id="password"
            label="Enter Your Password"
            variant="filled"
            type="password"
            fullWidth
            className="mb-6"
            value={password}
            onChange={handleChangePassword}
          />
          {error && <p className="text-red-500">{error}</p>}
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={handleSignIn}>
            SignIn
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default SignIn;
