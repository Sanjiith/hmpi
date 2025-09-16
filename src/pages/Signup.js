import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Signup({ setIsLoggedIn, setUsername }) {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("All fields are required!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Dummy signup success
    setUsername(username);
    setIsLoggedIn(true);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card className="p-4 shadow" style={{ width: "350px" }}>
        <h3 className="mb-3 text-center">Sign Up</h3>
        <Form onSubmit={handleSignup}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUser(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100">
            Sign Up
          </Button>
        </Form>

        <p className="mt-3 text-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Card>
    </div>
  );
}

export default Signup;
