import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSignup = async () => {
    
    try {
      const response = await fetch("http://localhost:5000/admin/signup", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Signup failed");
      }
      // Signup successful, reset form and show success message
      setEmail("");
      setPassword("");
      alert("Signup successful");
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
            Welcome To Coursera! Sign Up below
          </Typography>
          <TextField
            id="email"
            label="Enter Your Email"
            variant="filled"
            fullWidth
            className="mb-4"
            value={email}
            onChange={handleChangeEmail}
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
          <Button variant="contained" color="primary" onClick={handleSignup}>
            Submit
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Signup;
