import React, { useState } from "react";
import { Navbar, Nav, Offcanvas, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Sidebar({ username }) {
  const [show, setShow] = useState(false);
  const userInitial = username ? username.charAt(0).toUpperCase() : "U";

  return (
    <>
      {/* Top Navbar (always visible) */}
      <Navbar bg="light" expand="lg" className="shadow-sm px-3 fixed-top">
        <Navbar.Brand className="fw-bold">HMPI</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="sidebar-offcanvas"
          onClick={() => setShow(true)}
        >
          <span style={{ fontSize: "1.5rem" }}>☰</span>
        </Navbar.Toggle>
      </Navbar>

      {/* Push content down (since navbar is fixed) */}
      <div style={{ height: "56px" }}></div>

      {/* Sidebar for large screens (collapsible into offcanvas on small) */}
      <div className="d-none d-lg-flex flex-column bg-light p-3 vh-100 shadow-sm position-fixed" style={{ width: "240px", top: "56px" }}>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/upload">Upload Data</Nav.Link>
          <Nav.Link as={Link} to="/reports">Reports</Nav.Link>
        </Nav>
        <div className="mt-auto">
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              className="rounded-circle border text-uppercase fw-bold"
              style={{ width: "40px", height: "40px" }}
            >
              {userInitial}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Account Settings</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      {/* Offcanvas sidebar for small screens */}
      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="start"
        className="bg-light"
        id="sidebar-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>HMPI</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" onClick={() => setShow(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/upload" onClick={() => setShow(false)}>Upload Data</Nav.Link>
            <Nav.Link as={Link} to="/reports" onClick={() => setShow(false)}>Reports</Nav.Link>
          </Nav>
          <hr />
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              className="rounded-circle border text-uppercase fw-bold"
              style={{ width: "40px", height: "40px" }}
            >
              {userInitial}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Account Settings</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
