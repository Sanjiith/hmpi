import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login({ setIsLoggedIn, setUsername }) {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy auth check
    if (username && password) {
      setUsername(username);
      setIsLoggedIn(true);
    } else {
      alert("Enter valid credentials!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card className="p-4 shadow" style={{ width: "350px" }}>
        <h3 className="mb-3 text-center">Login</h3>
        <Form onSubmit={handleLogin}>
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

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>

        <p className="mt-3 text-center">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </Card>
    </div>
  );
}

export default Login;
