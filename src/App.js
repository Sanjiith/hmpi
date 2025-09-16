import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import UploadData from "./pages/UploadData";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <Router>
      {isLoggedIn ? (
        <div className="d-flex">
          <Sidebar username={username} />
          <div className="flex-grow-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upload" element={<UploadData />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
